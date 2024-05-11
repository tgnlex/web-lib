import { defineConfig, loadEnv, build } from 'vite'
import path from 'path'
import {build } from 'vite';
import {VitePWA} from 'vite-plugin-pwa'
const __dirname = fileURLToPath(new URL('.', import.meta.url))


export default defineConfig(({ command, mode, ssrBuild }) => {
    return { 
      build: {
        sourcemap: true, 
        cssMinify: esbuild, 
        rollupOptions: {
          input: {
            index: 'src/index.html',
            pages: 'src/pages/*.html',
            html: 'src/docs/html/*.html', 
            xml: 'src/docs/xml*.xml', 
            main: 'src/main.js', 
            js: 'src/js/*.js',
            server: 'server/src/main.js',
            worker: 'src/worker/*.js', 
            scripts: 'src/scripts/*.js', 
            style: 'style/*.scss' && 'style/*.sass' && 'style/*.css',
          },
        },
         outDir: {
          index: 'dist/index.html', 
          pages: 'dist/pages/*.html',
          html: 'dist/docs/html/',
          xml: 'dist/docs/xml/', 
          main: 'dist/.js',
          js: 'dist/js/',
          server: 'server/dist/main.js', 
          worker: 'dist/worker/',
          scripts: 'dist/scripts/*.js',
          style: 'dist/style/'
         }
        }
          watch: {
        
        },  
      serve: {

      },
      plugins: [
        VitePWA({
          manifest: {
            name: 'My Awesome App',
            short_name: 'MyApp',
            description: 'My Awesome App description',
            theme_color: '#ffffff',
          },
          registerType: 'autoUpdate',
          injectRegister: 'inline',
          devOptions: {
            enabled: true,
          },
          workbox: {
            cleanupOutdatedCaches: true,
            globPatterns: ['**/*.{js,cjs,mjs,mts,cts,jsx,ts,tsx,css,scss,html,ico,png,jpg,svg}']
          }
        })
      ],
      server: {
        fs: {
          strict: true, 
          allow: ['..'],
        }
      },
    
     
      }
    }
  }); 
