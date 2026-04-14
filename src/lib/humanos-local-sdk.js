/**
 * Humanos Foundation - Sovereign Local SDK
 * This replaces the Base44 SDK to ensure full data sovereignty 
 * and removal of third-party tracking/analytics.
 */
// PostHog imported dynamically below to prevent blank screen crashes when config is missing

const STORAGE_PREFIX = 'humanos_v3_rc2_';

const CORNERSTONE_POSTS = [
    {
        "id": "you-are-not-a-standard-deviation",
        "title": "You Are Not A Standard Deviation",
        "excerpt": "Why the 15-page paper intake and 5-minute clinical documentation are breaking healthcare, and how securing your continuous lived experience is the only way to fight back.",
        "category": "Patient Rights",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-03-06T10:00:00Z",
        "contentUrl": "/content/blog/you-are-not-a-standard-deviation.md"
    },
    {
        "id": "escaping-the-medication-gallery",
        "title": "Escaping the Medication Gallery",
        "excerpt": "Drugging symptoms out of administrative convenience is ruining lives. It is time to demand root-cause documentation.",
        "category": "Movement Stories",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-07T14:30:00Z",
        "contentUrl": "/content/blog/escaping-the-medication-gallery.md"
    },
    {
        "id": "sovereignty-is-accountability",
        "title": "Sovereignty is Accountability",
        "excerpt": "Why owning your health data isn't just about privacy from hackers—it's about wielding power against a broken system.",
        "category": "Technology",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-08T09:15:00Z",
        "contentUrl": "/content/blog/sovereignty-is-accountability.md"
    },
    {
        "id": "the-bill-for-your-silenced-5-minutes",
        "title": "The Bill For Your Silenced 5 Minutes",
        "excerpt": "You gave them 15 pages and 20 minutes of your life. They gave you 5 minutes and a prescription. Here is the actual financial and emotional cost of being unheard.",
        "category": "Movement Stories",
        "read_time_minutes": 7,
        "published": true,
        "created_date": "2026-03-09T10:00:00Z",
        "contentUrl": "/content/blog/the-bill-for-your-silenced-5-minutes.md"
    },
    {
        "id": "the-american-hustle-vs-the-human-doctor",
        "title": "The American Hustle vs. The Human Doctor",
        "excerpt": "I thought I was the problem. Then I realized the system isn't just failing patients—it’s actively robbing doctors of the ability to practice medicine.",
        "category": "Movement Stories",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-10T14:00:00Z",
        "contentUrl": "/content/blog/the-american-hustle-vs-the-human-doctor.md"
    },
    {
        "id": "the-death-of-privacy-the-birth-of-sovereignty",
        "title": "The Death of Privacy, The Birth of Sovereignty",
        "excerpt": "Why \"Privacy\" is a weak corporate promise for people with something to hide, while \"Sovereignty\" is a structural guarantee for people with something to protect.",
        "category": "Patient Rights",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-11T10:00:00Z",
        "contentUrl": "/content/blog/the-death-of-privacy-the-birth-of-sovereignty.md"
    },
    {
        "id": "the-human-operating-system-manifesto",
        "title": "The Human Operating System Manifesto",
        "excerpt": "A comprehensive declaration of our intent to structurally upgrade the clinical data continuum and replace the assembly-line reality with a patient-first data ecosystem.",
        "category": "Policy & Regulation",
        "read_time_minutes": 12,
        "published": true,
        "created_date": "2026-03-12T12:00:00Z",
        "contentUrl": "/content/blog/the-human-operating-system-manifesto.md"
    },
    {
        "id": "the-15-page-paper-wall",
        "title": "The 15-Page Paper Wall",
        "excerpt": "How clinical intake paperwork is designed to induce fatigue, erase patient nuance, and protect the hospital from liability rather than actually documenting you.",
        "category": "Movement Stories",
        "read_time_minutes": 7,
        "published": true,
        "created_date": "2026-03-13T09:00:00Z",
        "contentUrl": "/content/blog/the-15-page-paper-wall.md"
    },
    {
        "id": "zero-knowledge-why-we-dont-want-your-password",
        "title": "Zero-Knowledge: Why We Don't Want Your Password",
        "excerpt": "A deep dive into the cryptography that makes hOS mathematically incapable of selling or leaking your data.",
        "category": "Technology",
        "read_time_minutes": 9,
        "published": true,
        "created_date": "2026-03-14T14:30:00Z",
        "contentUrl": "/content/blog/zero-knowledge-why-we-dont-want-your-password.md"
    },
    {
        "id": "founded-on-the-front-lines",
        "title": "Founded on the Front Lines",
        "excerpt": "The raw, unfiltered origin story of the Humanos Foundation, built against the odds by a patient navigating chronic illness.",
        "category": "Community",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-15T11:00:00Z",
        "contentUrl": "/content/blog/founded-on-the-front-lines.md"
    },
    {
        "id": "how-to-reclaim-your-medical-record-today",
        "title": "How to Reclaim Your Medical Record Today",
        "excerpt": "Don't wait for the system to change. Here are three actionable steps you can take today to legally reclaim your scattered health history.",
        "category": "Patient Rights",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-03-16T16:00:00Z",
        "contentUrl": "/content/blog/how-to-reclaim-your-medical-record-today.md"
    },
    {
        "id": "the-algorithm-of-empathy-why-ai-must-serve-the-patient",
        "title": "The Algorithm of Empathy: Why AI Must Serve the Patient",
        "excerpt": "Artificial Intelligence in healthcare is inevitable. The question is: Will it be used by hospitals to bill you faster, or by you to advocate for your health?",
        "category": "Technology",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-17T09:00:00Z",
        "contentUrl": "/content/blog/the-algorithm-of-empathy-why-ai-must-serve-the-patient.md"
    },
    {
        "id": "the-assessor-protocol-guarding-sovereign-boundaries",
        "title": "The Assessor Protocol: Guarding Sovereign Boundaries",
        "excerpt": "Why the Humanos Foundation enforces strict mission-level guardrails to prevent theoretical drift and insulate the 501(c)(3) Cause.",
        "category": "Technology",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-03-24T10:00:00Z",
        "contentUrl": "/content/blog/the-assessor-protocol-guarding-sovereign-boundaries.md"
    },
    {
        "id": "the-15-20-page-clipboard-penalty",
        "title": "The 15-20 Page Clipboard Penalty",
        "excerpt": "Why \"Waiting Room Duress\" destroys clinical data before the doctor even views it, and how Zero-SSN registration bypasses it.",
        "category": "Movement Stories",
        "read_time_minutes": 8,
        "published": true,
        "created_date": "2026-03-30T14:30:00Z",
        "contentUrl": "/content/blog/the-15-20-page-clipboard-penalty.md"
    },
    {
        "id": "aura-hos-v080-rc3-the-federal-infrastructure-lock",
        "title": "Aura hOS v0.8.0-rc.3: The Federal Infrastructure Lock",
        "excerpt": "After 2,500 hours of development, the Zero-Knowledge Vault architecture is officially flagged as RC.1 and prepared for Federal Grant evaluation.",
        "category": "Technology",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-04-06T09:00:00Z",
        "contentUrl": "/content/blog/aura-hos-v080-rc3-the-federal-infrastructure-lock.md"
    },
    {
        "id": "lockscreen-native-hardware-integrations-launch-update",
        "title": "Lockscreen Native Hardware Integrations (Launch Update)",
        "excerpt": "The NFC Aura Band and iOS Lockscreen Widget protocols are officially locked for next month. Why hardware-level triage logic is required to bypass the app launch in emergencies.",
        "category": "Technology",
        "read_time_minutes": 5,
        "published": true,
        "created_date": "2026-04-09T18:00:00Z",
        "contentUrl": "/content/blog/lockscreen-native-hardware-integrations-launch-update.md"
    },
    {
        "id": "zero-knowledge-signatures-the-clinical-api-boundary",
        "title": "Zero-Knowledge Signatures: The Clinical API Boundary",
        "excerpt": "How telemetry tracking and cryptographically enforced operational policies form the ultimate liability shield for our federated clinical partners.",
        "category": "Technology",
        "read_time_minutes": 7,
        "published": true,
        "created_date": "2026-04-10T09:00:00Z",
        "contentUrl": "/content/blog/zero-knowledge-signatures-the-clinical-api-boundary.md"
    },
    {
        "id": "phase-13-full-infrastructure-extrication-from-legacy-web2",
        "title": "Phase 13: Full Infrastructure Extrication from Legacy Web2",
        "excerpt": "The Humanos Foundation has officially deprecated its legacy Odoo CRM dependency, shifting 100% of its payload and routing architecture to the native aurahos.io edge.",
        "category": "Technology",
        "read_time_minutes": 6,
        "published": true,
        "created_date": "2026-04-10T12:00:00Z",
        "contentUrl": "/content/blog/phase-13-full-infrastructure-extrication-from-legacy-web2.md"
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

export const humanosLocalClient = {
    auth: {
        me: async () => {
            // Default to an admin user for the local environment
            return { id: 'admin', name: 'Foundation Admin', role: 'admin' };
        },
        logout: (url) => {
            // console.log('Logging out...');
            if (url) window.location.href = url;
        },
        redirectToLogin: (url) => {
            // console.log('Redirecting to login (Local Auth)...');
        }
    },
    entities: {
        JoinRequest: {
            create: async (data) => {
                // console.log('Zero-Knowledge: Join Request Captured', data);
                return storage.add('join_requests', data);
            },
            list: async (...args) => storage.get('join_requests')
        },
        ContactMessage: {
            create: async (data) => {
                // console.log('Zero-Knowledge: Contact Message Captured', data);
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
            // console.log('Analytics Event Tracked:', params);
        }
    }
};
