import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ArcoResolver } from "unplugin-vue-components/resolvers"
import { vitePluginForArco } from "@arco-plugins/vite-vue"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import tailwindcss from "@tailwindcss/vite"
import conf from "./tsconfig.json"
import path from "path"

const host = process.env.TAURI_DEV_HOST

const get_alias = () => {
  const keys = Object.keys(conf.compilerOptions.paths)
  const obj: any = {}
  keys.forEach((key) => {
    // @ts-ignore
    const value = conf.compilerOptions.paths[key][0]
    const aliasName = key.replace("/*", "")
    obj[aliasName] = path.resolve(value.replace("/*", ""))
  })
  return obj
}

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
    vitePluginForArco({
      style: "css",
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  resolve: {
    alias: get_alias(),
  },
}))
