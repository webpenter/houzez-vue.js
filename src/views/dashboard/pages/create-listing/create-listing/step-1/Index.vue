<template>
    <DashboardHeader heading="Add New Property">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <SnakeNav active="listing"/>
            <div class="dashboard-content-inner-wrap">
                <Alert message="Settings saved successfully." type="success"/>
                <Alert message="Something went wrong." type="danger"/>
                
                <SectionDescriptionAndPrice/>
                
                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard.my-properties'}">
                        Cancel
                    </RouterLink>  
                    <NextBtn route="dashboard.create-listing.step-2"/>    
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
            
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import NextBtn from '../components/NextBtn.vue';
import SectionDescriptionAndPrice from '@/views/inc/dashboard/property/SectionDescriptionAndPrice.vue';
</script>