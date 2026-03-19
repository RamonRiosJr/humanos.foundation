import React, { createContext, useState, useContext, useEffect } from 'react';
import { base44 } from '@/api/humanosClient';
import { appParams } from '@/lib/app-params';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
    const [authError, setAuthError] = useState(null);
    const [appPublicSettings, setAppPublicSettings] = useState({ id: 'humanos', public_settings: {} });

    useEffect(() => {
        checkAppState();
    }, []);

    const checkAppState = async () => {
        setIsLoadingAuth(true);
        try {
            const currentUser = await base44.auth.me();
            setUser(currentUser);
            setIsAuthenticated(true);
        } catch (error) {
            setIsAuthenticated(false);
        } finally {
            setIsLoadingAuth(false);
        }
    };

    const logout = (shouldRedirect = true) => {
        setUser(null);
        setIsAuthenticated(false);
        base44.auth.logout(shouldRedirect ? window.location.href : null);
    };

    const navigateToLogin = () => {
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
