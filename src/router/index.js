/**
 * @fileOverview List of route configurations for the application.
 *
 * @description Contains route definitions for various views and components.
 *
 * @feature Includes metadata for authentication requirements, titles, and other settings.
 * @feature Used to define the navigation structure and dynamic component imports.
 *
 * @author https://webpenter.com
 * @date 15 Dec,2024
 */

import { createRouter, createWebHistory } from 'vue-router';
import {DEFAULT_TITLE, TITLE_CREATE_UPDATE_LISTING, URL_CREATE_UPDATE_LISTING} from "@/constants";
import {useToken, useGeneralSettings,useMessage, useNavigationStore, useAdmin, useIsSubscribed} from "@/stores/index.js";

// Import demo routes
import demo01Routes from './demo01'

const routes = [
    /**
     * @route 'localhost:3000/'
     * @name app
     * @prefix app
     * @auth not-required
     **/
    {
        path: '/app',
        name:'app',
        redirect:'/app',
        component:() => import('@/views/app/layout/Index.vue'),
        children:[
            /***
             * @route App/Home
             ***/
            {
                path: '/app',
                name:'app.home',
                component:() => import('@/views/app/pages/home/Index.vue'),
                meta:{ title:'Home' }
            },
            /***
             * @route App/Properties
             ***/
            {
                path: '/app/properties',
                name:'app.properties',
                component:() => import('@/views/app/pages/properties/Index.vue'),
                meta:{ title:'Properties' }
            },
            /***
             * @route App/Property-Details
             ***/
            {
                path: '/app/property-details/:propertySlug',
                name:'app.property-details',
                component:() => import('@/views/app/pages/property-details/Index.vue'),
                meta:{ title:'Property Details' }
            },
            /***
             * @route App/Realtor
             ***/
            {
                path: '/app/realtor',
                name:'app.realtor',
                component:() => import('@/views/app/pages/realtor/Index.vue'),
                meta:{ title:'Realtor' }
            },
            /***
             * @route App/AboutUs
             ***/
            {
                path: '/app/about-us',
                name:'app.about-us',
                component:() => import('@/views/app/pages/about-us/Index.vue'),
                meta:{ title:'About Us' }
            },
            /***
             * @route App/Search-Results
             ***/
            {
                path: '/app/search-results',
                name:'app.search-results',
                component:() => import('@/views/app/pages/search-results/Index.vue'),
                meta:{ title:'Search Results' }
            },
        ]
    },

    /***
     * @route 'localhost:3000/auth/'
     * @name auth
     * @prefix auth
     * @auth not-required
     ***/
    {
        path: '/auth',
        name:'auth',
        redirect:'/auth/login',
        meta: { guest: true },
        component:() => import('@/views/auth/layout/Index.vue'),
        children:[
            /***
             * @route Auth/Register
             ***/
            {
                path: '/auth/register',
                name:'auth.register',
                component:() => import('@/views/auth/pages/register/Index.vue'),
                meta:{ title:'Register' }
            },
            /***
             * @route Auth/Login
             ***/
            {
                path: '/auth/login',
                name:'auth.login',
                component:() => import('@/views/auth/pages/login/Index.vue'),
                meta:{ title:'Login' }
            },
        ]
    },

    /***
     * @route 'localhost:3000/dashboard/'
     * @name dashboard
     * @prefix dashboard
     * @auth required
     ***/
    {
        path: '/dashboard',
        name:'dashboard',
        redirect:'/dashboard/crm',
        meta: { auth: true },
        component:() => import('@/views/dashboard/layout/Index.vue'),
        children:[
            /***
             * @route Dashboard/Board-Activities
             * @route Dashboard/Board-Deals
             * @route Dashboard/Board-Leads
             * @route Dashboard/Board-Enquiries
             ***/
            {
                path: '/dashboard/crm',
                name:'dashboard.crm',
                component:() => import('@/views/dashboard/pages/board/activities/Index.vue'),
                meta:{ title:'Activities' }
            },
            {
                path: '/dashboard/create-deal',
                name:'dashboard.create-deal',
                component:() => import('@/views/dashboard/pages/board/deals/create-deal/Index.vue'),
                meta:{ title:'Create Deal' }
            },
            {
                path: '/dashboard/active-deals',
                name:'dashboard.active-deals',
                component:() => import('@/views/dashboard/pages/board/deals/active-deals/Index.vue'),
                meta:{ title:'Active Deals' }
            },
            {
                path: '/dashboard/won-deals',
                name: 'dashboard.won-deals',
                component: () => import('@/views/dashboard/pages/board/deals/won-deals/Index.vue'),
                meta: { title: 'Won Deals' }
            },
            {
                path: '/dashboard/lost-deals',
                name: 'dashboard.lost-deals',
                component: () => import('@/views/dashboard/pages/board/deals/lost-deals/Index.vue'),
                meta: { title: 'Lost Deals' }
            },
            {
                path: '/dashboard/create-lead',
                name:'dashboard.create-lead',
                component:() => import('@/views/dashboard/pages/board/leads/create-lead/Index.vue'),
                meta:{ title:'Create Lead' }
            },
            {
                path: '/dashboard/all-leads',
                name:'dashboard.all-leads',
                component:() => import('@/views/dashboard/pages/board/leads/all-leads/Index.vue'),
                meta:{ title:'All Leads' }
            },
            {
                path: '/dashboard/create-enquiry',
                name:'dashboard.create-enquiry',
                component:() => import('@/views/dashboard/pages/board/enquires/create-enquiry/Index.vue'),
                meta:{ title:'Create Enquiry' }
            },
            {
                path: '/dashboard/all-enquiries',
                name:'dashboard.all-enquiries',
                component:() => import('@/views/dashboard/pages/board/enquires/all-enquires/Index.vue'),
                meta:{ title:'All Enquiries' }
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
                path: '/dashboard/dashboard-agent-edit-property',
                name:'dashboard.dashboard-agent-edit-property',
                component:() => import('@/views/inc/dashboard/property/DashboardAgentEditPropertyDescriptionAndPrice.vue'),
                meta:{ title:'Edit Properties' }
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
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/no-package`,
                name: 'dashboard.create-listing.no-package',
                component: () => import('@/views/dashboard/pages/create-listing/package/no-package/Index.vue'),
                meta: { title: 'No Package' }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/select-package`,
                name: 'dashboard.create-listing.select-package',
                component: () => import('@/views/dashboard/pages/create-listing/package/select-package/Index.vue'),
                meta: { title: 'Select Package' }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/checkout/:planId`,
                name: 'dashboard.create-listing.checkout',
                component: () => import('@/views/dashboard/pages/create-listing/payment/checkout/Index.vue'),
                meta: { title: 'Checkout' }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/payment-completed`,
                name: 'dashboard.create-listing.payment-completed',
                component: () => import('@/views/dashboard/pages/create-listing/payment/payment-completed/Index.vue'),
                meta: { title: 'Create Account' }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-1/:propertyId(\\d+)?`,
                name: 'dashboard.create-listing.step-1',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-1/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true },
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-2/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-2',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-2/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-3/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-3',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-3/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-4/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-4',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-4/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-5/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-5',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-5/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-6/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-6',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-6/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-7/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-7',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-7/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-8/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-8',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-8/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-9/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-9',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-9/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-10/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-10',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-10/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-11/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-11',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-11/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/step-12/:propertyId(\\d+)`,
                name: 'dashboard.create-listing.step-12',
                component: () => import('@/views/dashboard/pages/create-listing/create-listing/step-12/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
            },
            {
                path: `/dashboard/${URL_CREATE_UPDATE_LISTING}/completed`,
                name: 'dashboard.create-listing.completed',
                component: () => import('@/views/dashboard/pages/create-listing/completed/Index.vue'),
                meta: { title: TITLE_CREATE_UPDATE_LISTING, isSubscribed: true }
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
             * @route Dashboard/Subscriptions
             ***/
            {
                path: '/dashboard/subscriptions',
                name:'dashboard.subscriptions',
                component:() => import('@/views/dashboard/pages/subscriptions/Index.vue'),
                meta:{ title:'My Subscriptions' }
            },

            /***
             * @route Dashboard/Invoices
             ***/
            {
                path: '/dashboard/invoices',
                name:'dashboard.invoices',
                component:() => import('@/views/dashboard/pages/invoices/Index.vue'),
                meta:{ title:'My Invoices' }
            },

            /***
             * @route Dashboard/Messages/AllMessages
             * @route Dashboard/Messages/Details
             ***/
            {
                path: '/dashboard/messages',
                name:'dashboard.messages',
                component:() => import('@/views/dashboard/pages/messages/all-messages/Index.vue'),
                meta:{ title:'Messages' }
            },
            {
                path: '/dashboard/messages/details/:messageId(\\d+)',
                name:'dashboard.messages.details',
                component:() => import('@/views/dashboard/pages/messages/message-details/Index.vue'),
                meta:{ title:'Message Details' }
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
            /***
             * @route Dashboard/Settings/General
             * @route Dashboard/Settings/AllPackages
             * @route Dashboard/Settings/Create-Package
             ***/
            {
                path: '/dashboard/settings/general',
                name:'dashboard.settings.general',
                component:() => import('@/views/dashboard/pages/settings/general/Index.vue'),
                meta:{ title:'General Settings', admin: true }
            },
            {
                path: '/dashboard/settings/all-packages',
                name:'dashboard.settings.all-packages',
                component:() => import('@/views/dashboard/pages/settings/package/all-packages/Index.vue'),
                meta:{ title:'All Packages', admin: true }
            },
            {
                path: '/dashboard/settings/create-package',
                name:'dashboard.settings.create-package',
                component:() => import('@/views/dashboard/pages/settings/package/create-package/Index.vue'),
                meta:{ title:'Create Package', admin: true }
            },

            /***
             * @route Dashboard/Email-Management
             * 
             ***/
            {
                path: '/dashboard/email-managements',
                name:'dashboard.email-management.manage',
                component:() => import('@/views/dashboard/pages/email-management/management/Index.vue'),
                meta:{ title:'Email Management', admin: true }
            },
            {
                path: '/dashboard/email-managements/all-template',
                name:'dashboard.email-management.all-templates',
                component:() => import('@/views/dashboard/pages/email-management/all-templates/index.vue'),
                meta:{ title:'All Templates', admin: true }
            },
            /***
             * @route Dashboard/Admin/Users
             * @route Dashboard/Admin/Subscribers
             * @route Dashboard/Admin/All-Blogs
             * @route Dashboard/Admin/Create-Blog
             ***/
            {
                path: '/dashboard/admin/users',
                name:'dashboard.admin.users',
                component:() => import('@/views/dashboard/pages/admin/users/Index.vue'),
                meta:{ title:'All Users', admin: true }
            },
            {
                path: '/dashboard/admin/agents',
                name:'dashboard.admin.agents',
                component:() => import('@/views/dashboard/pages/admin/agents/Index.vue'),
                meta:{ title:'All Agents', admin: true }
            },
            {
                path: '/dashboard/admin/agencies',
                name:'dashboard.admin.agencies',
                component:() => import('@/views/dashboard/pages/admin/agencies/Index.vue'),
                meta:{ title:'All Agencies', admin: true }
            },
            {
                path: '/dashboard/admin/subscribers',
                name:'dashboard.admin.subscribers',
                component:() => import('@/views/dashboard/pages/admin/subscribers/Index.vue'),
                meta:{ title:'All Subscribers', admin: true }
            },
            {
                path: '/dashboard/admin/all-blogs',
                name:'dashboard.admin.all-blogs',
                component:() => import('@/views/dashboard/pages/admin/blogs/all-blogs/Index.vue'),
                meta:{ title:'All Blogs', admin: true }
            },
            {
                path: '/dashboard/admin/create-blog',
                name:'dashboard.admin.create-blog',
                component:() => import('@/views/dashboard/pages/admin/blogs/create-blog/Index.vue'),
                meta:{ title:'Create Blog', admin: true }
            },
            {
                path: '/dashboard/admin/all-teams',
                name:'dashboard.admin.all-teams',
                component:() => import('@/views/dashboard/pages/admin/teams/all-teams/Index.vue'),
                meta:{ title:'All Teams', admin: true }
            },
            {
                path: '/dashboard/admin/create-team',
                name:'dashboard.admin.create-team',
                component:() => import('@/views/dashboard/pages/admin/teams/create-team/Index.vue'),
                meta:{ title:'Create Team', admin: true }
            },
        ]
    },

    /*** ---------------
     * @route 302-Unauthorized
     * @auth not-required
     ***/
    {
        path: "/unauthorized",
        name: "unauthorized",
        component: () => import('@/components/pages/Unauthorized302.vue'),
        meta: { title: "302 Unauthorized" },
    },
    /*** ---------------
     * @route 403-Unauthorized
     * @auth required
     ***/
    {
        path: "/unauthorized-403",
        name: "unauthorized-403",
        component: () => import('@/components/pages/Unauthorized403.vue'),
        meta: { title: "403 Unauthorized", auth: true },
    },
    /*** ---------------
     * @route 403-Unauthorized-Admin
     * @auth required
     ***/
    {
        path: "/unauthorized-admin-403",
        name: "unauthorized-admin-403",
        component: () => import('@/components/pages/UnauthorizedAdmin403.vue'),
        meta: { title: "403 Unauthorized Admin", auth: true },
    },
    /*** ---------------
     * @route 401-Unauthorized
     * @auth not-required
     ***/
    {
        path: "/unauthorized-401",
        name: "unauthorized-401",
        component: () => import('@/components/pages/Unauthorized401.vue'),
        meta: { title: "401 Unauthorized" },
    },
    /*** ---------------
     * @route 403-Access-Denied
     * @auth required
     ***/
    {
        path: "/access-denied",
        name: "access-denied",
        component: () => import('@/components/pages/AccessDenied403.vue'),
        meta: { title: "403 Access Denied", auth: true  },
    },
    /*** ---------------
     * @route 404-Property-Not-Found
     * @auth not-required
     ***/
    {
        path: "/property-not-found-404",
        name: "property-not-found-404",
        component: () => import('@/components/pages/PropertyNotFound404.vue'),
        meta: { title: "404 Property Not Found" },
    },
    /*** ---------------
     * @route 404-Page-Not-Found
     * @auth not-required
     ***/
    {
        path: "/:pathMatch(.*)",
        name: "not-found-404",
        component: () => import('@/components/pages/NotFound404.vue'),
        meta: { title: "404 Not Found" },
    }, 
    {
        path: "/404",
        name: "404",
        component: () => import('@/components/pages/NotFound404.vue'),
        meta: { title: "404 Not Found" },
    }, 
    /*** ---------------
     * @route 404-Agent-Not-Found
     * @auth not-required
     ***/
    {
        path: "/agent-not-found-404",
        name: "agent-not-found-404",
        component: () => import('@/components/pages/AgentNotFound404.vue'),
        meta: { title: "404 Agent Not Found" },
    },
    
    // --- Demos Routes ---
    ...demo01Routes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior () {
     return { top: 0, behavior: 'smooth' }
  }
});

router.beforeEach((to, from, next) => {

    const token = useToken().getToken;
    const admin = useAdmin().getAdmin;
    const isSubscribed = useIsSubscribed().getIsSubscribed;
    console.log("Token Val: ", token);
    console.log("Admin Val: ", admin);
    console.log("IsSubscribed Val: ", isSubscribed);

    /**
     * @feature Authentication Check:
     * - If the route requires authentication (`meta.auth === true`) and no token is found,
     *   redirect the user to the login page.
     */
    if (to.meta.auth && !token) {
        return next({ name: 'auth' });
    }

    /**
     * @feature Guest Route Handling:
     * - If the route is for guests (`meta.guest === true`) but a token exists,
     *   redirect the user to the dashboard.
     */
    if (to.meta.guest && token) {
        return next({ name: 'dashboard' });
    }

    /**
     * @feature Admin Route Restriction:
     * - If the route requires admin access (`meta.admin === true`) but the user is not an admin,
     *   redirect to the unauthorized page.
     */
    if (to.meta.admin && !admin) {
        return next({ name: 'unauthorized-admin-403' });
    }

    /**
     * @feature Package Subscription Route Restriction:
     *
     * - If the route requires an active subscription (`meta.isSubscribed === true`) but the user does not have an active subscription, redirect them to the
     *   "No Package" page to prompt a subscription or plan upgrade.
     */
    if (to.meta.isSubscribed && !isSubscribed) {
        return next({ name: 'dashboard.create-listing.no-package' });
    }

    /**
     * @feature Completed Page Restriction and Tracking:
     * - If navigating to the completed page without a propertyId in the previous route,
     *   redirect to step-1 and show a warning.
     * - Otherwise, store the previous route and propertyId, log it, and show an info message.
     */
    if (to.name === 'dashboard.create-listing.completed') {
        const message = useMessage();
        const navigationStore = useNavigationStore();
        if (!from.params.propertyId) {
        message.Warning('Cannot access completed page. Please complete all steps first.');
        return next({ name: 'dashboard.create-listing.step-1' });
        }
        navigationStore.setPreviousRoute(from);
        // console.log(`User came from route: ${from.name || 'unknown'} with path: ${from.path}`);
        // message.Info(`Navigated to completed page from ${from.name || 'another page'}.`);
    }

    /**
     * @feature Clear Navigation Store for New Create Flow:
     * - If navigating to step-1 without a propertyId, clear the stored previous route and propertyId.
     */
    if (to.name === 'dashboard.create-listing.step-1' && !to.params.propertyId) {
        const navigationStore = useNavigationStore();
        navigationStore.clearPreviousRoute();
    }

    /**
     * @feature Default Navigation:
     * - If none of the above conditions are met, allow the user to proceed to the requested route.
     */
    next();

    /**
     *  @feature Set the document title dynamically based on the meta property of the current route.
     *  @feature Append a suffix "- baseTitle" if a title is defined in store "Pinia", otherwise fallback to the default title.
     **/
    const {pageTitle} = useGeneralSettings();
    const baseTitle = pageTitle || DEFAULT_TITLE;
    document.title = to?.meta.title ? `${to.meta.title} - ${baseTitle}` : baseTitle;
});

export default router;
