// src/stores/navigation.js
import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    previousRoute: null, // Store previous route details
    propertyId: null, // Store propertyId for edit flow
  }),
  actions: {
    setPreviousRoute(route) {
      this.previousRoute = { name: route.name, path: route.path };
      this.propertyId = route.params.propertyId || null;
    },
    clearPreviousRoute() {
      this.previousRoute = null;
      this.propertyId = null;
    },
  },
});