<template>
    <div class="property-floor-plans-wrap property-section-wrap" id="property-floor-plans-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>Floor Plans</h2>
            </div><!-- block-title-wrap -->
            <div class="block-content-wrap">
                <div class="accordion">
                    <!-- <?php include 'inc/property/templates/floor-plan.php';?>
				<?php include 'inc/property/templates/floor-plan.php';?>
				<?php include 'inc/property/templates/floor-plan.php';?> -->
                <FloorPlan />
                <FloorPlan />
                <FloorPlan />
                </div><!-- accordion -->
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-floor-plans-wrap -->
</template>

<script setup>
import FloorPlan from './template/FloorPlan.vue';

</script>