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
          /***
           * @route App/Home
          ***/
          {
            path: '/',
            name:'app.home',
            component:() => import('@/views/app/pages/home/Index.vue'),
            meta:{ title:'Home' }
          },

          /***
           * @route App/Add-New-Property
          ***/
          {
            path: '/add-new-property',
            name:'app.add-new-property',
            component:() => import('@/views/app/pages/add-new-property/Index.vue'),
            meta:{ title:'Add Property' }
          },

          /***
           * @route App/Properties
          ***/
          {
            path: '/properties',
            name:'app.properties',
            component:() => import('@/views/app/pages/properties/Index.vue'),
            meta:{ title:'Properties' }
          },

          /***
           * @route App/Property
          ***/
          {
            path: '/property',
            name:'app.property',
            component:() => import('@/views/app/pages/property/Index.vue'),
            meta:{ title:'Property' }
          },

          /***
           * @route App/Realtor
          ***/
          {
            path: '/realtor',
            name:'app.realtor',
            component:() => import('@/views/app/pages/realtor/Index.vue'),
            meta:{ title:'Realtor' }
          },

          /***
           * @route App/Search-Results
          ***/
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
     * @auth Normal User Authentication
     * @author WebPenter
    ***/
     {
      path: '/dashboard',
      name:'dashboard',
      redirect:'/dashboard/crm',
      component:() => import('@/views/dashboard/layout/Index.vue'),
      children:[
          /***
           * @route Dashboard/Board-CRM
           * @route Dashboard/Board-CRM-Active-Deals
           * @route Dashboard/Board-CRM-Enquiries
           * @route Dashboard/Board-CRM-Leads
           ***/
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

          /***
           * @route Dashboard/Insight
           ***/
          {
            path: '/dashboard/insight',
            name:'dashboard.insight',
            component:() => import('@/views/dashboard/pages/insight/Index.vue'),
            meta:{ title:'Insight' }
          },

          /***
           * @route Dashboard/My-Properties
           * @route Dashboard/Published-Properties
           * @route Dashboard/Pending-Properties
           * @route Dashboard/Expired-Properties
           * @route Dashboard/Draft-Properties
           * @route Dashboard/Hold-Properties
           * @route Dashboard/Disapproved-Properties
           ***/
          {
            path: '/dashboard/my-properties',
            name:'dashboard.my-properties',
            component:() => import('@/views/dashboard/pages/my-properties/all/Index.vue'),
            meta:{ title:'My Properties' }
          },
          {
            path: '/dashboard/my-properties/published',
            name:'dashboard.my-properties.published',
            component:() => import('@/views/dashboard/pages/my-properties/published/Index.vue'),
            meta:{ title:'Published Properties' }
          },
          {
            path: '/dashboard/my-properties/pending',
            name:'dashboard.my-properties.pending',
            component:() => import('@/views/dashboard/pages/my-properties/pending/Index.vue'),
            meta:{ title:'Pending Properties' }
          },
          {
            path: '/dashboard/my-properties/expired',
            name:'dashboard.my-properties.expired',
            component:() => import('@/views/dashboard/pages/my-properties/expired/Index.vue'),
            meta:{ title:'Expired Properties' }
          },
          {
            path: '/dashboard/my-properties/draft',
            name:'dashboard.my-properties.draft',
            component:() => import('@/views/dashboard/pages/my-properties/draft/Index.vue'),
            meta:{ title:'Draft Properties' }
          },
          {
            path: '/dashboard/my-properties/hold',
            name:'dashboard.my-properties.hold',
            component:() => import('@/views/dashboard/pages/my-properties/hold/Index.vue'),
            meta:{ title:'Hold Properties' }
          },
          {
            path: '/dashboard/my-properties/disapproved',
            name:'dashboard.my-properties.disapproved',
            component:() => import('@/views/dashboard/pages/my-properties/disapproved/Index.vue'),
            meta:{ title:'Disapproved Properties' }
          },

          /***
           * @route Dashboard/Create-Listing/Get-Package
           * @route Dashboard/Create-Listing/Select-Package
           * @route Dashboard/Create-Listing/Payment-Complete-Order
           * @route Dashboard/Create-Listing/Payment-Create-Account
           * @route Dashboard/Create-Listing/Payment-Completed
           * @route Dashboard/Create-Listing/Step-1 to Step-12
           * @route Dashboard/Create-Listing/Listing-Done
           ***/
          {
            path: '/dashboard/create-listing/get-package',
            name:'dashboard.create-listing.get-package',
            component:() => import('@/views/dashboard/pages/create-listing/package/get-package/Index.vue'),
            meta:{ title:'Get Package' }
          },
          {
            path: '/dashboard/create-listing/select-package',
            name:'dashboard.create-listing.select-package',
            component:() => import('@/views/dashboard/pages/create-listing/package/select-package/Index.vue'),
            meta:{ title:'Select Package' }
          },
          {
            path: '/dashboard/create-listing/complete-order',
            name:'dashboard.create-listing.complete-order',
            component:() => import('@/views/dashboard/pages/create-listing/payment/complete-order/Index.vue'),
            meta:{ title:'Complete Order' }
          },
          {
            path: '/dashboard/create-listing/create-account',
            name:'dashboard.create-listing.create-account',
            component:() => import('@/views/dashboard/pages/create-listing/payment/create-account/Index.vue'),
            meta:{ title:'Create Account' }
          },
          {
            path: '/dashboard/create-listing/payment-completed',
            name:'dashboard.create-listing.payment-completed',
            component:() => import('@/views/dashboard/pages/create-listing/payment/payment-completed/Index.vue'),
            meta:{ title:'Create Account' }
          },
          {
            path: '/dashboard/create-listing/step-1',
            name:'dashboard.create-listing.step-1',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-1/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-2',
            name:'dashboard.create-listing.step-2',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-2/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-3',
            name:'dashboard.create-listing.step-3',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-3/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-4',
            name:'dashboard.create-listing.step-4',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-4/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-5',
            name:'dashboard.create-listing.step-5',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-5/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-6',
            name:'dashboard.create-listing.step-6',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-6/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-7',
            name:'dashboard.create-listing.step-7',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-7/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-8',
            name:'dashboard.create-listing.step-8',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-8/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-9',
            name:'dashboard.create-listing.step-9',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-9/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-10',
            name:'dashboard.create-listing.step-10',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-10/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-11',
            name:'dashboard.create-listing.step-11',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-11/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/step-12',
            name:'dashboard.create-listing.step-12',
            component:() => import('@/views/dashboard/pages/create-listing/create-listing/step-12/Index.vue'),
            meta:{ title:'Create Listing' }
          },
          {
            path: '/dashboard/create-listing/completed',
            name:'dashboard.create-listing.completed',
            component:() => import('@/views/dashboard/pages/create-listing/completed/Index.vue'),
            meta:{ title:'Create Listing' }
          },

          /***
           * @route Dashboard/Favorite-Properties
           ***/
          {
            path: '/dashboard/favorite-properties',
            name:'dashboard.favorite-properties',
            component:() => import('@/views/dashboard/pages/favorite-properties/Index.vue'),
            meta:{ title:'Favorite Properties' }
          },

          /***
           * @route Dashboard/Saved-Searches
           ***/
          {
            path: '/dashboard/saved-searches',
            name:'dashboard.saved-searches',
            component:() => import('@/views/dashboard/pages/saved-searches/Index.vue'),
            meta:{ title:'Saved Searches' }
          },

          /*** 
           * @route Dashboard/Invoices 
          ***/
          {
            path: '/dashboard/invoices',
            name:'dashboard.invoices',
            component:() => import('@/views/dashboard/pages/invoices/Index.vue'),
            meta:{ title:'Invoices' }
          },

          /***
           * @route Dashboard/Messages
           ***/
          {
            path: '/dashboard/messages',
            name:'dashboard.messages',
            component:() => import('@/views/dashboard/pages/messages/Index.vue'),
            meta:{ title:'Messages' }
          },

          /*** 
           * @route Dashboard/My-Profile 
           ***/
          {
            path: '/dashboard/my-profile',
            name:'dashboard.my-profile',
            component:() => import('@/views/dashboard/pages/my-profile/Index.vue'),
            meta:{ title:'My Profile' }
          },
      ]
    },

    /*** --------------- 
     * @route 404-Page-Not-Found 
     ***/
    {
      path: "/:pathMatch(.*)",
      name: "not-found-404",
      component: () => import('@/components/pages/NotFound404.vue'),
      meta: { title: "404 Not Found" },
    },
  ],
});

/* -------- Before and After route functionality and modify settings ---------- */
router.beforeEach((to,from,next) => {
  /* -------------- Guards of Protected and Unprotected Routes ---------------- */
  next();

  /* --------------------------- Dynamic Title -------------------------------- */
  document.title = to?.meta.title ? `${to.meta.title} - Houzez` : 'Houzez'
});

export default router;
