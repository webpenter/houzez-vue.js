<template>
    <div class="property-schedule-tour-wrap property-section-wrap" id="property-schedule-tour-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap d-flex justify-content-between align-items-center">
			<h2>Schedule a Tour</h2>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">
			<div class="row">
				<div class="col-md-4 col-sm-12">
					<div class="form-group">
						<label>Tour Type</label>
						<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false">
							<option>In Person</option>
							<option>Video Chat</option>
						</select><!-- selectpicker -->
					</div>
				</div><!-- col-md-4 col-sm-12 -->
				<div class="col-md-4 col-sm-12">
					<div class="form-group">
						<label>Date</label>
						<input type="text" class="form-control datepicker" placeholder="Select a Date">
					</div>
				</div><!-- col-md-4 col-sm-12 -->
				<div class="col-md-4 col-sm-12">
					<div class="form-group">
						<label>Time</label>
						<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false">
							<option>10:00 am</option>
							<option>11:00 am</option>
							<option>12:00 am</option>
						</select><!-- selectpicker -->
					</div>
				</div><!-- col-md-4 col-sm-12 -->
			</div><!-- row -->
			<div class="block-title-wrap">
				<h3>Your Information</h3>
			</div><!-- block-title-wrap -->

			<div class="alert alert-danger alert-dismissible fade show" role="alert">
				The field <strong>Name</strong> is empty.
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="alert alert-success alert-dismissible fade show" role="alert">
				Your request has been submitted. An agent will get in touch with you.
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>


			<div class="row">
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Name</label>
						<input class="form-control" name="name" placeholder="Enter your name" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Phone</label>
						<input class="form-control" name="phone" placeholder="Enter your phone number" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Email</label>
						<input class="form-control" name="email" placeholder="Enter your email address" type="email">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-sm-12 col-xs-12">
					<div class="form-group form-group-textarea">
						<label>Message</label>
						<textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
					</div>
				</div><!-- col-sm-12 col-xs-12 -->
				<div class="col-sm-12 col-xs-12">
					<button class="btn btn-secondary btn-sm-full-width">Submit a Tour Request</button>
				</div><!-- col-sm-12 col-xs-12 -->
			</div><!-- row -->
		</div><!-- block-content-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-schedule-tour-wrap -->
</template>