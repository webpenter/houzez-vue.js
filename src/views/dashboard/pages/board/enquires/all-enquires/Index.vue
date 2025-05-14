<template>
    <DashboardHeader heading="All Enquires">
      <router-link :to="{name:'dashboard.create-enquiry'}" class="btn btn-primary">Create Enquiry</router-link>
    </DashboardHeader>

    <section class="dashboard-content-wrap">
        <div class="deals-table-wrap">
          <NoDataMsg msg="You don't have any active enquiry yet!" v-if="enquiries.length < 1"/>
          <template v-else>
            <div class="deal-content-wrap p-0">
              <Table
                  :enquires="enquiries"
                  :loading="loading"
                  @delete-enquiry="(id) => deleteEnquiry(id)"
              />
            </div>
          </template>
        </div>
    </section>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {useConfirm, useEnquiry, useMessage, useNotification} from '@/stores/index.js';
import {storeToRefs} from "pinia";
import Table from "@/views/dashboard/pages/board/enquires/all-enquires/Table.vue";

const enquiryStore = useEnquiry();
const {enquiries} = storeToRefs(enquiryStore);

const loading = ref(false);

const getEnquiries = async () => {
  loading.value = true;
  await enquiryStore.getEnquiries();
  loading.value = false;
}

const deleteEnquiry = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this enquiry?")
      .then(async () => {
        try {
          const res = await enquiryStore.deleteEnquiry(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted enquiry");
            await getEnquiries();
          } else {
            useNotification().Error(`Failed to delete enquiry`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred ${error}`);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });

}

onMounted(() => getEnquiries())
</script>


