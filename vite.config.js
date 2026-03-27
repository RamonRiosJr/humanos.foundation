import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    logLevel: 'error', // Suppress warnings, only show errors
    plugins: [
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
        proxy: {
            '/odoo_local': {
                target: 'https://team.humanos.foundation',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/odoo_local/, '/humanos_api'),
                secure: false
            }
        }
    },
});