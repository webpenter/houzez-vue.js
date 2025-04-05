<template>
  <div class="Energy-Class mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div class="block-title-wrap pb-4">
      <h4>{{ $t('Energy Class')}} </h4>
    </div><!-- block-title-wrap -->
    <div class="block-content-wrap">
      <div class="row">
        <div
            class="col-12 py-2 border-bottom d-flex align-items-center justify-content-between">
          <div class="fw-bold">{{ $t('Energetic class')}}:</div>
          <span>{{ property.energy_class }}</span>
        </div>
        <div
            class="col-12 py-2 border-bottom d-flex align-items-center justify-content-between">
          <div class="fw-bold">{{ $t('Global Energy Performance Index')}}:</div>
          <span>{{ property.global_energy_performance_index }}</span>
        </div>
        <div
            class="col-12 py-2 border-bottom d-flex align-items-center justify-content-between">
          <div class="fw-bold">{{ $t('Renewable energy performance index')}}:</div>
          <span>{{ property.renewable_energy_performance_index }}</span>
        </div>
        <div
            class="col-12 py-2 border-bottom d-flex align-items-center justify-content-between">
          <div class="fw-bold">{{ $t('Energy performance of the building')}}:</div>
          <span>{{ property.energy_performance_of_the_building }}</span>
        </div>
      </div>
<!--      <div-->
<!--          class="class-energy energy-class-9 mt-4 d-flex justify-content-between align-items-center">-->
<!--        <div class="class-energy-indicator text-center w-100 bg-success">-->
<!--          <span class="energy-A+">A+</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-danger">-->
<!--          <span class="energy-A">A</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-danger">-->
<!--          <span class="energy-B">B</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-success">-->
<!--          <span class="energy-C">C</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-danger">-->
<!--          <span class="energy-D">D</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-danger">-->
<!--          <span class="energy-E">E</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-danger">-->
<!--          <span class="energy-F">F</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-danger">-->
<!--          <span class="energy-G">G</span>-->
<!--        </div>-->
<!--        <div class="class-energy-indicator text-center w-100 bg-danger">-->
<!--          <span class="energy-H">H</span>-->
<!--        </div>-->
<!--      </div>-->
    </div><!-- block-content-wrap -->
  </div>
</template>

<script setup>
defineProps(['property'])
</script>