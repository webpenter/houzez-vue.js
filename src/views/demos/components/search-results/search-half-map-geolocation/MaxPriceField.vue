<template>
  <div class="form-group">
    <select
      v-model="selectedMaxPrice"
      class="selectpicker form-control"
      title="Max. Price"
      data-live-search="false"
      @change="emitMaxPrice"
      ref="selectRef"
    >
      <option
        v-for="price in prices"
        :key="price.id"
        :value="price.name"
      >
        {{ price.name === 'Any' ? 'Any' : formatPrice(price.name) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { usePrice } from '@/stores/index.js';

const { prices } = usePrice();
const emit = defineEmits(['update:maxPrice']);
const selectRef = ref(null);
const selectedMaxPrice = ref('Any');

// Emit max price to parent
const emitMaxPrice = () => {
  emit('update:maxPrice', selectedMaxPrice.value);
};

// Format price (e.g., $500,000)
const formatPrice = (value) => {
  const numeric = parseInt(value.replace(/\D/g, ''));
  return `$${numeric.toLocaleString()}`;
};

onMounted(() => {
  setTimeout(() => {
    $(selectRef.value).selectpicker('refresh');
  }, 0);
});

watch(selectedMaxPrice, emitMaxPrice);
</script>
