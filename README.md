这个模板使用了以下技术:

前端：

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tauri](https://tauri.studio/)
- [Pinia](https://pinia.esm.dev/)
- [Vue Router](https://next.router.vuejs.org/)
- less
- tailwindcss
- vite-plugin-svg-icons
- arco-design/web-vue

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
