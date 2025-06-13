<template>
  <div>
    <div class="range-text">
      <input type="hidden" class="min-price-range-hidden range-input" readonly :value="`$ ${minPrice}`">
      <input type="hidden" class="max-price-range-hidden range-input" readonly :value="`$ ${maxPrice}`">
      <span class="range-title">Price Range:</span>
      from <span class="min-price-range">$ {{ minPrice }}</span>
      to <span class="max-price-range">$ {{ maxPrice }}</span>
    </div>
    <div class="price-range-wrap">
      <div ref="priceRangeSlider" class="price-range"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

const priceRangeSlider = ref(null)
const minPrice = ref(600)
const maxPrice = ref(5000)

onMounted(() => {
  noUiSlider.create(priceRangeSlider.value, {
    start: [600, 5000],
    connect: true,
    range: {
      min: 0,
      max: 10000
    },
    
    format: {
      to: value => `$ ${Math.round(value)}`,
      from: value => Number(value.replace(/[^0-9.-]+/g, ''))
    }
  })

  priceRangeSlider.value.noUiSlider.on('update', (values) => {
    minPrice.value = values[0].replace('$ ', '')
    maxPrice.value = values[1].replace('$ ', '')
  })
})
</script>
<style scoped>
:deep(.noUi-connect) {
  background: #00aeff !important;
}
</style>
