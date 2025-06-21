import { defineStore } from 'pinia'

export const useViewMode = defineStore('viewMode', {
  state: () => ({
    isFeaturedView: false,
  }),
  actions: {
    setFeaturedView(value) {
      this.isFeaturedView = value;
    },
  },
});
