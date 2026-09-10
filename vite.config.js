import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const target = env.VITE_API_PROXY_TARGET || env.VITE_API_BASE_URL || process.env.VITE_API_BASE_URL || 'http://localhost:3000'

  return {
    plugins: [vue()],
    base: mode === 'production' ? '/TemaPsrt/' : '/',
    server: {
      port: 5174,
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    preview: {
      port: 5174,
      proxy: {
        '/api': {
          target,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
