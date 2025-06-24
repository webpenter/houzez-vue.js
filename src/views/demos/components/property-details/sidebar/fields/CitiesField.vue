<template>
  <div class="form-group">
    <select
      id="city-select"
      ref="selectRef"
      v-model="selectedCities"
      class="selectpicker form-control"
      title="Cities"
      multiple
      data-actions-box="true"
      @change="emitCities"
    >
      <option v-for="city in cities" :key="city.id" :value="city.name">
        {{ city.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useCity } from '@/stores/index.js';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const selectRef = ref(null);
const selectedCities = ref([...props.modelValue]); // initialize with parent

const cityStore = useCity();
const cities = cityStore.cities;

const emitCities = () => {
  emit('update:modelValue', selectedCities.value); // emit on change
};

onMounted(() => {
  $(selectRef.value).selectpicker('refresh');
});

watch(cities, () => {
  nextTick(() => {
    $(selectRef.value).selectpicker('refresh');
  });
});
</script>

