<template>
  <div class="partners-module partners-module-slider my-5">
    <div class="partners-slider-wrap">
      <div 
        v-for="(partner, index) in partners" 
        :key="partner.id || index" 
        class="partner-item"
      >
        <img :src="partner.image" alt="partner image" />
      </div>
    </div>
  </div>
</template>

<script setup>
// ✅ Receive partners directly from parent
defineProps({
  partners: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.partners-slider-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.partner-item img {
  max-height: 80px;
  object-fit: contain;
}
</style>
