import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("preset")) {
          const preset = url.searchParams.get("preset");
          if (preset === "responsive") {
            return new URLSearchParams({
              format: "avif;webp;png",
              w: "480;768;1200;1920",
              as: "picture",
            });
          }
        }
        return new URLSearchParams();
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // base: "/Moderncarpetstorewebsiteui/",
});
