/**
 * @fileOverview Route configuration for Demo 01 of the application.
 *
 * @description This file defines the route structure specific to demo01, including page components,
 * optional layout wrapping, and named routes.
 *
 * @feature Organizes demo-specific pages such as Home, Property Details, etc.
 * @feature Supports layout-based route nesting under `/demo01`.
 * @feature Enables easier route composition and modularization.
 *
 * @author https://webpenter.com
 * @date 11 June, 2025
 */

export default [
  /**
   * @route /demo01
   * @name demo01
   * @auth not-required
   * @layout DemoLayout
   * @description Base layout wrapper for all Demo01 pages
   */
  {
    path: '/demo01',
    name:'demo01',
    redirect:'/demo01',
    component: () => import('@/views/demos/demo01/layout/Index.vue'),
    children: [
      /**
       * @route /demo01/
       * @name demo01.home
       * @auth not-required
       * @description Homepage of Demo01
       */
      {
        path: '/demo01',
        name: 'demo01.home',
        component: () => import('@/views/demos/demo01/pages/home/Index.vue'),
        meta: { title: 'Home' },
      },

      /**
       * @route /demo01/property-details/:propertySlug
       * @name demo01.property-details
       * @auth not-required
       * @description Property details page of Demo01
       */
      {
        path: '/demo01/property-details/:propertySlug',
        name: 'demo01.property-details',
        component: () => import('@/views/demos/demo01/pages/property-details/Index.vue'),
        meta: { title: 'Property Details' },
      },
      /**
       * @route /demo01/search-results
       * @name demo01.search-results
       * @auth not-required
       * @description Search Results page of Demo01
       */
       {
        path: '/demo01/search-results',
        name: 'demo01.search-results',
        component: () => import('@/views/demos/demo01/pages/search-results/Index.vue'),
        meta: { title: 'Search Results' },
      },
      /**
       * @route /demo01/properties
       * @name demo01.properties
       * @auth not-required
       * @description Properties page of Demo01
       */
       {
        path: '/demo01/properties',
        name: 'demo01.properties',
        component: () => import('@/views/demos/demo01/pages/properties/Index.vue'),
        meta: { title: 'Search Results' },
      },
    ],
  },
];
