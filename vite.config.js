import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    logLevel: "error", // Suppress warnings, only show errors
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        host: true,
        port: 7200,
    },
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        if (id.includes("framer-motion")) {
                            return "vendor-framer";
                        }
                        if (
                            id.includes("react") ||
                            id.includes("react-dom") ||
                            id.includes("react-router")
                        ) {
                            return "vendor-react";
                        }
                        if (id.includes("lucide")) {
                            return "vendor-lucide";
                        }
                        return "vendor-core";
                    }
                },
            },
        },
    },
});
