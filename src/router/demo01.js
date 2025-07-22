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
        meta: { title: 'Properties' },
      },
      /**
       * @route /demo01/property-type/:propertyType
       * @name demo01.property-type
       * @auth not-required
       * @description Property type page of Demo01
       */
       {
        path: '/demo01/property-type/:propertyType',
        name: 'demo01.property-type',
        component: () => import('@/views/demos/demo01/pages/property-type/Index.vue'),
        meta: { title: 'Property Type' },
      },
      /**
       * @route /demo01/agents
       * @name demo01.agents
       * @auth not-required
       * @description Agents page of Demo01
       */
      {
        path: '/demo01/agents',
        name: 'demo01.agents',
        component: () => import('@/views/demos/demo01/pages/agents/Index.vue'),
        meta: { title: 'Agents' },
      },
      /**
       * @route /demo01/agent/:agentUsername
       * @name demo01.agent-details
       * @auth not-required     
       * @description Agent details page of Demo01
       */
      {
        path: '/demo01/agent/:agentUsername',
        name: 'demo01.agent-details',
        component: () => import('@/views/demos/demo01/pages/agent-details/Index.vue'),
        meta: { title: 'Agent Detail' },
      },
      /**
       * @route /demo01/about-us
       * @name demo01.about-us
       * @auth not-required
       */
       {
        path: '/demo01/about-us',
        name: 'demo01.about-us',
        component: () => import('@/views/demos/demo01/pages/about-us/Index.vue'),
        meta: { title: 'About Us' },
      },
      /**
       * @route /demo01/agencies
       * @name demo01.agencies
       * @auth not-required
       * @description agencies page of Demo01
       */
      {
        path: '/demo01/agencies',
        name: 'demo01.agencies',
        component: () => import('@/views/demos/demo01/pages/agencies/Index.vue'),
        meta: { title: 'Agencies' },
      },
       /**
       * @route /demo01/agency/:agentUsername
       * @name demo01.agency-details
       * @auth not-required     
       * @description Agent details page of Demo01
       */
      {
        path: '/demo01/agency/:agencyUsername',
        name: 'demo01.agency-details',
        component: () => import('@/views/demos/demo01/pages/agency-details/Index.vue'),
        meta: { title: 'Agency Detail' },
      },
    ],
  },
];