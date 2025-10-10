<template>
  <div class="property-lightbox">
	<div 
  id="listing-lightbox"
  class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<div class="d-flex align-items-center">
						<div class="lightbox-logo flex-grow-1">
							<img class="img-fluid" src="img/logo-houzez-white.png" alt="logo">
						</div><!-- lightbox-logo -->
						<div class="lightbox-tools">
							<ul class="list-inline">
								<li class="list-inline-item btn-favorite">
									<a href="#"><i class="houzez-icon icon-love-it mr-2"></i> <span>Favorite</span></a>
								</li>
								<li class="list-inline-item btn-email">
									<a href="#"><i class="houzez-icon icon-envelope mr-1"></i></a>
								</li>
								<li class="list-inline-item lightbox-nav">
									<a href="#"><i class="houzez-icon icon-arrow-left-1"></i></a>
								</li>
								<li class="list-inline-item lightbox-nav">
									<a href="#"><i class="houzez-icon icon-arrow-right-1"></i></a>
								</li>
							</ul>

						</div><!-- lightbox-tools -->
					</div><!-- d-flex -->
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div><!-- modal-header -->

				<div class="modal-body clearfix">
					<div class="lightbox-gallery-wrap">
						<a class="btn-expand">
							<i class="houzez-icon icon-expand-3"></i>
						</a>
						<PropertyLightboxGallery/>
					</div><!-- lightbox-gallery-wrap -->
					<div class="lightbox-content-wrap lightbox-form-wrap">
					<ItemLabels/>
          <ItemTitle/>
          <ItemPrice/>
          <ItemAddress/>
						

						<ul class="list-unstyled flex-grow-1">
							<li class="property-overview-type">Type</li>
							<li><strong>Single Family Home</strong></li>
						</ul>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum enim incidunt cupiditate delectus recusandae quos totam natus provident...</p>
						<div class="property-overview-data">
							
							<ul class="list-unstyled flex-fill">
								<li class="property-overview-item">
									<i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
									<strong>3</strong> 
								</li>
								<li class="h-beds">Bedrooms</li>
							</ul>
							<ul class="list-unstyled flex-fill">
								<li class="property-overview-item">
									<i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
									<strong>2</strong>
								</li>
								<li class="h-baths">Bathrooms</li>
							</ul>
							<ul class="list-unstyled flex-fill">
								<li class="property-overview-item">
									<i class="houzez-icon icon-car-1 mr-1"></i>
									<strong>1</strong>
								</li>
								<li class="h-area">Garage</li>
							</ul>
							<ul class="list-unstyled flex-fill">
								<li class="property-overview-item">
									<i class="houzez-icon icon-real-estate-dimensions-plan-1 mr-1"></i>
									<strong>2,987</strong>
								</li>
								<li class="h-area">Sq Ft</li>
							</ul>
							<ul class="list-unstyled flex-fill">
								<li class="property-overview-item">
									<i class="houzez-icon icon-real-estate-dimensions-map mr-1"></i>
									<strong>4,345</strong>
								</li>
								<li class="h-area">Lot Sq Ft</li>
							</ul>
							<ul class="list-unstyled flex-fill">
								<li class="property-overview-item">
									<i class="houzez-icon icon-attachment mr-1"></i>
									<strong>2015</strong>
								</li>
								<li class="h-area">Year Built</li>
							</ul>
						</div>
						<!-- <?php include 'inc/listing/templates/item-btn.php';?> -->
					</div><!-- lightbox-content-wrap -->
				</div><!-- modal-body -->
				<div class="modal-footer">
					$1,990,000 <span class="separator">|</span> 4 Beds <span class="separator">|</span> 3 Baths <span class="separator">|</span> 1,899 Sq Ft
				</div><!-- modal-footer -->
			</div><!-- modal-content -->
		</div><!-- modal-dialog -->
	</div><!-- modal -->
</div><!-- property-lightbox -->


</template>
<script setup>
import PropertyLightboxGallery from '../../property/templates/PropertyLightboxGallery.vue';
import ItemAddress from './ItemAddress.vue';
import ItemLabels from './ItemLabels.vue';
import ItemPrice from './ItemPrice.vue';
import ItemTitle from './ItemTitle.vue';
</script>