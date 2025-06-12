<template>
	<section class="advanced-search advanced-search-half-map">
		<div class="container">
			<div class="d-flex">
				<div class="flex-search flex-grow-1">
					<GeolocationField />
				</div><!-- flex-search -->
			</div><!-- d-flex -->

			<DistanceRange />

			<div class="d-flex">
				<div class="flex-search">
					<CountriesField />
				</div><!-- flex-search -->
				<div class="flex-search">
					<StatesField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <CitiesField />
				</div><!-- flex-search -->
				<div class="flex-search">
					<AreasField />
				</div><!-- flex-search -->
			</div><!-- d-flex -->
			<div class="d-flex">
				<div class="flex-search">
					 <StatusField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <TypeField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <BedroomsField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <BathroomsField />
				</div><!-- flex-search -->
			</div><!-- d-flex -->
			<div class="d-flex">
				<div class="flex-search">
					 <LabelsField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <PropertyIdField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <MinAreaField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <MaxAreaField />
				</div><!-- flex-search -->
			</div><!-- d-flex -->
			<div class="d-flex">
				<div class="flex-search">
					 <MinPriceField />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <MaxPriceField />
				</div><!-- flex-search -->
			</div><!-- d-flex -->
			<div class="d-flex">
				<div class="flex-search-half">
					 <PriceRange />
				</div><!-- flex-search-half -->
			</div><!-- d-flex -->
			<div class="half-map-features-list-wrap">
				 <OtherFeatures />
			</div><!-- half-map-features-list-wrap -->
			<div class="d-flex half-map-buttons-wrap">
				 <SubmitButton />
				 <SaveSearchBtn	/>
				 <ResetSearchButton />
			</div>
		</div><!-- container -->
	</section><!-- advanced-search -->
</template>


<script setup>
import { onMounted } from 'vue'

import AreasField from './AreasField.vue';
import CitiesField from './CitiesField.vue';
import CountriesField from './CountriesField.vue';
import DistanceRange from './DistanceRange.vue';
import GeolocationField from './GeolocationField.vue';
import StatesField from './StatesField.vue';
import StatusField from './StatusField.vue';
import BathroomsField from './BathroomsField.vue';
import TypeField from './TypeField.vue';
import BedroomsField from './BedroomsField.vue';
import LabelsField from './LabelsField.vue';
import PropertyIdField from './PropertyIdField.vue';
import MinAreaField from './MinAreaField.vue';
import MaxAreaField from './MaxAreaField.vue';
import MinPriceField from './MinPriceField.vue';
import MaxPriceField from './MaxPriceField.vue';
import PriceRange from './PriceRange.vue';
import OtherFeatures from './OtherFeatures.vue';
import SubmitButton from './SubmitButton.vue';
import SaveSearchBtn from './SaveSearchBtn.vue';
import ResetSearchButton from './ResetSearchButton.vue';


onMounted(() => {
  // Bootstrap-select requires jQuery
  setTimeout(() => {
    $('.selectpicker').selectpicker('refresh')
  }, 0)
})
</script>
