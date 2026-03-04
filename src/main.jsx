import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY;

if (posthogKey) {
    posthog.init(posthogKey, {
        api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'always',
        capture_pageview: false, // captured manually in App.jsx via useLocation
    });
}

const root = ReactDOM.createRoot(document.getElementById('root'));

if (posthogKey) {
    root.render(
        <PostHogProvider client={posthog}>
            <App />
        </PostHogProvider>
    );
} else {
    root.render(<App />);
}
