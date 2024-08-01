import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true,
},
server: {
    port: 8080,
},
resolve: {
    alias: {
        src: path.resolve(__dirname, './src'),
    },
},
})
