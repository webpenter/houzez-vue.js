import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*** 
     * @route '/'
     * @name app.*
     * @prefix No
     * @author WebPenter
    ***/
    {
      path: '/',
      name:'app',
      component:() => import('@/views/app/layout/Index.vue'),
      children:[
          {
            path: '/',
            name:'app.home',
            component:() => import('@/views/app/pages/home/Index.vue'),
            meta:{
              title:'Home'
            }
          },
          {
            path: '/add-new-property-frontend-single-page-step-1',
            name:'app.add-new-property',
            component:() => import('@/views/app/pages/add-new-property-frontend-single-page-step-1/Index.vue'),
            meta:{
              title:'Add Property'
            }
          },
          {
            path: '/properties',
            name:'app.properties',
            component:() => import('@/views/app/pages/properties/Index.vue'),
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
