<template>
  <div class="form-group">
    <select
      class="selectpicker form-control"
      :title="$t('Max. Price')"
      v-model="selectedPrice"
      ref="selectRef"
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

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const selectedPrice = ref(props.modelValue);
const selectRef = ref(null);

const priceStore = usePrice();
const priceOptions = priceStore.prices;

const emitPrice = () => {
  emit('update:modelValue', selectedPrice.value);
};

const formatPrice = (value) => {
  if (value === "Any") return "Any";
  return "$" + Number(value).toLocaleString();
};

onMounted(() => {
  $(selectRef.value).selectpicker('refresh');
});

watch(priceOptions, () => {
  nextTick(() => {
    $(selectRef.value).selectpicker('refresh');
  });
});
</script>

