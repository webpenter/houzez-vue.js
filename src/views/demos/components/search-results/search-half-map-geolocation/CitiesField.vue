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

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:cities']);

const { cities } = useCity();
const selectRef = ref(null);

// ✅ Initialize with modelValue
const selectedCities = ref([...props.modelValue]);

const emitCities = () => {
  emit('update:cities', selectedCities.value);
};

// ✅ Watch for external updates (sync from parent)
watch(
  () => props.modelValue,
  (newVal) => {
    selectedCities.value = [...newVal];
    setTimeout(() => {
      $(selectRef.value).selectpicker('val', newVal); // sync visual
      $(selectRef.value).selectpicker('refresh');
    }, 0);
  },
  { immediate: true }
);

// ✅ Emit to parent when user selects
watch(selectedCities, emitCities, { deep: true });

onMounted(() => {
  setTimeout(() => {
    $(selectRef.value).selectpicker('val', selectedCities.value);
    $(selectRef.value).selectpicker('refresh');
  }, 0);
});
</script>
