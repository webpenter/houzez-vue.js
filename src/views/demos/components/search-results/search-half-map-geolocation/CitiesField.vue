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
import { ref, onMounted, watch } from 'vue';
import { useCity } from '@/stores/index.js';

const { cities } = useCity();

const emit = defineEmits(['update:cities']);

const selectRef = ref(null);
const selectedCities = ref([]); // Local state bound to v-model

const emitCities = () => {
  emit('update:cities', selectedCities.value);
};

onMounted(() => {
  // Initialize selectpicker after DOM is ready
  setTimeout(() => {
    $(selectRef.value).selectpicker('refresh');
  }, 0);
});

watch(selectedCities, emitCities);

</script>
