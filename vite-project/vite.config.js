import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: "Clever Quotes",
        name: "Clever Quotes: Random quotes to spice your day... Everyday!",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        id: "/",
        start_url: "/",
        background_color: "#8EC5FC",
        display: "standalone",
        description: "Generate random quotes and share on WhatsApp",
        lang: "de",
        scope: "/",
        screenshot: {
          src: "/Randomquotes-app-screenshot.png",
          type: "image/png",
          sizes: "520x545",
        },
        theme_color: "#3367D6",
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
      },
    }),
  ],
});