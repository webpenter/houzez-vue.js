<template>
  <div class="form-group">
    <select
      class="selectpicker form-control bs-select-hidden"
      title="Cities"
      data-live-search="false"
      multiple
      data-actions-box="true"
      @change="emitCities"
      ref="selectRef"
    >
      <option>Rahim Yar Khan</option>
      <option>Turkey</option>
      <option>denmark</option>
      <option>New York</option>
      <option>San Francisco</option>
    </select>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['update:cities']);
const selectRef = ref(null);

const emitCities = () => {
  const selected = Array.from(selectRef.value.selectedOptions).map(opt => opt.value);
  emit('update:cities', selected);
};

onMounted(() => {
  setTimeout(() => {
    $('.selectpicker').selectpicker('refresh');
  }, 0);
});
</script>
