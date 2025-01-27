import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: false,
    port: 3000,
  },
  preview: {
    open: false,
    host: true,
    port: 3000,
  },
});
