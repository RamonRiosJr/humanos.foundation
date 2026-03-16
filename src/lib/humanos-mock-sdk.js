/**
 * Humanos Foundation - Sovereign Mock SDK
 * This replaces the Base44 SDK to ensure full data sovereignty 
 * and removal of third-party tracking/analytics.
 */
// PostHog imported dynamically below to prevent blank screen crashes when config is missing

const STORAGE_PREFIX = 'humanos_';

const CORNERSTONE_POSTS = [
    {
        id: 'post-1',
        title: 'You Are Not A Standard Deviation',
        excerpt: 'Why the 15-page paper intake and 5-minute clinical documentation are breaking healthcare, and how securing your continuous lived experience is the only way to fight back.',
        category: 'Patient Rights',
        read_time_minutes: 5,
        published: true,
        created_date: '2026-02-15T10:00:00Z',
        content: '# The 5-Minute Tragedy\n\nYou walk into a clinic. You endure [15 pages of arbitrary paperwork](/TheProblem), detailing weeks or months of complex suffering. You wait.\n\nThen, the doctor enters. They have exactly 5 minutes to review your forms, listen to your story, and decide your fate. \n\n**This is not healthcare. This is a billing machine.**\n\nWhen a complex human being is compressed into a rushed 5-minute clinical documentation, nuance is destroyed. Your lived experience is tossed out the window. You are immediately shoved into a "standardized basket" (ADHD, Bipolar, ASD, etc.) because the system does not have the time—or the financial incentive—to document the root cause of your unique suffering.\n\n### The Result: The Medication Gallery\n\nBecause they don\'t understand the root cause, they drug the symptom. When that pill causes a side effect, they prescribe a second pill. You become a walking [Medication Gallery](/TheProblem). Your thoughts change. Your body breaks down. You face forced disability, all because the system refused to take the time to *know* you.\n\nAt the [Humanos Foundation](/Manifesto), we say: **No more.** hOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. We are building the tools to capture your unignorable, continuous truth, forcing the system to treat you as an individual.\n\n---\n\n### It Is Time to Fight Back\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-2',
        title: 'Escaping the Medication Gallery',
        excerpt: 'Drugging symptoms out of administrative convenience is ruining lives. It is time to demand root-cause documentation.',
        category: 'Movement Stories',
        read_time_minutes: 8,
        published: true,
        created_date: '2026-02-28T14:30:00Z',
        content: '# The Convenience of the Prescription Pad\n\nWriting a prescription takes 30 seconds. Ordering complex labs, reviewing daily continuous glucose or mood data, and sitting with a patient to understand environmental triggers takes hours.\n\n[The current healthcare economic model](/TheProblem) does not pay for hours. It pays for 30 seconds.\n\n### Drugging the Symptom\n\nMillions of patients are currently trapped in the Medication Gallery. They are prescribed heavy, mind-altering pharmaceuticals simply because they exhibited a symptom that fits neatly into an administrative billing code. \n\nWe hear horrific stories daily: patients driven to the brink, losing their cognitive spark, suffering extreme side effects—only for the doctor to shrug and say, "Let\'s try this other pill instead." It is a sick game of dartboard medicine, born directly from the failure of the [5-minute clinical documentation](/TheProblem).\n\n### Holding the System Accountable\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. The only way out is irrefutable data. When a patient controls a high-fidelity, longitudinal graph of their own health—every symptom, every trigger, every baseline metric—they strip the doctor of the ability to guess. You bring the truth, and you demand care based upon it.\n\n---\n\n### Defend Your Mind and Body\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-3',
        title: 'Sovereignty is Accountability',
        excerpt: 'Why owning your health data isn\'t just about privacy from hackers—it\'s about wielding power against a broken system.',
        category: 'Technology',
        read_time_minutes: 6,
        published: true,
        created_date: '2026-03-01T09:15:00Z',
        content: '# Power, Not Just Privacy\n\nWhen we talk about "Health Data Sovereignty," the tech industry assumes we are only talking about cryptography. They think we just want to stop hackers from stealing cloud databases.\n\n**They are missing the point.**\n\nYes, your data must be encrypted. Yes, it must be secure. But the true purpose of sovereignty is power.\n\n### The Weaponization of Data\n\nRight now, hospitals weaponize your data against you. They lock it in silos so you cannot easily seek second opinions. They use it to bill your insurance maximum amounts for minimum time spent.\n\nBy taking absolute control of your data, you flip the power dynamic. hOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. When you hold the complete, uncompressed record of your life, you are no longer a passive supplicant in a hospital gown. You become the CEO of your own body. You tell the system what you need, backed by your own unassailable data, and you do not leave until they provide it.\n\n---\n\n### The Future Belongs to the Patient\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-4',
        title: 'The Bill For Your Silenced 5 Minutes',
        excerpt: 'You gave them 15 pages and 20 minutes of your life. They gave you 5 minutes and a prescription. Here is the actual financial and emotional cost of being unheard.',
        category: 'Movement Stories',
        read_time_minutes: 7,
        published: true,
        created_date: '2026-03-02T10:00:00Z',
        content: '# The Cost of Being Ignored\n\nLet’s run the math on your last doctor’s visit.\n\nYou arrived 15 minutes early. You were handed a clipboard. You spent 20 minutes filling out [15 pages of arbitrary paperwork](/TheProblem), attempting to compress months of physical and emotional suffering into tiny, badly photocopied checkboxes. You tried to add notes in the margins because a simple "Yes/No" cannot explain the complexity of your chronic pain, your shifting moods, or your neurodivergence.\n\nYou waited another 30 minutes in a sterile room.\n\nThen, the doctor walked in. They stared at a screen, not at you. They glanced at the clipboard. They asked three generic questions. They did not have the time to debrief your intake forms. They did not have the time to actively listen, to let you express yourself properly, or to help you remember the crucial details you forgot under the pressure of fluorescent lights.\n\nExactly 5 minutes later, they handed you a prescription.\n\n### The $500 Checkbox\n\nFor that 5-minute interaction, your insurance was billed hundreds of dollars. You paid a co-pay. But the ultimate cost was far higher: **you left unheard.**\n\nWhen a doctor is forced by the [medical billing architecture](/TheProblem) to churn through patients every 5 to 7 minutes, they cannot practice medicine. They practice liability management. They match a surface-level symptom directly to a billing code, and they drug that symptom just to get you out the door.\n\nBecause you felt rushed, you couldn\'t explain the nuance. Because you couldn\'t explain the nuance, you were mis-profiled. And because you were mis-profiled, you entered the [Medication Gallery](/TheProblem) — a cycle of trial-and-error pharmacology that slowly alters your brain and body.\n\n### Stop Subsidizing Their Inefficiency\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. The only way to break this machine is to walk in with irrefutable, unignorable data. If you own a continuous, perfectly structured graph of your own lived experience, they cannot brush you off in 5 minutes. You strip them of the ability to guess, and you force them to listen.\n\n---\n\n### Demand the Time You Deserve\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-5',
        title: 'The American Hustle vs. The Human Doctor',
        excerpt: 'I thought I was the problem. Then I realized the system isn\'t just failing patients—it’s actively robbing doctors of the ability to practice medicine.',
        category: 'Movement Stories',
        read_time_minutes: 6,
        published: true,
        created_date: '2026-03-03T14:00:00Z',
        content: '# "I Thought I Was the Problem"\n\nFor years, I blamed myself. I have trouble speaking quickly under pressure. When overwhelmed, I get confused. My words get cut off. Doctors would look at me—struggling to articulate my complex history—and instantly assume the worst. I was treated as if I was unhinged, or experiencing severe cognitive decline.\n\nI thought it was a language barrier. I thought my neurodivergence made me a "bad patient."\n\nThen I realized: **It wasn’t me. And it wasn\'t the doctor, either. It was the American 5-Minute Hustle.**\n\n### Healthcare as a Pitch Deck\n\nIn the United States, going to the doctor feels like you are pitching a venture capitalist. You have exactly 5 minutes to deliver the perfect elevator pitch summarizing your trauma, your pain, and your months of suffering. If you stutter, if you forget a detail, if you take too long to explain the context—you lose. \n\nPrior to moving to the US, in my home country, doctors actually listened. You sat down. You talked. There wasn\'t a stopwatch ticking in the background.\n\n### The Doctor is Not the Villain\n\nIt is easy to get angry at the physician staring at the screen. But the reality is: **The doctor hates the 5-minute hustle as much as we do.**\n\nThey are trapped by a [medical billing architecture](/TheProblem) that forces them to see 40 patients a day simply to keep the clinic doors open. The system robs the doctor of the ability to be human, and it robs the patient of the ability to heal. When a doctor is forced to churn through a complex, neurodivergent case in 5 minutes, they don\'t practice root-cause medicine. They practice liability management.\n\nThis is incredibly dangerous. To satisfy the billing code and clear the room, they grab the most obvious symptom and prescribe a pill for it. This sends the patient straight into the [Medication Gallery](/TheProblem)—a dangerous, spiraling cycle of mind-altering trial-and-error pharmacology based on a panicked 3-minute conversation.\n\n### We Don\'t Need More Data. We Need Distilled Truth.\n\nThe solution is not to walk into the clinic and hand an overworked doctor a 50-page Excel spreadsheet. That only creates more administrative burden.\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. The solution is to arm the patient with **Distilled, Actionable Truth**. By capturing and structuring your continuous lived experience before you enter the clinic, you bypass the 5-minute pitch deck. You hand the doctor a crystalline picture of your root cause, saving them time and saving yourself from the Medication Gallery.\n\n---\n\n### Save the Patient, Save the Doctor\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-6',
        title: 'The Death of Privacy, The Birth of Sovereignty',
        excerpt: 'Why "Privacy" is a weak corporate promise for people with something to hide, while "Sovereignty" is a structural guarantee for people with something to protect.',
        category: 'Patient Rights',
        read_time_minutes: 8,
        published: true,
        created_date: '2026-03-04T10:00:00Z',
        content: '# The Lie of Data Privacy\n\nEvery week, a new tech company or hospital network sends you an email about how much they "value your privacy." Then, a month later, they send you a second email letting you know they were breached.\n\n"We take your privacy seriously" translates to: "We hold all the keys to your data, and we promise we’ll try to guard the lock."\n\n**Privacy is a request. Sovereignty is mathematics.**\n\n### Moving from "Trust Me" to "Trust Math"\n\nIn the privacy model, you are trusting the good intentions (and the cybersecurity budget) of a corporation. You are handing over the most sensitive, continuous truths of your physical body and hoping they do not mismanage it.\n\nIn the sovereignty model, trust is removed from the equation entirely. Through [Zero-Knowledge Architecture](/TheProblem) and local-first encryption, your data is locked with keys that only you hold. It is mathematically impossible for the foundation, the hospital, or a hacker to read your records without your explicit, temporary decryption key.\n\n### The Era of True Ownership\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. We do not want your data. We do not want your passwords. We want to give you back the structural power over your own life. Sovereignty means never having to ask permission to access your own medical history. It means deciding, on a granular level, exactly who gets to see what.\n\n---\n\n### Stop Asking for Permission\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-7',
        title: 'The Human Operating System Manifesto',
        excerpt: 'A comprehensive declaration of our intent to dismantle the assembly-line medical machine and replace it with a patient-first data ecosystem.',
        category: 'Policy & Regulation',
        read_time_minutes: 12,
        published: true,
        created_date: '2026-03-04T12:00:00Z',
        content: '# The Declaration of Health Independence\n\nWe hold this truth to be self-evident: Your health is the continuous, nuanced sum of your lived experience. It cannot be accurately represented by a 15-page intake form, a randomized 5-minute doctor visit, or a billing code designed by an insurance conglomerate.\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. We are building the **Human Operating System (hOS)** to serve as the unignorable source of truth for every patient on Earth.\n\n### Core Tenets of the Movement\n\n1. **Absolute Sovereignty:** The patient must hold the sole cryptographic keys to their data. Decentralized encryptions will ensure that the platform itself cannot harvest, view, or sell patient data.\n2. **High-Fidelity Context:** Medicine must shift from symptom-treating to context-formatting. We must capture the environmental, neurological, and physical realities of the patient before they enter the clinic.\n3. **Frictionless Communication:** The patient must not be forced to repeatedly justify their suffering. The data must speak for them, bridging the gap between their complex truth and the doctor\'s limited time.\n4. **Algorithmic Transparency:** If AI is used to summarize a patient\'s state, the reasoning must be completely transparent. There can be no black-box determination that locks a patient into the [Medication Gallery](/TheProblem).\n\n### A Call to Arms\n\nWe are not just building software; we are architecting a rebellion against the medical status quo. The current system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-8',
        title: 'The 15-Page Paper Wall',
        excerpt: 'How clinical intake paperwork is designed to induce fatigue, erase patient nuance, and protect the hospital from liability rather than actually documenting you.',
        category: 'Movement Stories',
        read_time_minutes: 7,
        published: true,
        created_date: '2026-03-05T09:00:00Z',
        content: '# The Weaponization of Paperwork\n\nYou arrive early, as instructed. The receptionist hands you a clipboard with a pen chained to it. You look down at a stack of 15 photocopied pages.\n\n"Please fill these out before the doctor sees you."\n\n### Inducing Fatigue\n\nThis is the First Mile of healthcare, and it is a complete disaster. If you suffer from chronic illness, neurodivergence, or simply a complex health history, attempting to compress your life into those tiny, black-and-white boxes is exhausting. Is your pain a "4" or a "7"? The scale makes no sense. Where do you explain that the pain is only a 7 when the weather changes and your anxiety spikes?\n\nYou try to write notes in the margins, but the margins are too small.\n\nBy the time you hand the clipboard back, you are fatigued. You have spent your energy trying to map your human experience to an administrative liability form. When you finally see the doctor, you lack the energy to properly explain what is happening.\n\n### Liability Over Healing\n\nHospitals do not use these forms to understand you. They use them to establish baselines for insurance billing and to protect themselves defensively against malpractice. The paperwork isn\'t designed for clinical documentation; it’s designed for the compliance department.\n\nAt the Foundation, we believe intake should be a frictionless, continuous sync from your own sovereign data vault. hOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. You should never fill out a "Pain Scale 1-10" on a clipboard ever again.\n\n---\n\n### Tear Down the Paper Wall\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-9',
        title: 'Zero-Knowledge: Why We Don\'t Want Your Password',
        excerpt: 'A deep dive into the cryptography that makes hOS mathematically incapable of selling or leaking your data.',
        category: 'Technology',
        read_time_minutes: 9,
        published: true,
        created_date: '2026-03-05T14:30:00Z',
        content: '# The Architecture of Trustlessness\n\nIf a health tech company asks you to "trust them" with your data, you should immediately walk away. We do not want your trust. We want to prove to you, mathematically, that we are incapable of betraying you.\n\nThis is the philosophy behind **Zero-Knowledge Architecture**.\n\n### How It Works\n\nIn a standard Web2 application, you create an account and send your data to a server. The server encrypts your data, but the server also holds the key. If the server is hacked, or if the company decides to sell your data to a pharmaceutical firm, they just unlock it.\n\nIn the hOS ecosystem, the encryption key is generated locally on your device. It never leaves your phone or computer. When you sync your data to the cloud for backup or to share with a doctor, the data is scrambled into an unreadable cipher *before* it leaves your hands. \n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. We host the encrypted files, but we **do not possess the key**. \n\n### Mathematical Independence\n\nIf we were ever subpoenaed, hacked, or bought out, we would literally have nothing to hand over except scrambled code. We are a "Zero-Knowledge" system because we have zero knowledge of what your symptoms, medications, or journals actually say.\n\nYou are the only person who holds the key. You grant temporary, read-only access to your clinician when you walk into the room, and you revoke it when you leave.\n\n---\n\n### Secure Your Nuance\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-10',
        title: 'Founded in a Motel Room',
        excerpt: 'The raw, unfiltered origin story of the Humanos Foundation, built against the odds by a patient navigating chronic illness.',
        category: 'Community',
        read_time_minutes: 6,
        published: true,
        created_date: '2026-03-06T11:00:00Z',
        content: '# The Birthplace of hOS\n\nGreat movements rarely start in sterile boardrooms. They start in the trenches. They start when the pain of the status quo becomes unbearable.\n\nThe Humanos Foundation and its core technology, hOS, began in a dimly lit motel room. I was dealing with complex health issues, dismissed by rushed doctors, and suffocating under the weight of relentless, thought-altering medications designed to treat symptoms while ignoring the root cause. \n\n### Coding for Survival\n\nI realized that if I didn\'t build a system to advocate for myself, no one would. I didn\'t have a team of Silicon Valley engineers. I didn\'t have venture capital funding. I had a laptop, an internet connection, and two loyal dogs—River and Brownie—who sat by my side as I coded through the night.\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. I built the first prototype of hOS out of raw necessity. I needed a way to log my daily symptoms, track the catastrophic side effects of the [Medication Gallery](/TheProblem), and generate a report so clear and unignorable that the next doctor would be forced to listen to me.\n\n### From One Patient to Millions\n\nWhen I finally brought the printed hOS report into the clinic, everything changed. I wasn\'t a confused patient struggling to remember details anymore. I was the CEO of my own data. \n\nThat was the moment I realized this wasn\'t just an app for me. It was a weapon against the 5-Minute Hustle for every patient on Earth.\n\n---\n\n### Stand With the Origin\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-11',
        title: 'How to Reclaim Your Medical Record Today',
        excerpt: 'Don\'t wait for the system to change. Here are three actionable steps you can take today to legally reclaim your scattered health history.',
        category: 'Patient Rights',
        read_time_minutes: 5,
        published: true,
        created_date: '2026-03-06T16:00:00Z',
        content: '# Your Data is Scattered\n\nRight now, fragments of your medical history are sitting in filing cabinets at your childhood pediatrician\'s office, trapped in a server at a hospital you visited three years ago, and held hostage by your current specialist’s clunky online portal.\n\nYou cannot advocate for your health if you do not have the complete picture. Until hOS is fully launched to automatically pull these together, here is how you can begin claiming your data today.\n\n### 1. The HIPAA Request\n\nUnder HIPAA, you have a legal right to receive a copy of your full medical record. Not just the summary—the *full* record, including doctor notes. Call your provider’s Medical Records department and explicitly request your "Complete Legal Medical Record." \n\n*Note: They are permitted to charge you a "reasonable fee" for copying expenses. If they push back, politely remind them of your HIPAA rights.*\n\n### 2. Reject the Portal Lock-In\n\nHospitals love their online portals because they control them. The portals often only show you scrubbed test results, hiding any clinical documentation. Do not rely on their portal as your sole source of truth. Download the PDFs. Print them out. Store them in a secure folder on your own device.\n\n### 3. Start a Longitudinal Symptom Journal\n\nThe medical record only shows what happened *in the clinic*. It misses the 99% of your life that happens at home. Start a simple spreadsheet or secure note tracking your daily vital stats, sleep, and specific pain triggers. This creates your "baseline."\n\n---\n\n### Automate Your Sovereignty\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. Collecting this data manually is exhausting. That is why we are building hOS. We want to automate this entire process for you.\n\n---\n\n### Stand With Us\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
    },
    {
        id: 'post-12',
        title: 'The Algorithm of Empathy: Why AI Must Serve the Patient',
        excerpt: 'Artificial Intelligence in healthcare is inevitable. The question is: Will it be used by hospitals to bill you faster, or by you to advocate for your health?',
        category: 'Technology',
        read_time_minutes: 8,
        published: true,
        created_date: '2026-03-07T09:00:00Z',
        content: '# The Crossroads of Clinical AI\n\nHealthcare is rushing to adopt Artificial Intelligence. But look closely at who is buying the software. Hospital systems are deploying AI to "optimize billing workflows," "increase patient throughput," and "reduce clinical documentation time."\n\nNotice what is missing? **The patient.**\n\nAI is currently being used to make the [assembly-line medical machine](/TheProblem) run faster. It is being used to compress your 5-minute visit into a 4-minute visit.\n\n### Flipping the Supercomputer\n\nhOS is a unified, local-first data layer that structures your continuous lived experience into a sovereign clinical record, ensuring your healthcare data remains your private, encrypted property while bridging the gap between your daily truth and the hospital system. At the Humanos Foundation, we are building local-first, sovereign AI models—like our integrated CoquiBot. But we are pointing the supercomputer in the opposite direction.\n\nWe use AI to help the patient *expand* their nuance. If you struggle to articulate your symptoms, our AI acts as a patient advocate, gently prompting you to record the critical environmental, psychological, and physical details everyday. It then synthesizes that chaotic longitudinal data into a mathematically unignorable clinical report.\n\n### The AI Must Be the Co-Pilot, Not the Judge\n\nFurthermore, sovereign AI must never make a "black-box" clinical determination. When our AI generates a clinical summary, it provides transparent citations back to your original journal entries. It does not replace the doctor; it simply structures your truth so the doctor cannot ignore it.\n\n---\n\n### Control the Algorithm\n\nThe system only listens when the truth is unignorable. [Join the Movement](/Join) today to claim your clinical sovereignty and share your story with a global community fighting for root-cause medicine.'
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
