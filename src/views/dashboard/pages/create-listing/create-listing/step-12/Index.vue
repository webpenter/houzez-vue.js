<template>
    <DashboardHeader heading="Add New Property">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="listing"/>
            <div class="dashboard-content-inner-wrap">
                <Alert message="Settings saved successfully." type="success"/>
                <Alert message="Something went wrong." type="danger"/>

                <SectionPrivateNote/>

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <BackBtn route="dashboard.create-listing.step-11"/>  
                    <NextBtn route="dashboard.create-listing.completed"/>        
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import NextBtn from '../components/NextBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import SectionPrivateNote from '@/views/inc/dashboard/property/SectionPrivateNote.vue';
</script>