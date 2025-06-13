<template>
    <div>
      <div class="range-text">
        <span class="range-title">Price Range:</span>
        from <span>{{ priceRange[0] | currency }}</span>
        to <span>{{ priceRange[1] | currency }}</span>
      </div>
      <div class="price-range-wrap">
        <div ref="priceSlider" class="price-range"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        priceRange: [600, 5000],
      };
    },
    mounted() {
      $(this.$refs.priceSlider).slider({
        range: true,
        min: 0,
        max: 10000,
        values: this.priceRange,
        slide: (event, ui) => {
          this.priceRange = ui.values;
        },
      });
    },
    filters: {
      currency(value) {
        return `$ ${value.toLocaleString()}`;
      },
    },
  };
  </script>
  
  <style>
  /* Add jQuery UI theme CSS or customize as needed */
  </style>
  