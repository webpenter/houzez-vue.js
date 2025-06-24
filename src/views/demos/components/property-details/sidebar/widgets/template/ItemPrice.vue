<template>
  <div class="item-price">
    <span class="price">${{ formatPrice(price) }}</span>
  </div>
</template>

<script setup>
defineProps({
  price: [String, Number] // accept price as prop
});

function formatPrice(value) {
  // Optional: Add commas for thousands
  return new Intl.NumberFormat().format(value);
}
</script>