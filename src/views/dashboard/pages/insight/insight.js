import { useInsight, useNotification } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

export function useInsightData() {
    const insightStore = useInsight();
    const { properties, views, uniqueViews, chartStats, devicesStats, countriesStats, platformStats, browserStats } = storeToRefs(insightStore);

    const propertyLoading = ref(true);
    const viewsLoading = ref(true);
    const uniqueViewsLoading = ref(true);
    const visitChartLoading = ref(true);
    const devicesStatsLoading = ref(true);
    const countriesStatsLoading = ref(true);
    const platformStatsLoading = ref(true);
    const browserStatsLoading = ref(true);

    const selectedId = ref(null);

    const getProperties = async () => {
        propertyLoading.value = true;
        try {
            const res = await insightStore.getInsightProperties();
            if (res.status === 200) {
                propertyLoading.value = false;
                if (properties.value.length > 0) {
                    selectedId.value = properties.value[0].id;
                    await fetchData();
                }
            } else {
                propertyLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            propertyLoading.value = false;
            useNotification().Error('An error occurred while getProperties.');
        }
    };

    const fetchData = async () => {
        await getViews();
        await getUniqueViews();
        await getChartData();
        await getDeviceData();
        await getCountriesData();
        await getPlatformData();
        await getBrowserData();
    };

    const getViews = async () => {
        viewsLoading.value = true;
        try {
            const res = await insightStore.getPropertyViews(selectedId.value);
            if (res.status === 200) {
                viewsLoading.value = false;
            } else {
                viewsLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            viewsLoading.value = false;
            useNotification().Error('An error occurred while getViews.');
        }
    };

    const getUniqueViews = async () => {
        uniqueViewsLoading.value = true;
        try {
            const res = await insightStore.getPropertyUniqueViews(selectedId.value);
            if (res.status === 200) {
                uniqueViewsLoading.value = false;
            } else {
                uniqueViewsLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            uniqueViewsLoading.value = false;
            useNotification().Error('An error occurred while getUniqueViews.');
        }
    };

    const getChartData = async () => {
        visitChartLoading.value = true;
        try {
            const res = await insightStore.getChartStats(selectedId.value);
            if (res.status === 200) {
                visitChartLoading.value = false;
            } else {
                visitChartLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            visitChartLoading.value = false;
            useNotification().Error('An error occurred while getChartData.');
        }
    };

    const getDeviceData = async () => {
        devicesStatsLoading.value = true;
        try {
            const res = await insightStore.getDeviceStats(selectedId.value);
            if (res.status === 200) {
                devicesStatsLoading.value = false;
            } else {
                devicesStatsLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            devicesStatsLoading.value = false;
            useNotification().Error('An error occurred while getDeviceData.');
        }
    };

    const getCountriesData = async () => {
        countriesStatsLoading.value = true;
        try {
            const res = await insightStore.getCountriesStats(selectedId.value);
            if (res.status === 200) {
                countriesStatsLoading.value = false;
            } else {
                countriesStatsLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            countriesStatsLoading.value = false;
            useNotification().Error('An error occurred while getCountriesData.');
        }
    };

    const getPlatformData = async () => {
        platformStatsLoading.value = true;
        try {
            const res = await insightStore.getPlatformStats(selectedId.value);
            if (res.status === 200) {
                platformStatsLoading.value = false;
            } else {
                platformStatsLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            platformStatsLoading.value = false;
            useNotification().Error('An error occurred while getPlatformData.');
        }
    };

    const getBrowserData = async () => {
        browserStatsLoading.value = true;
        try {
            const res = await insightStore.getBrowserStats(selectedId.value);
            if (res.status === 200) {
                browserStatsLoading.value = false;
            } else {
                browserStatsLoading.value = false;
                useNotification().Error('An error occurred.');
            }
        } catch (error) {
            browserStatsLoading.value = false;
            useNotification().Error('An error occurred while getBrowserData.');
        }
    };

    onMounted(() => {
        getProperties();
    });

    return {
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
    };
}
