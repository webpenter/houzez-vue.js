<template>
    <div>
      <div class="range-text">
        <input type="hidden" class="min-area-range-hidden" :value="areaRange[0]" readonly>
        <input type="hidden" class="max-area-range-hidden" :value="areaRange[1]" readonly>
        <span class="range-title">Area Size:</span>
        from <span class="min-area-range">{{ areaRange[0].toLocaleString() }} Sq Ft</span>
        to <span class="max-area-range">{{ areaRange[1].toLocaleString() }} Sq Ft</span>
      </div>
      <div class="area-range-wrap">
        <div class="area-range" ref="areaSlider"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        areaRange: [1, 1000], // Min and max area size
      };
    },
    mounted() {
      $(this.$refs.areaSlider).slider({
        range: true,
        min: 0,
        max: 2000,
        values: this.areaRange,
        slide: (event, ui) => {
          this.areaRange = ui.values;
        },
      });
    },
  };
  </script>
  
  <style>
  /* Optional: style the slider, or import jQuery UI CSS */
  </style>
  