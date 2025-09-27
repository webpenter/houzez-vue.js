<template>
    <div 
    id="property-features-wrap"
    class="property-features-wrap property-section-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>{{ $t('Features') }}</h2>
            </div><!-- block-title-wrap -->
            <div class="block-content-wrap">
                <ul class="list-3-cols list-unstyled">
                    <li v-for="(feature, index) in property.property_feature" :key="index">
                        <i class="houzez-icon icon-check-circle-1 me-2"></i>
                        <a href="#">{{ feature }}</a>
                    </li>
                </ul>
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-features-wrap -->
</template>

<script setup>
defineProps({
    property: {
        type: Object,
        required: true
    }
})
</script>