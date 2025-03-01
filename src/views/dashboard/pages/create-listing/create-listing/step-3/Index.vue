<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="3"/>
            <div class="dashboard-content-inner-wrap">
              <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                  <h2>Property Features</h2>
                  <div class="dashboard-content-block">
                    <div class="row">
                      <div v-for="feature in features" :key="feature.id" class="col-md-3 col-sm-6 col-6">
                        <label class="control control--checkbox">
                          <input type="checkbox" v-model="formData.property_feature" :value="feature.name">
                          {{ feature.name }}
                          <span class="control__indicator"></span>
                        </label>
                      </div><!-- col-md-3 col-sm-6 col-6 -->
                    </div><!-- row -->
                  </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                  <BackBtn route="dashboard.create-listing.step-2" :pId="propertyId"/>
                  <NextBtn :btnLoading="btnLoading" :hasErrors="false"/>
                </div><!-- add-new-listing-bottom-nav-wrap -->
              </form>

            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import NextBtn from '../components/NextBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import SectionFeature from '@/views/inc/dashboard/property/SectionFeature.vue';
import {onMounted, ref, watch} from 'vue';
import {storeToRefs} from "pinia";
import {useFeatures, useNotification, useProperty} from "@/stores/index.js";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {useRoute, useRouter} from "vue-router";

const {features} = storeToRefs(useFeatures());

const formData = ref({
  property_feature:[],
});

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);

const formSubmit = async () => {
  btnLoading.value = true;

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`Step 3 of ${PROPERTY_TOTAL_STEPS} completed.`);
      router.push({name:"dashboard.create-listing.step-4",params:{propertyId:propertyId}});
    } else if (res.status === 404) {
      notify.Error("Property not found.");
    } else if (res.status === 403) {
      notify.Error("You are not authorized to perform this action.");
    } else {
      notify.Error("An error occurred while processing the request.");
    }
  } catch (error) {
    btnLoading.value = false;
    notify.Error("An error occurred");
  }
};

const editData = async () => {
  const res = await propertyToRefs.edit(propertyId);

  if (res.status === 404) {
    return router.push({name:"property-not-found-404"});
  } else if (res.status === 403) {
    return router.push({name:"unauthorized-403"});
  }
}

onMounted(() => {
  editData();

  if (property.value){
    formData.value = { ...property.value };
  }
});

watch(property,(newProperty) => {
  if (newProperty){
    formData.value = { ...newProperty };
  }
});
</script>