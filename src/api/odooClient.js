/**
 * Odoo REST API Client for Humanos Foundation
 * connects the React "Face" to the Odoo "Brain".
 */

class OdooClient {
  constructor() {
    this.baseUrl = import.meta.env.VITE_ODOO_API_URL || 'https://team.humanos.foundation';
    this.apiKey = import.meta.env.VITE_ODOO_API_KEY;
    this.login = import.meta.env.VITE_ODOO_USER;
    this.password = import.meta.env.VITE_ODOO_PASS;
  }

  async request(model, method = 'POST', data = null) {
    if (!this.apiKey) return null;

    // specific Cybrosys REST API endpoint format
    const url = `${this.baseUrl}/send_request?model=${model}`;
    
    // Most Odoo REST APIs expect POST with a body even for queries
    const requestOptions = {
      method: data || method === 'POST' ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api-key': this.apiKey,
        'login': this.login,
        'password': this.password
      }
    };

    if (requestOptions.method === 'POST') {
        const bodyData = data || { fields: ["name", "id", "subtitle", "content", "post_date"] };
        requestOptions.body = JSON.stringify(bodyData);
    }
    
    const response = await fetch(url, requestOptions);
    if (!response.ok) return null;
    return response.json();
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
