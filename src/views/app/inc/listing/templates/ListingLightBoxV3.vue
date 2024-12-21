<template>
    <div class="property-lightbox-v3">
	<div class="modal fade" id="listing-lightbox-v3" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="property-lightbox-v3-modal-header modal-header">
					<div class="back-btn-wrap">
						<a href="#"><i class="houzez-icon icon-arrow-left-1"></i> Back</a>
					</div>
					<div class="lightbox-logo">
						<img class="img-fluid" src="/img/logo-houzez-color.png" alt="logo" width="100" height="19">
					</div><!-- lightbox-logo -->
					<ul class="property-lightbox-v3-item-tools">
						<li class="property-lightbox-v3-item-tool">
					        <span class="item-tool-expand btn-primary-outlined">
					            <i class="houzez-icon icon-expand-3"></i>
					        </span><!-- item-tool-expand -->
					    </li><!-- item-tool -->
					    <li class="property-lightbox-v3-item-tool">
					        <span class="item-tool-favorite btn-primary-outlined">
					            <i class="houzez-icon icon-love-it"></i> <!-- use this for un-favorite <i class="houzez-icon icon-love-it-remove"></i> -->
					        </span><!-- item-tool-favorite -->
					    </li><!-- item-tool -->
					    <li class="property-lightbox-v3-item-tool houzez-print">
					        <span class="btn-primary-outlined item-tool-print">
					            <i class="houzez-icon icon-print-text"></i>
					        </span><!-- item-tool-compare -->
					    </li><!-- item-tool -->
					    <li class="property-lightbox-v3-item-tool">
					        <span class="item-tool-share  btn-primary-outlined dropdown-toggle" data-toggle="dropdown">
					            <i class="houzez-icon icon-share"></i>
					        </span><!-- item-tool-favorite -->
					        <div class="dropdown-menu dropdown-menu-right item-tool-dropdown-menu">
					            <div class="dropdown-item" href="#">Share on:</div>
					            <a class="dropdown-item" href="#">
					                <i class="houzez-icon icon-social-media-facebook mr-1"></i> Facebook
					            </a>
					            <a class="dropdown-item" href="#">
					                <i class="houzez-icon icon-x-logo-twitter-logo-2 mr-1"></i> Twitter
					            </a>
					            <a class="dropdown-item" href="#">
					                <i class="houzez-icon icon-social-pinterest mr-1"></i> Pinterest
					            </a>
					            <a class="dropdown-item" href="#">
					                <i class="houzez-icon icon-professional-network-linkedin mr-1"></i> Linkedin
					            </a>
					            <a class="dropdown-item" href="#">
					                <i class="houzez-icon icon-social-media-google-plus-1 mr-1"></i> Google Plus
					            </a>
					            <a class="dropdown-item" href="#">
					                <i class="houzez-icon icon-envelope mr-1"></i> Email
					            </a>
					        </div>
					    </li><!-- item-tool -->
					    <li class="property-lightbox-v3-item-tool houzez-print">
					        <span class="btn-primary-outlined item-tool-print" data-dismiss="modal">
					            <i class="houzez-icon icon-close"></i>
					        </span><!-- item-tool-compare -->
					    </li><!-- item-tool -->
					</ul><!-- item-tools -->
				</div><!-- modal-header -->

				<div class="property-lightbox-v3-sections-navigation-wrap">
					<nav id="property-lightbox-v3-sections-navigation" class="navbar">
						<ul class="nav property-lightbox-nav">
							<li class="nav-item nav-item-active">
								<a class="nav-link" href="#overview-section">Overview</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#description-section">Description</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Schedule a Tour</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Address</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Detail</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Morgage Calculator</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Sub Listings</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Energy Efficiency</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Features</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Floor Plans</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Walkscore</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">What's Nearby?</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Video</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">360° Virtual Tour</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Availability</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Contact Agent</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Reviews</a>
							</li>
						</ul>
					</nav>
				</div><!-- property-lightbox-v3-sections-navigation-wrap -->

				<div class="property-lightbox-v3-content-wrap">
					<div class="property-lightbox-v3-content">
						<div class="property-lightbox-v3-gallery">
							<div class="property-lightbox-v3-section">
	                			<div class="property-banner-grid-wrap">
									<div class="property-banner-inner-left">
										<div class="property-banner-item">
											<a href="#">
												<img class="img-fluid" src="https://placehold.co/932x703">
											</a>
										</div><!-- property-banner-item -->
									</div><!-- .property-banner-inner-left -->
									<div class="property-banner-inner-rght">
										<div class="property-banner-item">
											<a href="#">
												<img class="img-fluid" src="https://placehold.co/932x699">
											</a>
										</div><!-- property-banner-item -->
										<div class="property-banner-item">
											<a href="#">
												<img class="img-fluid" src="https://placehold.co/932x699">
											</a>
										</div><!-- property-banner-item -->
										<div class="property-banner-item">
											<a href="#">
												<img class="img-fluid" src="https://placehold.co/932x699">
											</a>
										</div><!-- property-banner-item -->
										<div class="property-banner-item">
											<a href="#">
												<div class="img-wrap-3-text"><i class="houzez-icon icon-picture-sun mr-1"></i> 8 More</div>
												<img class="img-fluid" src="https://placehold.co/932x699">
											</a>
										</div><!-- property-banner-item -->
									</div> <!-- .property-banner-inner-right -->
								</div><!-- .property-banner-grid-wrap -->
	            			</div><!-- property-top-wrap -->  
	            		</div><!-- .property-lightbox-v3-gallery -->

	            		<div class="property-lightbox-v3-content-left-right-wrap">
	            			<div class="property-lightbox-v3-content-left">
								<div class="property-lightbox-v3-section property-lightbox-v3-section-top clearfix">
									<div class="property-lightbox-v3-section-top-content">
										<div class="property-lightbox-v3-labels-wrap">
											<span class="label-featured label">Featured</span>
											<span class="label-status label">For Sale</span>
											<span class="label-status label">Label</span>
											<span class="label-status label">Label</span>
										</div> 
										 <ItemTitle />
										<ul class="item-price-wrap">
											<li class="item-price">
												<span class="price-prefix">From </span>
												$347,000 
												<span class="price-postfix">/mo</span>
											</li>
											<li class="item-sub-price">$1,200/Sq Ft</li>
										</ul>
										 <ItemAdress />

									</div><!-- property-lightbox-v3-section-top-content -->
									<div class="property-lightbox-v2-contact-buttons-wrap">
										<button type="button" class="btn btn-secondary-outlined">Schedule a Tour</button>
										<button type="button" class="btn btn-secondary">Contact</button>
									</div><!-- property-lightbox-v2-contact-buttons-wrap -->
								</div><!-- property-lightbox-v3-section-top -->
								<div class="property-lightbox-v3-sections-wrap" data-spy="scroll" data-target="#property-lightbox-v3-sections-navigation">
									<div id="overview-section" class="property-lightbox-v3-section clearfix">
										 <PropertyOverviewBlockModalWindow />
									</div>
									<div id="description-section" class="property-lightbox-v3-section clearfix">
										 <PropertyDescriptionBlock />
			                        </div>
									<!-- <div class="property-lightbox-v3-section clearfix"> -->
										 <PropertyGalleryBlock />
			                        <!-- </div> -->
									<div class="property-lightbox-v3-section clearfix">
										 <PropertyAddressBlock />
									</div>
									<div class="property-lightbox-v3-section no-border clearfix">                            
										 <PropertyDetailBlock />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										 <PropertyMorgageCalculatorBlockV2 />
									</div>
									<div class="property-lightbox-v3-section clearfix">
			                            <div class="property-sub-listings-wrap property-section-wrap" id="property-sub-listings-wrap">
											<div class="block-wrap">
												<div class="block-title-wrap">
													<h2>Sub Listings</h2>
												</div><!-- block-title-wrap -->
												<div class="block-content-wrap">
													<div class="container">
														<div class="listing-view grid-view card-deck ">
															
															 <ItemV6ModalWindowV2 />
															 <ItemV6ModalWindowV2 />
															 <ItemV6ModalWindowV2 />
														</div><!-- listing-view -->	
													</div>
												</div><!-- block-content-wrap -->
											</div><!-- block-wrap -->
										</div><!-- property-address-wrap -->
									</div>
									<div class="property-lightbox-v3-section clearfix">   
										 <PropertyEnergyClassBlock />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										 <PropertyFeaturesBlockWithCousronIcons />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										 <propertyFloorPlansBlock />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										 <PropertyWalkscoreBlockV2Vue />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										<PropertyAgentBlockV2 />
									</div>
									<div class="property-lightbox-v3-section clearfix">
			                          <PropertyNearbyBlock />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										 <PropertyVideoBlock />

									</div>
									<div class="property-lightbox-v3-section clearfix">
			                            <PropertyVirtualTourBlock />
										<PropertyAgentBlockVue />

									</div>
									<div class="property-lightbox-v3-section clearfix">
										<PropertyAvailabilityCalendarBlock />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										 <PropertyAgentBlock />
									</div>
									<div class="property-lightbox-v3-section clearfix">
										<PropertyReviewsVue />
									</div>
									<div class="property-lightbox-v3-section clearfix">
			                            <div class="similar-property-wrap">
											<div class="block-title-wrap">
												<h2>Similar Properties</h2>
											</div><!-- block-title-wrap -->
											<div class="block-content-wrap">
												<div class="container">
													<div class="listing-view grid-view card-deck ">
														<ItemV6ModelWindowV2Vue />
														<ItemV6ModelWindowV2Vue />
														<ItemV6ModelWindowV2Vue />
														<ItemV6ModelWindowV2Vue />
													</div><!-- listing-view -->	
												</div>
											</div><!-- block-content-wrap -->
										</div><!-- similar-property-wrap -->
									</div>
								</div><!-- property-lightbox-v3-sections-wrap -->
							</div><!-- .property-lightbox-v3-content-left -->
							<div class="property-lightbox-v3-content-right">
	                            <aside class="sidebar-wrap">
									<!-- <?php include 'inc/property/property-form-tabs.php';?> -->
								</aside><!-- sidebar-wrap -->
							</div><!-- .property-lightbox-v3-content-right -->
	            		</div><!-- .property-lightbox-v3-content-left-right-wrap -->

					</div><!-- property-lightbox-v3-content -->
					

				</div><!-- property-lightbox-v3-content-wrap -->				
			</div><!-- modal-content -->
		</div><!-- modal-dialog -->
	</div><!-- modal -->
