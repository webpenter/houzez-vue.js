<template>
  <template v-for="property in properties">
    <div class="property-card-box">
      <div class="property-carousel">
        <i class="fa-solid fa-chevron-left"></i>
        <RouterLink :to="{name:'app.property-details',params:{propertyId:property.id}}">
          <div class="property-images">
            <template v-for="image in property.images">
              <img :src="image.image_path" alt="...">
            </template>
          </div>
        </RouterLink>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
      <div class="property-details-box">
        <RouterLink :to="{name:'app.property-details',params:{propertyId:property.id}}">
          <p class="property-name">
            {{ $filters.subStr(property.title,0,60) }}
          </p>
        </RouterLink>
        <div class="property-price-detail">
          <div>{{ $filters.formatPrice(property.price) }}</div>
          <div class="rooms-baths-sqft">
            <p><i class="fa-light fa-bed"></i><span>{{ property.bedrooms }}</span></p>
            <p><i class="fa-light fa-shower"></i><span>{{ property.bathrooms }}</span></p>
            <p><i class="fa-light fa-ruler-triangle"></i><span>{{ property.area_size }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
<script setup>
import {RouterLink} from "vue-router";
import {onMounted} from "vue";

defineProps(['properties']);

onMounted(() => {
  document.querySelectorAll(".property-carousel").forEach(carousel => {
    let imagesContainer = carousel.querySelector(".property-images");
    let images = imagesContainer.querySelectorAll("img");
    let prevBtn = carousel.querySelector(".fa-chevron-left");
    let nextBtn = carousel.querySelector(".fa-chevron-right");
    let index = 0;

    imagesContainer.style.display = "flex";
    imagesContainer.style.overflow = "hidden";
    imagesContainer.style.width = "100%";
    images.forEach(img => img.style.width = "100%");

    function updateCarousel() {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });
    }

    updateCarousel();

    nextBtn.addEventListener("click", function () {
      index = (index + 1) % images.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });
  });
});
</script>