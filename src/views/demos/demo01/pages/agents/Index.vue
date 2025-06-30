<template>
    <section class="content-wrap">
        <div class="container">
            <div class="agent-profile-wrap">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="agent-image">
                            <div class="agent-company-logo">
                                <img class="img-fluid" src="F:\naraish\webpenter\houzez\houzez-vue.js\src\assets\img\app-side\logo-houzez-color.png" alt="company logo">
                            </div>
                            <img class="img-fluid" src="F:\naraish\webpenter\houzez\houzez-vue.js\src\assets\img\app-side\agent.jpg" alt="">
                        </div><!-- agent-image -->
                    </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <div class="agent-profile-top-wrap">
                            <div class="agent-profile-header">
                                <h1>Brittany Watkins <span class="badge badge-success agent-verified-badge"><i class="houzez-icon icon-check-circle-1 mr-1"></i> Verified</span></h1>
                                <div class="rating-score-wrap">
                                    <span class="rating-score-text">3.4</span>
                                    <span class="star">
                                        <span class="icon-rating full-star"></span>
                                        <span class="icon-rating full-star"></span>
                                        <span class="icon-rating full-star"></span>
                                        <span class="icon-rating half-star"></span>
                                        <span class="icon-rating empty-star"></span>
                                    </span><!-- star -->
                                    <a href="#tab-content">See all reviews</a>
                                </div><!-- rating-score-wrap -->  
                            </div><!-- agent-profile-content -->
                            <p class="agent-list-position"> Senior Real Estate Agent at <a href="#">Modern House Real Estate</a></p>
                        </div><!-- agent-profile-header -->
                        <div class="agent-profile-content">
                            <ul class="list-unstyled">
                                <li><strong>Agent License:</strong> 090-0348-8346</li>
                                <li><strong>Tax Number:</strong> HGT-92384-3434</li>
                                <li><strong>Service Areas:</strong> Grand Rapids, Forest Hills, Comstock Park, Caledonia, Kentwood, Grandville, Rockford, Walker, Belmont, Lowell</li>
                                <li><strong>Specialties:</strong> Property Management, Consulting, Buyer's Agent, Listing Agent, Relocation</li>
                            </ul>
                        </div><!-- agent-profile-content -->
                        <div class="agent-profile-buttons">
                            <button class="btn btn-secondary" data-toggle="modal" data-target="#mobile-property-form">Send Email</button>
                            <button type="button" class="btn btn-call">
                                <span class="hide-on-click">Call</span>
                                <span class="show-on-click">(987) 345 8765</span>
                            </button>
                        </div><!-- agent-profile-buttons -->
                    </div><!-- col-lg-8 col-md-8 col-sm-12 -->
                </div><!-- row -->
            </div><!-- agent-profile-wrap -->
            <div class="agent-stats-wrap">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                         <StatsPropertyTypes />
                    </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <StatsPropertyStatus />
                    </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <StatsPropertyCities />
                    </div><!-- col-lg-4 col-md-4 col-sm-12 -->
                </div>
            </div><!-- agent-stats-wrap -->

            <div class="row">
                <div class="col-lg-8 col-md-12 bt-content-wrap">

                    <div class="agent-bio-wrap">
                        <h2>About Brittany Watkins</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet ullamcorper nisl, sed venenatis massa eleifend a. Sed at turpis id est dapibus fermentum at ac orci. Maecenas purus leo, feugiat vel lacinia non, dignissim sed nisl. Cras sit amet arcu quis mauris commodo commodo quis a quam. Etiam vitae aliquet eros. Etiam pharetra ultrices risus, eu pellentesque odio cursus sed. In ligula enim, dignissim id posuere placerat, scelerisque sit amet ipsum. Nunc ut nibh dignissim enim iaculis.</p>
                        <p><i class="houzez-icon icon-messages-bubble mr-1"></i> <strong>Languages:</strong> English, Spanish, French</p>
                    </div><!-- agent-bio-wrap --> 

                    <div class="agent-nav-wrap">
                        <ul class="nav nav-pills nav-justified">
                            <li class="nav-item">
                                <a class="nav-link active" href="#tab-properties" data-toggle="pill" role="tab">Listings (20)</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#tab-reviews" data-toggle="pill" role="tab">Reviews (3)</a>
                            </li>
                        </ul>
                    </div><!-- agent-nav-wrap -->

                    <div class="tab-content" id="tab-content">
                        <div class="tab-pane fade show active" id="tab-properties">
                            <div class="listing-tools-wrap">
                                <div class="d-flex align-items-center">
                                    <div class="listing-tabs flex-grow-1">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#">All</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">For Sale</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">For Rent</a>
                                            </li>
                                        </ul><!-- nav-tabs -->
                                    </div><!-- listing-tabs -->
                                                                        <div class="sort-by">
                                        <div class="d-flex align-items-center">
                                            <div class="sort-by-title">
                                                Sort by:
                                            </div><!-- sort-by-title -->  
                                            <select class="selectpicker form-control bs-select-hidden" title="Default Order" data-live-search="false" data-dropdown-align-right="auto">
                                                <option>Default Order</option>
                                                <option>Price - Hight to Low</option>
                                                <option>Price - Low to Hight</option>
                                                <option>Featured First</option>
                                                <option>Date - New to Old</option>
                                                <option>Date - Old to New</option>
                                            </select><!-- selectpicker -->
                                        </div><!-- d-flex -->
                                    </div><!-- sort-by -->
                                </div><!-- d-flex -->
                            </div><!-- listing-tools-wrap -->
                            <div class="listing-view list-view">
                                <!-- <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>
                                <?php include 'inc/listing/item-v1.php';?>     -->
                                this is created
                            </div><!-- listing-view -->
                            <div class="load-more-wrap">
                                <a class="btn btn-primary-outlined btn-load-more" href="#">Load More</a>    
                            </div><!-- load-more-wrap -->
                        </div><!-- tab-pane -->
                        <div class="tab-pane fade" id="tab-reviews">
                            <!-- <?php include 'inc/property/property-reviews.php';?> -->
                             this is created
                        </div><!-- tab-pane -->
                    </div><!-- tab-content -->


                </div><!-- bt-content-wrap -->
                <div class="col-lg-4 col-md-12 bt-sidebar-wrap">
                    <aside class="sidebar-wrap">
                        <AgentContact />
                    </aside>
                </div><!-- bt-sidebar-wrap -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- listing-wrap -->
</template>

<script setup>
import StatsPropertyTypes from '@/views/demos/components/agents/StatsPropertyTypes.vue';    
import StatsPropertyStatus from '@/views/demos/components/agents/StatsPropertyStatus.vue';
import StatsPropertyCities from '@/views/demos/components/agents/StatsPropertyCities.vue';   
import AgentContact from '@/views/demos/components/agents/AgentContact.vue';   
</script>