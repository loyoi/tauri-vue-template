import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import SvgIcon from "./components/svg-icon"
import router from "./router"
import "./style.css"

const app = createApp(App)
app.use(router)
app.use(createPinia()) // 状态管理
app.component("svg-icon", SvgIcon)
app.mount("#app")
