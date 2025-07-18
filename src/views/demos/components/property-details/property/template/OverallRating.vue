<template>
  <div class="rating-score-wrap flex-grow-1">
    <span class="star">
      <span v-for="n in fullStars" :key="'full-' + n" class="icon-rating full-star"></span>
      <span v-if="halfStar" class="icon-rating half-star"></span>
      <span v-for="n in emptyStars" :key="'empty-' + n" class="icon-rating empty-star"></span>
    </span>
  </div>
</template>


<script setup>
const props = defineProps({
  value: {
    type: Number,
    required: true
  }
});

const fullStars = Math.floor(props.value);
const halfStar = props.value % 1 >= 0.5;
const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
</script>
