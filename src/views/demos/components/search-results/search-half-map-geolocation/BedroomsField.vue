<template>
  <div class="form-group">
    <select
      class="selectpicker form-control"
      title="Bedrooms"
      data-live-search="false"
      @change="emitBedrooms"
      ref="selectRef"
    >
      <option value="">Any</option>
      <option value="1">1 Bedroom</option>
      <option value="2">2 Bedrooms</option>
      <option value="3">3 Bedrooms</option>
      <option value="4">4+ Bedrooms</option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const emit = defineEmits(['update:bedrooms']);
const selectRef = ref(null);

const emitBedrooms = () => {
  const selected = selectRef.value.value;
  emit('update:bedrooms', selected);
};

onMounted(() => {
  setTimeout(() => {
    $('.selectpicker').selectpicker('refresh');
  }, 0);
});
</script>
