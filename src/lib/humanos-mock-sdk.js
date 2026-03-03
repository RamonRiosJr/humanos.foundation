/**
 * Humanos Foundation - Sovereign Mock SDK
 * This replaces the Base44 SDK to ensure full data sovereignty 
 * and removal of third-party tracking/analytics.
 */

const STORAGE_PREFIX = 'humanos_';

const CORNERSTONE_POSTS = [
    {
        id: 'post-1',
        title: 'The Case for Patient Data Sovereignty',
        excerpt: 'Why your health data is your most valuable asset, and how the current closed-system EHR architectures strip you of ownership.',
        category: 'Patient Rights',
        read_time_minutes: 5,
        published: true,
        created_date: '2026-02-15T10:00:00Z',
        content: '# The Illusion of Ownership\n\nWhen you visit a hospital today, your data is entered into an Electronic Health Record (EHR) system. You might assume that because it is *your* body and *your* diagnosis, the data is *yours*. \n\n**You would be wrong.**\n\nUnder the current paradigm, health data is treated as the proprietary asset of the institution that generated it. Patients are granted "access rights" (often behind clunky portals), but true sovereignty—the ability to move, monetize, or permanently delete that data—is denied.\n\n### Why Sovereignty Matters\n\nWithout sovereignty, your data is monetized by data brokers to the tune of billions of dollars annually. When you switch doctors, the friction of moving records delays life-saving care. The **hOS movement** is fighting to flip this architecture on its head. \n\nWe believe data should live in a secure, patient-owned wallet. Doctors should "request" access, not dictate it. It is time to treat health data as a fundamental human right.'
    },
    {
        id: 'post-2',
        title: 'Zero-Knowledge Architecture in Health Tech',
        excerpt: 'How Local-First computing and end-to-end encryption can end massive hospital data breaches forever.',
        category: 'Technology',
        read_time_minutes: 8,
        published: true,
        created_date: '2026-02-28T14:30:00Z',
        content: '# The End of the Mega-Breach\n\nIn the last decade, over 300 million patient records have been exposed in hospital and insurance cyberattacks. Why? Because the architecture is fundamentally flawed. We centralize petabytes of unencrypted PHI (Protected Health Information) in massive cloud databases, creating honeypots so lucrative that state-sponsored hackers cannot resist them.\n\n### Enter Zero-Knowledge Architecture (ZKA)\n\nZKA is a cryptographic paradigm where the server storing the data *has no idea what the data actually says*. \n\nUnder the **Aura hOS** model, data is encrypted locally on your device using keys that only you hold. When a hospital server syncs your data, it is syncing blinded, scrambled ciphertext.\n\n1.  **No more ransomware leverage:** Hackers stealing ciphertext get nothing but useless noise.\n2.  **No more insider threats:** Even rogue hospital sysadmins cannot read your files.\n3.  **True privacy:** AI agents can process your data locally on your device, uploading only the summarized insights you approve.\n\nLocal-first isn\'t just a feature. It\'s the only responsible way to build healthcare tech in the 21st century.'
    },
    {
        id: 'post-3',
        title: 'Re-thinking HIPAA in the Era of Cloud AI',
        excerpt: 'HIPAA was written for fax machines and filing cabinets. Here is why the regulatory framework must evolve for the age of LLMs.',
        category: 'Policy & Regulation',
        read_time_minutes: 6,
        published: true,
        created_date: '2026-03-01T09:15:00Z',
        content: '# A 1996 Law for a 2026 Problem\n\nHIPAA (the Health Insurance Portability and Accountability Act) was passed in 1996. Its primary goal was to ensure you didn\'t lose medical coverage between jobs, with a secondary privacy rule tacked on for paper files and early local-network computers.\n\nToday, we are routing highly sensitive patient transcripts through massive, cloud-hosted Large Language Models (LLMs). \n\n### The BAA Loophole\n\nCurrently, hospitals rely on Business Associate Agreements (BAAs) to legally share your data with tech giants. As long as the tech giant signs a BAA promising to protect the data, the hospital is largely shielded from liability. \n\n**But a legal promise does not stop a technical breach.**\n\nWe need to shift from *compliance-based privacy* to *mathematically guaranteed privacy*. The law should require Zero-Knowledge processing for cloud infrastructures. Until it does, the Humanos Foundation will continue pushing the industry to adopt verifiable, encrypted standards that go above and beyond the baseline requirements of a 30-year-old law.'
    }
];

const storage = {
    get: (key) => {
        let items = JSON.parse(localStorage.getItem(STORAGE_PREFIX + key) || 'null');
        if (!items) {
            if (key === 'blog_posts') {
                items = CORNERSTONE_POSTS;
                storage.set(key, items);
            } else {
                items = [];
            }
        }
        return items;
    },
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
            filter: async (...args) => storage.get('blog_posts'),
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
