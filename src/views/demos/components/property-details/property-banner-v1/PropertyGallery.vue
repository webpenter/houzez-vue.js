<template>
  <div class="top-gallery-section">
    <!-- Main Image Slider -->
    <div class="listing-slider" style="position: relative;">
      <div v-if="currentImage" key="main-image">
        <a
          rel="gallery-1"
          :data-lazy="currentImage.image_path"
          href="#"
          class="swipebox"
          data-toggle="modal"
          data-target="#property-lightbox"
        >
          <div class="main-img-wrapper" :class="{ loading: !mainImageLoaded }">
            <img
              v-show="mainImageLoaded"
              class="img-fluid"
              :src="currentImage.image_path"
              :alt="'Image ' + (currentIndex + 1)"
              @load="mainImageLoaded = true"
            />
          </div>
        </a>
      </div>

      <!-- Static Left Button -->
      <button
      class="staticLeftButton"
        @click="prevImage"
      >
        ‹
      </button>

      <!-- Static Right Button -->
      <button
        @click="nextImage"
      >
        ›
      </button>
    </div>

    <!-- Thumbnail Navigation -->
    <div class="listing-slider-nav" style="display: flex;">
      <div
        v-for="(image, index) in property.images"
        :key="'thumb-' + image.id"
        class="thumbnailNavigation"
        @click="selectThumbnail(index)"
      >
        <div class="thumb-img-wrapper" :class="{ loading: !thumbnailLoaded[index] }">
          <img
            v-show="thumbnailLoaded[index]"
            class="img-fluid"
            :src="image.image_path"
            :alt="'Thumbnail ' + (index + 1)"
            style="width: 100px; height: 73px; object-fit: cover;"
            @load="onThumbLoad(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  property: {
    type: Object,
    required: true,
  },
});

const currentIndex = ref(0);
const mainImageLoaded = ref(false);
const thumbnailLoaded = ref([]);

const currentImage = computed(() => {
  if (!props.property?.images?.length) return null;
  return props.property.images[currentIndex.value];
});

watch(() => currentIndex.value, () => {
  mainImageLoaded.value = false;
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

function selectThumbnail(index) {
  currentIndex.value = index;
}

function onThumbLoad(index) {
  thumbnailLoaded.value[index] = true;
}

// Initialize thumbnail load state
watch(() => props.property.images, (images) => {
  if (images?.length) {
    thumbnailLoaded.value = Array(images.length).fill(false);
  }
}, { immediate: true });
</script>

<style scoped>
.main-img-wrapper,
.thumb-img-wrapper {
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
}

.main-img-wrapper {
  width: 100%;
  height: auto;
  min-height: 400px;
}

.thumb-img-wrapper {
  width: 100px;
  height: 73px;
}

.main-img-wrapper.loading,
.thumb-img-wrapper.loading {
  background-color: #f0f0f0;
}

.staticLeftButton{
position: absolute; top: 50%; right: 10px; transform: translateY(-50%);
        background-color: #00AEEF; border: none; border-radius: 0%;
        width: 35px; height: 35px; color: white; font-size: 18px; cursor: pointer; z-index: 10;
}

.thumbnailNavigation{
margin-right: 5px; cursor: pointer;
}
</style>
