import { humanosMockClient } from '@/lib/humanos-mock-sdk';
import { odooClient } from './odooClient';

/** 
 * Humanos Foundation - Sovereign API Client
 * Integrated with Odoo (team.humanos.foundation)
 * Prioritizes real Odoo data with automatic local-first fallback.
 */

const baseClient = {
    ...humanosMockClient,
    entities: {
        ...humanosMockClient.entities,
        BlogPost: {
            list: async (...args) => {
                const live = await odooClient.getBlogPosts();
                return live || humanosMockClient.entities.BlogPost.list();
            },
            get: async (id) => {
                const list = await odooClient.getBlogPosts();
                const live = list?.find(p => p.id === id);
                return live || humanosMockClient.entities.BlogPost.get(id);
            }
        },
        JoinRequest: {
            create: async (data) => {
                try {
                    await odooClient.createLead(data);
                } catch (e) {
                    console.warn('Odoo CRM Sync failed, using local fallback.', e);
                }
                return humanosMockClient.entities.JoinRequest.create(data);
            }
        },
        Project: {
            list: async () => {
                const live = await odooClient.getProjects();
                return live || [];
            }
        }
    }
};

export const baseClient44 = baseClient;
