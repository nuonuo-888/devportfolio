// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://devportfolio.edgeone.app/',
  adapter: edgeoneAdapter(),
  vite: {
    plugins: [tailwindcss()],
  },
});
