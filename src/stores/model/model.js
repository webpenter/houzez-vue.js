import { defineStore } from 'pinia';

export const useModelStore = defineStore('model', {
  state: () => ({
    isModelVisibleAddNewDeal: false,
    isModelVisibleAddNewLead: false,
    isModelVisibleAddNewEnquiry: false,
  }),
  getters: {
    isModalVisibleAddNewDeal: (state) => state.isModelVisibleAddNewDeal,
    isModalVisibleAddNewLead: (state) => state.isModelVisibleAddNewLead,
    isModalVisibleAddNewEnquiry: (state) => state.isModelVisibleAddNewEnquiry,

  },
  actions: {
    toggleModalAddNewDeal() {
      this.isModelVisibleAddNewDeal = !this.isModelVisibleAddNewDeal;
    },
    toggleModalAddNewLead() {
      this.isModelVisibleAddNewLead = !this.isModelVisibleAddNewLead;
    },
    toggleModalAddNewEnquiry(){
      this.isModelVisibleAddNewEnquiry = !this.isModelVisibleAddNewEnquiry;
    }
  },
});
