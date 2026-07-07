import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react-dom") || id.includes("/react/")) return "vendor-react";
          if (id.includes("@tanstack")) return "vendor-router";
          if (id.includes("lucide-react")) return "vendor-icons";
          if (id.includes("@supabase") || id.includes("appwrite")) return "vendor-backend";
          if (id.includes("react-phone-number-input") || id.includes("libphonenumber")) {
            return "vendor-phone";
          }
          if (id.includes("@radix-ui")) return "vendor-radix";
          return "vendor-misc";
        },
      },
    },
  },
});
