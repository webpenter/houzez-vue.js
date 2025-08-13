<template>
  <div class="form-group">
    <div class="location-search">
      <input
        type="text"
        class="form-control"
        :placeholder="$t('Search')
"
        v-model="search"
        @input="emitSearch"
      />
      <!-- <a class="btn location-trigger" href="#">
        <i class="houzez-icon icon-location-target"></i>
      </a> -->
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:search']);
const search = ref(props.modelValue);

const emitSearch = () => {
  emit('update:search', search.value);
};

watch(
  () => props.modelValue,
  (val) => {
    search.value = val;
  }
);
</script>

