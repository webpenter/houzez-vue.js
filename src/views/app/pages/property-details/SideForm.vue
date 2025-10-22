<template>
  <div class="col-lg-4 col-md-12 position-relative">
    <div class="property-form-tabs position-sticky top-0 left-0 right-0">
      <div class="row mt-1">
        <div class="col-12 position-relative">
          <div class="position-absolute top-50 start-50 translate-middle text-white text-center fw-bold fs-4">
            {{ $t('Schedule a tour') }}
          </div>
          <div class="mx-4 position-relative">
            <img src="@/assets/img/client-side/schedule-tour.jpg" class="img-fluid w-100 custom-img">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <div class="container">
              <div class="property-schedule-tour-form-title my-3 fw-bold">
                {{ $t('Tour Type') }}
              </div>
              <form @submit.prevent="submitTourRequest">
                <div class="row">
                  <div class="col-12">
                    <el-radio-group v-model="formData.tour_type">
                      <div class="row gy-2">
                        <div class="col-12">
                          <el-radio value="in-person" class="w-100" size="large" border>{{$t('In Person')}}</el-radio>
                        </div>
                        <div class="col-6 d-flex">
                          <el-radio value="video-chat" class="w-100" size="large" border>{{$t('Video Chat')}}</el-radio>
                        </div>
                        <div class="col-6 d-flex">
                          <el-radio value="phone-call" class="w-100" size="large" border>{{$t('Phone Call')}}</el-radio>
                        </div>
                      </div>
                    </el-radio-group>
                  </div>

                  <!-- Date Picker -->
                  <div class="col-12 my-1">
                    <el-date-picker
                        v-model="formData.tour_date_time"
                        type="datetime"
                        :placeholder="$t('Date and Time')"
                        format="YYYY/MM/DD HH:mm:ss"
                        class="w-100"
                        @change="validateForm"
                    />
                    <p v-if="errors.tour_date_time" class="text-danger small">{{ errors.tour_date_time }}</p>
                  </div>

                  <!-- Name -->
                  <div class="col-12 my-1">
                    <input
                        v-model="formData.name"
                        type="text"
                        class="form-control"
                        :placeholder="$t('Name')"
                        @input="validateForm"
                    />
                    <p v-if="errors.name" class="text-danger small">{{ errors.name }}</p>
                  </div>

                  <!-- Phone -->
                  <div class="col-12 my-1">
                    <input
                        v-model="formData.phone"
                        type="text"
                        class="form-control"
                        :placeholder="$t('Phone')"
                        @input="validateForm"
                    />
                    <p v-if="errors.phone" class="text-danger small">{{ errors.phone }}</p>
                  </div>

                  <!-- Email -->
                  <div class="col-12 my-1">
                    <input
                        v-model="formData.email"
                        type="text"
                        class="form-control"
                        :placeholder="$t('Email')"
                        @input="validateForm"
                    />
                    <p v-if="errors.email" class="text-danger small">{{ errors.email }}</p>
                  </div>

                  <!-- Message -->
                  <div class="col-12 my-1">
                    <textarea
                        v-model="formData.message"
                        class="form-control"
                        rows="2"
                        :placeholder="$t('Enter your message')"
                        @input="validateForm"
                    ></textarea>
                    <p v-if="errors.message" class="text-danger small">{{ errors.message }}</p>
                  </div>

                  <!-- Submit Button -->
                  <div class="col-12 my-1">
                    <button class="btn bg-success btn-secondary w-100" :disabled="!isFormValid || isLoading">
                    <span v-if="isLoading">
                      <i class="fa fa-spinner fa-spin"></i> Submitting...
                    </span>
                      <span v-else>{{ $t('Submit a Tour Request') }}</span>
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="noAuthDialog" title="Alert" width="500" align-center>
    <span>
      You can send a tour request  only if you are authenticated. Please log in or sign up first to access this feature.
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="noAuthDialog = false">Cancel</el-button>
        <el-button type="primary" @click="showLoginPage">
          Login
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>


<script setup>
import { ref, computed } from "vue";
import {useNotification, useToken, useTourRequest} from "@/stores/index.js";
import {useRouter} from "vue-router";

const props = defineProps(["propertyId"]);

const router = useRouter()
const token = useToken().getToken
const noAuthDialog = ref(false)

const showLoginPage = () => {
  router.push({name:'auth'});
  noAuthDialog.value = false;
}

const formData = ref({
  property_id: props.propertyId,
  tour_type: "in-person",
  name: "",
  phone: "",
  email: "",
  tour_date_time: "",
  message: "",
});

const errors = ref({
  name: "",
  phone: "",
  email: "",
  tour_date_time: "",
  message: "",
});

const isLoading = ref(false);

const validateForm = () => {
  errors.value.name = formData.value.name ? "" : "Name is required";
  errors.value.phone = /^\d{10,15}$/.test(formData.value.phone) ? "" : "Enter a valid phone number";
  errors.value.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email) ? "" : "Enter a valid email";
  errors.value.tour_date_time = formData.value.tour_date_time ? "" : "Select a valid date & time";
  errors.value.message = formData.value.message ? "" : "Message is required";
};

const isFormValid = computed(() => {
  return Object.values(errors.value).every((error) => error === "");
});

const resetForm = () => {
  formData.value = {
    property_id: props.propertyId,
    tour_type: "in-person",
    name: "",
    phone: "",
    email: "",
    tour_date_time: "",
    message: "",
  };
  errors.value = {
    name: "",
    phone: "",
    email: "",
    tour_date_time: "",
    message: "",
  };
};

const submitTourRequest = async () => {
  if (!token) {
    noAuthDialog.value = true;
    return;
  }

  validateForm();
  if (!isFormValid.value) return;

  isLoading.value = true;
  try {
    const res = await useTourRequest().sendRequest(formData.value);

    if (res.status === 201) {
      useNotification().Success("Tour request sent successfully");
      resetForm();
    } else {
      useNotification().Error("Tour request failed");
    }
  } catch (error) {
    useNotification().Error("An error occurred while submitting the Tour");
  } finally {
    isLoading.value = false;
  }
};
</script>



<style scoped>
.custom-img {
  height: 160px;
  filter: blur(0px) brightness(70%);
  object-fit: cover;
}

.position-absolute {
  z-index: 2;
}
</style>