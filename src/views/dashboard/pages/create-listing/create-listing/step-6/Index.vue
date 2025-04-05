<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn :status="property.property_status ?? ''"/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="6"/>
            <div class="dashboard-content-inner-wrap">

                  <div class="dashboard-content-block-wrap">
                    <h2>Property Media</h2>
                    <div class="dashboard-content-block">
                      <div class="upload-property-media">
                        <div class="media-drag-drop">
                          <div class="upload-icon">
                            <i class="houzez-icon icon-picture-sun"></i>
                          </div>
                          <div class="upload-image-counter">{{ propertyImages.length ?? '0' }} of 6</div>
                          <div>
                            <span>(Maximum size 2MB)</span>
                          </div>
                          <button @click="triggerFileInput" class="btn btn-primary btn-left-icon"><i class="houzez-icon icon-upload-button mr-1"></i>
                            Select and Upload
                          </button>
                          <input
                              type="file"
                              ref="fileInput"
                              multiple
                              style="display: none;"
                              @change="handleFileChange"
                          />
                        </div>
                        <span class="text-danger" v-if="localErrors.images_error">
                            {{ localErrors.images_error }}
                        </span>
                        <div v-if="uploadProgress > 0" class="progress mt-3">
                          <div
                              class="progress-bar"
                              role="progressbar"
                              :style="{ width: uploadProgress + '%' }"
                              :aria-valuenow="uploadProgress"
                              aria-valuemin="0"
                              aria-valuemax="100"
                          >
                            {{ uploadProgress }}%
                          </div>
                        </div>
                        <template v-if="propertyImages.length > 0">
                          <p>Click on the star icon to select the cover image.</p>
                          <div class="upload-media-gallery">
                            <div class="row">
                              <template v-for="image in propertyImages">
                                <div class="col-md-2 col-sm-4 col-6">
                                  <img class="img-fluid" :src="image.image_path" alt="thumb">
                                  <div class="upload-gallery-thumb-buttons">
                                    <button @click="updateThumbnail(image.id)">
                                      <i
                                          class="houzez-icon icon-rating-star full-star"
                                          :class="{'text-success':image.is_thumbnail === 1}"
                                      >
                                      </i>
                                    </button>
                                    <button @click="deleteImage(image.id)">
                                      <i class="houzez-icon icon-remove-circle"></i>
                                    </button>
                                  </div>
                                </div>
                              </template>
                            </div>
                          </div>
                        </template>
                      </div>
                    </div><!-- dashboard-content-block -->
                  </div><!-- dashboard-content-block-wrap -->

                  <div class="dashboard-content-block-wrap">
                    <h2>Property Video</h2>
                    <div class="dashboard-content-block">
                      <div class="form-group">
                        <label>Enter video iframe/embeded code</label>
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
                        <small class="form-text text-muted">Input contains an "iframe" or "embed" tag</small>
                      </div>
                    </div><!-- dashboard-content-block -->
                  </div><!-- dashboard-content-block-wrap -->
                <form @submit.prevent="formSubmit">
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
import {useRoute, useRouter} from "vue-router";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {computed, onMounted, ref, watch} from "vue";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {useEditProperty} from "@/traits/property/manageProperty.js";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {property,propertyImages} = storeToRefs(propertyToRefs);
const notify = useNotification();
const btnLoading = ref(false);
const fileInput = ref(null);
const {editData} = useEditProperty();

const formData = ref({
  video_url: "",
});

const localErrors = ref({
  video_url: "",
  images_error: "",
});

const validateField = (field) => {
  if (field === "video_url" && formData.value.video_url && !isEmbedCode(formData.value.video_url)) {
    localErrors.value.video_url = "Please enter a valid embed code.";
  } else {
    localErrors.value[field] = "";
  }
};

const isEmbedCode = (input) => {
  return /<iframe[\s\S]*<\/iframe>|<embed[\s\S]*>/.test(input);
};

const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const editImagesData = async () => await propertyToRefs.editImages(propertyId);

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const uploadProgress = ref(0);

const handleFileChange = async (event) => {
  const files = event.target.files;
  if (!files.length) return;

  const validExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSizeInBytes = 2 * 1024 * 1024;
  const maxAllowedFiles = 6;

  let errors = [];
  let formImagesData = new FormData();
  let validFilesCount = 0;

  if (files.length > maxAllowedFiles) {
    errors.push("You can upload a maximum of 6 files.");
  }

  for (const file of files) {
    if (!validExtensions.includes(file.type)) {
      errors.push(`Invalid file type for ${file.name}. Only JPG, JPEG, and PNG files are allowed.`);
      continue;
    }

    if (file.size > maxSizeInBytes) {
      errors.push(`File size exceeds the 2MB limit for ${file.name}. Please upload a smaller file.`);
      continue;
    }

    formImagesData.append("images[]", file);
    validFilesCount++;
  }

  if (errors.length > 0) {
    notify.Error([...new Set(errors)].join("\n"));
    return;
  }

  if (validFilesCount === 0) {
    notify.Error("No valid images to upload. Please check file type and size.");
    return;
  }

  const progressHandler = (progressEvent) => {
    if (progressEvent.lengthComputable) {
      const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      uploadProgress.value = progress;
    }
  };

  try {
    const response = await propertyToRefs.imagesCreateOrUpdate(formImagesData, propertyId, progressHandler);

    if (response.status === 200) {
      notify.Success("Property images successfully uploaded!");
      await editImagesData();
      uploadProgress.value = 0;
    } else if (response.status === 422) {
      notify.Error("This property already has 6 images, no more can be uploaded.");
    } else if (response.status === 400) {
      notify.Error("The number of images you selected exceeds the allowed limit.");
    } else {
      notify.Error("Failed to upload property images.");
    }
  } catch (error) {
    notify.Error("An error occurred while uploading images.");
  } finally {
    uploadProgress.value = 0;
  }
};


const formSubmit = async () => {
  Object.keys(localErrors.value).forEach((field) => validateField(field));

  if (hasErrors.value) {
    notify.Error("Please fix the validation errors before proceeding.");
    return;
  }
  if (typeof propertyImages.value.length === "undefined") {
    notify.Error("At least one image is mandatory. Kindly upload an image before continuing.");
    return;
  }

  btnLoading.value = true;

  try {
    const res = await propertyToRefs.createOrUpdate(formData.value, propertyId);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`Step 6 of ${PROPERTY_TOTAL_STEPS} completed.`);
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

const updateThumbnail = async (imgId) => {
  try {
    const res = await propertyToRefs.updateThumbnail(propertyId,imgId);

    if (res.status === 200) {
      notify.Success(`Thumbnail updated successfully`);
      await editImagesData();
    } else {
      notify.Error("Failed to update thumbnail.");
    }
  } catch (error) {
    notify.Error("An error occurred while processing the request.");
  }
}

const deleteImage = async (imgId) => {
  try {
    const res = await propertyToRefs.deleteImage(propertyId,imgId);

    if (res.status === 200) {
      notify.Success(`Image deleted successfully`);
      await editImagesData();
    } else {
      notify.Error("Failed to delete image.");
    }
  } catch (error) {
    notify.Error("An error occurred while processing the request.");
  }
}

onMounted(() => {
  editData(propertyId);
  editImagesData();

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