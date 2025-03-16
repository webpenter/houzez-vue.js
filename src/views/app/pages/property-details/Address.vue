<template>
  <div class="Address mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div
        class="block-title-wrap pb-4 d-flex justify-content-between align-items-center">
      <h4>Address</h4>

    </div><!-- block-title-wrap -->
    <div class="block-content-wrap">
      <div class="row">
        <div class="details-info">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                  class="col-6 py-2 w-100 border-bottom d-flex align-items-center justify-content-between detail-address">
                <div class="fw-bold">Address</div>
                <span>{{property.address}}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-city">
                <div class="fw-bold">City</div>
                <span>{{ property.city }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-state">
                <div class="fw-bold">State/county</div>
                <span>{{ property.county_state }}</span>
              </div>

            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-zip">
                <div class="fw-bold">Zip/Postal Code</div>
                <span>{{ property.zip_postal_code }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-area">
                <div class="fw-bold">Neighborhood</div>
                <span>{{ property.neighborhood }}</span>
              </div>
              <div
                  class="col-6 py-2 w-100 border-bottom fs-normal d-flex align-items-center justify-content-between detail-country">
                <div class="fw-bold">Country</div>
                <span>{{ property.country }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- block-content-wrap -->
  </div>

  <div class="Address mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div
        class="block-title-wrap pb-4 d-flex justify-content-between align-items-center">
      <h4>Google Map</h4>

    </div><!-- block-title-wrap -->
    <div class="block-content-wrap">
      <div class="row">
        <iframe
            :src="mapUrl"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div><!-- block-content-wrap -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['property'])

const address = ref(`${props.property.latitude},${props.property.longitude}`);

const mapUrl = ref(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.8354345093707!2d${address.value.split(',')[1]}!3d${address.value.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645488305008`);
</script>