<template>
    <DashboardHeader heading="Add New Property">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="listing"/>
            <div class="dashboard-content-inner-wrap">

              <form>
                <div class="dashboard-content-block-wrap">
                  <h2>Contact Information</h2>
                  <div class="dashboard-content-block">
                    <p>What information do you want to display in agent data container?</p>
                    <div class="form-group">
                      <label class="control control--checkbox ">
                        <input type="radio" name="radio">Author Data
                        <span class="control__indicator"></span>
                      </label>
                      <label class="control control--checkbox">
                        <input type="radio" name="radio">Agent Data (Choose agent from the list below)
                        <span class="control__indicator"></span>
                      </label>
                      <ul class="list-unstyled ml-5">
                        <li>
                          <label class="control control--checkbox">
                            <input type="checkbox" name="checkbox">Agent Name
                            <span class="control__indicator"></span>
                          </label>
                        </li>
                        <li>
                          <label class="control control--checkbox">
                            <input type="checkbox" name="checkbox">Agent Name
                            <span class="control__indicator"></span>
                          </label>
                        </li>
                        <li>
                          <label class="control control--checkbox">
                            <input type="checkbox" name="checkbox">Agent Name
                            <span class="control__indicator"></span>
                          </label>
                        </li>
                        <li>
                          <label class="control control--checkbox">
                            <input type="checkbox" name="checkbox">Agent Name
                            <span class="control__indicator"></span>
                          </label>
                        </li>
                      </ul>
                      <label class="control control--checkbox">
                        <input type="radio" name="radio">Do not display
                        <span class="control__indicator"></span>
                      </label>
                    </div>
                  </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->

                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                  <BackBtn route="dashboard.create-listing.step-9" :pId="propertyId"/>
                  <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.step-11',params:{propertyId:propertyId}}">
                    Next
                    <i class="houzez-icon icon-arrow-right-1 ml-2"></i>
                  </RouterLink>
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

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
</script>