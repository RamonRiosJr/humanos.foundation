/**
 * Odoo REST API Client for Humanos Foundation
 * connects the React "Face" to the Odoo "Brain".
 */

class OdooClient {
  constructor() {
    this.isDev = import.meta.env.DEV;
    // Connects natively via Vercel Serverless proxy to bypass explicit browser CORS
    this.proxyUrl = '/api/odoo';
    
    // Direct bypass for local development to avoid Windows UV_HANDLE_CLOSING crash
    this.localUrl = import.meta.env.VITE_ODOO_API_URL || 'https://team.humanos.foundation';
    this.localKey = import.meta.env.VITE_ODOO_API_KEY;
    this.localUser = import.meta.env.VITE_ODOO_USER;
    this.localPass = import.meta.env.VITE_ODOO_PASS;
  }
  async request(model, method = 'POST', data = null) {
    // Explicit GitHub Pages direct pipeline
    const token = import.meta.env.VITE_ODOO_API_KEY || '';
    const url = `https://team.humanos.foundation/humanos_api?model=${model}&method=${method}&humanos_token=${token}`;
    
    // Natively normalize API packets intelligently seamlessly cleanly
    const finalMethod = (data && method.toUpperCase() === 'GET') ? 'POST' : method;
    
    // We strictly encode the JSON inside a URLSearchParams 'values' or data struct
    // to force Werkzeug to use request.form instead of trying to internally decode application/json
    let finalBody = undefined;
    let contentType = 'application/json';
    
    if (data) {
        contentType = 'application/x-www-form-urlencoded';
        finalBody = new URLSearchParams();
        for (const [key, val] of Object.entries(data)) {
            finalBody.append(key, typeof val === 'object' ? JSON.stringify(val) : val);
        }
    }
    
    try {
        const response = await fetch(url, {
            method: finalMethod,
            headers: {
                'Content-Type': contentType,
                'api-key': token
            },
            body: finalBody
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.error || 'Odoo Direct Request Failed');
        }
        return result;
    } catch (e) {
        console.error('Odoo GH-Pages Engine request failed:', e);
        throw e;
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

  async getBlogPost(id) {
    try {
        const data = await this.request('blog.post', 'GET', { id });
        if (!data || !data.records || data.records.length === 0) return null;
        
        const post = data.records.find(p => p.id.toString() === id.toString()) || data.records[0];
        
        return {
            id: post.id.toString(),
            title: post.name,
            excerpt: post.subtitle || '',
            content: post.content,
            created_date: post.post_date,
            category: 'Movement Stories',
            read_time_minutes: Math.ceil((post.content || '').length / 1000) || 5,
        };
    } catch (e) {
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
            name: `Website Waitlist: ${formData.name}`,
            contact_name: formData.name,
            email_from: formData.email,
            phone: formData.phone || '',
            zip: formData.zip || '',
            description: `Waitlist Join Request\nRole: ${formData.role}\nReason: ${formData.reason || 'None'}\nVolunteer: ${formData.volunteer}`
        }
    });
  }

  // Recruitment Integration for Team/Builders Hub
  async createApplicant(formData) {
    return this.request('hr.applicant', 'POST', {
        values: {
            name: `Network Application: ${formData.name} (${formData.role || 'Volunteer'})`,
            partner_name: formData.name,
            email_from: formData.email,
            partner_phone: formData.phone || '',
            description: `Contribution Intent\nZip Code File: ${formData.zip || 'N/A'}\n\n${formData.reason || ''}`
        }
    });
  }

  // Ticketing/General Inquiry Integration mapped natively to CRM Pipeline
  async createTicket(formData) {
    return this.request('crm.lead', 'POST', {
        values: {
            name: `${formData.inquiry_type ? formData.inquiry_type.toUpperCase() : 'CONTACT'} Inquiry: ${formData.subject || formData.name}`,
            contact_name: formData.name,
            email_from: formData.email,
            phone: formData.phone || '',
            zip: formData.zip || '',
            description: `Organization: ${formData.organization || 'None'}\nPhone: ${formData.phone || 'N/A'}\nZip Code: ${formData.zip || 'N/A'}\n\nMessage:\n${formData.message}`
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
}

export const odooClient = new OdooClient();
