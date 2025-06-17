<template v-if="token">
  <button class="btn save-search-btn" type="button" @click="$emit('save-search')">
    <i class="houzez-icon icon-alarm-bell mr-1"></i> Save Search
  </button>
</template>
