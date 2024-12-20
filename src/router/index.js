import { createRouter, createWebHistory } from 'vue-router'

// --------------- App Components -------------------
import AppLayout from "@/views/app/layout/Index.vue";
import Home from "@/views/app/pages/home/Index.vue";
import AddNewProperty from "@/views/app/pages/add-new-property-frontend-single-page-step-1/Index.vue";

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
          },
          {
            path: '/add-new-property-frontend-single-page-step-1',
            name:'app.add-new-property',
            component:AddNewProperty,
          },
      ]
    },
  ],
})

export default router
