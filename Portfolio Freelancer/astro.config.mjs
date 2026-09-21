import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site: "https://portfolio-freelancer-gules.vercel.app",
  trailingSlash: "always",
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()], resolve: { alias: { "@": "/src" } } },
  devToolbar: { enabled: false },
});
