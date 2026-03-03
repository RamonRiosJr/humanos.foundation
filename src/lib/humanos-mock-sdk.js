/**
 * Humanos Foundation - Sovereign Mock SDK
 * This replaces the Base44 SDK to ensure full data sovereignty 
 * and removal of third-party tracking/analytics.
 */

const STORAGE_PREFIX = 'humanos_';

const storage = {
    get: (key) => JSON.parse(localStorage.getItem(STORAGE_PREFIX + key) || '[]'),
    set: (key, val) => localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(val)),
    add: (key, item) => {
        const items = storage.get(key);
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            created_date: new Date().toISOString(),
            ...item
        };
        items.unshift(newItem);
        storage.set(key, items);
        return newItem;
    }
};

export const humanosMockClient = {
    auth: {
        me: async () => {
            // Default to an admin user for the local environment
            return { id: 'admin', name: 'Foundation Admin', role: 'admin' };
        },
        logout: (url) => {
            console.log('Logging out...');
            if (url) window.location.href = url;
        },
        redirectToLogin: (url) => {
            console.log('Redirecting to login (Mock)...');
        }
    },
    entities: {
        JoinRequest: {
            create: async (data) => {
                console.log('Mock: Join Request Created', data);
                return storage.add('join_requests', data);
            },
            list: async (...args) => storage.get('join_requests')
        },
        ContactMessage: {
            create: async (data) => {
                console.log('Mock: Contact Message Created', data);
                return storage.add('contacts', data);
            },
            list: async (...args) => storage.get('contacts')
        },
        BlogPost: {
            list: async (...args) => storage.get('blog_posts'),
            get: async (id) => storage.get('blog_posts').find(p => p.id === id)
        }
    },
    analytics: {
        track: (params) => {
            // Disabled per user request
            // console.log('Analytics Event (Simulated):', params);
        }
    }
};
