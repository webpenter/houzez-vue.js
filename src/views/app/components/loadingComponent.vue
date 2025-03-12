<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50" fill="none" stroke="currentColor" stroke-width="8">
    <circle cx="50" cy="50" r="40" stroke-opacity="0.3" />
    <path d="M90 50a40 40 0 0 1-80 0" stroke-linecap="round" stroke="currentColor">
      <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1s"
          repeatCount="indefinite" />
    </path>
  </svg>
</template>

<script setup>
</script>