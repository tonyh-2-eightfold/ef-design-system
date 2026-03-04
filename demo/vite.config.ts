import path from 'node:path'
import fs from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const demoRoot = path.resolve(__dirname)
const designSystemRoot = path.join(demoRoot, '..')
const designSystemPublicDir = path.join(designSystemRoot, 'public')
const designSystemCssPath = path.join(designSystemRoot, 'dist', 'assets', 'index.css')

/** Fail at config load if design system isn't built or public is missing (run from repo root, npm run build). */
function requireDesignSystemPlugin() {
  return {
    name: 'require-design-system',
    enforce: 'pre' as const,
    config() {
      const missing: string[] = []
      if (!fs.existsSync(designSystemPublicDir) || !fs.statSync(designSystemPublicDir).isDirectory()) {
        missing.push(`public directory: ${designSystemPublicDir}`)
      }
      if (!fs.existsSync(designSystemCssPath) || !fs.statSync(designSystemCssPath).isFile()) {
        missing.push(`built CSS: ${designSystemCssPath}`)
      }
      if (missing.length > 0) {
        throw new Error(
          `[demo] Design system not ready. Missing ${missing.join('; ')}. From repo root run: npm run build`
        )
      }
    },
  }
}

/** Serve design system public assets (logos, Gilroy fonts) at /product-logos/, /fonts/, etc. */
function designSystemPublicPlugin() {
  return {
    name: 'design-system-public',
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url.startsWith('/product-logos/') || url === '/eightfold-logo.svg' || url === '/ai-agent.svg' || url === '/copilot.svg' || url.startsWith('/fonts/')) {
          const file = path.join(designSystemPublicDir, url)
          if (fs.existsSync(file) && fs.statSync(file).isFile()) {
            const ct = file.endsWith('.svg') ? 'image/svg+xml' : file.endsWith('.woff2') ? 'font/woff2' : 'application/octet-stream'
            res.setHeader('Content-Type', ct)
            fs.createReadStream(file).pipe(res)
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [requireDesignSystemPlugin(), designSystemPublicPlugin(), react(), tailwindcss()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(demoRoot, 'src') }],
  },
  server: {
    port: 5173,
  },
})
