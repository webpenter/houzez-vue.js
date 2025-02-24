<template>
  <DashboardHeader heading="Create Package">
    <RouterLink :to="{name:'dashboard.settings.all-packages'}" class="btn btn-primary-outlined">
      All Packages
    </RouterLink>
  </DashboardHeader>
  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <div class="dashboard-content-block">
            <div class="form-group">
              <label>Package Name *</label>
              <input
                  class="form-control"
                  :class="{ 'is-invalid': localErrors.name }"
                  @input="validateField('name')"
                  v-model="formData.name"
                  placeholder="Enter the package name"
                  type="text"
              >
              <div class="text-danger mt-1" v-if="localErrors.name">
                        {{ localErrors.name }}
                      </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Price *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.amount }"
                      @input="validateField('amount')"
                      v-model="formData.amount"
                      placeholder="Enter the price"
                      type="text"
                  >
                  <div class="text-danger mt-1" v-if="localErrors.amount">
                          {{ localErrors.amount }}
                        </div>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Currency *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.currency }"
                      @input="validateField('currency')"
                      v-model="formData.currency"
                      placeholder="Enter the currency"
                      type="text"
                  >
                  <div class="text-danger mt-1" v-if="localErrors.currency">
                          {{ localErrors.currency }}
                         </div>
                </div><!-- form-group -->
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Number of Listings *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.number_of_listings }"
                      @input="validateField('number_of_listings')"
                      v-model="formData.number_of_listings"
                      placeholder="Enter the total number of listings"
                      type="text"
                  >
                  <div class="text-danger mt-1" v-if="localErrors.number_of_listings">
                          {{ localErrors.number_of_listings }}
                         </div>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Number of Images *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.number_of_images }"
                      @input="validateField('number_of_images')"
                      v-model="formData.number_of_images"
                      placeholder="Enter the total number of images"
                      type="text"
                  >
                  <div class="text-danger mt-1" v-if="localErrors.number_of_images">
                          {{ localErrors.number_of_images }}
                         </div>
                </div><!-- form-group -->
              </div><!-- col-md-6 col-sm-12 -->
            </div><!-- row -->
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Billing Method *</label>
                  <div>
                    <el-select
                        v-model="formData.billing_period"
                        @change="validateField('billing_period')"
                        filterable
                        default-first-option
                        :reserve-keyword="false"
                        placeholder="Choose billing method for your package"
                        style="width: 100%"
                    >
                      <el-option
                          v-for="billing in ['day','week','month','year']"
                          :key="billing"
                          :label="$filters.capitalize(billing)"
                          :value="billing"
                      />
                    </el-select>
                    <div class="text-danger mt-1" v-if="localErrors.billing_period">
                          {{ localErrors.billing_period }}
                         </div>
                  </div>
                </div><!-- form-group -->
              </div><!-- col-md-4 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Interval Count *</label>
                  <div>
                    <el-select
                        v-model="formData.interval_count"
                        @change="validateField('interval_count')"
                        filterable
                        default-first-option
                        :reserve-keyword="false"
                        placeholder="Choose interval count for your package"
                        style="width: 100%"
                    >
                      <el-option
                          v-for="count in 10"
                          :key="count"
                          :label="count"
                          :value="count"
                      />
                    </el-select>
                    <div class="text-danger mt-1" v-if="localErrors.interval_count">
                          {{ localErrors.interval_count }}
                         </div>
                  </div>
                </div><!-- form-group -->
              </div><!-- col-md-4 col-sm-12 -->
            </div><!-- row -->
            <hr/>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="formData.active" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Active
                </label>
              </div>
            </div>
          </div><!-- dashboard-content-block -->
        </div><!-- dashboard-content-block-wrap -->

        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard.settings.all-packages'}">
            Cancel
          </RouterLink>
          <button class="btn btn-primary" type="submit" :disabled="btnLoading || hasErrors">
            Create Package
            <span v-if="btnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </div><!-- add-new-listing-bottom-nav-wrap -->
      </form>

    </div><!-- dashboard-content-inner-wrap -->

  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {RouterLink, useRouter} from 'vue-router';
import {computed, ref} from "vue";
import {useNotification, usePackage} from "@/stores/index.js";

const router = useRouter();
const notify = useNotification();

const formData = ref({
  name:"",
  amount:"",
  currency:"",
  interval_count:"",
  billing_period:"",
  number_of_listings:"",
  number_of_images:"",
  active:false,
});

const btnLoading = ref(false);
const localErrors = ref({
  name:"",
  amount:"",
  currency:"",
  interval_count:"",
  billing_period:"",
  number_of_listings:"",
  number_of_images:"",
});

const validateField = (field) => {
  if (field === "name" && !formData.value.name) {
    localErrors.value.name = "Package name field is required.";
  } else if (field === "currency") {
    if (!formData.value.currency) {
      localErrors.value.currency = "Currency field is required.";
    } else if (formData.value.currency.length !== 3) {
      localErrors.value.currency = "Currency code must be exactly 3 characters.";
    } else {
      localErrors.value.currency = "";
    }
  } else if (field === "amount") {
    if (!formData.value.amount) {
      localErrors.value.amount = "Price field is required.";
    } else if (isNaN(formData.value.amount)) {
      localErrors.value.amount = "Price must be a number.";
    } else {
      localErrors.value.amount = "";
    }
  } else if (field === "number_of_listings") {
    if (!formData.value.number_of_listings) {
      localErrors.value.number_of_listings = "Number of listings field is required.";
    } else if (isNaN(formData.value.number_of_listings)) {
      localErrors.value.number_of_listings = "Number of listings must be a number.";
    } else {
      localErrors.value.number_of_listings = "";
    }
  } else if (field === "number_of_images") {
    if (!formData.value.number_of_images) {
      localErrors.value.number_of_images = "Number of images field is required.";
    } else if (isNaN(formData.value.number_of_images)) {
      localErrors.value.number_of_images = "Number of images must be a number.";
    } else {
      localErrors.value.number_of_images = "";
    }
  } else if (field === "billing_period" && !formData.value.billing_period) {
    localErrors.value.billing_period = "Billing period field is required.";
  } else if (field === "interval_count" && !formData.value.interval_count) {
    localErrors.value.interval_count = "Interval count field is required.";
  } else {
    localErrors.value[field] = "";
  }
};


const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const formSubmit = async () => {
  Object.keys(localErrors.value).forEach((field) => validateField(field));

  if (hasErrors.value) {
    notify.Error("Please fix the validation errors before proceeding.");
    return;
  }

  btnLoading.value = true;

  try {
    const res = await usePackage().storePlan(formData.value);

    btnLoading.value = false;

    if (res.status === 200) {
      notify.Success(`Your package has been recorded`);
      router.push({name:"dashboard.settings.all-packages"});
    }  else {
      notify.Error("An error occurred while processing the request.");
    }
  } catch (error) {
    btnLoading.value = false;
    notify.Error("An error occurred");
  }
};
</script>