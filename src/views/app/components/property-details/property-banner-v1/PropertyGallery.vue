<template>
  <div class="top-gallery-section">
    <!-- Main Image Slider -->
    <div class="listing-slider position-relative">
      <div v-if="currentImage" key="main-image">
        <a rel="gallery-1" :data-lazy="currentImage.image_path" href="#" class="swipebox" data-toggle="modal"
          data-target="#property-lightbox">
          <img class="img-fluid" :src="currentImage.image_path" :alt="'Image ' + (currentIndex + 1)" />
        </a>
      </div>

      <!-- Static Left Button -->
      <button @click="prevImage" class="btn btn-info position-absolute top-50 translate-middle-y start-0 ms-2 
         rounded-0 d-flex align-items-center justify-content-center px-0"
        style="width: 35px; height: 35px; font-size: 18px; z-index: 10;">
        ‹
      </button>


      <!-- Static Right Button -->
      <button @click="nextImage" class="btn btn-info position-absolute top-50 translate-middle-y end-0 me-2 
         rounded-0 d-flex align-items-center justify-content-center px-0"
        style="width: 35px; height: 35px; font-size: 18px; z-index: 10;">
        ›
      </button>

    </div>

    <!-- Thumbnail Navigation -->
    <div class="listing-slider-nav d-flex">
      <div v-for="(image, index) in property.images" :key="'thumb-' + image.id" @click="currentIndex = index"
        class="me-1 cursor-pointer">
        <img class="img-fluid w-auto h-auto" :src="image.image_path" :data-lazy="image.image_path"
          :alt="'Thumbnail ' + (index + 1)" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  property: {
    type: Object,
    required: true,
  },
});

const currentIndex = ref(0);

const currentImage = computed(() => {
  if (!props.property || !props.property.images || props.property.images.length === 0) {
    return null;
  }
  return props.property.images[currentIndex.value];
});

function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = props.property.images.length - 1;
  }
}

function nextImage() {
  if (currentIndex.value < props.property.images.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
}
</script>
