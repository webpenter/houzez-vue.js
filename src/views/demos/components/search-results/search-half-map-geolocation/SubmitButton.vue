<script setup>
const emit = defineEmits(['search']);
</script>

<template>
  <button
    type="button"
    class="btn btn-search btn-secondary btn-full-width"
    @click="emit('search')"
  >
    {{ $t('Search') }}
  </button>
</template>
