import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'favicon-96x96.png',
        'favicon.svg',
        'web-app-manifest-192x192.png',
        'web-app-manifest-512x512.png'
      ],

      manifest: {
        name: 'smartOrder',
        short_name: 'smartOrder',
        description: 'Ordena comida fácilmente desde tu dispositivo',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',

        icons: [
          {
            src: 'web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple-touch-icon'
          }
        ]
      },

workbox: {
  globPatterns: ['**/*.{js,css,html,png,svg,jpg,jpeg,ico}'],
  navigateFallback: '/index.html',
  cleanupOutdatedCaches: true,
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024 // 20 MB
}

    })
  ]
})
