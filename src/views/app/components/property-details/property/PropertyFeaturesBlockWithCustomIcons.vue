<template>
    <div id="property-features-wrap" class="property-features-wrap property-section-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>Features</h2>
            </div><!-- block-title-wrap -->
            <div class="block-content-wrap">
                <ul class="list-3-cols list-unstyled">
                    <li v-for="(feature, index) in property.property_feature" :key="index">
                        <img src="../../../../../assets/img/app-side/custom-icon-1.png" class="mr-1" />
                        <a href="#">{{ feature }}</a>
                    </li>
                </ul>
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-features-wrap -->
</template>

<script setup>
const props = defineProps({
    property: {
        type: Object,
        required: true
    }
})
</script>