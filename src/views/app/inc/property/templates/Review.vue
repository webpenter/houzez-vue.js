<template>
    <li class="property-review">
	<div class="d-flex">
		<div class="review-image flex-grow-1">
			<img class="rounded-circle" src="https://placehold.co/64x64" alt="agent">
		</div>
		<div class="review-message">
			<div class="d-flex align-items-center">
				<h4 class="review-title">This is a review title</h4>
                <Rating />	
			</div><!-- d-flex -->
			<time class="review-date" datetime="2018-07-26T04:37:21+00:00"><i class="houzez-icon icon-attachment mr-1"></i> July 26, 2018</time>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

			<div class="review-like mt-2">
				<ul class="list-inline">
					<li class="list-inline-item review-like-button">
						<a><i class="houzez-icon icon-like mr-1"></i></a> 3
					</li>
					<li class="list-inline-item review-dislike-button">
						<a><i class="houzez-icon icon-dislike mr-1"></i></a> 1
					</li>
				</ul>
			</div>
		</div><!-- review-message -->
	</div><!-- d-flex -->
</li><!-- property-review -->
</template>
<script setup>

import Rating from './Rating.vue';

</script>