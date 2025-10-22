<template>
  <div class="form-group">
    <select
      ref="selectRef"
      v-model="localValue"
      class="selectpicker form-control"
      title="Type"
      multiple
      data-actions-box="true"
    >
      <option
        v-for="type in typeOptions"
        :key="type.id"
        :value="type.name"
      >
        {{ type.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useType } from '@/stores/index.js'; // adjust import if needed

// Props & Emits for v-model
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  }
});
const emit = defineEmits(['update:modelValue']);

// Computed two-way binding
const localValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});

// Load type options from Pinia store
const typeStore = useType();
const typeOptions = typeStore.types;

// Select reference
const selectRef = ref(null);

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

watch(typeOptions, () => {
  refreshSelectPicker();
});
</script>
