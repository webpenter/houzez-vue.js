<template>
	<div class="dashboard-slide-panel-wrap">
		<h2>{{$t('Add New Lead')}}</h2>
		<button type="button" class="btn open-close-slide-panel" @click="closePanel">
			<span aria-hidden="true">&times;</span>
		</button>
		<div class="lined-block">
			<h3>{{$t('Information')}}</h3>
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>{{$t('Name')}}</label>
						<input class="form-control is-valid" name="name" :placeholder="$t('Enter the name')" type="text">
					</div>
				</div>
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>{{$t('Lastname')}}</label>
						<input class="form-control is-invalid" name="name" :placeholder="$t('Enter the lastname')" type="text">
					</div>
				</div>
			</div>
		</div>
		<div class="lined-block">
			<h3>{{$t('Contacts')}}</h3>
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>{{$t('Email')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the email')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>{{$t('Mobile')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the mobile phone number')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>{{$t('Home')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the home phone number')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>{{$t('Work')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the work phone number')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
			</div>
		</div>
		<div class="lined-block">
			<h3>{{$t('Address')}}</h3>
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>{{$t('Address')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the address')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>{{$t('City')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the city')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>{{$t('County / State')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the county/state')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>{{$t('Postal Code / Zip')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the zip code')" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
			</div>
		</div>
		<div class="lined-block">
			<h3>{{$t('Source')}}</h3>
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="form-group insight-search">
						<label>{{$t('Select')}}</label>
						<select v-model="Source" class="selectpicker form-control bs-select-hidden" title="Search"
							data-live-search="true" data-selected-text-format="count" multiple data-actions-box="false">
							<option>Apartment With Ocean View</option>
							<option>Luxury Apartment On The Bay</option>
							<option>Revovated Apartment At Last Floor</option>
						</select><!-- selectpicker -->
					</div><!-- form-group -->
					<div class="form-group">
						<label>{{$t('Other')}}</label>
						<input class="form-control" name="name" :placeholder="$t('Enter the source')" type="text">
					</div>
				</div>
			</div>
		</div>
		<button type="button" class="btn btn-primary btn-full-width mt-2">{{$t('Save')}}</button>
	</div><!-- dashboard-slide-panel-wrap -->

</template>
<script>
export default {
    emits: ['close'], // Add emits here
    mounted() {
        $('.selectpicker').selectpicker();
    },
    data() {
        return {
            Source: '',
        };
    },
    methods: {
        closePanel() {
            this.$emit('close'); // Correct event emission
        },
    },
};

</script>