/**
 * @fileOverview This file defines a Pinia store for managing testimonials related houzez on client side.
 *
 * @feature Store Name: `useTestimonials`.
 *
 * @export The store is exported as `useTestimonials` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date  20 Jun,2025
 */

import {defineStore} from "pinia";
const imageModules = import.meta.glob('@/assets/img/store/testimonials/*.jpg', { eager: true });

export const useTestimonials = defineStore('testimonial', {
    state: () => ({
        testimonials: [
            {
                id: 1,
                testimonial: "Working with the Houzez-powered team was a game-changer for our relocation. The platform made it incredibly easy to explore listings, schedule visits, and close the deal. Their agents were knowledgeable, patient, and truly cared about our needs. Highly recommended!",
                writer: "Sarah Thompson",
                designation:"Marketing Director, BrightWave Solutions",
                image: imageModules['/src/assets/img/store/testimonials/testimonial-1.jpg'].default
            },
            {
                id: 2,
                testimonial: "The real estate experience was seamless from start to finish. Houzez gave us full control and clarity during our property hunt. Their interface is clean, responsive, and agent support was top-notch. We found our dream office space in just two weeks!",
                writer: "Kenya Soval",
                designation:"Founder, ReedTech Innovations",
                image: imageModules['/src/assets/img/store/testimonials/testimonial-2.jpg'].default
            },
            {
                id: 3,
                testimonial: "As an investor, efficiency and insight are key. Houzez delivered both. The detailed property analytics and customizable searches helped me make fast, smart decisions. The team behind it went above and beyond at every step.",
                writer: "Lusia Fanira",
                designation:"Managing Partner, Skyline Ventures",
                image: imageModules['/src/assets/img/store/testimonials/testimonial-3.jpg'].default
            },
        ],

    }),
    getters: {},
    actions: {}
});