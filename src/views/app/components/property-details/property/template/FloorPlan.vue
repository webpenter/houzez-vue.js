<template>
    <div class="accordion-tab floor-plan-wrap">
        <div class="accordion-header" data-toggle="collapse" data-target="#floor1" aria-expanded="false">
            <div class="d-flex align-items-center" id="floor-plans1">
                <div class="accordion-title flex-grow-1">
                    {{ floor.plan_title }}
                </div><!-- accordion-title -->
                <ul class="floor-information list-unstyled list-inline">
                    <li class="list-inline-item">Size: <strong>{{ floor.plan_size }} {{ sizePrefix }}</strong></li>
                    <li class="list-inline-item"><i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i>
                        <strong>{{ floor.plan_bedrooms }}</strong></li>
                    <li class="list-inline-item"><i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
                        <strong>{{ floor.plan_bathrooms }}</strong></li>
                    <li class="list-inline-item">Price: <strong>{{ pricePrefix }}{{ floor.plan_price }}/{{ floor.price_postfix }}</strong></li>
                </ul>
            </div><!-- d-flex -->
        </div><!-- accordion-header -->
        <div id="floor1" class="collapse" data-parent="#floor-plans1">
            <div class="accordion-body">
                <img class="img-fluid" src="https://placehold.co/800x600" alt="image">
                <div class="floor-plan-description">
                    <p><strong>Description:</strong><br>
                        {{ floor.plan_description }}
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
        required: true
    },
    index: Number,
    pricePrefix: String,
    sizePrefix: String
})
</script>