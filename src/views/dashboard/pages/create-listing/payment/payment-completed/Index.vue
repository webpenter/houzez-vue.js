<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING"/>
        <section class="dashboard-content-wrap">
            <SnakeNav2 active="completed"/>
            <div class="dashboard-content-inner-wrap">

                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                      <h2>{{$t('Thank you for your business with us')}}</h2>
                      <p class="my-3">
                        {{$t('You have successfully subscribed to your package. Now you can create listings according to your package. If you want to create your first listing now, click the button below and start creating your listing.')}}
                      </p>
                        <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.step-1'}">
                            {{$t('Create a Listing')}}
                        </RouterLink>
                    </div><!-- dashboard-content-block -->

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav2 from '../../components/SnakeNav2.vue';
import { RouterLink } from 'vue-router';
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
</script>
