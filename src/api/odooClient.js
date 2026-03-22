/**
 * Odoo REST API Client for Humanos Foundation
 * connects the React "Face" to the Odoo "Brain".
 */

class OdooClient {
  constructor() {
    // Connects via the secure Vercel API proxy
    this.proxyUrl = '/api/odoo';
  }

  async request(model, method = 'POST', data = null) {
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
