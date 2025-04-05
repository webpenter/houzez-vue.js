<template>
  <div class="Features mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div class="block-title-wrap pb-5 border-bottom">
      <h4>{{$t ('Features')}}</h4>
    </div><!-- block-title-wrap -->
    <div class="block-content-wrap mt-4">
      <div class="row">
        <template v-for="feature in propertyFeature" :key="feature">
          <div class="col-6 fs-normal d-flex align-items-center ">
            <i class="fa-solid fa-check-circle me-2"></i>
            <p class="py-2">{{ feature }}</p>
          </div>
        </template>
      </div>
    </div><!-- block-content-wrap -->
  </div>
</template>

<script setup>
defineProps(['propertyFeature'])
</script>