</div><!-- property-lightbox -->
</template>
<script setup >
import PropertyAgentBlockVue from "../../property/PropertyAgentBlock.vue";
import PropertyReviewsVue from "../../property/PropertyReviews.vue";
import ItemV6ModelWindowV2Vue from "../ItemV6ModelWindowV2.vue";
import PropertyNearbyBlock from "../../property/PropertyNearbyBlock.vue";
import PropertyWalkscoreBlockV2Vue from "../../property/PropertyWalkscoreBlockV2.vue";
import PropertyEnergyClassBlock from "../../property/PropertyEnergyClassBlock.vue";
import ItemV6ModalWindowV2 from "../ItemV6ModalWindowV2.vue";
import PropertyMorgageCalculatorBlockV2 from "../../property/PropertyMorgageCalculatorBlockV2.vue";
import PropertyDetailBlock from "../../property/PropertyDetailBlock.vue";
import PropertyAddressBlock from "../../property/PropertyAddressBlock.vue";
import PropertyGalleryBlock from "../../property/PropertyGalleryBlock.vue";
import PropertyDescriptionBlock from "../../property/PropertyDescriptionBlock.vue";
import PropertyOverviewBlockModalWindow from "../../property/PropertyOverviewBlockModalWindow.vue";
import ItemTitle from "./ItemTitle.vue";
import PropertyAvailabilityCalendarBlock from "../../property/PropertyAvailabilityCalendarBlock.vue"; 
import PropertyVirtualTourBlock from "../../property/PropertyVirtualTourBlock.vue";
</script>