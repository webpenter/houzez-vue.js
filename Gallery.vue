<template>
  <div class="gallery my-4">
    <div class="row">
      <template v-for="(image, index) in images" :key="image.id">
        <div class="col-4" style="padding: 1px; overflow: hidden;">
          <img :src="image.image_path" class="img-fluid w-100 clickable-image" alt="" @click="openModal(index)">
        </div>
      </template>
    </div>

    <transition name="fade">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <button class="close-btn" @click="closeModal">&times;</button>
        <button class="nav-btn left" @click="prevImage">&#9664;</button>
        <img :src="images[currentIndex].image_path" class="modal-image modal-transition" alt="">
        <button class="nav-btn right" @click="nextImage">&#9654;</button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(["images"]);

const showModal = ref(false);
const currentIndex = ref(0);

const openModal = (index) => {
  currentIndex.value = index;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value === 0) ? props.images.length - 1 : currentIndex.value - 1;
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value === props.images.length - 1) ? 0 : currentIndex.value + 1;
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-image {
  max-width: 90%;
  max-height: 80%;
}

.modal-transition {
  transition: transform 0.3s ease-in-out;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

.left {
  left: 20px;
}

.right {
  right: 20px;
}

.clickable-image {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.clickable-image:hover {
  transform: scale(1.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.col-4 {
  overflow: hidden;
}
</style>
