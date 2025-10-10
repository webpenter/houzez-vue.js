<template>
  <div class="form-group">
    <select
    ref="selectRef"
      v-model="selectedMaxPrice"
      class="selectpicker form-control"
      :title="$t('Max. Price')
"
      data-live-search="false"
      @change="emitMaxPrice"
      
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

const props = defineProps({
  modelValue: {
    type: String,
    default: 'Any',
  },
});

const emit = defineEmits(['update:maxPrice']);
const { prices } = usePrice();
const selectRef = ref(null);
const selectedMaxPrice = ref(props.modelValue);

// Emit to parent
const emitMaxPrice = () => {
  emit('update:maxPrice', selectedMaxPrice.value);
};

// Format price (e.g., $500,000)
const formatPrice = (value) => {
  const numeric = parseInt(value.replace(/\D/g, ''));
  return `$${numeric.toLocaleString()}`;
};

// Watch for prop updates (e.g., when URL query param changes)
watch(
  () => props.modelValue,
  (val) => {
    selectedMaxPrice.value = val;
    setTimeout(() => {
      $(selectRef.value).selectpicker('refresh');
    }, 0);
  }
);

// Watch local changes
watch(
  () => props.modelValue,
  (val) => {
    selectedMaxPrice.value = val;
    setTimeout(() => {
      if (selectRef.value) {
        $(selectRef.value).selectpicker('val', val); // ✅ Set selected value
        $(selectRef.value).selectpicker('refresh');   // ✅ Refresh UI
      }
    }, 0);
  }
);

// Init selectpicker
onMounted(() => {
  setTimeout(() => {
    if (selectRef.value) {
      $(selectRef.value).selectpicker('val', selectedMaxPrice.value); // ✅ Set selected on mount
      $(selectRef.value).selectpicker('refresh');
    }
  }, 0);
});
</script>
