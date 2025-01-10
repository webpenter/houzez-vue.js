/**
 * @author WebPenter Devs
 * @date 11 Jan,2025
 *
 * @fileOverview This file configures an Axios instance for making HTTP requests to the API server.
 *
 * @feature The `baseUrl` is dynamically set using the environment variable `VITE_API_URL`
 * @feature The `baseUrl` is dynamically set using the environment variable `VITE_API_URL`.
 * @feature An Axios instance is created and customized with request and response interceptors.
 *
 * @request Automatically includes a Bearer token in the `Authorization` header of every request.
 * @request Token is fetched from a custom store using `useToken`.
 *
 * @response Handles responses and errors based on HTTP status codes.
 * @response If a 401 (Unauthorized) error is detected:
 * @response Auth information is cleared using `useAuth`.
 * @response The user is redirected to the login page.
 * @response If a 302 (Found/Redirect) error is detected:
 * @response The user is redirected to the "unauthorized" page.
 *
 * @export The configured Axios instance is exported for use in other parts of the application.
 */

import axios from "axios";
import { useAuth, useToken } from "@/stores";
import router from '@/router';

const baseUrl = import.meta.env.VITE_API_URL;


const axiosInstance = axios.create({
    baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = useToken();
        config.headers.Authorization = `Bearer ${token.getToken}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const auth = useAuth();
            auth.removeAuthInfo();
            router.push({ name: 'app.login' });
        }
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status == 302) {
            router.push({ name: 'unauthorized' });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
