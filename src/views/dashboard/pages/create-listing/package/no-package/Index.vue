<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <SnakeNav active="package"/>
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                      <div>
                       <strong> You cannot create a property because:</strong>
                        <div class="ml-3 my-2">
                          <li>You haven't purchased a package.</li>
                          <li>Your current package requires an upgrade.</li>
                          <li>Your package might not be active, so please check its status.</li>
                        </div>
                        To proceed, you need an active subscription. Please subscribe to a plan or check your current package details to continue.
                      </div>
                      <hr>
                        <RouterLink :to="{name:'dashboard.create-listing.select-package'}" class="btn btn-primary mt-2">
                            Subscribe Package
                        </RouterLink>
                        <RouterLink :to="{name:'dashboard.subscriptions'}" class="btn btn-primary-outlined mt-2 ml-2">
                            Check your Package
                        </RouterLink>
                    </div><!-- dashboard-content-block -->
                    
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SnakeNav from '../../components/SnakeNav.vue';
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
</script>