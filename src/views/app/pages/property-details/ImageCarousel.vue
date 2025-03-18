<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :key="image.image_path" class="carousel-item" :class="{ active: index === currentIndex }">
        <img :src="image.image_path" class="d-block w-100 img-fluid clickable-image" alt="..." @click="openFullscreen(index)">
      </div>
    </div>
    <span class="carousel-control-prev" type="button" @click="prevSlide">
      <span class="carousel-control-prev-icn" aria-hidden="true">
        <i class="fa-solid fa-arrow-left"></i>
      </span>
      <span class="visually-hidden">{{$t('Previous')}}</span>
    </span>
    <button class="carousel-control-next" type="button" @click="nextSlide">
      <span class="carousel-control-next-icn" aria-hidden="true">
        <i class="fa-solid fa-arrow-right"></i>
      </span>
      <span class="visually-hidden">{{$t('Next')}}</span>
    </button>
  </div>
  <div class="slide-img">
    <img v-for="image in images" :key="image.image_path" :src="image.image_path" class="img-fluid m-1 clickable-image" @click="updateImage(image.image_path)">
  </div>

  <div v-if="fullscreenImage !== null" class="fullscreen-overlay">
    <button class="close-btn" @click="closeFullscreen">&times;</button>
    <button class="prev-btn" @click.stop="prevFullscreenSlide">&#9664;</button>
    <img :src="images[fullscreenImage].image_path" class="fullscreen-img">
    <button class="next-btn" @click.stop="nextFullscreenSlide">&#9654;</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['images']);
const currentIndex = ref(0);
const fullscreenImage = ref(null);

const updateImage = (path) => {
  const index = props.images.findIndex(image => image.image_path === path);
  if (index !== -1) {
    currentIndex.value = index;
  }
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value === 0) ? props.images.length - 1 : currentIndex.value - 1;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const openFullscreen = (index) => {
  fullscreenImage.value = index;
};

const closeFullscreen = () => {
  fullscreenImage.value = null;
};

const prevFullscreenSlide = () => {
  fullscreenImage.value = (fullscreenImage.value === 0) ? props.images.length - 1 : fullscreenImage.value - 1;
};

const nextFullscreenSlide = () => {
  fullscreenImage.value = (fullscreenImage.value + 1) % props.images.length;
};
</script>

<style scoped>
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.fullscreen-img {
  max-width: 90%;
  max-height: 90%;
  transition: transform 0.3s ease-in-out;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.prev-btn, .next-btn {
  position: absolute;
  top: 50%;
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}

.clickable-image {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.clickable-image:hover {
  transform: scale(1.05);
}

.carousel-inner {
  transition: transform 0.5s ease-in-out;
}
</style>
