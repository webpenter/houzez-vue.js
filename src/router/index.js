import { createRouter, createWebHistory } from 'vue-router'

// --------------- App Components -------------------
import AppLayout from "@/views/app/layout/Index.vue";
import Home from "@/views/app/pages/home/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ----------------- App Routes ---------------------
    {
      path: '/',
      name:'app',
      component:AppLayout,
      children:[
          {
            path: '/',
            name:'app.home',
            component:Home,
          }
      ]
    },
  ],
})

export default router
