<template>
  <DashboardHeader heading="My Subscriptions"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg
         v-if="userSubscriptions.length < 1"
         msg="You are not subscribed any package!" 
        />
        <Table
            v-else
            :subscriptions="userSubscriptions"
            :loading="loading"
            @cancel-subscription="(name) => cancelSubscription(name)"
            @resume-subscription="(name) => resumeSubscription(name)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
defineOptions({
  name: "UserSubscriptionsPage"
});

import { useNotification, useSubscription } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import Table from "./SubsTable.vue";

const subscriptionStore = useSubscription();
const { userSubscriptions } = storeToRefs(subscriptionStore);

const loading = ref(false);

const getUserSubscriptions = async () => {
  loading.value = true;

  try {
    await subscriptionStore.getUserSubscriptions();
  } catch (err) {
    useNotification().Error("Something went wrong!", err);
  } finally {
    loading.value = false;
  }
};

const cancelSubscription = async (name) => {
  try {
    const res = await subscriptionStore.cancelSubscription(name);

    if (res.status === 200) {
      useNotification().Success("Subscription has been renewed");
    } else {
      useNotification().Error("Something went wrong!");
    }

    await getUserSubscriptions();
  } catch (err) {
    useNotification().Error("Something went wrong!", err);
  }
};

const resumeSubscription = async (name) => {
  try {
    const res = await subscriptionStore.resumeSubscription(name);

    if (res.status === 200) {
      useNotification().Success("Subscription has been renewed");
    } else {
      useNotification().Error("Something went wrong!");
    }

    await getUserSubscriptions();
  } catch (err) {
    useNotification().Error("Something went wrong!", err);
  }
};

onMounted(() => getUserSubscriptions());
</script>
