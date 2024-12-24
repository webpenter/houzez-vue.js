<template>
    <div class="widget widget-wrap widget-advanced-search">
	<div class="widget-header">
		<h3 class="widget-title">
			Find Your Home
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
		<div class="advanced-search-widget">
			<SearchField />
			<StatusField />
			<TypeField />
			<CitiesField />
			<AreasField />
			<StatesField />
			<CountriesField />

			
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<BedroomsField />
					
				</div><!-- col-sm-6 col-xs-12 -->
				<div class="col-sm-6 col-xs-12">
					<BathroomsField />
					
				</div><!-- col-sm-6 col-xs-12 -->
			</div><!-- row -->
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<MinAreaField />
					
				</div><!-- col-sm-6 col-xs-12 -->
				<div class="col-sm-6 col-xs-12">
					<MaxAreaField />
					
				</div><!-- col-sm-6 col-xs-12 -->
			</div><!-- row -->
			<PropertyIdField />
			<LabelsField />
			<PriceRange />
			<AreaSizeRange />
			<OtherFeatures />
			<SubmitButton />
			
			
			
		</div>
	</div><!-- widget-body -->
</div><!-- widget-about-site -->
</template>
<script setup>
import AreasField from '../search/fields/AreasField.vue';
import AreaSizeRange from '../search/fields/AreaSizeRange.vue';
import BathroomsField from '../search/fields/BathroomsField.vue';
import BedroomsField from '../search/fields/BedroomsField.vue';
import CitiesField from '../search/fields/CitiesField.vue';
import CountriesField from '../search/fields/CountriesField.vue';
import LabelsField from '../search/fields/LabelsField.vue';
import MaxAreaField from '../search/fields/MaxAreaField.vue';
import MinAreaField from '../search/fields/MinAreaField.vue';
import PriceRange from '../search/fields/PriceRange.vue';
import PropertyIdField from '../search/fields/PropertyIdField.vue';
import SearchField from '../search/fields/SearchField.vue';
import StatesField from '../search/fields/StatesField.vue';
import StatusField from '../search/fields/StatusField.vue';
import SubmitButton from '../search/fields/SubmitButton.vue';
import TypeField from '../search/fields/TypeField.vue';
import OtherFeatures from '../search/OtherFeatures.vue';


</script>