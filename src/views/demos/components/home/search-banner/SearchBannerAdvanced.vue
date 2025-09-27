<template>
    <ul 
    id="pills-tab" 
    class="nav nav-pills justify-content-center" role="tablist"
        style="margin-top: 65px; cursor: pointer;">
        <li class="nav-item">
            <a 
            id="pills-home-tab"
            class="nav-link active"  data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">All Status</a>
        </li>
        <li class="nav-item">
            <a 
            id="pills-home-tab"
            class="nav-link"  data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">For Rent</a>
        </li>
        <li class="nav-item">
            <a 
            id="pills-profile-tab" 
            class="nav-link" data-toggle="pill" href="#pills-profile" role="tab"
                aria-controls="pills-profile" aria-selected="false">For Sale</a>
        </li>
    </ul><!-- nav -->
    <div class="advanced-search-banner-wrap">
        <div class="d-flex flex-sm-max-column">
            <div class="flex-grow-1 flex-search">
                <div class="form-group">
                    <div class="search-icon">
                        <input type="text" class="form-control" placeholder="Search">
                    </div><!-- search-icon -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
            <div class="flex-search">
                <button type="submit" class="btn btn-search btn-secondary btn-full-width">Search</button>
            </div><!-- flex-search -->
        </div><!-- d-flex -->
        <div class="d-flex flex-sm-max-column">
            <div class="flex-search flex-sm-max-column">
                <div class="form-group">
                    <select 
                    class="selectpicker form-control bs-select-hidden" title="Cities" data-live-search="false"
                        data-selected-text-format="count" multiple data-actions-box="true">
                        <option data-subtext="Illinois">Chicago</option>
                        <option data-subtext="Florida">Miami</option>
                        <option data-subtext="New York">New York</option>
                        <option data-subtext="California">San Francisco</option>
                    </select><!-- selectpicker -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
            <div class="flex-search">
                <div class="form-group">
                    <select 
                    class="selectpicker form-control bs-select-hidden" title="Type" data-live-search="false"
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
                <div class="form-group">
                    <select
                     class="selectpicker form-control bs-select-hidden" title="Min. Price"
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
                <div class="form-group">
                    <select 
                    class="selectpicker form-control bs-select-hidden" title="Max. Price"
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
        <div class="advanced-search-banner-options-wrap">
            <a class="btn-features-list" data-toggle="collapse" href="#more-options-list">
                <i class="houzez-icon icon-add-square"></i> More Options
            </a><!-- btn-features-list -->
            <div id="more-options-list" class="collapse">
                <div class="more-options-wrap">
                    <div class="d-flex flex-sm-max-column">
                        <div class="flex-search">
                            <div class="form-group">
                                <select 
                                class="selectpicker form-control bs-select-hidden" title="Bathrooms"
                                    data-live-search="false">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select><!-- selectpicker -->
                            </div>
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <div class="form-group">
                                <select 
                                class="selectpicker form-control bs-select-hidden" title="Bathrooms"
                                    data-live-search="false">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select><!-- selectpicker -->
                            </div>
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Min. Area (Sq Ft)">
                            </div><!-- form-group -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Max. Area (Sq Ft)">
                            </div><!-- form-group -->
                        </div><!-- flex-search -->
                    </div><!-- d-flex -->
                    <div class="d-flex flex-sm-max-column">
                        <div class="flex-search">
                            <div class="form-group">
                                <select
                                 class="selectpicker form-control bs-select-hidden" title="Labels"
                                    data-live-search="false" data-selected-text-format="count" multiple
                                    data-actions-box="true">
                                    <option>Hot Offer</option>
                                    <option>Open House</option>
                                    <option>Sold</option>
                                </select><!-- selectpicker -->
                            </div><!-- form-group -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Property ID">
                            </div>
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <div class="form-group">
                                <select 
                                class="selectpicker form-control bs-select-hidden" title="Countries"
                                    data-live-search="false" data-selected-text-format="count" multiple
                                    data-actions-box="true">
                                    <option data-subtext="Illinois">Argentina</option>
                                    <option data-subtext="Florida">Australia</option>
                                    <option data-subtext="New York">Canada</option>
                                    <option data-subtext="California">United Kindom</option>
                                </select><!-- selectpicker -->
                            </div><!-- form-group -->
                        </div><!-- flex-search -->
                        <div class="flex-search">
                            <div class="form-group">
                                <select
                                 class="selectpicker form-control bs-select-hidden" title="States"
                                    data-live-search="false" data-selected-text-format="count" multiple
                                    data-actions-box="true">
                                    <option data-subtext="Illinois">Argentina</option>
                                    <option data-subtext="Florida">Australia</option>
                                    <option data-subtext="New York">Canada</option>
                                    <option data-subtext="California">United Kindom</option>
                                </select><!-- selectpicker -->
                            </div><!-- form-group -->
                        </div><!-- flex-search -->
                    </div><!-- d-flex -->
                    <div class="features-list">
                        <label class="control control--checkbox">
                            <input type="checkbox" name="air-conditioning">Option
                            <span class="control__indicator"></span>
                        </label>
                        <label class="control control--checkbox">
                            <input type="checkbox" name="air-conditioning">Option
                            <span class="control__indicator"></span>
                        </label>
                        <label class="control control--checkbox">
                            <input type="checkbox" name="air-conditioning">Option
                            <span class="control__indicator"></span>
                        </label>
                        <label class="control control--checkbox">
                            <input type="checkbox" name="air-conditioning">Option
                            <span class="control__indicator"></span>
                        </label>
                    </div><!-- features-list -->
                </div>
            </div><!-- collapse -->
        </div><!-- features-list-wrap -->
    </div><!-- search-banner-wrap -->
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import 'bootstrap-select';

onMounted(async () => {
  await nextTick();
  $('.selectpicker').selectpicker(); // initialize all selectpickers
});
</script>