<template>
  <div class="Address mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div
        class="block-title-wrap pb-4 d-flex justify-content-between align-items-center">
      <h4>{{$t('Details')}}</h4>

    </div><!-- block-title-wrap -->
    <div class="block-content-wrap">
      <div class="row">
        <div class="details-info">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                  class="col-6 py-2 w-100 border-bottom d-flex align-items-center justify-content-between detail-address">
                <div class="fw-bold">{{$t('Property ID')}}</div>
                <span>{{property.property_id}}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-city">
                <div class="fw-bold">{{$t('Size')}}</div>
                <span>{{ property.area_size }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-state">
                <div class="fw-bold">{{$t('Garage')}}</div>
                <span>{{ property.garages }}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-zip">
                <div class="fw-bold">{{$t('Price')}}</div>
                <span>{{ $filters.formatPrice(property.price) }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-area">
                <div class="fw-bold">{{$t('Garage Size')}}</div>
                <span>{{ property.garages_size }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-country">
                <div class="fw-bold">{{$t('Bedrooms')}}</div>
                <span>{{ property.bedrooms }}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-zip">
                <div class="fw-bold">{{$t('Bathrooms')}}</div>
                <span>{{ property.bathrooms }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-area">
                <div class="fw-bold">{{$t('Type')}}</div>
                <span>{{ property.type }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-country">
                <div class="fw-bold">{{$t('Status')}}</div>
                <span>{{ property.status }}</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-zip">
                <div class="fw-bold">{{$t('Neighborhood')}}</div>
                <span>{{ property.neighborhood }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-area">
                <div class="fw-bold">{{$t('Year Built')}}</div>
                <span>{{ property.year_built }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-country">
                <div class="fw-bold">{{$t('Land Area')}}</div>
                <span>{{ property.land_area }}</span>
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