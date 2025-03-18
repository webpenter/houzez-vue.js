<script setup lang="ts">
import LeadEnquiryDetail from '@/views/inc/dashboard/board/LeadEnquiryDetail.vue';
import LeadTableMatchingListings from '@/views/inc/dashboard/board/LeadTableMatchingListings.vue';

</script>

<template>
    <DashboardHeader heading="Details">
        <!-- <a class="btn btn-primary" href="#">Add New Enquiry</a> -->
    </DashboardHeader>

    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="dashboard-content-block">
                                <LeadEnquiryDetail />
                                <!-- <?php include 'inc/dashboard/board/lead-enquiry-detail.php';?> -->
                            </div><!-- dashboard-content-block -->       
                        </div><!-- col-md-4 col-sm-12 -->
                        <div class="col-md-8 col-sm-12">
                            <ul class="nav nav-pills lead-nav-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#matching-listings" role="tab">{{$t('Matching Listings')}}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#notes" role="tab">{{$t('Notes')}}</a>
                                </li>
                                <li class="nav-item ml-auto">
                                    <a class="nav-link text-primary" href="#">{{$t('Back')}}</a>
                                </li>
                            </ul>
                            <div class="dashboard-content-block tab-content">
                                <div class="tab-pane fade show active" id="matching-listings" role="tabpanel">
                                    <div class="d-flex justify-content-between mb-3">
                                        <div><strong>{{$t('6 Listings')}}</strong> {{$t('found on file')}}</div> 
                                        <div>
                                            <a href="#" class="btn btn-primary btn-slim"><i class="houzez-icon icon-envelope mr-1"></i> {{$t('Send Via Email')}}</a>
                                        </div>    
                                    </div>
                                    <LeadTableMatchingListings />
                                    <!-- <?php include 'inc/dashboard/board/lead-table-matching-listings.php'; ?> -->
                                </div>
                                <div class="tab-pane fade" id="notes" role="tabpanel">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="5" :placeholder="$t('Type your note here...')"></textarea>
                                    </div>
                                    <button class="btn btn-primary">{{$t('Save Note')}}</button>
                                    
                                    <div class="private-note-wrap">
                                        <p class="activity-time">{{$t('2 minutes ago')}}</p>
                                        <p>{{$t('Lorem')}}</p>
                                        <div class="text-right">
                                            <a href="#modal-delete" data-toggle="modal" class="ml-3"><i class="houzez-icon icon-remove-circle mr-1"></i> <strong>{{$t('Delete')}}</strong></a>
                                        </div>
                                    </div><!-- private-note-wrap -->

                                    <div class="private-note-wrap">
                                        <p class="activity-time">{{$t('1 day ago')}}</p>
                                        <p>{{$t('Lorem')}}</p>
                                        <div class="text-right">
                                            <a href="#modal-delete" data-toggle="modal" class="ml-3"><i class="houzez-icon icon-remove-circle mr-1"></i> <strong>{{$t('Delete')}}</strong></a>
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