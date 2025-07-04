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
        allAgents: [],
        agent: [],
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
                this.allAgents = response.data.data;
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
        }
    }
});
