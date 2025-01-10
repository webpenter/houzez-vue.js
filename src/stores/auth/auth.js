/**
 * @author WebPenter Devs
 * @date 11 Jan,2025
 *
 * @fileOverview This file defines a Pinia store for managing user authentication and permissions.
 *
 * @feature Store Name: `userAuth`.
 *
 * @export The store is exported as `useAuth` for use in authentication-related operations throughout the application.
 */


import { defineStore } from 'pinia'
import axiosInstance from '@/services/axiosService'
import { useToken } from '@/stores'

export const useAuth = defineStore('userAuth', {
    state: () => ({
        user: {},
        errors: {},
        isLggedIn: false,
        permissions: {}
    }),

    persist: {
        paths: ['user', 'isLggedIn','permissions'],
    },

    getters: {
        getUser: state => {
            return state.user
        },

        getAuthStatus: state => {
            return state.isLggedIn
        },
        getPermissions: state => {
            return state.permissions
        },
    },

    actions: {
        async register (formData) {
            try {
                const response =await axiosInstance.post(`/register`, formData)
                this.setAuthInfo(response.data)
                console.log(response.data);
                // this.permissions = response.data?.data?.role?.permissions;
                return new Promise(resolve => {
                    resolve(response)
                })
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response
                }
                return new Promise(reject => {
                    reject(error.response)
                })
            }
        },
        async login (formData) {
            try {
                const response =await axiosInstance.post(`/login`, formData)
                this.setAuthInfo(response.data)
                // this.permissions = response.data?.data?.role?.permissions;
                return new Promise(resolve => {
                    resolve(response)
                })
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response
                }
                return new Promise(reject => {
                    reject(error.response)
                })
            }
        },
        async changePassword (formData) {
            try {
                const response =await axiosInstance.put(`/change-password`, formData)
                // this.setAuthInfo(response.data)
                // this.permissions = response.data?.data?.role?.permissions;
                return new Promise(resolve => {
                    resolve(response)
                })
            } catch (error) {
                if (error.response.data) {
                    this.errors = error.response
                }
                return new Promise(reject => {
                    reject(error.response)
                })
            }
        },
        hasPermission (permission) {
            if (Array.isArray(this.permissions)) {
                return this.permissions.includes(permission);
            }
            return false;
        },
        setPermissions(permission,id) {
            console.log(permission,id);
            console.log(this.user?.role?.id);

            if (this.user?.role?.id==id) {
                this.permissions = permission;
                console.log(this.permissions);

            }
        },
        getPermission() {
            return this.permissions;
        },
        async logout () {
            try {
                const res = await axiosInstance.post('/logout')
                if (res.data) {
                    this.removeAuthInfo()
                    return res
                }
            } catch (error) {
                if (error.response) {
                    throw error.resonpse
                }
            }
        },
        setAuthInfo (data) {
            const token = useToken()
            this.user = data?.data
            token.setToken(data?.token)
            this.isLggedIn = true
        },
        removeAuthInfo () {
            const token = useToken()
            token.removeToken()
            this.$reset()
        }
    }
})