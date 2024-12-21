<template>
    <div class="property-review-wrap property-section-wrap" id="property-review-wrap">
	<div class="block-title-wrap review-title-wrap d-flex align-items-center">
		<h2>3 Reviews</h2>
        <Rating />
	
        <ListingSortBy />   
		<a class="btn btn-primary btn-slim" href="#property-review-form">Leave a Review</a>
	</div><!-- block-title-wrap -->
	<ul class="review-list-wrap list-unstyled">
        <Review />
        <Review />
        <Review />
		
	</ul>
	<div class="pagination-wrap">
		<nav>
			<ul class="pagination justify-content-center">
				<li class="page-item">
					<a class="page-link" href="#" aria-label="Previous">
						<i class="houzez-icon icon-arrow-left-1"></i>
					</a>
				</li>
				<li class="page-item">
					<a class="page-link" href="#" aria-label="Next">
						<i class="houzez-icon icon-arrow-right-1"></i>
					</a>
				</li>
			</ul><!-- pagination -->
		</nav>
	</div><!-- pagination-wrap -->
	<div class="block-wrap" id="property-review-form">
		<div class="block-title-wrap">
			<h3>Leave a Review</h3>
		</div><!-- block-title-wrap -->
		<div class="block-content-wrap">
			<div class="alert alert-danger alert-dismissible fade show" role="alert">
				The field <strong>Title</strong> is empty.
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div><!-- alert -->
			<div class="alert alert-success alert-dismissible fade show" role="alert">
				Your review has been submitted.
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div><!-- alert -->
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Title</label>
						<input class="form-control" placeholder="Enter a title" type="text">
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-md-6 col-sm-12">
					<div class="form-group">
						<label>Rating</label>
						<select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false">
							<option>1 Star - Poor</option>
							<option>2 Star -  Fair</option>
							<option>3 Star - Average</option>
							<option>4 Star - Good</option>
							<option>5 Star - Excellent</option>
						</select><!-- selectpicker -->
					</div>
				</div><!-- col-md-6 col-sm-12 -->
				<div class="col-sm-12 col-xs-12">
					<div class="form-group form-group-textarea">
						<label>Review</label>
						<textarea class="form-control" name="message" rows="5" placeholder="Write a review"></textarea>
					</div>
				</div><!-- col-sm-12 col-xs-12 -->
				<div class="col-sm-12 col-xs-12">
					<button class="btn btn-secondary btn-sm-full-width ajax-btn"><span class="btn-loader"></span>Submit</button>
				</div><!-- col-sm-12 col-xs-12 -->
			</div><!-- row -->
		</div><!-- block-content-wrap -->
	</div><!-- block-wrap -->
</div><!-- review-wrap -->



</template>
<script setup>

import ListingSortBy from '../listing/ListingSortBy.vue';
import Rating from './templates/Rating.vue';
import Review from './templates/Review.vue';

</script>