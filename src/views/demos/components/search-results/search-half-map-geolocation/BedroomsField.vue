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

const { bedrooms } = useBedroom();
const emit = defineEmits(['update:bedrooms']);
const selectRef = ref(null);
const selectedBedroom = ref('');

// Emit the value to the parent
const emitBedrooms = () => {
  emit('update:bedrooms', selectedBedroom.value);
};

onMounted(() => {
  setTimeout(() => {
    $(selectRef.value).selectpicker('refresh');
  }, 0);
});

watch(selectedBedroom, emitBedrooms);
</script>
