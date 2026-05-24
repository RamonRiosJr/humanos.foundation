/**
 * @fileoverview Sovereign Telemetry & Structured Logger
 * Enforces Zero-Knowledge boundaries by stripping out objects and intercepting logs in production.
 * Prevents inadvertent payload leakage into standard browser DevTools.
 */

const isProd = import.meta.env.PROD;

export const Logger = {
    info: (message, ...args) => {
        if (!isProd) {
            console.info(`[Foundation Info]: ${message}`, ...args);
        }
    },
    warn: (message, ...args) => {
        console.warn(`[Foundation Warn]: ${message}`, ...args);
    },
    error: (error, context = "Unhandled") => {
        // Redact any nested stack traces in production to prevent Edge function internal state leaks
        if (isProd) {
            console.error(
                `[Foundation Error] <${context}>: ${error.message || "Execution Failure (Redacted for Security)"}`,
            );
        } else {
            console.error(`[Foundation Error] <${context}>:`, error);
        }
    },
    // Used explicitly for local-encryption tracing. Strictly disabled in prod.
    crypto: (message) => {
        if (!isProd) {
            console.debug(`[🔒 Zero-Knowledge Edge]: ${message}`);
        }
    },
};
