<template>
<section id="overlay-search-advanced-module-v3" class="overlay-search-advanced-module overlay-search-advanced-module-v3">
	<div class="search-title">
		Search v3
		<button type="button" class="btn overlay-search-module-close"><i class="houzez-icon icon-close hz-navigation-close"></i></button>
	</div>
	<div class="filters-search-v3-wrap">
		<!-- <?php include 'inc/search/fields/search-field.php';?> -->
	</div><!-- filters-search-v3-wrap -->
	<div class="filters-search-v3-wrap">
		<label>Property Size</label>
		<div class="filters-search-v3-size">
			<div class="size-calculator-wrap">
				<div class="size-calculator">
					<i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
					<span class="quantity-calculator">2</span>
					<!-- <span class="calculator-label">Bedrooms</span> -->
					<button class="btn btn-primary-outlined" type="button">+</button>
					<button class="btn btn-primary-outlined" type="button">-</button>
				</div>
			</div><!-- flex-search -->
			<div class="size-calculator-wrap">
				<div class="size-calculator">
					<i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
					<span class="quantity-calculator">--</span>
					<!-- <span class="calculator-label">Batrooms</span> -->
					<button class="btn btn-primary-outlined" type="button">+</button>
					<button class="btn btn-primary-outlined" type="button">-</button>
				</div>
			</div><!-- flex-search -->

			<div class="size-calculator-wrap">
				<div class="size-calculator">
					<i class="houzez-icon icon-car-1 mr-1"></i>
					<span class="quantity-calculator">--</span>
					<!-- <span class="calculator-label">Batrooms</span> -->
					<button class="btn btn-primary-outlined" type="button">+</button>
					<button class="btn btn-primary-outlined" type="button">-</button>
				</div>
			</div><!-- flex-search -->
		</div>
	</div><!-- filters-search-v3-wrap -->
	<div class="row">
		<div class="col-6">
			<CountriesField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<StatesField/>
		</div><!-- col-6 -->
		<div class="col-6">
		<CitiesField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<AreasField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<LabelsField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<StatusField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<TypeField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<PropertyIdField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<MinAreaField/>
		</div><!-- col-6 -->
		<div class="col-6">
			<MaxAreaField/>
		</div><!-- col-6 -->
		<div class="col-12">
			<PriceRange/>
		</div><!-- col-12 -->
		<div class="col-12">
			<OtherFeatures/>
		</div><!-- col-12 -->
		<div class="col-12">
			<SubmitButton/>
		</div><!-- col-6 -->
		<div class="col-12">
			<SaveSearchButton/>
		</div><!-- col-6 -->
	</div><!-- row -->
</section><!-- overlay-search-advanced-module -->
</template>
<script setup>

import AreasField from './fields/AreasField.vue';
import CitiesField from './fields/CitiesField.vue';
import CountriesField from './fields/CountriesField.vue';
import LabelsField from './fields/LabelsField.vue';
import MaxAreaField from './fields/MaxAreaField.vue';
import MinAreaField from './fields/MinAreaField.vue';
import PriceRange from './fields/PriceRange.vue';
import PropertyIdField from './fields/PropertyIdField.vue';
import SaveSearchButton from './fields/SaveSearchButton.vue';
import StatesField from './fields/StatesField.vue';
import StatusField from './fields/StatusField.vue';
import SubmitButton from './fields/SubmitButton.vue';
import TypeField from './fields/TypeField.vue';
import OtherFeatures from './OtherFeatures.vue';
</script>