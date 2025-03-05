import { defineStore } from 'pinia';
import axiosInstance from "@/services/axiosService.js";

export const useNewsLetter = defineStore('newsLetter', {
  state: () => ({
    baseUrl: '/subscribe', 
  }),
  actions: {
    async subscribeNewsletter(email) {
      try {
        const url = `${this.baseUrl}`;
        const response = await axiosInstance.post(url, { email });

        return {
          success: true,
          status: response.status, // Ensure status is returned
          message: response.data.message || "Subscribed successfully!",
        };
      } catch (error) {
        let errorMessage = "Subscription failed!";
        let status = error.response?.status || 500; // Default to 500 if no response status

        if (error.response) {
          const responseData = error.response.data;
          
          if (status === 400) {
            errorMessage = responseData.message || "Please enter a valid email!";
          } else if (status === 409) {
            errorMessage = responseData.message || "You are already subscribed!";
          } else {
            errorMessage = responseData.message || "An unexpected error occurred!";
          }
        }

        return { success: false, status, message: errorMessage };
      }
    }
  } 
});
