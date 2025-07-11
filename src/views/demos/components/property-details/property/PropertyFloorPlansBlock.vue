<template>
    <div class="property-floor-plans-wrap property-section-wrap" id="property-floor-plans-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>{{ $t('Floor Plans') }}</h2>
            </div><!-- block-title-wrap -->

            <div class="block-content-wrap">
                <div class="accordion">
                    <FloorPlan
                        v-for="(floor, index) in floorplans"
                        :key="floor.id"
                        :floor="floor"
                        :index="index"
                        :price-prefix="pricePrefix"
                        :size-prefix="sizePrefix"
                    />
                </div><!-- accordion -->
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-floor-plans-wrap -->
</template>


<script setup>
import FloorPlan from './template/FloorPlan.vue';

const props = defineProps({
    floorplans: {
        type: Array,
        required: true
    },
    pricePrefix: {
        type: String,
        default: ''
    },
    sizePrefix: {
        type: String,
        default: ''
    }
});
</script>
