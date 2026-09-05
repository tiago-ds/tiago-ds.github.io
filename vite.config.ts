import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const TRACK_SERVICE = "https://spotify-current-scrobbling.onrender.com";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    // The service only allows the production origin, so call it server-side.
    proxy: {
      "/api/track-details": {
        target: TRACK_SERVICE,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
