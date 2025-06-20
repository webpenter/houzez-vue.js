<template>
    <div class="testimonial-item testimonial-item-v1">
        <div class="testimonial-thumb">
            <img class="img-fluid rounded-circle" :src="testimonial.image" alt="testimonial">
        </div><!-- testimonial-thumb -->
        
        <div class="testimonial-body">
            {{ testimonial.testimonial }}
        </div><!-- testimonial-body -->
        <div class="testimonial-info">
            by <strong>{{ testimonial.writer }}</strong><br>
            <em>{{ testimonial.designation }}</em>
        </div><!-- testimonial-info -->
    </div><!-- testimonial-item -->
</template>

<script setup>
defineProps(['testimonial'])
</script>