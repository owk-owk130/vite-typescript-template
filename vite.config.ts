import { defineConfig } from "vite";
import vitePluginString from "vite-plugin-string";

const config = defineConfig({
  plugins: [vitePluginString()],
});

export default config;
