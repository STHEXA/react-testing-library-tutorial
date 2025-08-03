/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // describe, it, expect をインポート不要に
    environment: "jsdom", // JSDOM を設定
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    // TSXでalias使っているなら、resolve.alias を Vite 側と同様に設定
  },
});
