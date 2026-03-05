import path from 'node:path';
import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
const demoRoot = path.resolve(__dirname);
const designSystemRoot = path.join(demoRoot, '..');
const designSystemPublicDir = path.join(designSystemRoot, 'public');
const designSystemCssPath = path.join(designSystemRoot, 'dist', 'assets', 'index.css');
/** Fail at config load if design system isn't built or public is missing (run from repo root, npm run build). */
function requireDesignSystemPlugin() {
    return {
        name: 'require-design-system',
        enforce: 'pre',
        config() {
            const missing = [];
            if (!fs.existsSync(designSystemPublicDir) || !fs.statSync(designSystemPublicDir).isDirectory()) {
                missing.push(`public directory: ${designSystemPublicDir}`);
            }
            if (!fs.existsSync(designSystemCssPath) || !fs.statSync(designSystemCssPath).isFile()) {
                missing.push(`built CSS: ${designSystemCssPath}`);
            }
            if (missing.length > 0) {
                throw new Error(`[demo] Design system not ready. Missing ${missing.join('; ')}. From repo root run: npm run build`);
            }
        },
    };
}
/** Serve design system public assets (logos, Gilroy fonts) at /product-logos/, /fonts/, etc. */
function designSystemPublicPlugin() {
    return {
        name: 'design-system-public',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const url = req.url?.split('?')[0] ?? '';
                if (url.startsWith('/product-logos/') || url === '/eightfold-logo.svg' || url === '/ai-agent.svg' || url === '/copilot.svg' || url.startsWith('/fonts/') || url.startsWith('/object-card-backgrounds/')) {
                    const file = path.join(designSystemPublicDir, url);
                    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
                        const ct = file.endsWith('.svg') ? 'image/svg+xml' : file.endsWith('.woff2') ? 'font/woff2' : 'application/octet-stream';
                        res.setHeader('Content-Type', ct);
                        fs.createReadStream(file).pipe(res);
                        return;
                    }
                }
                next();
            });
        },
    };
}
/** Copy design system public assets into demo/dist on build (for Vercel / static deploy). */
function copyDesignSystemPublicPlugin() {
    return {
        name: 'copy-design-system-public',
        closeBundle() {
            const outDir = path.resolve(demoRoot, 'dist');
            if (!fs.existsSync(outDir) || !fs.statSync(outDir).isDirectory())
                return;
            try {
                fs.cpSync(designSystemPublicDir, path.join(outDir, 'design-system-public'), { recursive: true });
                // Move contents to dist root so /fonts/, /object-card-backgrounds/ etc. resolve
                const from = path.join(outDir, 'design-system-public');
                for (const name of fs.readdirSync(from)) {
                    const src = path.join(from, name);
                    const dest = path.join(outDir, name);
                    if (fs.existsSync(dest)) {
                        if (fs.statSync(dest).isDirectory()) {
                            fs.rmSync(dest, { recursive: true });
                        }
                        else {
                            fs.unlinkSync(dest);
                        }
                    }
                    fs.renameSync(src, dest);
                }
                fs.rmdirSync(from);
            }
            catch (err) {
                console.warn('[copy-design-system-public]', err);
            }
        },
    };
}
export default defineConfig({
    plugins: [requireDesignSystemPlugin(), designSystemPublicPlugin(), copyDesignSystemPublicPlugin(), react(), tailwindcss()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(demoRoot, 'src') },
            // Resolve design system from repo root so demo always uses latest build (no cached tarball)
            { find: '@tonyh-2-eightfold/ef-design-system', replacement: designSystemRoot },
            // Resolve styles subpath to built CSS so Navigation Menu (and all components) get design system styles
            {
                find: '@tonyh-2-eightfold/ef-design-system/styles',
                replacement: path.join(designSystemRoot, 'dist', 'assets', 'index.css'),
            },
        ],
    },
    server: {
        port: 5173,
    },
});
