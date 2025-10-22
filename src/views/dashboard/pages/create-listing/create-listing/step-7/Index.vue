<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="7"/>
            <div class="dashboard-content-inner-wrap">

                <form @submit.prevent="formSubmit">
                  <div class="dashboard-content-block-wrap">
                    <h2>360° Virtual Tour</h2>
                    <div class="dashboard-content-block">
                      <div class="form-group">
                        <label>Enter virtual tour iframe/embeded code</label>
                        <textarea
                            v-model="formData.virtual_tour" class="form-control" rows="7" placeholder="Enter the code here"></textarea>
                      </div>
                    </div><!-- dashboard-content-block -->
                  </div><!-- dashboard-content-block-wrap -->

                  <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <BackBtn route="dashboard.create-listing.step-6" :p-id="propertyId"/>
                    <NextBtn :btn-loading="btnLoading" :has-errors="false"/>
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
import {useRoute} from "vue-router";
import {useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref, watch} from "vue";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {useEditProperty, usePropertyForm} from "@/traits/property/manageProperty.js";

const route = useRoute();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);

const formData = ref({
  virtual_tour: "",
});

const {editData} = useEditProperty();

const { formSubmit, btnLoading } = usePropertyForm(
    propertyId,
    formData,
    ref({}),
    () => {},
    9
);

onMounted(() => {
  editData(propertyId);

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