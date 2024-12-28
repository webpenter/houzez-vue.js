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
                            <!-- <?php include 'inc/dashboard/statistics/statistic-views.php';?> -->
                             <StatisticViews />
                            
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-unique-views.php';?> -->
                             <StatisticUniqueViews />
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-12 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-chart.php';?> -->
                             <StatisticChart />
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-listings-chart-1.php';?> -->
                             <!-- <StatisticListingsChart1 /> -->
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-listings-chart-2.php';?> -->
                             <!-- <StatisticListingsChart2 /> -->

                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-devices.php';?> -->
                             <StatisticDevices />
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-top-countries.php';?> -->
                             <!-- <StatisticTopCountries /> -->
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-top-platforms.php';?> -->
                             <!-- <StatisticTopPlatforms /> -->
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-top-browsers.php';?> -->
                             <!-- <StatisticTopBrowsers /> -->
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-12 col-sm-12">
                            <!-- <?php include 'inc/dashboard/statistics/statistic-referrals.php';?> -->
                             <StatisticReferrals />
                        </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
        <section class="dashboard-side-wrap">
            <!-- <?php include 'inc/dashboard/side-wrap.php';?> -->
             <SideWrap />
        </section>
   
</template>

<script setup>
import StatisticViews from '@/views/inc/dashboard/Statistics/StatisticViews.vue';
import StatisticUniqueViews from '@/views/inc/dashboard/Statistics/StatisticUniqueViews.vue';
import StatisticChart from '@/views/inc/dashboard/Statistics/StatisticChart.vue';
// import StatisticListingsChart1 from '@/views/inc/dashboard/Statistics/StatisticListingsChart1.vue';
// import StatisticListingsChart2 from '@/views/inc/dashboard/Statistics/StatisticListingsChart.vue';
// import StatisticDevices from '@/views/inc/dashboard/Statistics/StatisticDevices.vue';
// import StatisticTopCountries from '@/views/inc/dashboard/Statistics/StatisticTopCountries.vue';
// import StatisticTopPlatforms from '@/views/inc/dashboard/Statistics/StatisticTopPlatforms.vue';
// import StatisticTopBrowsers from '@/views/inc/dashboard/Statistics/StatisticTopBrowsers.vue';
import StatisticReferrals from '@/views/inc/dashboard/Statistics/StatisticReferrals.vue';
import SideWrap from '@/views/inc/dashboard/SideWrap.vue';

</script>