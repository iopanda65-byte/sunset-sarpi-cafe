import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <-- შემოგვაქვს თაილვინდი

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- ვამატებთ პლაგინებში
  ],
});
