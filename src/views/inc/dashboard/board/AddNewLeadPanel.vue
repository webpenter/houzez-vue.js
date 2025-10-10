<template>
	<div class="dashboard-slide-panel-wrap">
		<h2>Add New Lead</h2>
		<button type="button" class="btn open-close-slide-panel" @click="closePanel">
			<span aria-hidden="true">&times;</span>
		</button>
		<div class="lined-block">
			<h3>Information</h3>
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Name</label>
						<input class="form-control is-valid" name="name" placeholder="Enter the name" type="text">
					</div>
				</div>
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Lastname</label>
						<input class="form-control is-invalid" name="name" placeholder="Enter the lastname" type="text">
					</div>
				</div>
			</div>
		</div>
		<div class="lined-block">
			<h3>Contacts</h3>
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>Email</label>
						<input class="form-control" name="name" placeholder="Enter the email" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>Mobile</label>
						<input class="form-control" name="name" placeholder="Enter the mobile phone number" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>Home</label>
						<input class="form-control" name="name" placeholder="Enter the home phone number" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>Work</label>
						<input class="form-control" name="name" placeholder="Enter the work phone number" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
			</div>
		</div>
		<div class="lined-block">
			<h3>Address</h3>
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>Address</label>
						<input class="form-control" name="name" placeholder="Enter the address" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-12 col-sm-12">
					<div class="form-group">
						<label>City</label>
						<input class="form-control" name="name" placeholder="Enter the city" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>County / State</label>
						<input class="form-control" name="name" placeholder="Enter the county/state" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Postal Code / Zip</label>
						<input class="form-control" name="name" placeholder="Enter the zip code" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
			</div>
		</div>
		<div class="lined-block">
			<h3>Source</h3>
			<div class="row">
				<div class="col-md-12 col-sm-12">
					<div class="form-group insight-search">
						<label>Select</label>
						<select 
            v-model="Source" class="selectpicker form-control bs-select-hidden" title="Search"
							data-live-search="true" data-selected-text-format="count" multiple data-actions-box="false">
							<option>Apartment With Ocean View</option>
							<option>Luxury Apartment On The Bay</option>
							<option>Revovated Apartment At Last Floor</option>
						</select><!-- selectpicker -->
					</div><!-- form-group -->
					<div class="form-group">
						<label>Other</label>
						<input class="form-control" name="name" placeholder="Enter the source" type="text">
					</div>
				</div>
			</div>
		</div>
		<button type="button" class="btn btn-primary btn-full-width mt-2">Save</button>
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