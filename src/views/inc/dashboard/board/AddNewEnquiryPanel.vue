<template>
    <div class="dashboard-slide-panel-wrap">
	<h2>{{$t('Add New Enquiry')}}</h2>
	<button type="button" class="btn open-close-slide-panel" @click="closePanel">
		<span aria-hidden="true">&times;</span>
	</button>
	<div class="lined-block">
		<div class="row">
			<div class="col-sm-12">
				<div class="form-group">
					<label>{{$t('Contact')}}</label>
					<input class="form-control" name="name" :placeholder="$t('Enter the name')" type="text" value="Martin Moore" disabled>
				</div>
			</div>
		</div>
	</div>
	<div class="lined-block">
		<h3>{{$t('Information')}}</h3>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>{{$t('Type')}}</label>
					<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="false">
						<option>{{$t('Purchase')}}</option>
						<option>{{$t('Rent')}}</option>
						<option>{{$t('Sell')}}</option>
						<option>{{$t('Evaluation')}}</option>
						<option>{{$t('Mortgage')}}</option>
					</select><!-- selectpicker -->
				</div><!-- form-group -->
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>{{$t('Property')}}</label>
					<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="false">
						<option>{{$t('Apartment')}}</option>
						<option>{{$t('Family Home')}}</option>
						<option>{{$t('Loft')}}</option>
					</select><!-- selectpicker -->
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>{{$t('Price')}}</label>
					<input class="form-control" name="name" :placeholder="$t('From')" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>&nbsp;</label>
					<input class="form-control" name="name" :placeholder="$t('To')" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>{{$t('Bedrooms')}}</label>
					<input class="form-control" name="name" :placeholder="$t('Min')" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>&nbsp;</label>
					<input class="form-control" :name="$t('name')" placeholder="Max" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>{{$t('Bathrooms')}}</label>
					<input class="form-control" name="name" :placeholder="$t('Min')" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>&nbsp;</label>
					<input class="form-control" name="name" :placeholder="$t('Max')" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>{{$t('Area')}}</label>
					<input class="form-control" name="name" :placeholder="$t('Min')" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>&nbsp;</label>
					<input class="form-control" name="name" :placeholder="$t('Max')" type="text">
				</div>
			</div><!-- col-md-6 col-sm-12 -->
		</div>
	</div>
	<div class="lined-block">
		<h3>{{$t('Location')}}</h3>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>{{$t('Type')}}</label>
					<select class="selectpicker form-control bs-select-hidden" title="Country" data-live-search="true" data-selected-text-format="count" data-actions-box="false">
						<option>United States</option>
						<option>Canada</option>
						<option>Australia</option>
					</select><!-- selectpicker -->
				</div>
			</div><!-- col-md-12 col-sm-12 -->
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>{{$t('County / State')}}</label>
					<input class="form-control" name="name" :placeholder="$t('Enter the county/state')" type="text">
				</div>
			</div><!-- col-md-12 col-sm-12 -->
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>{{$t('City')}}</label>
					<input class="form-control" name="name" :placeholder="$t('Enter the city')" type="text">
				</div>
			</div><!-- col-md-12 col-sm-12 -->
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>{{$t('Postal Code / Zip')}}</label>
					<input class="form-control" name="name" :placeholder="$t('Enter the zip code')" type="text">
				</div>
			</div><!-- col-md-12 col-sm-12 -->
		</div>
	</div>
	<!-- <div class="lined-block">
		<h3>Notes</h3>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<textarea class="form-control" rows="5"></textarea>
				</div>
			</div>
		</div>
	</div> -->
	<button type="button" class="btn btn-primary btn-full-width mt-2">{{$t('Save')}}</button>
	<!-- <?php include 'inc/overlay-loading.php';?>    -->
</div><!-- dashboard-slide-panel-wrap -->
</template>
<script>
    export default {
    emits: ['close'], // Add emits here
    mounted() {
        $('.selectpicker').selectpicker();
    },
    methods: {
        closePanel() {
            this.$emit('close'); // Correct event emission
        },
    },
};
</script>