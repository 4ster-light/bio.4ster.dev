import { defineConfig, type UserConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import tailwindcss from "@tailwindcss/vite"
import deno from "@deno/vite-plugin"

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss(), deno()],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  }
}) satisfies UserConfig
