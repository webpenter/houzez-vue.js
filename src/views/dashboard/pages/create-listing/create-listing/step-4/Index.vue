<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="4"/>
            <div class="dashboard-content-inner-wrap">

                <form @submit.prevent="formSubmit">
                  <div class="dashboard-content-block-wrap">
                    <h2>Energy Class</h2>
                    <div class="dashboard-content-block">
                      <div class="row">
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Energy Class</label>
                            <input class="form-control" v-model="formData.energy_class" placeholder="Energy class" type="text">
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Global Energy Performance Index</label>
                            <input class="form-control" v-model="formData.global_energy_performance_index" placeholder="For example: 92.42 kWh / m²a" type="text">
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Renewable energy performance index</label>
                            <input class="form-control" v-model="formData.renewable_energy_performance_index" placeholder="For example: 0.00 kWh / m²a" type="text">
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Energy performance of the building</label>
                            <input class="form-control" v-model="formData.energy_performance_of_the_building" placeholder="Energy performance of the building" type="text">
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                      </div><!-- row -->
                    </div><!-- dashboard-content-block -->
                  </div><!-- dashboard-content-block-wrap -->

                  <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <BackBtn route="dashboard.create-listing.step-3" :pId="propertyId"/>
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
import SectionEnergyClass from '@/views/inc/dashboard/property/SectionEnergyClass.vue';
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";

const btnLoading = ref(false);
const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();

const formData = ref({
  energy_class :"",
  global_energy_performance_index :"",
  renewable_energy_performance_index :"",
  energy_performance_of_the_building :"",
});

const editData = async () => {
  const res = await propertyToRefs.edit(propertyId);

  if (res.status === 404) {
    return router.push({name:"property-not-found-404"});
  } else if (res.status === 403) {
    return router.push({name:"unauthorized-403"});
  }
}

const formSubmit = async () => {
  btnLoading.value = true;

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`Step 4 of ${PROPERTY_TOTAL_STEPS} completed.`);
      router.push({name:"dashboard.create-listing.step-5",params:{propertyId:propertyId}});
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