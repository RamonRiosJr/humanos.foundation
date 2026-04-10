import { humanosMockClient } from '@/lib/humanos-mock-sdk';

/** 
 * Humanos Foundation - Sovereign API Client
 * (Odoo Deprecated: Decoupled for pure Vercel edge deployment and local-first simulation caching before the Supabase PBX link)
 */

const baseClient = {
    ...humanosMockClient,
    entities: {
        ...humanosMockClient.entities,
        BlogPost: {
            list: async () => humanosMockClient.entities.BlogPost.list(),
            get: async (id) => humanosMockClient.entities.BlogPost.get(id)
        },
        JoinRequest: {
            create: async (data) => {
                await new Promise(r => setTimeout(r, 1200));
                console.log("Mock B2B Payload Captured:", data);
                return humanosMockClient.entities.JoinRequest.create(data);
            }
        },
        Project: {
            list: async () => []
        }
    }
};

export const base44 = baseClient;
