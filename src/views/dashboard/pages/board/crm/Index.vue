<template>
    <DashboardHeader heading="Activities">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="row">
                        <div class="col-md-7 col-sm-12">
                            <div class="dashboard-content-block activities-list-wrap">
                                <ActivitiesList />
                            </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-5 col-sm-12">
                            <StatisticLeads />
                            <StatisticDeals />
                        </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import ActivitiesList from '@/views/inc/dashboard/board/ActivitiesList.vue';
import StatisticDeals from '@/views/inc/dashboard/board/StatisticDeals.vue';
import StatisticLeads from '@/views/inc/dashboard/board/StatisticLeads.vue';
</script>