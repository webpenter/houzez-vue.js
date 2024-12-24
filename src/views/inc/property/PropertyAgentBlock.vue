<template>
    <div class="property-contact-agent-wrap property-section-wrap" id="property-contact-agent-wrap">
	<div class="block-wrap">
		<div class="block-title-wrap d-flex justify-content-between align-items-center">
			<h2>Contact Information</h2>
			<a class="btn btn-primary btn-slim" href="#" target="_blank">View My Listings</a>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">
			<div class="agent-details">
				<div class="d-flex align-items-center">
					<div class="agent-image">
						<img class="rounded" src="https://placehold.co/80x80" alt="agent">
					</div>
					<ul class="agent-information list-unstyled">
						<li class="agent-name">
							<i class="houzez-icon icon-single-neutral mr-1"></i> Brittany Watkins
						</li>
						<li class="agent-phone-wrap clearfix">
							<!-- to show all agent number remove the class agent-phone-hidden -->
							<i class="houzez-icon icon-phone mr-1"></i>
							<span class="agent-phone agent-phone-hidden">
								987 6543 321
							</span>
							<i class="houzez-icon icon-mobile-phone mr-1"></i>
							<span class="agent-phone agent-phone-hidden">
								987 6543 321
							</span>
							<i class="houzez-icon icon-video-meeting-skype mr-1"></i>
							<span>
								<a href="#">Brittany.Watkins</a>
							</span>
						</li>
						<li class="agent-social-media">
							<span>
								<a class="btn-facebook" target="_blank" href="#">
									<i class="houzez-icon icon-social-media-facebook mr-2"></i>
								</a>
							</span>
							<span>
								<a class="btn-instagram" target="_blank" href="#">
									<i class="houzez-icon icon-social-instagram mr-2"></i>
								</a>
							</span>
							<span>
								<a class="btn-twitter" target="_blank" href="#">
									<i class="houzez-icon icon-x-logo-twitter-logo-2 mr-2"></i>
								</a>
							</span>
							<span>
								<a class="btn-linkedin" target="_blank" href="#">
									<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
								</a>
							</span>
							<span>
								<a class="btn-google-plus" target="_blank" href="#">
									<i class="houzez-icon icon-social-media-google-plus-1 mr-2"></i>
								</a>
							</span>
							<span>
								<a class="btn-youtube" target="_blank" href="#">
									<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
								</a>
							</span>
						</li>
					</ul>
				</div><!-- d-flex -->
			</div><!-- agent-details -->
			<div class="block-title-wrap">
				<h3>Enquire About This Property</h3>
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
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Type</label>
						<select class="selectpicker form-control bs-select-hidden" title="Select">
							<option>I'm a buyer</option>
							<option>I'm a tennant</option>
							<option>I'm an agent</option>
							<option>Other</option>
						</select><!-- selectpicker -->
					</div><!-- form-group -->
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-sm-12 col-xs-12">
					<div class="form-group form-group-textarea">
						<label>Message</label>
						<textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
					</div>
				</div><!-- col-sm-12 col-xs-12 -->
				<div class="col-sm-12 col-xs-12">
					<div class="form-group mb-2">
						<label class="control control--checkbox m-0">
							<input type="checkbox" name="air-conditioning" checked>Keep me informed about similar properties.
							<span class="control__indicator"></span>
						</label>
						<label class="control control--checkbox m-0">
							<input type="checkbox" name="dgpr-agreement">By submitting this form I agree to <a href="#">Terms of Use</a>
							<span class="control__indicator"></span>
						</label>
					</div><!-- form-group -->
				</div><!-- col-sm-12 col-xs-12 -->
				<div class="col-sm-12 col-xs-12">
					<button class="btn btn-secondary btn-sm-full-width">Request Information</button>
					<button class="btn btn-secondary-outlined btn-sm-full-width">Send a Direct Message</button>
				</div><!-- col-sm-12 col-xs-12 -->
			</div><!-- row -->
		</div><!-- block-content-wrap -->
	</div><!-- block-wrap -->
</div><!-- property-schedule-tour-wrap -->
</template>
<script setup></script>