<template>
  <DashboardHeader :heading="$t('dashboard.heading')"/>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <NoDataMsg
        :msg="$t('dashboard.noData')"
        v-if="properties.length < 1"
      />
      <template v-else>
        <div class="dashboard-content-block-wrap">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div v-if="!propertyLoading" class="form-group insight-search">
                <label>{{ $t('dashboard.selectProperty') }}</label>
                <select class="form-control" v-model="selectedId" @change="fetchData" title="Select">
                  <option
                    v-for="property in properties"
                    :key="property.id"
                    :value="property.id"
                  >
                    {{ $filters.capitalize(property.title) }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-sm-12">
              <Views
                :viewsLoading="viewsLoading"
                :views="views"
                :title="$t('dashboard.views')"
              />
            </div>

            <div class="col-md-6 col-sm-12">
              <UniqueViews
                :uniqueViewsLoading="uniqueViewsLoading"
                :uniqueViews="uniqueViews"
                :title="$t('dashboard.uniqueViews')"
              />
            </div>

            <div class="col-md-12 col-sm-12">
              <VisitsChart
                :visitChartLoading="visitChartLoading"
                :data="chartStats"
              />
            </div>

            <div class="col-md-6 col-sm-12">
              <StatisticDevices
                :devicesStatsLoading="devicesStatsLoading"
                :devicesStats="devicesStats"
                :title="$t('dashboard.devices')"
              />
            </div>

            <div class="col-md-6 col-sm-12">
              <StatisticTopCountries
                :countriesStatsLoading="countriesStatsLoading"
                :countriesStats="countriesStats"
                :title="$t('dashboard.topCountries')"
              />
            </div>

            <div class="col-md-6 col-sm-12">
              <StatisticTopPlatforms
                :platformStatsLoading="platformStatsLoading"
                :platformStats="platformStats"
                :title="$t('dashboard.topPlatforms')"
              />
            </div>

            <div class="col-md-6 col-sm-12">
              <StatisticTopBrowsers
                :browserStatsLoading="browserStatsLoading"
                :browserStats="browserStats"
                :title="$t('dashboard.topBrowsers')"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
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
