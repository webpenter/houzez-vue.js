<template>
  <div class="sort-by">
    <div class="d-flex align-items-center">
      <div class="sort-by-title">
        Sort by:
      </div>
      <select
          v-model="selectedSort"
          @change="updateSort"
          class="form-control">
        <option value="default">Default Order</option>
        <option value="price_high_low">Price - High to Low</option>
        <option value="price_low_high">Price - Low to High</option>
        <option value="date_new_old">Date - New to Old</option>
        <option value="date_old_new">Date - Old to New</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const selectedSort = ref('default');
const emit = defineEmits(['sort']);

const updateSort = () => {
  emit('sort', selectedSort.value);
};
</script>
