<template>
    <DashboardHeader heading="Add New Property">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <SnakeNav active="payment"/>
            <div class="dashboard-content-inner-wrap">

                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <ThankYouPageContent/>
                        <button type="button" class="btn btn-primary" onclick="window.location.href='dashboard-agent-add-new-property-step-1.php'">Create a Listing</button>
                    </div><!-- dashboard-content-block -->

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import ThankYouPageContent from '@/views/inc/dashboard/ThankYouPageContent.vue';
import SnakeNav from '../../components/SnakeNav.vue';
</script>
