<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="12"/>
            <div class="dashboard-content-inner-wrap">
               <form @submit.prevent="formSubmit">
                 <div class="dashboard-content-block-wrap">
                   <h2>Private Note</h2>
                   <div class="dashboard-content-block">
                     <div class="form-group">
                       <label>Write private note for this property, it will not display for public.</label>
                       <textarea 
                       v-model="formData.private_note" 
                       class="form-control" rows="7" placeholder="Enter the note here"></textarea>
                     </div>
                   </div><!-- dashboard-content-block -->
                 </div><!-- dashboard-content-block-wrap -->

                 <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                   <BackBtn route="dashboard.create-listing.step-11" :pId="propertyId"/>
                   <button class="btn btn-primary" type="submit" :disabled="btnLoading">
                     Submit
                     <span v-if="btnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   </button>
                 </div><!-- add-new-listing-bottom-nav-wrap -->
               </form>
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import {useRoute, useRouter} from "vue-router";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref, watch} from "vue";
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {useEditProperty} from "@/traits/property/manageProperty.js";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);

const formData = ref({
  private_note: "",
  property_status: "",
});

const {editData} = useEditProperty();

const formSubmit = async () => {
  btnLoading.value = true;

  if (formData.value.property_status === "draft") {
    formData.value.property_status = "pending";
  }

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`All steps have been completed.`);
      router.push({name:"dashboard.create-listing.completed"});
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