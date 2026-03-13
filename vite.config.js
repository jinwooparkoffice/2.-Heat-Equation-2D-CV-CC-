import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        timeout: 60000, // 60초 타임아웃
        ws: true, // WebSocket 지원
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('프록시 오류:', err.message);
            console.log('백엔드 서버가 실행 중인지 확인하세요: http://localhost:8080');
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log(`[프록시] ${req.method} ${req.url} -> http://localhost:8080${req.url}`);
          });
        },
      }
    }
  }
})
