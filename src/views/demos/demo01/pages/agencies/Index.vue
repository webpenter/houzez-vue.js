<template>
  <!-- <AgentSearch /> -->
  <section class="listing-wrap">
    <div class="container">
      <div class="page-title-wrap">
        <Breadcrumb :param="{ name: $t('Agencies') }" />
        <div class="d-flex align-items-center">
          <div class="page-title flex-grow-1">
            <h1>{{$t('Agencies')}}</h1>
          </div><!-- page-title -->
        </div><!-- d-flex -->
      </div><!-- page-title-wrap -->
      <div class="row">
        <div class="col-lg-8 col-md-12 bt-content-wrap right-bt-content-wrap">
          <div class="agents-list-view">
            <template v-if="loading">
              <AgentCardSkeleton v-for="n in 4" :key="n" />
            </template>
            <template v-else>
              <AgencyCard v-for="agency in agencyStore.allAgencies" :key="agency.id" :data="agency" type="agency" />
            </template>
          </div><!-- listing-view -->
          <!-- <Pagination /> -->
        </div><!-- bt-content-wrap -->
        <div class="col-lg-4 col-md-12 bt-sidebar-wrap left-bt-sidebar-wrap">

        </div><!-- bt-sidebar-wrap -->
      </div><!-- row -->
    </div><!-- container -->
  </section><!-- listing-wrap -->
</template>

<script setup>
import { onMounted, ref  } from 'vue'
import { storeToRefs } from 'pinia';
import { useAgency } from '@/stores/index.js'
import Breadcrumb from '@/views/demos/components/property-details/property-title-block/BreadCrumb.vue';
import Pagination from "@/views/demos/components/inc/Pagination.vue";
import AgencyCard from "@/views/demos/components/agents/AgentCard.vue";
import AgentSearch from "@/views/demos/components/agents/AgentSearch.vue";
import AgentCardSkeleton from '@/components/skeleton/AgentCardSkeleton.vue'



const agencyStore = useAgency()
const { agency } = storeToRefs(agencyStore);
const loading = ref(true)
onMounted(async () => {
  try {
    await agencyStore.getAllAgencies()
    console.log('Agencies fetched successfully:', agencyStore.allAgencies)
  } catch (err) {
    console.error('Failed to fetch agents:', err)
  } finally {
    loading.value = false
  }
})
</script>
