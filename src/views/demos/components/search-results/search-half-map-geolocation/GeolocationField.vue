<template>
  <div class="form-group">
    <div class="location-search">
      <input
        type="text"
        class="form-control"
        placeholder="Location"
        v-model="location"
        @input="emitLocation"
      />
      <a class="btn location-trigger" href="#">
        <i class="houzez-icon icon-location-target"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const location = ref('');
const emit = defineEmits(['update:location']);

const emitLocation = () => {
  emit('update:location', location.value);
};
</script>
