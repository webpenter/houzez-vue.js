<template>
    <div class="row">
	<div class="col-md-12 col-sm-12">
		<div class="form-group">
			<label>Plan Title</label>
			<input class="form-control is-valid" name="name" placeholder="Enter the plan title" type="text">
		</div>
	</div><!-- col-md-6 col-sm-12 -->
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			<label>Plan Bedrooms</label>
			<input class="form-control is-invalid" name="name" placeholder="Enter number of bedrooms" type="text">
			<small class="form-text text-muted">Only digits</small>
		</div>
	</div><!-- col-md-6 col-sm-12 -->
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			<label>Plan Bathrooms</label>
			<input class="form-control" name="name" placeholder="Enter number of bathrooms" type="text">
			<small class="form-text text-muted">Only digits</small>
		</div>
	</div><!-- col-md-6 col-sm-12 -->
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			<label>Plan Price</label>
			<input class="form-control" name="name" placeholder="Enter the plan price" type="text">
			<small class="form-text text-muted">Only digits</small>
		</div>
	</div><!-- col-md-6 col-sm-12 -->
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			<label>Price Postfix</label>
			<input class="form-control" name="name" placeholder="Enter the plan postfix" type="text">
			<small class="form-text text-muted">For example: Monthly</small>
		</div>
	</div><!-- col-md-6 col-sm-12 -->
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			<label>Plan Size</label>
			<input class="form-control" name="name" placeholder="Enter the plan size" type="text">
			<small class="form-text text-muted">For example: 200 Sq Ft</small>
		</div>
	</div><!-- col-md-6 col-sm-12 -->
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			<label>Plan Image</label>
			<div class="d-flex align-items-start">
				<img class="img-fluid" src="" alt="thumb">	
				<div class="ml-2">
					<button type="button" class="btn btn-primary btn-full-width">Select An Image To Upload</button>
					<small class="form-text text-muted">Minimum size 800 x 600 px</small>
				</div>
			</div>
		</div>
	</div><!-- col-md-6 col-sm-12 -->
	<div class="col-md-12 col-sm-12">
		<div class="form-group">
			<label>Plan Description</label>
			<textarea class="form-control" name="message" rows="5" placeholder="Enter the plan description"></textarea>
		</div>
	</div><!-- col-md-12 col-sm-12 -->
</div><!-- row -->
</template>