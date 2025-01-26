<template>
  <button class="btn btn-primary" type="submit" :disabled="btnLoading || hasErrors">
    Next
    <span v-if="btnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <i v-else class="houzez-icon icon-arrow-right-1 ml-2"></i>
  </button>
</template>

<script setup>
const props = defineProps(['btnLoading','hasErrors'])
</script>
