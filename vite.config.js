<<<<<<< HEAD
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
=======
import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)

// https://vite.dev/config/
export default defineConfig({
    logLevel: 'error', // Suppress warnings, only show errors
    plugins: [
<<<<<<< HEAD
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        host: true,
        port: 7200,
        strictPort: true,
    },
=======
        base44({
            // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
            // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
            legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
            hmrNotifier: true,
            navigationNotifier: true,
            analyticsTracker: true,
            visualEditAgent: true
        }),
        react(),
    ]
>>>>>>> 266151a (chore: bootstrap repository with enterprise CI/CD and community health standards using gh-repo-bootstrap)
});