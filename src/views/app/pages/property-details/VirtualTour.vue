<template>
  <div class="360-Virtual-Tour mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div
        class="pb-5 d-flex justify-content-between align-items-center border-bottom pb-5">
      <h4>360° Virtual Tour</h4>
    </div><!-- block-title-wrap -->
    <div class="block-content-wrap mt-4">
      <div class="block-virtual-video-wrap">
        <div v-html="virtualTour"></div>
      </div>
    </div><!-- block-content-wrap -->
  </div>
</template>

<script setup>
defineProps(['virtualTour'])
</script>