<script setup lang="ts">
import LeadDetail from '@/views/inc/dashboard/board/LeadDetail.vue';
import LeadTableEvents from '@/views/inc/dashboard/board/LeadTableEvents.vue';

</script>

<template>
    <DashboardHeader heading="Events">
        <a class="btn btn-primary" href="#">Add New Event</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <div class="dashboard-content-block">
                            <LeadDetail />
                        </div><!-- dashboard-content-block -->       
                    </div><!-- col-md-4 col-sm-12 -->
                    <div class="col-md-8 col-sm-12">
                        <ul class="nav nav-pills lead-nav-tab" role="tablist">
                            <li class="nav-item">
                                <router-link 
                                    class="nav-link active" 
                                    to="/dashboard/crm-lead-enquiries">
                                    Enquiries
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link 
                                    class="nav-link" 
                                    to="/dashboard/crm-lead-events">
                                    Events
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link 
                                    class="nav-link" 
                                    to="/dashboard/crm-lead-listings-viewed">
                                    Listings Viewed
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link 
                                    class="nav-link" 
                                    to="/dashboard/crm-lead-saved-searches">
                                    Saved Searches
                                </router-link>
                            </li>
                        </ul>

                        <div class="dashboard-content-block tab-content">
                                <div class="d-flex justify-content-between mb-3">
                                    <div><strong>2 Events</strong> on file</div> 
                                    <div>
                                        <a href="#" class="btn btn-primary btn-slim open-close-slide-panel"><i class="houzez-icon icon-pencil mr-1"></i> Edit</a>
                                        <a href="#" class="btn btn-danger btn-slim "><i class="houzez-icon icon-remove-circle mr-1"></i> Delete</a>
                                    </div>    
                                </div>
                                <LeadTableEvents />
                            </div><!-- dashboard-content-block -->
                    </div><!-- col-md-8 col-sm-12 -->
                </div>
            </div><!-- dashboard-content-block-wrap -->
        </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>