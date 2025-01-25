<template>
    <DashboardHeader heading="Add New Property">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <SnakeNav active="listing"/>
            <div class="dashboard-content-inner-wrap">

              <div class="dashboard-content-block-wrap">
                {{property}}
                <h2>Description</h2>
                <div class="dashboard-content-block">
                  <div class="form-group">
                    <label>Title</label>
                    <input class="form-control is-valid" v-model="formData.title" placeholder="Enter the property title" type="text">
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" v-model="formData.description" rows="10" placeholder="Enter the property description"></textarea>
                  </div>
                  <div class="row">
                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Type</label>
                        <select class="form-control" v-model="formData.type" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
                          <option selected>Select</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </select><!-- selectpicker -->
                      </div><!-- form-group -->
                    </div><!-- col-md-4 col-sm-12 -->
                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Status</label>
                        <select class="form-control" v-model="formData.status" title="Select" data-live-search="false" data-selected-text-format="count"  data-actions-box="false">
                          <option selected>Select</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </select><!-- selectpicker -->
                      </div><!-- form-group -->
                    </div><!-- col-md-4 col-sm-12 -->
                    <div class="col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Label</label>
                        <select class="form-control" v-model="formData.label" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="true">
                          <option selected>Select</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                          <option>Option 4</option>
                          <option>Option 5</option>
                        </select><!-- selectpicker -->
                      </div><!-- form-group -->
                    </div><!-- col-md-4 col-sm-12 -->
                  </div><!-- row -->
                </div><!-- dashboard-content-block -->
              </div><!-- dashboard-content-block-wrap -->

              <div class="dashboard-content-block-wrap">
                <h2>Price</h2>
                <div class="dashboard-content-block">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Sale or Rent Price</label>
                        <input class="form-control is-invalid" v-model="formData.price" placeholder="Enter the price" type="text">
                      </div>
                    </div><!-- col-md-6 col-sm-12 -->
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Second Price (Optional)</label>
                        <input class="form-control" v-model="formData.second_price" placeholder="Enter the second price" type="text">
                      </div><!-- form-group -->
                    </div><!-- col-md-6 col-sm-12 -->
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>After The Price Label</label>
                        <input class="form-control" v-model="formData.after_price" placeholder="Enter the label after price" type="text">
                        <small class="form-text text-muted">For example: Monthly</small>
                      </div>
                    </div><!-- col-md-6 col-sm-12 -->
                    <div class="col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Price Prefix</label>
                        <input class="form-control" v-model="formData.price_prefix" placeholder="Enter the price prefix" type="text">
                        <small class="form-text text-muted">For example: Start from</small>
                      </div><!-- form-group -->
                    </div><!-- col-md-6 col-sm-12 -->
                  </div><!-- row -->
                </div><!-- dashboard-content-block -->
              </div><!-- dashboard-content-block-wrap -->
                
                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard.my-properties'}">
                        Cancel
                    </RouterLink>
                  <button class="btn btn-primary">
                    Next
                    <i class="houzez-icon icon-arrow-right-1 ml-2"></i>
                  </button>
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
            
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {RouterLink, useRoute, useRouter} from 'vue-router';
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import {onMounted, ref, watch} from "vue";
import {useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";

const route = useRoute();
const router = useRouter();

const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);

const formData = ref({
  title:"",
  description:"",
  type:"",
  status:"",
  label:"",
  price:"",
  second_price: "",
  after_price: "",
  price_prefix: "",
});

const editData = async () => {
  const res = await propertyToRefs.edit(route.params.propertyId);

  if (res.status === 404) {
      return router.push({name:"property-not-found-404"});
  }
  console.log("Vue",res.status);
}

onMounted(() => {
  if (route.params.propertyId){
    editData();
  }

  if (property.value){
    formData.value = {...property.value};
  }
});

watch(property,(newProperty) => {
  if (newProperty){
    formData.value = {...newProperty};
  }
});
</script>