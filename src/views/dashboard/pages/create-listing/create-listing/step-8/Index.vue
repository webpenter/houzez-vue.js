<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
     <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="8"/>
            <div class="dashboard-content-inner-wrap">

                  <div class="dashboard-content-block-wrap">
                    <h2>Floor Plan</h2>

                    <!-- Render each form in a new dashboard-content-block -->
                    <div v-for="(plan, index) in floorPlans" :key="plan.id" class="dashboard-content-block mb-4">
                      <h3>Floor Plan {{ index + 1 }}</h3>
                      <div class="row">
                        <div class="col-md-12 col-sm-12">
                          <div class="form-group">
                            <label>Plan Title</label>
                            <input class="form-control" name="name" placeholder="Enter the plan title" type="text">
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Plan Bedrooms</label>
                            <input class="form-control" name="name" placeholder="Enter number of bedrooms" type="text">
                            <small class="form-text text-muted">Only digits</small>
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Plan Bathrooms</label>
                            <input class="form-control" name="name" placeholder="Enter number of bathrooms" type="text">
                            <small class="form-text text-muted">Only digits</small>
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Plan Price</label>
                            <input class="form-control" name="name" placeholder="Enter the plan price" type="text">
                            <small class="form-text text-muted">Only digits</small>
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Price Postfix</label>
                            <input class="form-control" name="name" placeholder="Enter the plan postfix" type="text">
                            <small class="form-text text-muted">For example: Monthly</small>
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Plan Size</label>
                            <input class="form-control" name="name" placeholder="Enter the plan size" type="text">
                            <small class="form-text text-muted">For example: 200 Sq Ft</small>
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Plan Image</label>
                            <div class="d-flex align-items-start">
                              <img class="img-fluid" src="" alt="thumb">
                              <div class="ml-2">
                                <button type="button" class="btn btn-primary btn-full-width">Select An Image To Upload</button>
                                <small class="form-text text-muted">Minimum size 800 x 600 px</small>
                              </div>
                            </div>
                          </div>
                        </div><!-- col-md-6 col-sm-12 -->
                        <div class="col-md-12 col-sm-12">
                          <div class="form-group">
                            <label>Plan Description</label>
                            <textarea class="form-control" name="message" rows="5" placeholder="Enter the plan description"></textarea>
                          </div>
                        </div><!-- col-md-12 col-sm-12 -->
                      </div><!-- row -->
                      <button
                          class="btn btn-primary-outlined btn-left-icon mt-3"
                          @click="deleteFloorPlan(plan.id)"
                      >
                        <i class="houzez-icon icon-remove-circle mr-2"></i> Delete
                      </button>
                    </div>

                    <!-- Add New Button -->
                    <div class="dashboard-content-block mt-4">
                      <button class="btn btn-primary btn-left-icon" @click="addNewFloorPlan">
                        <i class="houzez-icon icon-add-circle mr-2"></i> Add New
                      </button>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <BackBtn route="dashboard.create-listing.step-7" :pId="propertyId"/>
                    <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.step-9',params:{propertyId:propertyId}}">
                      Next
                      <i class="houzez-icon icon-arrow-right-1 ml-2"></i>
                    </RouterLink>
                  </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import {RouterLink, useRoute} from "vue-router";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import { reactive } from 'vue';
import {useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";


const route = useRoute();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);


const floorPlans = reactive([{ id: Date.now() }]);

const addNewFloorPlan = () => {
  floorPlans.push({ id: Date.now() });
};

const deleteFloorPlan = (id) => {
  const index = floorPlans.findIndex((plan) => plan.id === id);
  if (index > -1) {
    floorPlans.splice(index, 1);
  }
};

// const formSubmit = () => {
//   alert("Form Submitted!");
// }
</script>