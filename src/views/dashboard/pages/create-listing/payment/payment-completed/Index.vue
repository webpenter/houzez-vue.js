<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <SnakeNav active="payment"/>
            <div class="dashboard-content-inner-wrap">

                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <ThankYouPageContent/>
                        <!-- <button type="button" class="btn btn-primary" onclick="window.location.href='dashboard-agent-add-new-property-step-1.php'">Create a Listing</button> -->
                        <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.step-1'}">
                            Create a Listing
                        </RouterLink>
                    </div><!-- dashboard-content-block -->

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import ThankYouPageContent from '@/views/inc/dashboard/ThankYouPageContent.vue';
import SnakeNav from '../../components/SnakeNav.vue';
import { RouterLink } from 'vue-router';
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
</script>
