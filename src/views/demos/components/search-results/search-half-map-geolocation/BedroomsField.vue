<template>
  <div class="form-group">
    <select
      ref="selectRef"
      v-model="selectedBedroom"
      class="selectpicker form-control"
      title="Bedrooms"
      data-live-search="false"
      @change="emitBedrooms"
    >
      <option
        v-for="bedroom in bedrooms"
        :key="bedroom.id"
        :value="bedroom.name"
      >
        {{ bedroom.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useBedroom } from '@/stores/index.js';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:bedrooms']);
const { bedrooms } = useBedroom();
const selectRef = ref(null);
const selectedBedroom = ref(props.modelValue);

// Emit to parent when selected changes
const emitBedrooms = () => {
  emit('update:bedrooms', selectedBedroom.value);
};

// Watch for external modelValue change
watch(
  () => props.modelValue,
  (val) => {
    selectedBedroom.value = val;
    setTimeout(() => {
      $(selectRef.value).selectpicker('refresh');
    }, 0);
  }
);

// Watch for when bedroom options are loaded
watch(
  () => props.modelValue,
  (val) => {
    selectedBedroom.value = val;
    setTimeout(() => {
      if (selectRef.value) {
        $(selectRef.value).selectpicker('val', val); // ✅ ensure selectpicker reflects selected value
        $(selectRef.value).selectpicker('refresh');
      }
    }, 0);
  }
);

// Watch internal value to emit to parent
watch(selectedBedroom, emitBedrooms);

// Initialize selectpicker
onMounted(() => {
  setTimeout(() => {
    if (selectRef.value) {
      $(selectRef.value).selectpicker('val', selectedBedroom.value); // ✅ apply selected on load
      $(selectRef.value).selectpicker('refresh');
    }
  }, 0);
});
</script>
