<template>
<div 
id="property-floor-plans-wrap"
class="property-floor-plans-wrap property-section-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap d-flex justify-content-between align-items-center">
			<h2>Floor Plans</h2>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">
			<div class="accordion">
               <FloorPlan />
               <FloorPlan />
               <FloorPlan />

				
			</div><!-- accordion -->
		</div><!-- block-content-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-floor-plans-wrap -->
</template>
<script setup>

import FloorPlan from './templates/FloorPlan.vue';

</script>