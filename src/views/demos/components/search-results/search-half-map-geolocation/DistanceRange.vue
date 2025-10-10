<template>
  <div class="d-flex">
    <div class="flex-search">
      <label class="control control--checkbox">
        <input
        v-model="enabled"
        type="checkbox" name="air-conditioning" >
        Radius: <strong>{{ radius }} mi</strong>
        <span class="control__indicator"></span>
      </label>
    </div>
    <div class="flex-search flex-grow-1">
      <div class="distance-range-wrap">
        <div ref="distanceSlider" class="w-100 distance-range"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

const enabled = ref(true)
const radius = ref(1)
const distanceSlider = ref(null)

onMounted(() => {
  noUiSlider.create(distanceSlider.value, {
    start: [1],
    connect: [true, false],
    range: {
      min: 1,
      max: 100
    },
    tooltips: false, // no tooltip needed
    step: 1
  })

  distanceSlider.value.noUiSlider.on('update', (values) => {
    radius.value = parseInt(values[0])
  })
})
</script>
<style scoped>
:deep(.noUi-connect) {
  background: #00aeff !important;
}
</style>