这个模板使用了以下技术:

| 本模板使用 bun，如果使用其他包管理，需要在 `src-tauri\tauri.conf.json` 修改 `build` 配置

前端：

```json
{
  "dependencies": {
    "@tauri-apps/api": "^2.4.1",
    "@tauri-apps/plugin-dialog": "~2.2.1",
    "@tauri-apps/plugin-fs": "~2.2.1",
    "@tauri-apps/plugin-log": "~2.3.1",
    "pinia": "^3.0.1",
    "vue": "^3.5.13",
    "vue-router": "^4.5.0"
  },
  "devDependencies": {
    "@arco-design/web-vue": "^2.57.0",
    "@arco-plugins/vite-vue": "^1.4.5",
    "@tailwindcss/vite": "^4.1.3",
    "@tauri-apps/cli": "^2.4.1",
    "@vitejs/plugin-vue": "^5.2.3",
    "fast-glob": "^3.3.3",
    "less": "^4.3.0",
    "tailwindcss": "^4.1.3",
    "unplugin-auto-import": "^19.1.2",
    "unplugin-vue-components": "^28.4.1",
    "vite": "^6.2.5",
    "vite-plugin-svg-icons": "^2.0.1"
  }
}
```

后端：

```toml
tauri = { version = "^2", features = [] }
serde = { version = "^1", features = ["derive"] }
serde_json = "^1"
tauri-plugin-fs = "2"
tauri-plugin-log = "2"
log = "^0.4"
tauri-plugin-dialog = "2"
```
