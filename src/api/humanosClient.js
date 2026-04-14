import { humanosLocalClient } from '@/lib/humanos-local-sdk';

/** 
 * Humanos Foundation - Sovereign API Client
 * (Odoo Deprecated: Decoupled for pure Vercel edge deployment and local-first simulation caching before the Supabase PBX link)
 */

const baseClient = {
    ...humanosLocalClient,
    entities: {
        ...humanosLocalClient.entities,
        BlogPost: {
            list: async () => humanosLocalClient.entities.BlogPost.list(),
            get: async (id) => humanosLocalClient.entities.BlogPost.get(id)
        },
        JoinRequest: {
            create: async (data) => {
                // console.log("Zero-Knowledge Local Payload Captured:", data);
                return humanosLocalClient.entities.JoinRequest.create(data);
            }
        },
        Project: {
            list: async () => []
        }
    }
};

export const base44 = baseClient;
