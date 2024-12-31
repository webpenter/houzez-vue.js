<template>
    <DashboardHeader heading="Insight">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <div class="form-group insight-search">
                                <label>Select a Property</label>
                                <select class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="true" data-selected-text-format="count" multiple data-actions-box="false">
                                    <option>Apartment With Ocean View</option>
                                    <option>Luxury Apartment On The Bay</option>
                                    <option>Revovated Apartment At Last Floor</option>
                                </select><!-- selectpicker -->
                            </div><!-- form-group -->
                        </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <StatisticViews />
                           
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <StatisticUniqueViews />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-12 col-sm-12">
                            <StatisticChart />
                          
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <StatisticListingsChart1 />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <StatisticListingsChart2 />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <StatisticDevices />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <StatisticTopCountries />
                           
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <StatisticTopPlatforms />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <StatisticTopBrowsers />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-12 col-sm-12">
                            <StatisticReferrals />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import StatisticChart from '@/views/inc/dashboard/statistics/StatisticChart.vue';
import StatisticDevices from '@/views/inc/dashboard/statistics/StatisticDevices.vue';
import StatisticListingsChart1 from '@/views/inc/dashboard/statistics/StatisticListingsChart1.vue';
import StatisticListingsChart2 from '@/views/inc/dashboard/statistics/StatisticListingsChart2.vue';
import StatisticReferrals from '@/views/inc/dashboard/statistics/StatisticReferrals.vue';
import StatisticTopBrowsers from '@/views/inc/dashboard/statistics/StatisticTopBrowsers.vue';
import StatisticTopCountries from '@/views/inc/dashboard/statistics/StatisticTopCountries.vue';
import StatisticTopPlatforms from '@/views/inc/dashboard/statistics/StatisticTopPlatforms.vue';
import StatisticUniqueViews from '@/views/inc/dashboard/statistics/StatisticUniqueViews.vue';
import StatisticViews from '@/views/inc/dashboard/statistics/StatisticViews.vue';

</script>