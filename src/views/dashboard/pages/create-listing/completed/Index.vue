<template>
    <DashboardHeader heading="Congratulation!">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <SnakeNav active="done"/>
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <p><strong>You have successfully submitted your property for review and it has not been published yet.</strong></p>
                        <p>You will be notified by email when the review has been completed, or if our reviews have any questions about your submission. You can find your listing on the 
                            <RouterLink :to="{name:'dashboard.my-properties.pending'}">
                                <strong>pending</strong>
                            </RouterLink> 
                            properties. If there is something wrong you can edit it at any time. </p>
                        
                        <div class="mt-4">
                            <RouterLink class="btn btn-primary mr-2" :to="{name:'dashboard.create-listing.step-1'}">
                                Create a Listing
                            </RouterLink>
                            <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard.my-properties'}">
                                Go to Dashboard
                            </RouterLink>
                        </div>

                    </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
            
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SnakeNav from '../components/SnakeNav.vue';
</script>
