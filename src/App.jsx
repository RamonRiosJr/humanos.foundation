import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
// posthog removed to prevent crash
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import { ThemeProvider } from './components/ThemeProvider';
import { A11yProvider } from '@/lib/A11yContext';
import A11yWidget from '@/components/shared/A11yWidget';
import ChatbotWidget from '@/components/shared/ChatbotWidget';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
    <Layout currentPageName={currentPageName}>{children}</Layout>
    : <>{children}</>;

const AuthenticatedApp = () => {
    const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

    // Show loading spinner while checking app public settings or auth
    if (isLoadingPublicSettings || isLoadingAuth) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
            </div>
        );
    }

    // Handle authentication errors
    if (authError) {
        if (authError.type === 'user_not_registered') {
            return <UserNotRegisteredError />;
        } else if (authError.type === 'auth_required') {
            // Redirect to login automatically
            navigateToLogin();
            return null;
        }
    }

    // Render the main app
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
                <AuthProvider>
                    <QueryClientProvider client={queryClientInstance}>
                        <Router>
                            <PosthogPageViewTracker />
                            <A11yWidget />
                            <ChatbotWidget />
                            <AuthenticatedApp />
                        </Router>
                        <Toaster />
                    </QueryClientProvider>
                </AuthProvider>
            </A11yProvider>
        </ThemeProvider>
    )
}

export default App
