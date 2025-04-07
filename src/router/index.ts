import { createRouter, createWebHashHistory } from "vue-router"

import MainPage from "../pages/main/index.vue"

const routes = [{ path: "/", component: MainPage }]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
