<template>
  <div class="dashboard-property-search">
    <div class="d-flex">
      <div class="form-group flex-grow-1">
        <div class="search-icon">
          <input
          v-model="searchQuery"
           class="form-control"
              type="text"
               placeholder="Search"
              @input="updateSearch"
             
             >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const searchQuery = ref('');
const emit = defineEmits(['search']);

const updateSearch = () => {
  emit('search', searchQuery.value);
};
</script>
