<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
<!--      <SaveAsDraftBtn :status="property.property_status ?? ''"/>-->
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="9"/>
            <div class="dashboard-content-inner-wrap">

                <SectionSubProperties/>

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                  <BackBtn route="dashboard.create-listing.step-8" :pId="propertyId"/>
                  <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.step-10',params:{propertyId:propertyId}}">
                    Next
                    <i class="houzez-icon icon-arrow-right-1 ml-2"></i>
                  </RouterLink>
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import NextBtn from '../components/NextBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import SectionSubProperties from '@/views/inc/dashboard/property/SectionSubProperties.vue';
import {RouterLink ,useRoute, useRouter} from "vue-router";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
</script>