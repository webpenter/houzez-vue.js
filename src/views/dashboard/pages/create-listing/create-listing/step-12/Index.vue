<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="listing"/>
            <div class="dashboard-content-inner-wrap">

               <form @submit.prevent="formSubmit">
                 <div class="dashboard-content-block-wrap">
                   <h2>Private Note</h2>
                   <div class="dashboard-content-block">
                     <div class="form-group">
                       <label>Write private note for this property, it will not display for public.</label>
                       <textarea class="form-control" v-model="formData.private_note" rows="7" placeholder="Enter the note here"></textarea>
                     </div>
                   </div><!-- dashboard-content-block -->
                 </div><!-- dashboard-content-block-wrap -->

                 <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                   <BackBtn route="dashboard.create-listing.step-11" :pId="propertyId"/>
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
import SectionPrivateNote from '@/views/inc/dashboard/property/SectionPrivateNote.vue';
import {useRoute, useRouter} from "vue-router";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref, watch} from "vue";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);

const formData = ref({
  private_note: "",
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
      notify.Success(`Step 12 of ${PROPERTY_TOTAL_STEPS} completed. Your property has been recorded`);
      router.push({name:"dashboard.create-listing.completed",params:{propertyId:propertyId}});
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