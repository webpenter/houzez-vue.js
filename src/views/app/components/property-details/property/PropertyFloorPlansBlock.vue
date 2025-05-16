<template>
    <div class="property-floor-plans-wrap property-section-wrap" id="property-floor-plans-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>Floor Plans</h2>
            </div><!-- block-title-wrap -->

            <div class="block-content-wrap">
                <div class="accordion">
                    <FloorPlan
                        v-for="(floor, index) in property.floorplan"
                        :key="floor.id"
                        :floor="floor"
                        :index="index"
                        :price-prefix="property.price_prefix"
                        :size-prefix="property.size_prefix"
                    />
                </div><!-- accordion -->
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-floor-plans-wrap -->
</template>


<script setup>
import FloorPlan from './template/FloorPlan.vue';

const props = defineProps({
    property: {
        type: Object,
        required: true
    }
})
</script>
