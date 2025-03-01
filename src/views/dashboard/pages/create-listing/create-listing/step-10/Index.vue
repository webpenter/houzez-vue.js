<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="10"/>
            <div class="dashboard-content-inner-wrap">
              <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                  <h2>Contact Information</h2>
                  <div class="dashboard-content-block">
                    <p>What information do you want to display in agent data container?</p>
                    <div class="form-group">
                      <label class="control control--checkbox ">
                        <input type="radio" value="author_data" v-model="formData.contact_information[0]">Author Data
                        <span class="control__indicator"></span>
                      </label>
                      <label class="control control--checkbox">
                        <input type="radio"  value="agent_data" v-model="formData.contact_information[0]">Agent Data
                        <span class="control__indicator"></span>
                      </label>
                      <label class="control control--checkbox">
                        <input type="radio"  value="agency_data" v-model="formData.contact_information[0]">Agency Data
                        <span class="control__indicator"></span>
                      </label>
                      <label class="control control--checkbox">
                        <input type="radio" value="not_display" v-model="formData.contact_information[0]">Do not display
                        <span class="control__indicator"></span>
                      </label>
                    </div>
                  </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                  <BackBtn route="dashboard.create-listing.step-7" :pId="propertyId"/>
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
import SectionContactInformation from '@/views/inc/dashboard/property/SectionContactInformation.vue';
import {RouterLink ,useRoute, useRouter} from "vue-router";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {onMounted, ref, watch} from "vue";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;

const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);

const formData = ref({
  contact_information:[],
});

const formSubmit = async () => {
  btnLoading.value = true;

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`Step 10 of ${PROPERTY_TOTAL_STEPS} completed.`);
      router.push({name:"dashboard.create-listing.step-11",params:{propertyId:propertyId}});
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