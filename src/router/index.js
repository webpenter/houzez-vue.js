import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*** 
     * @route 'localhost:3000/'
     * @name app
     * @prefix No
     * @auth False
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
            meta:{ title:'Home' }
          },
          {
            path: '/add-new-property',
            name:'app.add-new-property',
            component:() => import('@/views/app/pages/add-new-property/Index.vue'),
            meta:{ title:'Add Property' }
          },
          {
            path: '/properties',
            name:'app.properties',
            component:() => import('@/views/app/pages/properties/Index.vue'),
            meta:{ title:'Properties' }
          },
          {
            path: '/property',
            name:'app.property',
            component:() => import('@/views/app/pages/property/Index.vue'),
            meta:{ title:'Property' }
          },
          {
            path: '/realtor',
            name:'app.realtor',
            component:() => import('@/views/app/pages/realtor/Index.vue'),
            meta:{ title:'Realtor' }
          },
          {
            path: '/search-results',
            name:'app.search-results',
            component:() => import('@/views/app/pages/search-results/Index.vue'),
            meta:{ title:'Search Results' }
          },
      ]
    },

     /*** 
     * @route 'localhost:3000/dashboard/'
     * @name dashboard
     * @prefix No
     * @auth True
     * @author WebPenter
    ***/
     {
      path: '/dashboard',
      name:'dashboard',
      component:() => import('@/views/dashboard/layout/Index.vue'),
      children:[
          {
            path: '/dashboard/crm',
            name:'dashboard.crm',
            component:() => import('@/views/dashboard/pages/board/crm/Index.vue'),
            meta:{ title:'Activities' }
          },
          {
            path: '/dashboard/crm-active-deals',
            name:'dashboard.crm-active-deals',
            component:() => import('@/views/dashboard/pages/board/crm-active-deals/Index.vue'),
            meta:{ title:'Deals' }
          },
          {
            path: '/dashboard/crm-enquiries',
            name:'dashboard.crm-enquiries',
            component:() => import('@/views/dashboard/pages/board/crm-enquiries/Index.vue'),
            meta:{ title:'Enquiries' }
          },
          {
            path: '/dashboard/crm-leads',
            name:'dashboard.crm-leads',
            component:() => import('@/views/dashboard/pages/board/crm-leads/Index.vue'),
            meta:{ title:'Leads' }
          },
          {
            path: '/dashboard/insight',
            name:'dashboard.insight',
            component:() => import('@/views/dashboard/pages/insight/Index.vue'),
            meta:{ title:'Insight' }
          },
          {
            path: '/dashboard/my-properties',
            name:'dashboard.my-properties',
            component:() => import('@/views/dashboard/pages/my-properties/Index.vue'),
            meta:{ title:'My Properties' }
          },
          {
            path: '/dashboard/create-listing',
            name:'dashboard.create-listing',
            component:() => import('@/views/dashboard/pages/create-listing/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/favorite-properties',
            name:'dashboard.favorite-properties',
            component:() => import('@/views/dashboard/pages/favorite-properties/Index.vue'),
            meta:{ title:'Favorite Properties' }
          },
          {
            path: '/dashboard/saved-searches',
            name:'dashboard.saved-searches',
            component:() => import('@/views/dashboard/pages/saved-searches/Index.vue'),
            meta:{ title:'Saved Searches' }
          },
          {
            path: '/dashboard/invoices',
            name:'dashboard.invoices',
            component:() => import('@/views/dashboard/pages/invoices/Index.vue'),
            meta:{ title:'Invoices' }
          },
          {
            path: '/dashboard/messages',
            name:'dashboard.messages',
            component:() => import('@/views/dashboard/pages/messages/Index.vue'),
            meta:{ title:'Messages' }
          },
          {
            path: '/dashboard/my-profile',
            name:'dashboard.my-profile',
            component:() => import('@/views/dashboard/pages/my-profile/Index.vue'),
            meta:{ title:'My Profile' }
          },
      ]
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found-404",
      component: () => import('@/components/pages/NotFound404.vue'),
      meta: { title: "404 Not Found" },
    },
  ],
})

router.beforeEach((to,from,next) => {
  // -------------- Guards of Protected and Unprotected Routes ----------------
  next();

  // --------------------------- Dynamic Title --------------------------------
   document.title = to?.meta.title ? `${to.meta.title} - Houzez` : 'Houzez'
});

export default router
