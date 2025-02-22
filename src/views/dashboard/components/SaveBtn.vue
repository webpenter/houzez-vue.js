<template>
    <button class="btn btn-primary" type="submit" :disabled="btnLoading || hasErrors">
      Save
      <span v-if="btnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <i v-else class="houzez-icon"></i>
    </button>
</template>
  
<script setup>
  const props = defineProps(['btnLoading','hasErrors'])
</script>  