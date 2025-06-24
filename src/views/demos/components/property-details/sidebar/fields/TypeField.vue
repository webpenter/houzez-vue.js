<template>
  <div class="form-group">
    <select
      class="selectpicker form-control"
      title="Type"
      multiple
      data-actions-box="true"
      v-model="localValue"
      ref="selectRef"
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
import { useType } from '@/stores/index.js'; // or '@/stores/type.js' if direct import

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

// Refresh selectpicker when options are ready
const selectRef = ref(null);

onMounted(() => {
  $(selectRef.value).selectpicker('refresh');
});

watch(typeOptions, () => {
  nextTick(() => {
    $(selectRef.value).selectpicker('refresh');
  });
});
</script>
