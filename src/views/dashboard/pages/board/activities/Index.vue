<template>
    <DashboardHeader :heading="$t('Acitvities')"/>
    
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="row">
                        <div class="col-md-7 col-sm-12">
                            <NoDataMsg msg="You don't have any message." v-if="reviews.length < 1"/>
                            <div v-else class="dashboard-content-block activities-list-wrap">
                              <Reviews
                                  :reviews="reviews"
                                  :reviewLoading="reviewLoading"
                              />
                            </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-5 col-sm-12">
                          <DealsSummary
                              :deals="deals"
                              :dealsLoading="dealsLoading"
                          />
                          <LeadsSummary
                              :leads="leads"
                              :leadsLoading="leadsLoading"
                          />
                          <EnquiriesSummary
                              :enquiries="enquiries"
                              :enquiriesLoading="enquiriesLoading"
                          />
                        </div><!-- col-md-6 col-sm-12 -->
                    </div><!-- row -->
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import Reviews from "@/views/dashboard/pages/board/activities/Reviews.vue";
import {useActivity} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import LeadsSummary from "@/views/dashboard/pages/board/activities/LeadsSummary.vue";
import DealsSummary from "@/views/dashboard/pages/board/activities/DealsSummary.vue";
import EnquiriesSummary from "@/views/dashboard/pages/board/activities/EnquiriesSummary.vue";

const activityStore = useActivity();
const {reviews,leads,deals,enquiries} = storeToRefs(activityStore);

const reviewLoading = ref(false);
const leadsLoading = ref(false);
const dealsLoading = ref(false);
const enquiriesLoading = ref(false);

const getReviews = async () => {
  reviewLoading.value = true;
  await activityStore.getReviews();
  reviewLoading.value = false;
}

const getLeads = async () => {
  leadsLoading.value = true;
  await activityStore.getLeads();
  leadsLoading.value = false;
}

const getDeals = async () => {
  dealsLoading.value = true;
  await activityStore.getDeals();
  dealsLoading.value = false;
}

const getEnquiries = async () => {
  enquiriesLoading.value = true;
  await activityStore.getEnquiries();
  enquiriesLoading.value = false;
}

onMounted(() => {
  getReviews();
  getDeals();
  getLeads();
  getEnquiries();
});
</script>