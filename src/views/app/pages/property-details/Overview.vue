<template>
  <div class="Overview">
    <div class="row p-4">
      <div class="col-12 d-flex justify-content-between py-5 border-bottom">
        <h4>{{ $t('Overview') }}</h4>
      </div>

      <div class=" row d-flex flex-wrap text-center mt-4">
        <div class="flex-fill col-lg-2 col-sm-4 col-6 lg-mt-0 mt-3">
          <div class="fw-bold text-start">{{ $filters.capitalize(property.type) }}</div>
          <p class="text-muted text-start">Property&nbsp;Type</p>
        </div>
        <div class="flex-fill col-lg-2 col-sm-4 col-6 lg-mt-0 mt-3">
          <div class="d-flex">
            <i class="fa-solid fa-bed me-1 text-muted"></i>
            <div>{{ property.bedrooms }}</div>
          </div>
          <p class="text-muted text-start">Bedrooms</p>
        </div>
        <div class="flex-fill col-lg-2 col-sm-4 col-6 lg-mt-0 mt-3">
          <div class="d-flex">
            <i class="fa-solid fa-bath me-1 text-muted"></i>
            <div>{{ property.bathrooms }}</div>
          </div>
          <p class="text-muted text-start">Bathrooms</p>
        </div>
        <div class="flex-fill col-lg-2 col-sm-4 col-6 lg-mt-0 mt-3">
          <div class="d-flex">
            <i class="fa-solid fa-car me-1 text-muted"></i>
            <div>{{ property.garages }}</div>
          </div>
          <p class="text-muted text-start">Garage</p>
        </div>
        <div class="flex-fill col-lg-2 col-sm-4 col-6 lg-mt-0 mt-3">
          <div class="d-flex">
            <i class="fa-solid fa-expand me-1 text-muted"></i>
            <div>{{ property.land_area }}</div>
          </div>
          <p class="text-muted text-start">Sq Ft</p>
        </div>
        <div class="flex-fill col-lg-2 col-sm-4 col-6 lg-mt-0 mt-3">
          <div class="d-flex">
            <i class="fa-solid fa-calendar-days me-1 text-muted"></i>
            <div>{{ property.year_built }}</div>
          </div>
          <p class="text-muted text-start">Year Built</p>
        </div>
      </div>

      <!-- d-flex -->
    </div>
  </div>

  <div class="Description mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div class="block-title-wrap">
      <h4 class="pb-5 border-bottom">{{ $t('Description') }}</h4>
    </div>
    <div class="block-content-wrap mt-4">
      <div class="property-description-content">
        <div class="description-content">
          <p class="mb-4">
            {{ property.description }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps(['property'])
</script>