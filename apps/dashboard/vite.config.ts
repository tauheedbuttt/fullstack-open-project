/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";
// import { join } from "path";

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/dashboard",
  server: {
    port: 3002,
    host: "localhost",
  },
  preview: {
    port: 3002,
    host: "localhost",
  },
  resolve: {
    alias: {
      "@libs/shared": resolve(__dirname, "../../libs/shared/src/index.ts"),
    },
  },
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    name: "dashboard",
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "./test-output/vitest/coverage",
      provider: "v8" as const,
    },
  },
}));
