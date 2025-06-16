<template>
	<section class="advanced-search advanced-search-half-map">
		<div class="container">
			<div class="d-flex">
				<div class="flex-search flex-grow-1">
					<GeolocationField @update:location="formData.location = $event" />
				</div><!-- flex-search -->
			</div><!-- d-flex -->

			<DistanceRange />

			<div class="d-flex">
				<div class="flex-search">
					 <CitiesField @update:cities="formData.cities = $event" />
				</div><!-- flex-search -->
				<div class="flex-search">
					<TypeField @update:types="formData.types = $event" />
				</div><!-- flex-search -->
				<div class="flex-search">
					 <BedroomsField @update:bedrooms="formData.bedrooms = $event" />
				</div><!-- flex-search -->
				<div class="flex-search">
					<MaxPriceField @update:maxPrice="formData.maxPrice = $event" />
				</div><!-- flex-search -->
			</div><!-- d-flex -->

			<div class="d-flex half-map-buttons-wrap">
				 <SubmitButton @search="searchProperty" />
				 <SaveSearchBtn	/>
				 <ResetSearchButton />
			</div>
		</div><!-- container -->
	</section><!-- advanced-search -->
</template>


<script setup>
import { onMounted } from 'vue'

import CitiesField from './CitiesField.vue';
import DistanceRange from './DistanceRange.vue';
import GeolocationField from './GeolocationField.vue';
import TypeField from './TypeField.vue';
import BedroomsField from './BedroomsField.vue';
import MaxPriceField from './MaxPriceField.vue';
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
