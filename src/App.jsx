import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import { ThemeProvider } from './components/ThemeProvider';
import { A11yProvider } from '@/lib/A11yContext';
import A11yWidget from '@/components/shared/A11yWidget';
import ChatbotWidget from '@/components/shared/ChatbotWidget';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

/** @param {{ children: any, currentPageName: any }} props */
const LayoutWrapper = ({ children, currentPageName }) => Layout ?
    <Layout currentPageName={currentPageName}>{children}</Layout>
    : <>{children}</>;

const AppRouter = () => {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-black/95">
                <div className="w-8 h-8 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>
            </div>
        }>
            <Routes>
                <Route path="/" element={
                    <LayoutWrapper currentPageName={mainPageKey}>
                        <MainPage />
                    </LayoutWrapper>
                } />
                {Object.entries(Pages).map(([path, Page]) => (
                    <Route
                        key={path}
                        path={`/${path}`}
                        element={
                            <LayoutWrapper currentPageName={path}>
                                <Page />
                            </LayoutWrapper>
                        }
                    />
                ))}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    );
};

const PosthogPageViewTracker = () => {
    const location = useLocation();

    React.useEffect(() => {
        // Only track if setup is complete
        if (import.meta.env.VITE_POSTHOG_KEY) {
            import('posthog-js').then(({ default: posthog }) => {
                posthog.capture('$pageview');
            });
        }
    }, [location]);

    return null;
};

function App() {

    return (
        <ThemeProvider defaultTheme="dark">
            <A11yProvider>
                <QueryClientProvider client={queryClientInstance}>
                    <Router>
                        <PosthogPageViewTracker />
                        <A11yWidget />
                        <ChatbotWidget />
                        <AppRouter />
                    </Router>
                    <Toaster />
                </QueryClientProvider>
            </A11yProvider>
        </ThemeProvider>
    )
}

export default App
