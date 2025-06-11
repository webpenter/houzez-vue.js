<template>
  <div class="accordion-tab floor-plan-wrap">
    <div
      class="accordion-header"
      :data-toggle="'collapse'"
      :data-target="'#floor' + index"
      :aria-expanded="false"
    >
      <div class="d-flex align-items-center" :id="'floor-plans' + index">
        <div class="accordion-title flex-grow-1">
          {{ floor.plan_title || 'Untitled Floor' }}
        </div><!-- accordion-title -->

        <ul class="floor-information list-unstyled list-inline">
          <li class="list-inline-item">
            Size: <strong>{{ floor.plan_size }} {{ sizePrefix }}</strong>
          </li>
          <li class="list-inline-item">
            <i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i>
            <strong>{{ floor.plan_bedrooms }}</strong>
          </li>
          <li class="list-inline-item">
            <i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
            <strong>{{ floor.plan_bathrooms }}</strong>
          </li>
          <li class="list-inline-item">
            Price:
            <strong>
              {{ pricePrefix }}{{ floor.plan_price }}{{ floor.price_postfix ? '/' + floor.price_postfix : '' }}
            </strong>
          </li>
        </ul>
      </div><!-- d-flex -->
    </div><!-- accordion-header -->

    <div
      :id="'floor' + index"
      class="collapse"
      :data-parent="'#floor-plans' + index"
    >
      <div class="accordion-body">
        <img
          class="img-fluid"
          :src="floor.plan_image || 'https://placehold.co/800x600'"
          :alt="floor.plan_title || 'Floor plan image'"
        />
        <div class="floor-plan-description mt-2">
          <p>
            <strong>Description:</strong><br />
            {{ floor.plan_description || 'No description provided.' }}
          </p>
        </div><!-- floor-plan-description -->
      </div><!-- accordion-body -->
    </div><!-- collapse -->
  </div><!-- accordion-tab -->
</template>

<script setup>
const props = defineProps({
  floor: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  pricePrefix: {
    type: String,
    default: '',
  },
  sizePrefix: {
    type: String,
    default: '',
  },
})
</script>
