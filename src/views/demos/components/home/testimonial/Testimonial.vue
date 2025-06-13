<template>
    <div class="testimonials-module testimonials-module-v1">
        <div class="row">
            <div class="col-md-4">
                <!-- <?php include 'modules/templates/testimonial-item-v1.php';?> -->
                <TestimonialItem />
            </div>
            <div class="col-md-4">
                <!-- <?php include 'modules/templates/testimonial-item-v1.php';?> -->
                <TestimonialItem />
            </div>
            <div class="col-md-4">
                <!-- <?php include 'modules/templates/testimonial-item-v1.php';?> -->
                <TestimonialItem />
            </div>
        </div>
    </div><!-- testimonials-module -->

</template>

<script setup>
import TestimonialItem from './TestimonialItem.vue';
</script>

<style scoped></style>