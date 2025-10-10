<template>
  <div id="property-gallery-grid" class="property-gallery-grid property-section-wrap">
    <div
      id="pills-gallery"
      class="property-gallery-grid-wrap houzez-desktop-layout-3cols houzez-tablet-layout-3cols houzez-mobile-layout-3cols"
    >
      <!-- Check if images exist and loop -->
      <a
        v-for="(image) in property.images?.slice(0, 8) || []"
        :key="image.id"
        class="gallery-grid-item"
        data-toggle="modal"
        data-target="#property-lightbox"
        :href="image.url || '#'"
      >
        <img class="img-fluid" :src="image.image_path" alt="image" />
      </a>

      <!-- More images block -->
      <a
        v-if="property.images && property.images.length > 8"
        class="gallery-grid-item more-images"
        data-toggle="modal"
        data-target="#property-lightbox"
        :href="property.images[8].url || '#'"
      >
        <span>+{{ property.images.length - 8 }}</span>
        <img class="img-fluid" :src="property.images[8].image_path" alt="image" />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  property: {
    type: Object,
    default: () => ({})
  }
})
</script>
