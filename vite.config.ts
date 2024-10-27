import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"
import viteCompression from "vite-plugin-compression"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgr({
            include: "**/*.svg?react",
        }),
        checker({
            typescript: true,
        }),
        viteCompression({
            verbose: true,
            algorithm: "brotliCompress",
        }),
        viteCompression({
            verbose: true,
            algorithm: "gzip",
        }),
    ],
})
