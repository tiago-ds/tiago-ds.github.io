import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const TRACK_SERVICE = "https://spotify-current-scrobbling.onrender.com";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    // The track service only sends access-control-allow-origin for the
    // production site, so a direct browser call from localhost is blocked by
    // CORS. Proxying it through the dev server sidesteps that: the request is
    // made server-side, where CORS does not apply.
    proxy: {
      "/api/track-details": {
        target: TRACK_SERVICE,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
