const isNode = typeof window === 'undefined';
<<<<<<< HEAD

/** SSR-safe localStorage shim: Map doesn't have getItem/setItem/removeItem */
const storage = isNode
    ? {
        _map: new Map(),
        getItem(k) { return this._map.get(k) ?? null; },
        setItem(k, v) { this._map.set(k, v); },
        removeItem(k) { this._map.delete(k); },
    }
    : window.localStorage;
=======
const windowObj = isNode ? { localStorage: new Map() } : window;
const storage = windowObj.localStorage;
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

const toSnakeCase = (str) => {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {}) => {
    if (isNode) {
        return defaultValue;
    }
    const storageKey = `base44_${toSnakeCase(paramName)}`;
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get(paramName);
    if (removeFromUrl) {
        urlParams.delete(paramName);
        const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""
            }${window.location.hash}`;
        window.history.replaceState({}, document.title, newUrl);
    }
    if (searchParam) {
        storage.setItem(storageKey, searchParam);
        return searchParam;
    }
    if (defaultValue) {
        storage.setItem(storageKey, defaultValue);
        return defaultValue;
    }
    const storedValue = storage.getItem(storageKey);
    if (storedValue) {
        return storedValue;
    }
    return null;
}

const getAppParams = () => {
    if (getAppParamValue("clear_access_token") === 'true') {
        storage.removeItem('base44_access_token');
        storage.removeItem('token');
    }
<<<<<<< HEAD
    // @ts-ignore — import.meta.env is injected by Vite at build time
    const env = import.meta.env ?? {};
    return {
        appId: getAppParamValue("app_id", { defaultValue: env.VITE_BASE44_APP_ID }),
        token: getAppParamValue("access_token", { removeFromUrl: true }),
        fromUrl: getAppParamValue("from_url", { defaultValue: isNode ? '' : window.location.href }),
        functionsVersion: getAppParamValue("functions_version", { defaultValue: env.VITE_BASE44_FUNCTIONS_VERSION }),
        appBaseUrl: getAppParamValue("app_base_url", { defaultValue: env.VITE_BASE44_APP_BASE_URL }),
=======
    return {
        appId: getAppParamValue("app_id", { defaultValue: import.meta.env.VITE_BASE44_APP_ID }),
        token: getAppParamValue("access_token", { removeFromUrl: true }),
        fromUrl: getAppParamValue("from_url", { defaultValue: window.location.href }),
        functionsVersion: getAppParamValue("functions_version", { defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION }),
        appBaseUrl: getAppParamValue("app_base_url", { defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL }),
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
    }
}


export const appParams = {
    ...getAppParams()
}

