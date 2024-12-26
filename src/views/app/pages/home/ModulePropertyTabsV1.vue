<template>    
        <section class="content-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        
                        <h2 style="margin: 30px 0; text-align: center;">Property Tabs Module v. 1</h2>

                        <div class="property-tabs-module property-nav-tabs-v3 property-tabs-module-v6">
                            <ul class="nav nav-tabs justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tab_01" role="tab">
                                        <i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i> <span class="tab-title">Tab Title</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tab_02" role="tab">
                                        <i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i> <span class="tab-title">Tab Title</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tab_03" role="tab">
                                        <i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i> <span class="tab-title">Tab Title</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="property-tabs-module-tab-pane tab-pane fade show active" id="tab_01" role="tabpanel">
                                    <div class="listing-grid-view listing-grid-view-4-cols">
                                       <PropertyGridCardsV6Cols3/>
                                    </div><!-- listing-grid-view listing-grid-view-4-cols -->
                                </div>
                                <div class="property-tabs-module-tab-pane tab-pane fade" id="tab_02" role="tabpanel">
                                    <div class="listing-grid-view listing-grid-view-4-cols">
                                        <PropertyGridCardsV6Cols3/>
                                    </div><!-- listing-grid-view listing-grid-view-4-cols -->
                                </div>
                                <div class="property-tabs-module-tab-pane tab-pane fade" id="tab_03" role="tabpanel">
                                    <div class="listing-grid-view listing-grid-view-4-cols">
                                        <PropertyGridCardsV6Cols3/>
                                    </div><!-- listing-grid-view listing-grid-view-4-cols -->
                                </div>
                            </div>
                            <div class="loader-ripple spinner">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>                            
                        </div><!-- property-tabs-module -->  

                    </div><!-- col-12 -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->  
</template>

<script setup>
import PropertyGridCardsV6Cols3 from '../../modules/PropertyGridCardsV6Cols3.vue';
</script>