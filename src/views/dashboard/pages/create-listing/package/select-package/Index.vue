<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <SnakeNav active="package"/>
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <NoDataMsg msg="No package found" v-if="selectPlans.length < 1" />
                    <div v-else class="row row-no-padding">
                      <Package :select-plans="selectPlans" :loading="loading"/>
                    </div>
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import Package from "@/views/dashboard/pages/create-listing/package/select-package/Package.vue";
import {usePackage} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import NoDataMsg from "@/views/dashboard/components/NoDataMsg.vue";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";

const packageToRefs = usePackage();
const {selectPlans} = storeToRefs(packageToRefs);

const loading = ref(false);

const getSelectPlans = async () => {
  loading.value = true;
  await packageToRefs.getSelectPlans();
  loading.value = false;
}

onMounted(() => getSelectPlans());
</script>