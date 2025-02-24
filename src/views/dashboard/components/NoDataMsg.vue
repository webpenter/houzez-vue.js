<template>
  <div class="dashboard-content-block">
    {{msg}}
  </div><!-- dashboard-content-block -->
</template>

<script setup>
defineProps({
  msg:String
})
</script>