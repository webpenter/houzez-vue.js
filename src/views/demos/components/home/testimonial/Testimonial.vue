<template>
    <div class="testimonials-module testimonials-module-v1">
        <div class="row">
            <div 
                v-for="testimonial in testimonials"
                :key="testimonial.id"
                class="col-md-4"
            >
                <TestimonialItem :testimonial="testimonial" />
            </div>
        </div>
    </div><!-- testimonials-module -->

</template>

<script setup>
import TestimonialItem from './TestimonialItem.vue';
import {useTestimonials} from "@/stores/index.js";
import { storeToRefs } from "pinia";

const testimonialStore = useTestimonials();
const { testimonials } = storeToRefs(testimonialStore);
</script>