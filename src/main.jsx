import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import '@/lib/i18n' // Initialize i18n global engine

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;

if (posthogKey) {
    // Dynamically import and init only if key exists
    import('posthog-js').then(({ default: posthog }) => {
        posthog.init(posthogKey, {
            api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
            person_profiles: 'always',
            capture_pageview: false,
        });
    });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
