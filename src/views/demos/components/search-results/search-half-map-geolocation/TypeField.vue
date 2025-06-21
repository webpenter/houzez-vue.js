<template>
  <div class="form-group">
    <select
      ref="selectRef"
      v-model="selectedTypes"
      class="selectpicker form-control"
      title="Type"
      multiple
      data-actions-box="true"
      @change="emitTypes"
    >
      <option
        v-for="type in types"
        :key="type.id"
        :value="type.name"
      >
        {{ type.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useType } from '@/stores/index.js';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:types']);
const { types } = useType();

const selectRef = ref(null);
const selectedTypes = ref([...props.modelValue]);

const emitTypes = () => {
  emit('update:types', selectedTypes.value);
};

// Sync external changes to local state
watch(
  () => props.modelValue,
  (newVal) => {
    selectedTypes.value = [...newVal];
    setTimeout(() => {
      $(selectRef.value).selectpicker('val', newVal);
      $(selectRef.value).selectpicker('refresh');
    }, 0);
  },
  { immediate: true }
);

// Emit on local change
watch(selectedTypes, emitTypes, { deep: true });

onMounted(() => {
  setTimeout(() => {
    $(selectRef.value).selectpicker('val', selectedTypes.value);
    $(selectRef.value).selectpicker('refresh');
  }, 0);
});
</script>
