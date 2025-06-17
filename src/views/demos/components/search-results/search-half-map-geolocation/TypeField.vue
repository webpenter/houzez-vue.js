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

const { types } = useType();
const emit = defineEmits(['update:types']);

const selectRef = ref(null);
const selectedTypes = ref([]);

// Emit on change
const emitTypes = () => {
  emit('update:types', selectedTypes.value);
};

// Refresh selectpicker
onMounted(() => {
  setTimeout(() => {
    $(selectRef.value).selectpicker('refresh');
  }, 0);
});

// Watch to emit when programmatically updated
watch(selectedTypes, emitTypes);
</script>
