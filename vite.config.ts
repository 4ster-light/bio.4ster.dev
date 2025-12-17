import { defineConfig, type UserConfig } from "vite"
import preact from "@preact/preset-vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    preact(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  }
}) satisfies UserConfig
