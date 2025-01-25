<template>
<header class="header-main-wrap dashboard-header-main-wrap">
            <div class="dashboard-header-wrap">
                <div class="d-flex align-items-center">
                    <div class="dashboard-header-left flex-grow-1">
                        
                         <BreadCrumb />
                        <h1>Details</h1>         
                    </div><!-- dashboard-header-left -->
                    <div class="dashboard-header-right">

                    </div><!-- dashboard-header-right -->
                </div><!-- d-flex -->
            </div><!-- dashboard-header-wrap -->
        </header><!-- .header-main-wrap -->
<section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="dashboard-content-block">
                                <LeadEnquiryDetail />
                            </div><!-- dashboard-content-block -->       
                        </div><!-- col-md-4 col-sm-12 -->
                        <div class="col-md-8 col-sm-12">
                            <ul class="nav nav-pills lead-nav-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#matching-listings" role="tab">Matching Listings</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#notes" role="tab">Notes</a>
                                </li>
                                <li class="nav-item ml-auto">
                                    <a class="nav-link text-primary" href="#">Back</a>
                                </li>
                            </ul>
                            <div class="dashboard-content-block tab-content">
                                <div class="tab-pane fade show active" id="matching-listings" role="tabpanel">
                                    <div class="d-flex justify-content-between mb-3">
                                        <div><strong>6 Listings</strong> found on file</div> 
                                        <div>
                                            <a href="#" class="btn btn-primary btn-slim"><i class="houzez-icon icon-envelope mr-1"></i> Send Via Email</a>
                                        </div>    
                                    </div>

                                    <LeadTableMatchingListings />
                                </div>
                                <div class="tab-pane fade" id="notes" role="tabpanel">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Type your note here..."></textarea>
                                    </div>
                                    <button class="btn btn-primary">Save Note</button>
                                    
                                    <div class="private-note-wrap">
                                        <p class="activity-time">2 minutes ago</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus enim, facilisis vitae rutrum a, varius ac tellus. Ut viverra nibh vitae hendrerit tempor. Proin cursus rhoncus quam.</p>
                                        <div class="text-right">
                                            <a href="#modal-delete" data-toggle="modal" class="ml-3"><i class="houzez-icon icon-remove-circle mr-1"></i> <strong>Delete</strong></a>
                                        </div>
                                    </div><!-- private-note-wrap -->

                                    <div class="private-note-wrap">
                                        <p class="activity-time">1 day ago</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus enim, facilisis vitae rutrum a, varius ac tellus. Ut viverra nibh vitae hendrerit tempor. Proin cursus rhoncus quam.</p>
                                        <div class="text-right">
                                            <a href="#modal-delete" data-toggle="modal" class="ml-3"><i class="houzez-icon icon-remove-circle mr-1"></i> <strong>Delete</strong></a>
                                        </div>
                                    </div><!-- private-note-wrap -->
                                </div>
                            </div><!-- dashboard-content-block -->
                        </div><!-- col-md-8 col-sm-12 -->
                    </div>
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->

</template>
<script setup>
import LeadEnquiryDetail from '@/views/inc/dashboard/board/LeadEnquiryDetail.vue';
import LeadTableMatchingListings from '@/views/inc/dashboard/board/LeadTableMatchingListings.vue';
import BreadCrumb from '@/views/inc/page/BreadCrumb.vue';


</script>
<!-- crm-lead-enquiries-propert-detail -->