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
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<MinAreaField />
				</div><!-- col-sm-6 col-xs-12 -->
				<div class="col-sm-6 col-xs-12">
					<MaxAreaField />
				</div><!-- col-sm-6 col-xs-12 -->
			</div><!-- row -->
			<SubmitButton />
		</div>
	</div><!-- widget-body -->
</div><!-- widget-about-site -->
</template>
<script setup>
import SearchField from '../fields/SearchField.vue';
import StatusField from '../fields/StatusField.vue';
import TypeField from '../fields/TypeField.vue';
import CitiesField from '../fields/CitiesField.vue';
import AreasField from '../fields/AreasField.vue';
import StatesField from '../fields/StatesField.vue';
import CountriesField from '../fields/CountriesField.vue';
import BedroomsField from '../fields/BedroomsField.vue';
import BathroomsField from '../fields/BathroomsField.vue';
import MinAreaField from '../fields/MinAreaField.vue';
import MaxAreaField from '../fields/MaxAreaField.vue';
import OtherFeatures from '../fields/OtherFeatures.vue';
import SubmitButton from '../fields/SubmitButton.vue';
</script>
