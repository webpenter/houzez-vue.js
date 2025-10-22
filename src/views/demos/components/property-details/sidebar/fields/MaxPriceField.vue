<template>
  <div class="form-group">
    <select
      ref="selectRef"
      v-model="selectedPrice"
      class="selectpicker form-control"
      :title="$t('Max. Price')"
      @change="emitPrice"
    >
      <option
        v-for="price in priceOptions"
        :key="price.id"
        :value="price.name"
      >
        {{ formatPrice(price.name) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { usePrice } from '@/stores/index.js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Define props with type
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const selectedPrice = ref(props.modelValue);
const selectRef = ref(null);

const priceStore = usePrice();
const priceOptions = priceStore.prices;

const emitPrice = () => {
  emit('update:modelValue', selectedPrice.value);
};

const formatPrice = (value) => {
  if (value === 'Any') return t('Any');
  return '$' + Number(value).toLocaleString();
};

// Refresh selectpicker safely
const refreshSelectPicker = () => {
  nextTick(() => {
    if (selectRef.value && window.$) {
      window.$(selectRef.value).selectpicker('refresh');
    }
  });
};

onMounted(() => {
  refreshSelectPicker();
});

watch(priceOptions, () => {
  refreshSelectPicker();
});

// Keep selectedPrice in sync with parent prop
watch(
  () => props.modelValue,
  (newVal) => {
    selectedPrice.value = newVal;
  }
);
</script>
