/**
 * Humanos Foundation - Sovereign Mock SDK
 * This replaces the Base44 SDK to ensure full data sovereignty 
 * and removal of third-party tracking/analytics.
 */

const STORAGE_PREFIX = 'humanos_';

const CORNERSTONE_POSTS = [
    {
        id: 'post-1',
        title: 'You Are Not A Standard Deviation',
        excerpt: 'Why the 15-page paper intake and 5-minute doctor review are breaking healthcare, and how securing your continuous lived experience is the only way to fight back.',
        category: 'Patient Empowerment',
        read_time_minutes: 5,
        published: true,
        created_date: '2026-02-15T10:00:00Z',
        content: '# The 5-Minute Tragedy\n\nYou walk into a clinic. You endure [15 pages of arbitrary paperwork](/TheProblem), detailing weeks or months of complex suffering. You wait.\n\nThen, the doctor enters. They have exactly 5 minutes to review your forms, listen to your story, and decide your fate. \n\n**This is not healthcare. This is a billing machine.**\n\nWhen a complex human being is compressed into a rushed 5-minute doctor review, nuance is destroyed. Your lived experience is tossed out the window. You are immediately shoved into a "standardized basket" (ADHD, Bipolar, ASD, etc.) because the system does not have the time—or the financial incentive—to investigate the root cause of your unique suffering.\n\n### The Result: The Medication Gallery\n\nBecause they don\'t understand the root cause, they drug the symptom. When that pill causes a side effect, they prescribe a second pill. You become a walking [Medication Gallery](/TheProblem). Your thoughts change. Your body breaks down. You face forced disability, all because the system refused to take the time to *know* you.\n\nAt the [Humanos Foundation](/Manifesto), we say: **No more.** We are building the tools to capture your unignorable, continuous truth, forcing the system to treat you as an individual.\n\n---\n\n### It Is Time to Fight Back\nThe system will not fix itself. If you are tired of being treated like an administrative burden, [Join the Movement](/Join) today. Adding your name gives us the collective leverage to demand root-cause medicine.'
    },
    {
        id: 'post-2',
        title: 'Escaping the Medication Gallery',
        excerpt: 'Drugging symptoms out of administrative convenience is ruining lives. It is time to demand root-cause analysis.',
        category: 'Advocacy',
        read_time_minutes: 8,
        published: true,
        created_date: '2026-02-28T14:30:00Z',
        content: '# The Convenience of the Prescription Pad\n\nWriting a prescription takes 30 seconds. Ordering complex labs, reviewing daily continuous glucose or mood data, and sitting with a patient to understand environmental triggers takes hours.\n\n[The current healthcare economic model](/TheProblem) does not pay for hours. It pays for 30 seconds.\n\n### Drugging the Symptom\n\nMillions of patients are currently trapped in the Medication Gallery. They are prescribed heavy, mind-altering pharmaceuticals simply because they exhibited a symptom that fits neatly into a diagnostic billing code. \n\nWe hear horrific stories daily: patients driven to the brink, losing their cognitive spark, suffering extreme side effects—only for the doctor to shrug and say, "Let\'s try this other pill instead." It is a sick game of dartboard medicine, born directly from the failure of the [5-minute doctor review](/TheProblem).\n\n### Holding the System Accountable\n\nThe only way out is irrefutable data. When a patient controls a high-fidelity, longitudinal graph of their own health—every symptom, every trigger, every baseline metric—they strip the doctor of the ability to guess. You bring the truth, and you demand care based upon it.\n\n---\n\n### Defend Your Mind and Body\nDo not let administrative convenience dictate your pharmacology. [Read our Manifesto](/Manifesto) to understand our demands, and [Stand with Us](/Join) if you refuse to be over-medicated.'
    },
    {
        id: 'post-3',
        title: 'Sovereignty is Accountability',
        excerpt: 'Why owning your health data isn\'t just about privacy from hackers—it\'s about wielding power against a broken system.',
        category: 'The Movement',
        read_time_minutes: 6,
        published: true,
        created_date: '2026-03-01T09:15:00Z',
        content: '# Power, Not Just Privacy\n\nWhen we talk about "Health Data Sovereignty," the tech industry assumes we are only talking about cryptography. They think we just want to stop hackers from stealing cloud databases.\n\n**They are missing the point.**\n\nYes, your data must be encrypted. Yes, it must be secure. But the true purpose of sovereignty is power.\n\n### The Weaponization of Data\n\nRight now, hospitals weaponize your data against you. They lock it in silos so you cannot easily seek second opinions. They use it to bill your insurance maximum amounts for minimum time spent.\n\nBy taking absolute control of your data, you flip the power dynamic. When you hold the complete, uncompressed record of your life, you are no longer a passive supplicant in a hospital gown. You become the CEO of your own body. You tell the system what you need, backed by your own unassailable data, and you do not leave until they provide it.\n\n---\n\n### The Future Belongs to the Patient\nWe are building the architecture of your medical independence. If you believe your data belongs to you, and your care should be personalized, [Enlist in the Movement](/Join) today. Funding our fight means funding the collapse of the 5-minute billing machine.'
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
