<template>
  <DashboardHeader :heading="$t('My Invoices & Charges')"/>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg
            msg="You don't have any invoice or transaction history"
            v-if="invoiceCount < 1 && !loading"
        />
        <Table
            v-else
            :invoices="invoices"
            :loading="loading"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {useInvoices, useNotification} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {computed, onMounted, ref} from "vue";
import Table from "./Table.vue";
import NoDataMsg from "@/views/dashboard/components/NoDataMsg.vue";

const invoicesStore = useInvoices();
const {invoices} = storeToRefs(invoicesStore);

const loading = ref(false);

const invoiceCount = computed(() => Object.keys(invoices.value || {}).length);

const getInvoices = async () => {
  loading.value = true;

  try {
    await invoicesStore.getInvoices();
    loading.value = false;
  } catch (error) {
    useNotification().Error("Something went wrong!");
    loading.value = false;
  }
}

onMounted(() => getInvoices());
</script>