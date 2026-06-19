import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // ლიმიტს ზრდის 1000 კბ-მდე, რომ Supabase-ის გამო ვორნინგი არ ამოაგდოს
    chunkSizeWarningLimit: 1000,
  },
});
