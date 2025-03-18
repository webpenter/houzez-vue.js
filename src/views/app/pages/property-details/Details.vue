<template>
  <div class="Address mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div class="block-title-wrap pb-4 d-flex justify-content-between align-items-center">
      <h4>Details</h4>

    </div><!-- block-title-wrap -->
    <div class="block-content-wrap">
      <div class="row">
        <div class="details-info">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Property ID: </span>
                <span>{{property.property_id}}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Size: </span>
                <span>{{property.area_size}}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Garage: </span>
                <span>{{property.garages}}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Price: </span>
                <span>{{ $filters.formatPrice(property.price) }}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Garage Size: </span>
                <span>{{property.garages_size}}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Bedrooms: </span>
                <span>{{property.bedrooms}}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Bathrooms: </span>
                <span>{{property.bathrooms}}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Type: </span>
                <span>{{property.type}}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Status: </span>
                <span>{{property.status}}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Neighborhood: </span>
                <span>{{property.neighborhood}}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Year Built: </span>
                <span>{{property.year_built}}</span>
              </div>
              <div class="py-2 w-100 border-bottom">
                <span class="fw-bold">Land Area: </span>
                <span>{{property.land_area}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- block-content-wrap -->
  </div>
</template>

<script setup>
defineProps(['property'])
</script>