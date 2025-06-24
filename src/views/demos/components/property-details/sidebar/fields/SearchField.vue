<template>
  <div class="form-group">
    <div class="search-icon">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </div>
  </div>
</template>

<script setup>
defineProps(['modelValue']);
</script>
