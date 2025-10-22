<template>
  <div id="property-energy-class-wrap" class="property-energy-class-wrap property-section-wrap">
    <div class="block-wrap">
      <div class="block-title-wrap">
        <h2>{{ $t('Energy Efficiency') }}</h2>
      </div>
      <div class="block-content-wrap">
        <ul class="class-energy-list list-unstyled">
          <li><strong>{{ $t('Energetic class') }}:</strong> <span>{{ property.energy_class }}</span></li>
          <li><strong>{{ $t('Global energy performance index') }}:</strong> <span>{{ property.global_energy_performance_index }}</span></li>
          <li><strong>{{ $t('Renewable energy performance index') }}:</strong> <span>{{ property.renewable_energy_performance_index }}</span></li>
          <li><strong>{{ $t('Energy performance of the building') }}:</strong> <span>{{ property.energy_performance_of_the_building }}</span></li>
        </ul>

        <!-- Dynamic Energy Class Bar -->
        <ul class="class-energy energy-class-10">
          <li 
            v-for="(energy, index) in energyClasses" 
            :key="index"
            class="class-energy-indicator"
            :class="{ active: energy === property.energy_class }">
            <span :class="'energy-' + energy">{{ energy }}</span>
          </li>
          <li class="class-energy-indicator">
            <div class="indicator-energy">
              {{ property.global_energy_performance_index }} | {{ $t('Energy class') }} {{ property.energy_class }}
            </div>
            <span class="energy-ND">ND</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

const energyClasses = ['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
</script>

<style scoped>
.class-energy-indicator.active span {
  border: 2px solid #000; /* Highlight border */
  transform: scale(1.1); /* Slight zoom effect */
  font-weight: bold;
}

</style>
