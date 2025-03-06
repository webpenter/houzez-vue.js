import { defineStore } from 'pinia';
import axiosInstance from "@/services/axiosService.js";

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    baseUrl: '/properties/favorites', // Correct base URL
    favoriteProperties: new Set(),
  }),

  actions: {
    async toggleFavorite(property) {
      try {
        const propertyId = property.id;
        // Correct endpoint URL construction
        const response = await axiosInstance.post(
          `${this.baseUrl}/store/${propertyId}`
        );

        if (response.status === 200) {
          // Update state after successful API call
          if (this.favoriteProperties.has(propertyId)) {
            this.favoriteProperties.delete(propertyId);
          } else {
            this.favoriteProperties.add(propertyId);
          }
        }

        return {
          success: true,
          message: response.data?.message || "Favorite status updated",
        };
      } catch (error) {
        console.error("Error toggling favorite:", error);

        let errorMessage = "Failed to update favorite status";
        if (error.response) {
          errorMessage = error.response.data?.message || 
                       `Server error: ${error.response.status}`;
        } else if (error.request) {
          errorMessage = "No response from server";
        }

        return {
          success: false,
          message: errorMessage,
        };
      }
    },

    isFavorite(propertyId) {
      return this.favoriteProperties.has(propertyId);
    },
  },
});