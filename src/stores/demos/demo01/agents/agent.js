/**
 * @fileOverview This file defines a Pinia store for managing agent-related data.
 *
 * @feature Store Name: `useAgent`.
 *
 * @export The store is exported as `useAgent` for use in agent-related modules.
 *
 * @author https://webpenter.com
 * @date 2 July, 2025
 */

import { defineStore } from 'pinia';
import axiosInstance from '@/services/axiosService.js';

export const useAgent = defineStore('agent', {
    state: () => ({
        agents: [],
        agent: {},
        reviews: [],
        errors: {},
        loading: false,
        prefix: '/demo01',
    }),
    getters: {},
    actions: {
        /**
         * ## Fetch all agents.
         * @returns {Promise}
         */
        async getAllAgents() {
            this.loading = true;
            try {
                const response = await axiosInstance.get(`${this.prefix}/agents`);
                this.agents = response.data.data;
                this.loading = false;
                return Promise.resolve(response);
            } catch (error) {
                this.loading = false;
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * ## Fetch single agent by username.
         * @param {string} username - Agent username.
         * @returns {Promise}
         */
        async getAgentByUsername(username) {
            this.loading = true;
            try {
                const response = await axiosInstance.get(`${this.prefix}/agent/${username}`);
                this.agent = response.data.data;
                this.loading = false;
                return Promise.resolve(response);
            } catch (error) {
                this.loading = false;
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * Fetches reviews for a specific agent.
         *
         * @param {number|string} agentId - The ID of the agent to fetch reviews for.
         * @return {Promise} Resolves with the response containing the reviews or rejects with an error response.
         */
        async fetchReviews(agentId) {

            try {
                const response = await axiosInstance.get(`${this.prefix}/agent/reviews/${agentId}`);
                this.reviews = response.data;
                return Promise.resolve(response);
            } catch (error) {
                this.errors = error.response || error;
                return Promise.reject(error.response);
            }
        },

        /**
         * Adds a new review and refreshes the review list.
         *
         * @param {Object} reviewData - The review data object to be submitted.
         * @param {number|string} reviewData.agent_id - The ID of the agent being reviewed.
         * @param {string} reviewData.title - The title of the review.
         * @param {number} reviewData.rating - The numeric rating.
         * @param {string} reviewData.comment - The comment text.
         * @return {Promise} Resolves with the response after submitting the review or rejects with an error response.
         */
        async addReview(reviewData) {
            const url = `/agent/reviews/store`;

            try {
                const response = await axiosInstance.post(url, reviewData);

                // Clear any previous errors
                this.errors = {};

                // Fetch updated reviews
                await this.fetchReviews(reviewData.agent_id);

                return response;
            } catch (error) {
                if (error.response?.status === 422) {
                    // Set validation errors
                    this.errors = error.response;
                } else {
                    console.error('Unexpected error:', error);
                }

                throw error.response; // Let the component catch and handle it
            }
        },

        /**
         * ## Fetch searched agent.
         * @returns {Promise}
         */
        /**
         * ## Fetch searched agent or all agents.
         * @returns {Promise}
         */
        async searchAgent(params = {}) {
    this.loading = true;
    try {
        const response = await axiosInstance.get(`${this.prefix}/agents/search`, { params });

        // ✅ Transform response to flatten profile data
        this.agents = response.data.data.map(agent => ({
            ...agent,
            name: `${agent.profile?.first_name || ''} ${agent.profile?.last_name || ''}`.trim(),
            address: agent.profile?.address || '',
            phone: agent.profile?.phone || '',
            profile: agent.profile?.profile_picture || null, 
            ...agent, // keep existing user fields (email, username, etc.)
        }));

        console.log('agents search', this.agents);
        this.loading = false;
        return Promise.resolve(response);
    } catch (error) {
        this.loading = false;
        this.errors = error.response || error;
        return Promise.reject(error.response);
    }
}

    }
});
