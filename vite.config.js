import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), {
      name: "remove-mantine-fonts",
      enforce: "post",
      generateBundle(_, bundle) {
        for (const file in bundle) {
          if (file.match(/\.(woff2?|ttf|otf)$/)) {
            delete bundle[file];
          }
        }
      },
    }],
})
