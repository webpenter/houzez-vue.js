<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="10"/>
            <div class="dashboard-content-inner-wrap">
              <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                  <h2>Contact Information</h2>
                  <div class="dashboard-content-block">
                    <p class="mb-3">What information do you want to display in agent data container?</p>
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
import { useRoute } from "vue-router";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {onMounted, ref, watch} from "vue";
import {useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {useEditProperty, usePropertyForm} from "@/traits/property/manageProperty.js";

const route = useRoute();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);

const formData = ref({
  contact_information:[],
});

const {editData} = useEditProperty();

const { formSubmit, btnLoading } = usePropertyForm(
    propertyId,
    formData,
    ref({}),
    () => {},
    10
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