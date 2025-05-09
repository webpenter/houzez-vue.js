<template>
  <DashboardHeader heading="Insight"/>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <NoDataMsg
          msg="You don't have any properties, so there are no insights available."
          v-if="properties.length < 1"
      />
      <template v-else>
        <div class="dashboard-content-block-wrap">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div v-if="!propertyLoading" class="form-group insight-search">
                <label>Select a Property</label>
                <select class="form-control" v-model="selectedId" @change="fetchData" title="Select">
                  <template v-for="property in properties">
                    <option :value="property.id">{{ $filters.capitalize(property.title) }}</option>
                  </template>
                </select>
              </div><!-- form-group -->
            </div><!-- col-md-6 col-sm-12 -->
          </div><!-- row -->
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <Views
                  :viewsLoading="viewsLoading"
                  :views="views"
              />
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-6 col-sm-12">
              <UniqueViews
                  :uniqueViewsLoading="uniqueViewsLoading"
                  :uniqueViews="uniqueViews"
              />
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-12 col-sm-12">
              <VisitsChart
                  :visitChartLoading="visitChartLoading"
                  :data="chartStats"
              />
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-6 col-sm-12">
              <StatisticDevices
                  :devicesStatsLoading="devicesStatsLoading"
                  :devicesStats="devicesStats"
              />
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-6 col-sm-12">
              <StatisticTopCountries
                  :countriesStatsLoading="countriesStatsLoading"
                  :countriesStats="countriesStats"
              />
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-6 col-sm-12">
              <StatisticTopPlatforms
                  :platformStatsLoading="platformStatsLoading"
                  :platformStats="platformStats"
              />
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-6 col-sm-12">
              <StatisticTopBrowsers
                  :browserStatsLoading="browserStatsLoading"
                  :browserStats="browserStats"
              />
            </div><!-- col-md-6 col-sm-12 -->
          </div><!-- row -->
        </div><!-- dashboard-content-block-wrap -->
      </template>
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { useInsightData } from "@/views/dashboard/pages/insight/insight.js";
import NoDataMsg from "@/views/dashboard/components/NoDataMsg.vue";
import Views from "@/views/dashboard/pages/insight/Views.vue";
import UniqueViews from "@/views/dashboard/pages/insight/UniqueViews.vue";
import VisitsChart from "@/views/dashboard/pages/insight/VisitChart.vue";
import StatisticTopPlatforms from "@/views/dashboard/pages/insight/StatisticTopPlatforms.vue";
import StatisticDevices from "@/views/dashboard/pages/insight/StatisticDevices.vue";
import StatisticTopCountries from "@/views/dashboard/pages/insight/StatisticTopCountries.vue";
import StatisticTopBrowsers from "@/views/dashboard/pages/insight/StatisticTopBrowsers.vue";

const {
  properties,
  views,
  uniqueViews,
  chartStats,
  devicesStats,
  countriesStats,
  platformStats,
  browserStats,
  propertyLoading,
  viewsLoading,
  uniqueViewsLoading,
  visitChartLoading,
  devicesStatsLoading,
  countriesStatsLoading,
  platformStatsLoading,
  browserStatsLoading,
  selectedId,
  fetchData,
} = useInsightData();
</script>
