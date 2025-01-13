import { defineStore } from 'pinia';

export const useModelStore = defineStore('model', {
  // State: Define the reactive data
  state: () => ({
    isModelVisibleAddNewDeal: false,
    isModelVisibleAddNewLead: false,
  }),

  // Getters: Derived state equivalent to Vuex getters
  getters: {
    isModalVisibleAddNewDeal: (state) => state.isModelVisibleAddNewDeal,
    isModalVisibleAddNewLead: (state) => state.isModelVisibleAddNewLead,
  },

  // Actions: Replace Vuex mutations and actions
  actions: {
    toggleModalAddNewDeal() {
      this.isModelVisibleAddNewDeal = !this.isModelVisibleAddNewDeal;
    },
    toggleModalAddNewLead() {
      this.isModelVisibleAddNewLead = !this.isModelVisibleAddNewLead;
    },
  },
});
