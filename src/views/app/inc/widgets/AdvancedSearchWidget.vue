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
					<?php include 'inc/search/fields/bedrooms-field.php';?>
				</div><!-- col-sm-6 col-xs-12 -->
				<div class="col-sm-6 col-xs-12">
					<?php include 'inc/search/fields/bathrooms-field.php';?>
				</div><!-- col-sm-6 col-xs-12 -->
			</div><!-- row -->
			<div class="row">
				<div class="col-sm-6 col-xs-12">
					<?php include 'inc/search/fields/min-area-field.php';?>
				</div><!-- col-sm-6 col-xs-12 -->
				<div class="col-sm-6 col-xs-12">
					<?php include 'inc/search/fields/max-area-field.php';?>
				</div><!-- col-sm-6 col-xs-12 -->
			</div><!-- row -->
			
			<?php include 'inc/search/fields/property-id-field.php';?>
			<?php include 'inc/search/fields/labels-field.php';?>
			<?php include 'inc/search/fields/price-range.php';?>
			<?php include 'inc/search/fields/area-size-range.php';?>

			<?php include 'inc/search/other-features.php';?>
			
			<?php include 'inc/search/fields/submit-button.php';?>
		</div>
	</div><!-- widget-body -->
</div><!-- widget-about-site -->
</template>
<script setup>
import AreasField from '../search/fields/AreasField.vue';
import CitiesField from '../search/fields/CitiesField.vue';
import CountriesField from '../search/fields/CountriesField.vue';
import SearchField from '../search/fields/SearchField.vue';
import StatesField from '../search/fields/StatesField.vue';
import StatusField from '../search/fields/StatusField.vue';
import TypeField from '../search/fields/TypeField.vue';


</script>