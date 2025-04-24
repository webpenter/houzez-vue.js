<template>
    <DashboardHeader :heading="$t('Active Deals')">
      <a class="btn btn-primary" @click="addNewDeal = true" href="#">{{$t('Add New Deal')}}</a>
    </DashboardHeader>

    <section class="dashboard-content-wrap">
        <div class="deals-table-wrap">
          <NavPills tab="active"/>
          <NoDataMsg msg="You don't have any active deal yet!" v-if="activeDeals.length < 1"/>
          <template v-else>
            <div class="deal-content-wrap p-0">
              <Table
                  :deals="activeDeals"
                  :loading="loading"
                  @delete-deal="(id) => deleteDeal(id)"
              />
            </div>
          </template>
        </div>
    </section>

  <el-dialog v-model="addNewDeal" :title="$t('Add New Deal')" width="500" align-center>
    <AddNewDealModal/>
  </el-dialog>
</template>
<script setup>
import {onMounted, ref} from 'vue';
import {useConfirm, useDeal, useMessage, useNotification} from '@/stores/index.js';
import NavPills from "@/views/dashboard/pages/board/deals/components/NavPills.vue";
import {storeToRefs} from "pinia";
import Table from "@/views/dashboard/pages/board/deals/components/Table.vue";
import AddNewDealModal from "@/views/dashboard/pages/board/deals/components/AddNewDealModal.vue";

const dealStore = useDeal();
const {activeDeals} = storeToRefs(dealStore);

const loading = ref(false);
const addNewDeal = ref(false);

const getDeals = async () => {
  loading.value = true;
  await dealStore.getActiveDeals();
  loading.value = false;
}

const deleteDeal = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this deal?")
      .then(async () => {
        try {
          const res = await dealStore.deleteDeal(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted deal");
            await getDeals();
          } else {
            useNotification().Error(`Failed to delete deal`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred ${error}`);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });

}

onMounted(() => getDeals())
</script>


