<template>
  <div class="YouTube-Video mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div class="pb-5 border-bottom">
      <h4 class="">{{ $t('Video') }}</h4>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <div v-html="videoUrl"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['videoUrl']);
</script>