<template>
    <DashboardHeader heading="Add New Property">
        <SaveAsDraftBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="listing"/>
            <div class="dashboard-content-inner-wrap">

                <form @submit.prevent="formSubmit">
                  <div class="dashboard-content-block-wrap">
                    <h2>Property Media</h2>
                    <div class="dashboard-content-block">
                      <p>Drag and drop the images to customize the image gallery order.</p>
                      <div class="upload-property-media">
                        <div class="media-drag-drop">
                          <div class="upload-icon">
                            <i class="houzez-icon icon-picture-sun"></i>
                          </div>
                          <div class="upload-image-counter">3 of 6</div>
                          <div>
                            Drag and drop the gallery images here<br>
                            <span>(Minimum size 1440x900)</span>
                          </div>
                          <button class="btn btn-primary btn-left-icon"><i class="houzez-icon icon-upload-button mr-1"></i> Select and Upload</button>
                        </div>
                        <p>Click on the star icon to select the cover image.</p>
                        <div class="upload-media-gallery">
                          <div class="row">
                            <div class="col-md-2 col-sm-4 col-6">
                              <img class="img-fluid" src="http://placehold.it/200x150" alt="thumb">
                              <div class="upload-gallery-thumb-buttons">
                                <button><i class="houzez-icon icon-rating-star full-star text-success"></i></button>
                                <button><i class="houzez-icon icon-remove-circle"></i></button>
                              </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                              <img class="img-fluid" src="http://placehold.it/200x150" alt="thumb">
                              <div class="upload-gallery-thumb-buttons">
                                <button><i class="houzez-icon icon-rating-star full-star"></i></button>
                                <button><i class="houzez-icon icon-remove-circle"></i></button>
                              </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                              <img class="img-fluid" src="http://placehold.it/200x150" alt="thumb">
                              <div class="upload-gallery-thumb-buttons">
                                <button><i class="houzez-icon icon-rating-star full-star"></i></button>
                                <button><i class="houzez-icon icon-remove-circle"></i></button>
                              </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                              <img class="img-fluid" src="http://placehold.it/200x150" alt="thumb">
                              <div class="upload-gallery-thumb-buttons">
                                <button><i class="houzez-icon icon-rating-star full-star"></i></button>
                                <button><i class="houzez-icon icon-remove-circle"></i></button>
                              </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                              <img class="img-fluid" src="http://placehold.it/200x150" alt="thumb">
                              <div class="upload-gallery-thumb-buttons">
                                <button><i class="houzez-icon icon-rating-star full-star"></i></button>
                                <button><i class="houzez-icon icon-remove-circle"></i></button>
                              </div>
                            </div>
                            <div class="col-md-2 col-sm-4 col-6">
                              <img class="img-fluid" src="http://placehold.it/200x150" alt="thumb">
                              <div class="upload-gallery-thumb-buttons">
                                <button><i class="houzez-icon icon-rating-star full-star"></i></button>
                                <button><i class="houzez-icon icon-remove-circle"></i></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div><!-- dashboard-content-block -->
                  </div><!-- dashboard-content-block-wrap -->

                  <div class="dashboard-content-block-wrap">
                    <h2>Property Video</h2>
                    <div class="dashboard-content-block">
                      <div class="form-group">
                        <label>Video URL</label>
                        <input
                            class="form-control"
                            :class="{ 'is-invalid': localErrors.video_url }"
                            @input="validateField('video_url')"
                            v-model="formData.video_url"
                            placeholder="YouTube, Vimeo, SWF File and MOV File are supported"
                            type="text"
                        >
                        <span class="text-danger" v-if="localErrors.video_url">
                            {{ localErrors.video_url }}
                          </span>
                        <small class="form-text text-muted">For example: https://www.youtube.com/watch?v=49d3Gn41IaA</small>
                      </div>
                    </div><!-- dashboard-content-block -->
                  </div><!-- dashboard-content-block-wrap -->

                  <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <BackBtn route="dashboard.create-listing.step-5" :pId="propertyId"/>
                    <NextBtn :btnLoading="btnLoading" :hasErrors="hasErrors"/>
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
import SectionMedia from '@/views/inc/dashboard/property/SectionMedia.vue';
import {useRoute, useRouter} from "vue-router";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {computed, onMounted, ref, watch} from "vue";
import {PROPERTY_TOTAL_STEPS} from "@/constants/index.js";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);

const formData = ref({
  video_url: "",
});

const localErrors = ref({
  video_url: "",
});

const validateField = (field) => {
  if (field === "video_url" && formData.value.video_url && !isValidUrl(formData.value.video_url)) {
    localErrors.value.video_url = "Please enter a valid URL.";
  }  else {
    localErrors.value[field] = "";
  }
};

const isValidUrl = (url) => {
  const urlPattern = new RegExp(
      "^(https?:\\/\\/)" + // protocol
      "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IPv4
      "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%._+~#=]*)*" + // port and path
      "(\\?[;&a-zA-Z0-9@:%._+~#=]*)?" + // query string
      "(\\#[-a-zA-Z0-9@:%._+~#=]*)?$", // fragment locator
      "i"
  );
  return urlPattern.test(url);
};


const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const editData = async () => {
  const res = await propertyToRefs.edit(propertyId);

  if (res.status === 404) {
    return router.push({name:"property-not-found-404"});
  } else if (res.status === 403) {
    return router.push({name:"unauthorized-403"});
  }
}

const formSubmit = async () => {
  Object.keys(localErrors.value).forEach((field) => validateField(field));

  if (hasErrors.value) {
    notify.Error("Please fix the validation errors before proceeding.");
    return;
  }

  btnLoading.value = true;

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`Step 6 of ${PROPERTY_TOTAL_STEPS} completed. Your property has been recorded`);
      router.push({name:"dashboard.create-listing.step-7",params:{propertyId:propertyId}});
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