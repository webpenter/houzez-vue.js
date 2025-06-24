<template>
  <div
    class="taxonomy-item"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <a class="taxonomy-link hover-effect-flat" href="#">
      <div class="taxonomy-text-wrap">
        <div class="taxonomy-title">{{ title }}</div>
        <div class="taxonomy-subtitle">More Details</div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['img', 'title'])

const backgroundUrl = computed(() => {
  return new URL(`/src/assets/img/types/${props.img}`, import.meta.url).href
})
</script>
