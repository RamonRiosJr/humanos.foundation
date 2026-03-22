import { odooClient } from './odooClient';

/** 
 * Humanos Foundation - Sovereign API Client
 * Integrated securely with Odoo via local proxy, ensuring zero third-party platform tracing.
 */

const baseClient = {
    auth: {
        me: async () => null,
        redirectToLogin: (url) => { console.log('Login disabled for pure Odoo implementation'); },
        logout: () => { console.log('Logout disabled'); }
    },
    entities: {
        BlogPost: {
            list: async (...args) => {
                return await odooClient.getBlogPosts() || [];
            },
            get: async (id) => {
                const list = await odooClient.getBlogPosts();
                return list?.find(p => p.id === id) || null;
            }
        },
        JoinRequest: {
            create: async (data) => {
                return await odooClient.createLead(data);
            },
            list: async () => []
        },
        Project: {
            list: async () => {
                return await odooClient.getProjects() || [];
            }
        },
        ContactMessage: {
            create: async (data) => {
                return await odooClient.createTicket(data);
            },
            list: async () => []
        }
    }
};

export const base44 = baseClient;
