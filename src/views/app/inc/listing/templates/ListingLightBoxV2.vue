<template>
    <div class="property-lightbox-v2">
	<div class="modal fade" id="listing-lightbox-v2" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<div class="back-btn-wrap">
						<a href="#"><i class="houzez-icon icon-arrow-left-1"></i> Back</a>
					</div>
					<div class="lightbox-logo">
						<img class="img-fluid" src="/img/logo-houzez-color.png" alt="logo" width="100" height="19">
					</div><!-- lightbox-logo -->
					<ul class="property-lightbox-v2-item-tools">
						<li class="property-lightbox-v2-item-tool">
					        <span class="item-tool-expand btn-primary-outlined">
					            <i class="houzez-icon icon-expand-3"></i>
					        </span><!-- item-tool-expand -->
					    </li><!-- item-tool -->
					    <li class="property-lightbox-v2-item-tool">
					        <span class="item-tool-favorite btn-primary-outlined">
					            <i class="houzez-icon icon-love-it"></i> <!-- use this for un-favorite <i class="houzez-icon icon-love-it-remove"></i> -->
					        </span><!-- item-tool-favorite -->
					    </li><!-- item-tool -->
					    <li class="property-lightbox-v2-item-tool houzez-print">
					        <span class="btn-primary-outlined item-tool-print">
					            <i class="houzez-icon icon-print-text"></i>
					        </span><!-- item-tool-compare -->
					    </li><!-- item-tool -->
					    <li class="property-lightbox-v2-item-tool">
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
					    <li class="property-lightbox-v2-item-tool houzez-print">
					        <span class="btn-primary-outlined item-tool-print" data-dismiss="modal">
					            <i class="houzez-icon icon-close"></i>
					        </span><!-- item-tool-compare -->
					    </li><!-- item-tool -->
					</ul><!-- item-tools -->
				</div><!-- modal-header -->

				<div class="property-lightbox-v2-content-wrap">
					<div class="property-lightbox-v2-gallery">
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
						<a href="#" class="property-lightbox-v2-gallery-item">
							<img class="img-fluid" src="https://placehold.co/800x600" alt="">
						</a>
					</div><!-- property-lightbox-v2-gallery -->
					<div class="property-lightbox-v2-content">
						<div class="property-lightbox-v2-carousel">
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
							<a href="#" class="property-lightbox-v2-gallery-item">
								<img class="img-fluid" src="https://placehold.co/1280x1024" alt="">
							</a>
						</div><!-- property-lightbox-v2-gallery -->
						<div class="property-lightbox-v2-section property-lightbox-v2-section-top clearfix">
							<div class="property-lightbox-v2-section-top-content">
								<!--
								<div class="property-lightbox-v2-labels-wrap">
									<span class="label-featured label">Featured</span>
									<span class="label-status label">For Sale</span>
									<span class="label-status label">Label</span>
									<span class="label-status label">Label</span>
								</div> 
								-->
								<!-- <?php // include 'inc/listing/templates/item-title.php';?> -->
								<ul class="item-price-wrap">
									<li class="item-price">
										<!-- <span class="price-prefix">From </span> -->
										$347,000 
										<!-- <span class="price-postfix">/mo</span> -->
									</li>
									<!-- <li class="item-sub-price">$1,200/Sq Ft</li> -->
								</ul>
								<!-- <?php include 'inc/listing/templates/item-address.php';?> -->
								<!-- <?php include 'inc/listing/templates/item-features-v1.php';?> -->
								<div class="property-lightbox-v2-contact-buttons-wrap">
									<button type="button" class="btn btn-secondary-outlined btn-half-width">Schedule a Tour</button>
									<button type="button" class="btn btn-secondary btn-half-width">Contact</button>
								</div><!-- property-lightbox-v2-contact-buttons-wrap -->
							</div><!-- property-lightbox-v2-section-top-content -->
							<div class="property-lightbox-v2-sections-navigation-wrap">
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
							</div><!-- property-lightbox-v2-sections-navigation-wrap -->
						</div><!-- property-lightbox-v2-section-top -->
						<div class="property-lightbox-v2-sections-wrap" data-spy="scroll" data-target="#property-lightbox-v2-sections-navigation">
							<div id="overview-section" class="property-lightbox-v2-section clearfix">
								<!-- <?php include 'inc/property/property-overview-block-modal-window.php';?> -->
							</div>
							<div id="description-section" class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-description-block.php';?> -->
	                        </div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-schedule-a-tour-block-v2.php';?> -->
	                        </div>
							<!-- <div class="property-lightbox-v2-section clearfix"> -->
	                            <!-- <?php //include 'inc/property/property-gallery-block.php';?> -->
	                        <!-- </div> -->
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-address-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">                            
	                            <!-- <?php include 'inc/property/property-detail-block.php';?> -->
							</div>
							<!-- <div class="property-lightbox-v2-section clearfix"> -->
	                            <!-- <?php //include 'inc/property/property-mortgage-calculator-block.php';?> -->
							<!-- </div> -->
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-morgage-calculator-block-v2.php';?> -->
							</div>
							<!-- <div class="property-lightbox-v2-section clearfix"> -->
	                            <!-- <?php //include 'inc/property/property-sub-listings-table-block.php';?> -->
							<!-- </div> -->
							<div class="property-lightbox-v2-section clearfix">
	                            <div class="property-sub-listings-wrap property-section-wrap" id="property-sub-listings-wrap">
									<div class="block-wrap">
										<div class="block-title-wrap">
											<h2>Sub Listings</h2>
										</div><!-- block-title-wrap -->
										<div class="block-content-wrap">
											<div class="container">
												<div class="listing-view grid-view card-deck ">
													<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
													<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
													<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
													<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
												</div><!-- listing-view -->	
											</div>
										</div><!-- block-content-wrap -->
									</div><!-- block-wrap -->
								</div><!-- property-address-wrap -->
							</div>
							<div class="property-lightbox-v2-section clearfix">   
	                            <!-- <?php include 'inc/property/property-energy-class-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-features-block-with-custom-icons.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-floor-plans-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-walkscore-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-walkscore-block-v2.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-nearby-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-video-block.php';?> -->
							</div>
							<!-- <div class="property-lightbox-v2-section clearfix"> -->
	                            <!-- <?php //include 'inc/property/property-schedule-a-tour-block.php';?> -->
							<!-- </div> -->
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-virtual-tour-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-availability-calendar-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-agent-block.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <!-- <?php include 'inc/property/property-reviews.php';?> -->
							</div>
							<div class="property-lightbox-v2-section clearfix">
	                            <div class="similar-property-wrap">
									<div class="block-title-wrap">
										<h2>Similar Properties</h2>
									</div><!-- block-title-wrap -->
									<div class="block-content-wrap">
										<div class="container">
											<div class="listing-view grid-view card-deck ">
												<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
												<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
												<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
												<!-- <?php include 'inc/listing/item-v6-modal-window-v2.php';?> -->
											</div><!-- listing-view -->	
										</div>
									</div><!-- block-content-wrap -->
								</div><!-- similar-property-wrap -->
							</div>
						</div><!-- property-lightbox-v2-sections-wrap -->
					</div><!-- property-lightbox-v2-content -->
				</div><!-- property-lightbox-v2-content-wrap -->				
			</div><!-- modal-content -->
		</div><!-- modal-dialog -->
	</div><!-- modal -->
</div><!-- property-lightbox -->


</template>

<script setup></script>