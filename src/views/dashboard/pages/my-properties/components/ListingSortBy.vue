<template>
  <div class="sort-by">
    <div class="d-flex align-items-center">
      <div class="sort-by-title">
        {{$t('Sort by:')}}
      </div>
      <select
          v-model="selectedSort"
          @change="updateSort"
          class="form-control">
        <option value="default">{{$t('Default Order')}}</option>
        <option value="price_high_low">{{$t('Price - High to Low')}}</option>
        <option value="price_low_high">{{$t('Price - Low to High')}}</option>
        <option value="date_new_old">{{$t('Date - New to Old')}}</option>
        <option value="date_old_new">{{$t('Date - Old to New')}}</option>
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
