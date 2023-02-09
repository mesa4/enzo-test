import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '~reset-css': path.resolve(__dirname, 'node_modules/reset-css'),
            '~bootstrap-scss': path.resolve(__dirname, 'node_modules/bootstrap-scss')
        }
    }
});
