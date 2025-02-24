/**
 * @file Axios instance configuration module
 *
 * @description
 * This module exports a factory function for creating a customized Axios instance
 * with configurable options such as authentication, multipart form data headers,
 * or PDF-specific headers.
 *
 * @params
 * - `requiresAuth` (boolean, default: true): Whether the request requires an Authorization header.
 * - `multipart` (boolean, default: false): Whether the request involves multipart form data.
 * - `pdfHeaders` (boolean, default: false): Whether the request expects a PDF response.
 * - `onUploadProgress` (function, optional): Callback to track the upload progress.
 *
 * @dependencies
 * - axios: For HTTP requests.
 * - useToken: A custom store for managing the authentication token.
 *
 * @usage Import and call the function with the required configuration to create an Axios instance.
 *
 * @environment `VITE_API_URL` (environment variable): Base URL for the API.
 *
 * @author https://webpenter.com
 * @date 25 Jan,2025
 */

import axios from 'axios'
import { useToken } from '@/stores'

export default (
    {
        requiresAuth = true,
        multipart = false,
        pdfHeaders = false,
        onUploadProgress = null,
    } = {}
) => {
    const baseUrl = import.meta.env.VITE_API_URL
    const options = {}

    options.baseURL = baseUrl

    if (multipart) {
        options.headers = {
            'Content-Type': 'multipart/form-data'
        }
    }
    else if (pdfHeaders) {
        options.headers = {
            'Accept': 'application/pdf',
        }
    }
    else {
        options.headers = {}
    }

    if (requiresAuth) {
        const token = useToken()
        options.headers.Authorization = `Bearer ${token.getToken}`
    }

    const instance = axios.create(options)

    if (onUploadProgress) {
        instance.defaults.onUploadProgress = onUploadProgress;
    }

    instance.interceptors.response.use(
        response => {
            return response
        },
        error => {
            return Promise.reject(error)
        }
    )

    return instance
}
