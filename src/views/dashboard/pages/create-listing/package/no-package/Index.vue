<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                      <div>
                       <strong> {{$t('You cannot create a property because:')}}</strong>
                        <div class="ml-3 my-2">
                          <li>{{$t("You haven't purchased a package.")}}</li>
                          <li>{{$t('Your current package requires an upgrade.')}}</li>
                          <li>{{$t('Your package might not be active, so please check its status.')}}</li>
                        </div>
                       {{$t(' To proceed, you need an active subscription. Please subscribe to a plan or check your current package details to continue.')}}
                      </div>
                      <hr>
                        <RouterLink :to="{name:'dashboard.create-listing.select-package'}" class="btn btn-primary mt-2">
                            {{$t('Subscribe Package')}}
                        </RouterLink>
                        <RouterLink :to="{name:'dashboard.subscriptions'}" class="btn btn-primary-outlined mt-2 ml-2">
                            {{$t('Check your Package')}}
                        </RouterLink>
                    </div><!-- dashboard-content-block -->
                    
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
</script>