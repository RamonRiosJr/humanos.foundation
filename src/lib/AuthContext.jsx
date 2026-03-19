import React, { createContext, useState, useContext, useEffect } from 'react';
<<<<<<< HEAD
import { base44 } from '@/api/humanosClient';
import { appParams } from '@/lib/app-params';
=======
import { base44 } from '@/api/base44Client';
import { appParams } from '@/lib/app-params';
import { createAxiosClient } from '@base44/sdk/dist/utils/axios-client';
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
<<<<<<< HEAD
    const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
    const [authError, setAuthError] = useState(null);
    const [appPublicSettings, setAppPublicSettings] = useState({ id: 'humanos', public_settings: {} });
=======
    const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
    const [authError, setAuthError] = useState(null);
    const [appPublicSettings, setAppPublicSettings] = useState(null); // Contains only { id, public_settings }
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

    useEffect(() => {
        checkAppState();
    }, []);

    const checkAppState = async () => {
<<<<<<< HEAD
        setIsLoadingAuth(true);
        try {
            const currentUser = await base44.auth.me();
            setUser(currentUser);
            setIsAuthenticated(true);
        } catch (error) {
            setIsAuthenticated(false);
        } finally {
            setIsLoadingAuth(false);
=======
        try {
            setIsLoadingPublicSettings(true);
            setAuthError(null);

            // First, check app public settings (with token if available)
            // This will tell us if auth is required, user not registered, etc.
            const appClient = createAxiosClient({
                baseURL: `/api/apps/public`,
                headers: {
                    'X-App-Id': appParams.appId
                },
                token: appParams.token, // Include token if available
                interceptResponses: true
            });

            try {
                const publicSettings = await appClient.get(`/prod/public-settings/by-id/${appParams.appId}`);
                setAppPublicSettings(publicSettings);

                // If we got the app public settings successfully, check if user is authenticated
                if (appParams.token) {
                    await checkUserAuth();
                } else {
                    setIsLoadingAuth(false);
                    setIsAuthenticated(false);
                }
                setIsLoadingPublicSettings(false);
            } catch (appError) {
                console.error('App state check failed:', appError);

                // Handle app-level errors
                if (appError.status === 403 && appError.data?.extra_data?.reason) {
                    const reason = appError.data.extra_data.reason;
                    if (reason === 'auth_required') {
                        setAuthError({
                            type: 'auth_required',
                            message: 'Authentication required'
                        });
                    } else if (reason === 'user_not_registered') {
                        setAuthError({
                            type: 'user_not_registered',
                            message: 'User not registered for this app'
                        });
                    } else {
                        setAuthError({
                            type: reason,
                            message: appError.message
                        });
                    }
                } else {
                    setAuthError({
                        type: 'unknown',
                        message: appError.message || 'Failed to load app'
                    });
                }
                setIsLoadingPublicSettings(false);
                setIsLoadingAuth(false);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            setAuthError({
                type: 'unknown',
                message: error.message || 'An unexpected error occurred'
            });
            setIsLoadingPublicSettings(false);
            setIsLoadingAuth(false);
        }
    };

    const checkUserAuth = async () => {
        try {
            // Now check if the user is authenticated
            setIsLoadingAuth(true);
            const currentUser = await base44.auth.me();
            setUser(currentUser);
            setIsAuthenticated(true);
            setIsLoadingAuth(false);
        } catch (error) {
            console.error('User auth check failed:', error);
            setIsLoadingAuth(false);
            setIsAuthenticated(false);

            // If user auth fails, it might be an expired token
            if (error.status === 401 || error.status === 403) {
                setAuthError({
                    type: 'auth_required',
                    message: 'Authentication required'
                });
            }
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
        }
    };

    const logout = (shouldRedirect = true) => {
        setUser(null);
        setIsAuthenticated(false);
<<<<<<< HEAD
        base44.auth.logout(shouldRedirect ? window.location.href : null);
    };

    const navigateToLogin = () => {
=======

        if (shouldRedirect) {
            // Use the SDK's logout method which handles token cleanup and redirect
            base44.auth.logout(window.location.href);
        } else {
            // Just remove the token without redirect
            base44.auth.logout();
        }
    };

    const navigateToLogin = () => {
        // Use the SDK's redirectToLogin method
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
        base44.auth.redirectToLogin(window.location.href);
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            isLoadingAuth,
            isLoadingPublicSettings,
            authError,
            appPublicSettings,
            logout,
            navigateToLogin,
            checkAppState
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
