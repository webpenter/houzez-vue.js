<template>
  <div class="form-group">
    <input
      type="number"
      class="form-control"
      placeholder="Max Price"
      v-model="price"
      @input="emitPrice"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['update:maxPrice']);
const price = ref('');

const emitPrice = () => {
  emit('update:maxPrice', price.value);
};
</script>
