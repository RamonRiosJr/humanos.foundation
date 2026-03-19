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

  async request(model, method = 'GET', data = null) {
    if (!this.apiKey) return null;

    // specific Cybrosys REST API endpoint format
    const url = `${this.baseUrl}/send_request?model=${model}`;
    
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'api-key': this.apiKey,
        'login': this.login,
        'password': this.password
      },
      body: data ? JSON.stringify(data) : JSON.stringify({ fields: ["name", "id", "subtitle", "content", "post_date"] }),
    });

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
}

export const odooClient = new OdooClient();
