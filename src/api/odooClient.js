/**
 * Odoo REST API Client for Humanos Foundation
 * connects the React "Face" to the Odoo "Brain".
 */

class OdooClient {
  constructor() {
    this.isDev = import.meta.env.DEV;
    // Connects natively via cPanel PHP proxy to bypass static Vercel failure states on `humanos.foundation`
    this.proxyUrl = '/odoo.php';
    
    // Direct bypass for local development to avoid Windows UV_HANDLE_CLOSING crash
    this.localUrl = import.meta.env.VITE_ODOO_API_URL || 'https://team.humanos.foundation';
    this.localKey = import.meta.env.VITE_ODOO_API_KEY;
    this.localUser = import.meta.env.VITE_ODOO_USER;
    this.localPass = import.meta.env.VITE_ODOO_PASS;
  }

  async request(model, method = 'POST', data = null) {
    if (this.isDev && this.localKey) {
        return this.localRequest(model, method, data);
    }
    
    try {
        const response = await fetch(this.proxyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model,
                method,
                data
            })
        });

        if (!response.ok) return null;
        return response.json();
    } catch (e) {
        console.error('Odoo proxy request failed:', e);
        return null;
    }
  }

  async localRequest(model, method, data) {
    const url = `/odoo_local?model=${model}`;
    const finalMethod = (data && method.toUpperCase() === 'GET') ? 'POST' : method;
    let finalBody = data ? JSON.stringify(data) : undefined;
    if (!data && finalMethod === 'POST') {
        finalBody = JSON.stringify({ fields: ["name", "id", "subtitle", "content", "post_date"] });
    }
    
    try {
        const response = await fetch(url, {
          method: finalMethod,
          headers: {
            'Content-Type': 'application/json',
            'api-key': this.localKey,
            'login': this.localUser,
            'password': this.localPass,
            'db': import.meta.env.VITE_ODOO_DB || 'humanos_foundation'
          },
          body: finalBody
        });
        if (!response.ok) return null;
        return response.json();
    } catch (e) {
        console.warn('Odoo CORS block triggered during local testing.', e);
        alert('SECURITY PROTOCOL: Odoo blocks direct local browser testing (CORS). Because Vercel locally crashes on Windows, please test the form submissions identically on the live production site (https://humanos.foundation).');
        return null;
    }
  }

  // Blog Integration
  async getBlogPosts() {
    try {
        const data = await this.request('blog.post', 'GET');
        if (!data || !data.records) return null;
        
        return data.records.map(post => ({
            id: post.id.toString(),
            title: post.name,
            excerpt: post.subtitle || '',
            content: post.content,
            created_date: post.post_date,
            category: 'Movement Stories',
            read_time_minutes: Math.ceil((post.content || '').length / 1000) || 5,
        }));
    } catch (e) {
        return null;
    }
  }

  // CRM Integration for Join/Waitlist
  async createLead(formData) {
    return this.request('crm.lead', 'POST', {
        values: {
            name: `Website Lead: ${formData.name}`,
            contact_name: formData.name,
            email_from: formData.email,
            description: `Movement Join Request\nRole: ${formData.role}\nNewsletter: ${formData.newsletter}`
        }
    });
  }

  // Contact/Member Directory
  async getContacts() {
    try {
        const data = await this.request('res.partner', 'GET', { 
            fields: ["name", "id", "email", "category_id", "function", "website_short_description"] 
        });
        return data?.records || [];
    } catch (e) {
        return null;
    }
  }

  // Project Live Feed
  async getProjects() {
    try {
        const data = await this.request('project.project', 'GET', {
            fields: ["name", "id", "label_tasks", "description", "tag_ids"]
        });
        return data?.records || [];
    } catch (e) {
        return null;
    }
  }

  // Support / Ticketing
  async createTicket(ticketData) {
    return this.request('project.task', 'POST', {
        values: {
            name: `Website Inquiry: ${ticketData.subject}`,
            project_id: ticketData.projectId || 1, // Default support project
            description: `Sender: ${ticketData.name} <${ticketData.email}>\n\n${ticketData.message}`
        }
    });
  }
}

export const odooClient = new OdooClient();
