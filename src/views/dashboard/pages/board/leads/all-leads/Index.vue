<template>
    <DashboardHeader :heading="$t('Leads')">
      <router-link :to="{name:'dashboard.create-lead'}" class="btn btn-primary">{{$t('New Lead')}}</router-link>
    </DashboardHeader>

    <section class="dashboard-content-wrap">
        <div class="deals-table-wrap">
          <NoDataMsg 
          v-if="leads.length < 1"
          msg="You don't have any active lead yet!"/>
          <template v-else>
            <div class="deal-content-wrap p-0">
              <Table
                  :leads="leads"
                  :loading="loading"
                  @delete-lead="(id) => deleteLead(id)"
              />
            </div>
          </template>
        </div>
    </section>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {useConfirm, useLead, useMessage, useNotification} from '@/stores/index.js';
import {storeToRefs} from "pinia";
import Table from "@/views/dashboard/pages/board/leads/all-leads/Table.vue";

const leadStore = useLead();
const {leads} = storeToRefs(leadStore);

const loading = ref(false);

const getLeads = async () => {
  loading.value = true;
  await leadStore.getLeads();
  loading.value = false;
}

const deleteLead = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this lead?")
      .then(async () => {
        try {
          const res = await leadStore.deleteLead(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted lead");
            await getLeads();
          } else {
            useNotification().Error(`Failed to delete lead`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred ${error}`);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });

}

onMounted(() => getLeads())
</script>


