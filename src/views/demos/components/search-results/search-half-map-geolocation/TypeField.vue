<template>
  <div class="form-group">
    <select
      class="selectpicker form-control"
      title="Type"
      data-live-search="false"
      multiple
      data-actions-box="true"
      @change="emitTypes"
      ref="selectRef"
    >
      <option>Apartment</option>
      <option>Villa</option>
      <option>Office</option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const emit = defineEmits(['update:types']);
const selectRef = ref(null);

const emitTypes = () => {
  const selected = Array.from(selectRef.value.selectedOptions).map(opt => opt.value);
  emit('update:types', selected);
};

onMounted(() => {
  setTimeout(() => {
    $('.selectpicker').selectpicker('refresh');
  }, 0);
});
</script>
