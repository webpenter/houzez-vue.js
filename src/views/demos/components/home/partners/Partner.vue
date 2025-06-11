<template> 
    <div class="partners-module partners-module-slider">
	<div class="property-carousel-buttons-wrap">
        <button type="button" class="slick-prev btn-primary-outlined">Prev</button>
        <button type="button" class="slick-next btn-primary-outlined">Next</button>
    </div><!-- property-carousel-buttons-wrap -->
    <div class="partners-slider-wrap">
        <PartnerItem />
        <PartnerItem />
        <PartnerItem />
        <PartnerItem />
        <PartnerItem />
        <PartnerItem />
    </div><!-- testimonials-slider -->
</div><!-- testimonials-module -->
</template>

<script setup lang="ts">
import PartnerItem from './PartnerItem.vue';
</script>

<style scoped>
.partners-slider-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
</style>