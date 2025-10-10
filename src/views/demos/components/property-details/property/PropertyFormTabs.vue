<template>
  <div class="property-form-tabs-wrap">
    <div class="property-form-tabs">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a id="tab_01" class="nav-link active" data-toggle="tab" href="#tab_01" role="tab">
            <span class="tab-title">Schedule a tour</span>
          </a>
        </li>
        <li class="nav-item">
          <a id="tab_02" class="nav-link" data-toggle="tab" href="#tab_02" role="tab">
            <span class="tab-title">Request Info</span>
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <div id="tab_01" class="property-form-tabs-tab-pane tab-pane fade show active" role="tabpanel">
          <PropertyScheduleATourForm :property="property" />
        </div>
        <div id="tab_02" class="property-tabs-module-tab-pane tab-pane fade" role="tabpanel">
          <PropertyForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PropertyScheduleATourForm from '@/views/app/components/property-details/property/PropertyScheduleATourForm.vue';
import PropertyForm from '@/views/app/components/property-details/property/PropertyForm.vue';

const { property } = defineProps({
  property: {
    type: Object,
    required: true
  }
});
</script>
