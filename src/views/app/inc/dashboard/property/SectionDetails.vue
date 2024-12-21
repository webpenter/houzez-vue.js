<template>
    <div class="dashboard-content-block-wrap">
	<h2>Property Details</h2>
	<div class="dashboard-content-block">
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Bedrooms</label>
					<input class="form-control is-valid" name="name" placeholder="Enter number of bedrooms" type="text">
					<small class="form-text text-muted">Only digits</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Bathrooms</label>
					<input class="form-control is-invalid" name="name" placeholder="Enter number of bathrooms" type="text">
					<small class="form-text text-muted">Only digits</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Garages</label>
					<input class="form-control" name="name" placeholder="Enter number of garages" type="text">
					<small class="form-text text-muted">Only digits</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Garages Size</label>
					<input class="form-control" name="name" placeholder="Enter the garages size" type="text">
					<small class="form-text text-muted">For example: 200 Sq Ft</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Area Size</label>
					<input class="form-control" name="name" placeholder="Enter property area size" type="text">
					<small class="form-text text-muted">Only digits</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Size Prefix</label>
					<input class="form-control" name="name" placeholder="Enter the size prefix" type="text">
					<small class="form-text text-muted">For example: Sq Ft</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Land Area</label>
					<input class="form-control" name="name" placeholder="Enter property land area size" type="text">
					<small class="form-text text-muted">Only digits</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Land Area Size Postfix</label>
					<input class="form-control" name="name" placeholder="Enter property land area postfix" type="text">
					<small class="form-text text-muted">For example: Sq Ft</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Property ID</label>
					<input class="form-control" name="name" placeholder="Enter property ID" type="text">
					<small class="form-text text-muted">For example: HZ-01</small>
				</div>
			</div><!-- col-md-6 col-sm-12 -->
			<div class="col-md-6 col-sm-12">
				<div class="form-group">
					<label>Year Built</label>
					<input class="form-control datepicker" name="name" placeholder="Enter year built" type="text">
					<small class="form-text text-muted">Only digits</small>
				</div><!-- form-group -->
			</div><!-- col-md-6 col-sm-12 -->
		</div><!-- row -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

<div class="dashboard-content-block-wrap">
	<h2>Additional Details</h2>
	<div class="dashboard-content-block">
		<table class="dashboard-table additional-details-table">
			<thead>
				<tr>
					<td>
						<label>Title</label>
					</td>
					<td>
						<label>Value</label>
					</td>
					<td></td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-half-width">
						<input class="form-control" name="name" placeholder="Enter the title" type="text">
					</td>
					<td class="table-half-width">
						<input class="form-control" name="name" placeholder="Enter the value" type="text">
					</td>
					<td>
						<button class="btn btn-light-grey-outlined"><i class="houzez-icon icon-navigation-menu"></i></button>
					</td>
					<td>
						<button class="btn btn-light-grey-outlined"><i class="houzez-icon icon-close"></i></button>
					</td>
				</tr>
				<tr >
					<td colspan="4">
						<button class="btn btn-primary btn-left-icon mt-2"><i class="houzez-icon icon-add-circle"></i> Add New</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

</template>