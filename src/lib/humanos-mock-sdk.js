/**
 * Humanos Foundation - Sovereign Mock SDK
 * This replaces the Base44 SDK to ensure full data sovereignty 
 * and removal of third-party tracking/analytics.
 */
// PostHog imported dynamically below to prevent blank screen crashes when config is missing

const STORAGE_PREFIX = 'humanos_v3_rc1_';

const CORNERSTONE_POSTS = [
    {
        "id": "post-1",
        "title": "You Are Not A Standard Deviation",
        "excerpt": "Why the 15-page paper intake and 5-minute clinical documentation are breaking healthcare, and how securing your continuous lived experience is the only way to fight back.",
        "category": "Patient Rights",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-03-06T10:00:00Z",
        "contentUrl": "/content/blog/post-1.md"
    },
    {
        "id": "post-2",
        "title": "Escaping the Medication Gallery",
        "excerpt": "Drugging symptoms out of administrative convenience is ruining lives. It is time to demand root-cause documentation.",
        "category": "Movement Stories",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-07T14:30:00Z",
        "contentUrl": "/content/blog/post-2.md"
    },
    {
        "id": "post-3",
        "title": "Sovereignty is Accountability",
        "excerpt": "Why owning your health data isn't just about privacy from hackers—it's about wielding power against a broken system.",
        "category": "Technology",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-08T09:15:00Z",
        "contentUrl": "/content/blog/post-3.md"
    },
    {
        "id": "post-4",
        "title": "The Bill For Your Silenced 5 Minutes",
        "excerpt": "You gave them 15 pages and 20 minutes of your life. They gave you 5 minutes and a prescription. Here is the actual financial and emotional cost of being unheard.",
        "category": "Movement Stories",
        "read_time_minutes": 7,
        "published": true,
        "created_date": "2026-03-09T10:00:00Z",
        "contentUrl": "/content/blog/post-4.md"
    },
    {
        "id": "post-5",
        "title": "The American Hustle vs. The Human Doctor",
        "excerpt": "I thought I was the problem. Then I realized the system isn't just failing patients—it’s actively robbing doctors of the ability to practice medicine.",
        "category": "Movement Stories",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-10T14:00:00Z",
        "contentUrl": "/content/blog/post-5.md"
    },
    {
        "id": "post-6",
        "title": "The Death of Privacy, The Birth of Sovereignty",
        "excerpt": "Why \"Privacy\" is a weak corporate promise for people with something to hide, while \"Sovereignty\" is a structural guarantee for people with something to protect.",
        "category": "Patient Rights",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-11T10:00:00Z",
        "contentUrl": "/content/blog/post-6.md"
    },
    {
        "id": "post-7",
        "title": "The Human Operating System Manifesto",
        "excerpt": "A comprehensive declaration of our intent to structurally upgrade the clinical data continuum and replace the assembly-line reality with a patient-first data ecosystem.",
        "category": "Policy & Regulation",
        "read_time_minutes": 12,
        "published": true,
        "created_date": "2026-03-12T12:00:00Z",
        "contentUrl": "/content/blog/post-7.md"
    },
    {
        "id": "post-8",
        "title": "The 15-Page Paper Wall",
        "excerpt": "How clinical intake paperwork is designed to induce fatigue, erase patient nuance, and protect the hospital from liability rather than actually documenting you.",
        "category": "Movement Stories",
        "read_time_minutes": 7,
        "published": true,
        "created_date": "2026-03-13T09:00:00Z",
        "contentUrl": "/content/blog/post-8.md"
    },
    {
        "id": "post-9",
        "title": "Zero-Knowledge: Why We Don't Want Your Password",
        "excerpt": "A deep dive into the cryptography that makes hOS mathematically incapable of selling or leaking your data.",
        "category": "Technology",
        "read_time_minutes": 9,
        "published": true,
        "created_date": "2026-03-14T14:30:00Z",
        "contentUrl": "/content/blog/post-9.md"
    },
    {
        "id": "post-10",
        "title": "Founded on the Front Lines",
        "excerpt": "The raw, unfiltered origin story of the Humanos Foundation, built against the odds by a patient navigating chronic illness.",
        "category": "Community",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-15T11:00:00Z",
        "contentUrl": "/content/blog/post-10.md"
    },
    {
        "id": "post-11",
        "title": "How to Reclaim Your Medical Record Today",
        "excerpt": "Don't wait for the system to change. Here are three actionable steps you can take today to legally reclaim your scattered health history.",
        "category": "Patient Rights",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-03-16T16:00:00Z",
        "contentUrl": "/content/blog/post-11.md"
    },
    {
        "id": "post-12",
        "title": "The Algorithm of Empathy: Why AI Must Serve the Patient",
        "excerpt": "Artificial Intelligence in healthcare is inevitable. The question is: Will it be used by hospitals to bill you faster, or by you to advocate for your health?",
        "category": "Technology",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-17T09:00:00Z",
        "contentUrl": "/content/blog/post-12.md"
    },
    {
        "id": "post-13",
        "title": "The Assessor Protocol: Guarding Enterprise Capitalization",
        "excerpt": "Why the Humanos Foundation enforces strict CTO/COO-level guardrails to prevent architectural drift and insulate the $3.0M Seed IP.",
        "category": "Technology",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-24T10:00:00Z",
        "contentUrl": "/content/blog/post-13.md"
    },
    {
        "id": "post-14",
        "title": "The 15-20 Page Clipboard Penalty",
        "excerpt": "Why \"Waiting Room Duress\" destroys clinical data before the doctor even views it, and how Zero-SSN registration bypasses it.",
        "category": "Movement Stories",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-30T14:30:00Z",
        "contentUrl": "/content/blog/post-14.md"
    },
    {
        "id": "post-15",
        "title": "Aura hOS v0.8.0-rc.3: The Federal Infrastructure Lock",
        "excerpt": "After 2,500 hours of development, the Zero-Knowledge Vault architecture is officially flagged as RC.1 and prepared for federal equity evaluation.",
        "category": "Technology",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-04-06T09:00:00Z",
        "contentUrl": "/content/blog/post-15.md"
    },
    {
        "id": "post-16",
        "title": "Lockscreen Native Hardware Integrations (Launch Update)",
        "excerpt": "The NFC Aura Band and iOS Lockscreen Widget protocols are officially locked for next month. Why hardware-level boundary logic is required to bypass the app launch in emergencies.",
        "category": "Technology",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-04-09T18:00:00Z",
        "contentUrl": "/content/blog/post-16.md"
    },
    {
        "id": "post-17",
        "title": "Zero-Knowledge Signatures: The Enterprise API Boundary",
        "excerpt": "How telemetry tracking and cryptographically enforced B2B clinical policies (Phase 3.D & 3.E) form the ultimate liability shield for our enterprise clinic partners.",
        "category": "Technology",
        "read_time_minutes": 7,
        "published": true,
        "created_date": "2026-04-10T09:00:00Z",
        "contentUrl": "/content/blog/post-17.md"
    },
    {
        "id": "post-18",
        "title": "Phase 13: Full Infrastructure Extrication from Legacy Web2",
        "excerpt": "The Humanos Foundation has officially deprecated its legacy Odoo CRM dependency, shifting 100% of its payload and routing architecture to the native aurahos.io edge.",
        "category": "Technology",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-04-10T12:00:00Z",
        "contentUrl": "/content/blog/post-18.md"
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
        } else if (key === 'blog_posts' && items.length < CORNERSTONE_POSTS.length) {
            // Merge missing cornerstone posts if the list is outdated
            const existingIds = new Set(items.map(p => p.id));
            const newPosts = CORNERSTONE_POSTS.filter(p => !existingIds.has(p.id));
            if (newPosts.length > 0) {
                items = [...newPosts, ...items];
                storage.set(key, items);
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
        track: async (params) => {
            // Send exact user journey data to PostHog if configured
            // @ts-ignore
            if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_POSTHOG_KEY) {
                const { default: posthog } = await import('posthog-js');
                posthog.capture(params.name || 'Custom Event', params.properties || params);
            }
            console.log('Analytics Event Tracked:', params);
        }
    }
};
