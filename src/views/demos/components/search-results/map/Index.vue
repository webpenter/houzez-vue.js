<template>
  <div class="property-map-wrap">
    <iframe
      :src="mapUrl"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    >
    </iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
});

// Compute the latitude and longitude safely
const latitude = computed(() => props.property.latitude || 0);
const longitude = computed(() => props.property.longitude || 0);

// Google Maps embed URL
const mapUrl = computed(() => {
  return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.8354345093707!2d${longitude.value}!3d${latitude.value}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645488305008`;
});
</script>

<script>
// Register the component with a multi-word name
export default {
  name: 'PropertyMap'
};
</script>
