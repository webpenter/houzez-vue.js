<template>
  <button
    type="button"
    class="btn reset-search-btn btn-grey-outlined"
    @click="$emit('reset')"
  >
    {{ $t('Clear') }}
  </button>
</template>
