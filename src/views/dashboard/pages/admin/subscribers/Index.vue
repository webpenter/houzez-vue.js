<template>
  <DashboardHeader heading="Newsletter Subscribers"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg 
        v-if="newsletterSubscribers.length < 1"
        msg="You don't have any subscriber!" />
        <Table
            v-else
            :subscribers="newsletterSubscribers"
            :loading="loading"
            @delete-subscriber="(id) => deleteSubscriber(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {useConfirm, useMessage, useNewsletterSubscriber, useNotification} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import Table from "./Table.vue";

const subscriberStore = useNewsletterSubscriber();
const {newsletterSubscribers} = storeToRefs(subscriberStore);

const loading = ref(false);

const getSubscribers = async () => {
  loading.value = true;
  await subscriberStore.getAllSubscribers();
  loading.value = false;
}

const deleteSubscriber = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this subscriber?")
      .then(async () => {
        try {
          const res = await subscriberStore.deleteSubscriber(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted subscriber");
            await getSubscribers();
          } else {
            useNotification().Error(`Failed to delete`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred`, error);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });

}

onMounted(() => getSubscribers());
</script>