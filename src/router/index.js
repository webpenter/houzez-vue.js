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
          /* --------------- Board CRM -------------- */
          {
            path: '/dashboard/crm',
            name:'dashboard.crm',
            component:() => import('@/views/dashboard/pages/board/crm/Index.vue'),
            meta:{ title:'Activities' }
          },
          {
            path: '/dashboard/crm-deals',
            name:'dashboard.crm-deals',
            component:() => import('@/views/dashboard/pages/board/crm-deals/Index.vue'),
            meta:{ title:'Deals' }
          },
          {
            path: '/dashboard/crm-won-deals', // Fixed path
            name: 'dashboard.won-deals',
            component: () => import('@/views/dashboard/pages/board/crm-deals/won-deals/Index.vue'),
            meta: { title: 'Won Deals' }
          },
          {
            path: '/dashboard/crm-lost-deals', // Unique path for Lost Deals
            name: 'dashboard.lost-deals',
            component: () => import('@/views/dashboard/pages/board/crm-deals/lost-deals/Index.vue'),
            meta: { title: 'Lost Deals' }
          },
          {
            path: '/dashboard-import-csv',
            name: 'dashboard.importCsv',
            component: () => import('@/views/dashboard/pages/board/crm-deals/ImportCsv.vue'),
            meta: { title: 'Import Csv' }
          },
          {
            path: '/dashboard/crm-enquiries',
            name:'dashboard.crm-enquiries',
            component:() => import('@/views/dashboard/pages/board/crm-enquiries/Index.vue'),
            meta:{ title:'Enquiries' }
          },
          {
            path: '/dashboard/crm-lead-enquiry-from-property-detail-page',
            name: 'dashboard.crm-lead-enquiry-from-property-detail-page',
            component: () => import('@/views/dashboard/pages/board/crm-enquiries/CrmLeadEnquiryFromPropertyDetailPage.vue'),
            meta: { title: 'Enquiries Details' }
          },

          {
            path: '/dashboard/crm-leads',
            name: 'dashboard.crm-leads',
            component: () => import('@/views/dashboard/pages/board/crm-leads/Index.vue'), // Default view
            meta: { title: 'Leads' }
          },
          {
            path: '/dashboard/crm-lead-enquiries',
            name: 'dashboard.crm-lead-enquiries',
            component: () => import('@/views/dashboard/pages/board/crm-leads/CrmLeadEnquiries.vue'), // Enquiries view
            meta: { title: 'Lead Enquiries' }
          },
          {
            path: '/dashboard/crm-lead-events',
            name: 'dashboard.crm-lead.events',
            component: () => import('@/views/dashboard/pages/board/crm-leads/CrmLeadEvents.vue'),
            meta: { title: 'Lead Events' }
          },
          {
            path: '/dashboard/crm-lead-listings-viewed',
            name: 'dashboard.crm-lead.listings-viewed',
            component: () => import('@/views/dashboard/pages/board/crm-leads/CrmLeadListingsViewed.vue'),
            meta: { title: 'Lead Listings Viewed' }
          },
          {
            path: '/dashboard/crm-lead-saved-searches',
            name: 'dashboard.crm-lead-saved-searches',
            component: () => import('@/views/dashboard/pages/board/crm-leads/CrmLeadSavedSearches.vue'),
            meta: { title: 'Lead Saved Searches' }
          },
          

          /* ---------------- Insight ------------------ */
          {
            path: '/dashboard/insight',
            name:'dashboard.insight',
            component:() => import('@/views/dashboard/pages/insight/Index.vue'),
            meta:{ title:'Insight' }
          },

          /* --------------- My Properties -------------- */
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

          /* --------------- Create Listing -------------- */
          {
            path: '/dashboard/create-listing',
            name:'dashboard.create-listing',
            component:() => import('@/views/dashboard/pages/create-listing/Index.vue'),
            meta:{ title:'Create Listing' }
          },
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

          /* --------------- Favorite Properties -------------- */
          {
            path: '/dashboard/favorite-properties',
            name:'dashboard.favorite-properties',
            component:() => import('@/views/dashboard/pages/favorite-properties/Index.vue'),
            meta:{ title:'Favorite Properties' }
          },

          /* ----------------- Saved Searches ----------------- */
          {
            path: '/dashboard/saved-searches',
            name:'dashboard.saved-searches',
            component:() => import('@/views/dashboard/pages/saved-searches/Index.vue'),
            meta:{ title:'Saved Searches' }
          },

          /* ------------------ Invoices -------------------- */
          {
            path: '/dashboard/invoices',
            name:'dashboard.invoices',
            component:() => import('@/views/dashboard/pages/invoices/Index.vue'),
            meta:{ title:'Invoices' }
          },

          /* ------------------ Messages --------------------- */
          {
            path: '/dashboard/messages',
            name:'dashboard.messages',
            component:() => import('@/views/dashboard/pages/messages/Index.vue'),
            meta:{ title:'Messages' }
          },

          /* -------------------- My Profile ----------------- */
          {
            path: '/dashboard/my-profile',
            name:'dashboard.my-profile',
            component:() => import('@/views/dashboard/pages/my-profile/Index.vue'),
            meta:{ title:'My Profile' }
          },
      ]
    },

    /* --------------- 404 Not Found -------------- */
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
