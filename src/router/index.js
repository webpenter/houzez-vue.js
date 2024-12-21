import { createRouter, createWebHistory } from 'vue-router'

// --------------- App Components -------------------
import AppLayout from "@/views/app/layout/Index.vue";
import Home from "@/views/app/pages/home/Index.vue";
import AddNewProperty from "@/views/app/pages/add-new-property-frontend-single-page-step-1/Index.vue";
import Properties from "@/views/app/pages/properties/Index.vue";

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
            meta:{
              title:'Home'
            }
          },
          {
            path: '/add-new-property-frontend-single-page-step-1',
            name:'app.add-new-property',
            component:AddNewProperty,
            meta:{
              title:'Add Property'
            }
          },
          {
            path: '/properties',
            name:'app.properties',
            component:Properties,
            meta:{
              title:'Properties'
            }
          },
      ]
    },
  ],
})

router.beforeEach((to,from,next) => {
  // -------------- Guards of Protected and Unprotected Routes ----------------
  next();

  // --------------------------- Dynamic Title --------------------------------
   document.title = to?.meta.title ? `Houzez - ${to.meta.title}` : 'Houzez'
});

export default router
