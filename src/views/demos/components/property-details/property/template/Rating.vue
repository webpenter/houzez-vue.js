<template>
  <div class="rating-score-wrap flex-grow-1">
    <span class="star">
      <span
        v-for="index in 5"
        :key="index"
        class="icon-rating"
        :class="{ 'full-star': index <= rating }"
      ></span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
    required: true
  }
});
</script> 
