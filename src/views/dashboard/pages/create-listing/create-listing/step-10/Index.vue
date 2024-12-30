<template>
    <DashboardHeader heading="Add New Property">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="listing"/>
            <div class="dashboard-content-inner-wrap">
                <Alert message="Settings saved successfully." type="success"/>
                <Alert message="Something went wrong." type="danger"/>

                <SectionContactInformation/>

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <BackBtn route="dashboard.create-listing.step-9"/>  
                    <NextBtn route="dashboard.create-listing.step-11"/>        
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import NextBtn from '../components/NextBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import SectionContactInformation from '@/views/inc/dashboard/property/SectionContactInformation.vue';
</script>