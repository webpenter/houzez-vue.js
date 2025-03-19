<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="3"/>
            <div class="dashboard-content-inner-wrap">
              <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                  <h2>{{$t('Property Features')}}</h2>
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
import {onMounted, ref, watch} from 'vue';
import {storeToRefs} from "pinia";
import {useFeatures, useProperty} from "@/stores/index.js";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {useRoute, useRouter} from "vue-router";
import {useEditProperty,usePropertyForm} from "@/traits/property/manageProperty.js";

const {features} = storeToRefs(useFeatures());

const formData = ref({
  property_feature:[],
});

const route = useRoute();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);

const {editData} = useEditProperty();

const { formSubmit, btnLoading } = usePropertyForm(
    propertyId,
    formData,
    ref({}),
    () => {},
    3
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