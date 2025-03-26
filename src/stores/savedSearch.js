import { defineStore } from "pinia";
import axiosInstance from "@/services/axiosService.js";

export const useSavedSearch = defineStore("savedSearch", {
  state: () => ({
    baseUrl: "/saved-searches/get-user",
  }),

  actions: {
    async saveSearch(searchData) {
      try {
        const payload = {
          search_term: searchData.search,
          filters: {
            property_types: searchData.types,
            city: searchData.city,
            bedrooms: searchData.bedrooms,
            max_price: searchData.maxPrice,
          },
        };

        const response = await axiosInstance.get(this.baseUrl, payload);

        return {
          success: true,
          data: response.data,
          message: response.data?.message || "Search saved successfully",
        };
      } catch (error) {
        console.error("Search save error:", error);

        let errorMessage = "Failed to save search";
        let statusCode = error.response?.status || 500;

        if (error.response) {
          errorMessage = error.response.data?.message || `Server error: ${statusCode}`;
        } else if (error.request) {
          errorMessage = "No response from server";
        }

        return {
          success: false,
          message: errorMessage,
          status: statusCode,
        };
      }
    },
  },
});
