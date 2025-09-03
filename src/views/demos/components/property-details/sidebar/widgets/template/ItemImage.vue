<template>
  <div class="item-image">
    <img
      :src="imageSrc"
      alt="Property Image"
      @error="setPlaceholder"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  thumbnail: {
    type: String,
    default: ""
  }
});

// Placeholder image (you can replace with your own path)
const placeholder = "https://placehold.co/100x80";

const imageSrc = ref(props.thumbnail || placeholder);

// Watch thumbnail changes
watch(
  () => props.thumbnail,
  (newVal) => {
    imageSrc.value = newVal || placeholder;
  }
);

function setPlaceholder() {
  imageSrc.value = placeholder;
}
</script>

<style scoped>
.item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Prevent cropping */
  background: #f4f4f4; /* optional: soft background */
}
</style>
