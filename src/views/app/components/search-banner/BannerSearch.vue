<template>
    <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist" style="margin-top: 65px;">
        <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">All Status</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">For Rent</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                aria-controls="pills-profile" aria-selected="false">For Sale</a>
        </li>
    </ul><!-- nav -->
    <div class="advanced-search-banner-wrap">
        <div class="d-flex flex-sm-max-column">
            <div class="flex-grow-1 flex-search">
                <!-- <?php include 'inc/search/fields/search-field.php';?> -->
                <div class="form-group">
                    <div class="search-icon">
                        <input type="text" class="form-control" placeholder="Search">
                    </div><!-- search-icon -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
            <div class="flex-search">
                <!-- <?php include 'inc/search/fields/submit-button.php';?> -->
                <button type="submit" class="btn btn-search btn-secondary btn-full-width">Search</button>
            </div><!-- flex-search -->
        </div><!-- d-flex -->
        <div class="d-flex flex-sm-max-column">
            <div class="flex-search flex-sm-max-column">
                <!-- <?php include 'inc/search/fields/cities-field.php';?> -->
                <div class="form-group">
                    <select class="selectpicker form-control bs-select-hidden" title="Cities" data-live-search="false"
                        data-selected-text-format="count" multiple data-actions-box="true">
                        <option data-subtext="Illinois">Chicago</option>
                        <option data-subtext="Florida">Miami</option>
                        <option data-subtext="New York">New York</option>
                        <option data-subtext="California">San Francisco</option>
                    </select><!-- selectpicker -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
            <div class="flex-search">
                <!-- <?php include 'inc/search/fields/type-field.php';?> -->
                <div class="form-group">
                    <select class="selectpicker form-control bs-select-hidden" title="Type" data-live-search="false"
                        data-selected-text-format="count" multiple data-actions-box="true">
                        <option>Apartment</option>
                        <option>Condo</option>
                        <option>Loft</option>
                        <option>Multi Family Home</option>
                        <option>Single Family Home</option>
                        <option>Townhouse</option>
                    </select><!-- selectpicker -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
            <div class="flex-search">
                <!-- <?php include 'inc/search/fields/min-price-field.php';?> -->
                <div class="form-group">
                    <select class="selectpicker form-control bs-select-hidden" title="Min. Price"
                        data-live-search="false">
                        <option>Any</option>
                        <option>$5,000</option>
                        <option>$10,000</option>
                        <option>$50,000</option>
                        <option>$100,000</option>
                        <option>$200,000</option>
                        <option>$300,000</option>
                        <option>$400,000</option>
                        <option>$500,000</option>
                    </select><!-- selectpicker -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
            <div class="flex-search">
                <!-- <?php include 'inc/search/fields/max-price-field.php';?> -->
                <div class="form-group">
                    <select class="selectpicker form-control bs-select-hidden" title="Max. Price"
                        data-live-search="false">
                        <option>Any</option>
                        <option>$5,000</option>
                        <option>$10,000</option>
                        <option>$50,000</option>
                        <option>$100,000</option>
                        <option>$200,000</option>
                        <option>$300,000</option>
                        <option>$400,000</option>
                        <option>$500,000</option>
                    </select><!-- selectpicker -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
        </div><!-- d-flex -->

        <!--/////////////////// MORE OPTION  //////////////-->
        <div class="advanced-search-banner-options-wrap">
            <a class="btn-features-list" data-toggle="collapse" href="#more-options-list">
                <i class="houzez-icon icon-add-square"></i> More Options
            </a><!-- btn-features-list -->
            <div id="more-options-list" class="collapse">
                <div class="more-options-wrap">
                    <div class="d-flex flex-sm-max-column">
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/bedrooms-field.php';?> -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/bathrooms-field.php';?> -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/min-area-field.php';?> -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/max-area-field.php';?> -->
                        </div><!-- flex-search -->
                    </div><!-- d-flex -->
                    <div class="d-flex flex-sm-max-column">
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/labels-field.php';?> -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/property-id-field.php';?> -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/countries-field.php';?> -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <!-- <?php include 'inc/search/fields/states-field.php';?> -->
                        </div><!-- flex-search -->
                    </div><!-- d-flex -->
                    <div class="features-list">
                        <!-- <?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?>
					<?php include 'inc/search/fields/feature-field.php';?> -->
                    </div><!-- features-list -->
                </div>
            </div><!-- collapse -->
        </div><!-- features-list-wrap -->
        
    </div><!-- search-banner-wrap -->
</template>