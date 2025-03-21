<template>
  <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
    <!--      <SaveAsDraftBtn :status="property.property_status ?? ''"/>-->
  </DashboardHeader>
  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <snake-nav active="8" />
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <h2>{{ $t('Floor Plan') }}</h2>

          <!-- Render each form in a new dashboard-content-block -->
          <div v-for="(plan, index) in floorPlans" :key="plan.id" class="dashboard-content-block mb-4">
            <h3>{{ $t('Floor Plan') }} {{ index + 1 }}</h3>
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Plan Title') }}</label>
                  <input class="form-control" :class="{ 'is-invalid': localErrors.plan_title }"
                    @input="validateField('plan_title')" v-model="formData.plan_title"
                    :placeholder="$t('Enter the plan title')" type="text">
                  <span class="text-danger" v-if="localErrors.title">
                    {{ localErrors.plan_title }}
                  </span>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Plan Bedrooms') }}</label>
                  <input class="form-control" :class="{ 'is-invalid': localErrors.plan_bedrooms }"
                    @input="validateField('plan_bedrooms')"
                   v-model="formData.plan_bedrooms"
                    :placeholder="$t('Enter number of bedrooms')" type="text">
                  <small class="form-text text-muted">{{ $t('Only digits') }}</small>
                  <span class="text-danger" v-if="localErrors.plan_bedrooms">
                {{ localErrors.plan_bedrooms }}
              </span>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Plan Bathrooms') }}</label>
                  <input class="form-control" v-model="formData.plan_bathrooms"
                    :placeholder="$t('Enter number of bathrooms')" type="text">
                  <small class="form-text text-muted">{{ $t('Only digits') }}</small>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Plan Price') }}</label>
                  <input class="form-control" :class="{ 'is-invalid': localErrors.plan_price }"
                  @input="validateField('plan_price')" v-model="formData.plan_price" :placeholder="$t('Enter the plan price')"
                    type="text">
                  <small class="form-text text-muted">{{ $t('Only digits') }}</small>
                  <span class="text-danger" v-if="localErrors.plan_price">
                {{ localErrors.plan_price }}
              </span>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Price Postfix') }}</label>
                  <input class="form-control" v-model="formData.plan_postfix"
                    :placeholder="$t('Enter the plan postfix')" type="text">
                  <small class="form-text text-muted">{{ $t('For example: Monthly') }}</small>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Plan Size') }}</label>
                  <input class="form-control" :class="{ 'is-invalid': localErrors.plan_size }"
                  @input="validateField('plan_size')" v-model="formData.plan_size" :laceholder="$t('Enter the plan size')"
                    type="text">
                  <small class="form-text text-muted">{{ $t('For example: 200 Sq Ft') }}</small>
                  <span class="text-danger" v-if="localErrors.plan_size">
                {{ localErrors.plan_size }}
              </span>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Plan Image') }}</label>
                  <div class="d-flex align-items-start">
                    <img class="img-fluid" src="http://placehold.it/100x75" alt="thumb">
                    <div class="ml-2">
                      <button type="button" class="btn btn-primary btn-full-width">{{ $t("Select An Image To Upload")}}</button>
                      <small class="form-text text-muted">{{ $t('Minimum size 800 x 600 px') }}</small>
                    </div>
                  </div>
                </div>
              </div><!-- col-md-6 col-sm-12 -->
              <div class="col-md-12 col-sm-12">
                <div class="form-group">
                  <label>{{ $t('Plan Description') }}</label>
                  <textarea class="form-control" name="message" rows="5"
                    :placeholder="$t('Enter the plan description')"></textarea>
                </div>
              </div><!-- col-md-12 col-sm-12 -->
            </div><!-- row -->
            <button class="btn btn-primary-outlined btn-left-icon mt-3" @click="deleteFloorPlan(plan.id)">
              <i class="houzez-icon icon-remove-circle mr-2"></i> {{ $t('Delete') }}
            </button>
          </div>

          <!-- Add New Button -->
          <div class="dashboard-content-block mt-4">
            <button class="btn btn-primary btn-left-icon" @click="addNewFloorPlan">
              <i class="houzez-icon icon-add-circle mr-2"></i> {{ $t('Add New') }}
            </button>
          </div>
        </div>

        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <BackBtn route="dashboard.create-listing.step-7" :pId="propertyId" />
          <RouterLink class="btn btn-primary"
            :to="{ name: 'dashboard.create-listing.step-9', params: { propertyId: propertyId } }">
            {{ $t('Next') }}
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
import SectionFloorPlans from '@/views/inc/dashboard/property/SectionFloorPlans.vue';
import { RouterLink, useRoute, useRouter } from "vue-router";
import { TITLE_CREATE_UPDATE_LISTING } from "@/constants/index.js";
import { reactive } from 'vue';
import { computed, onMounted, ref, watch } from "vue";


const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;

const propertyToRefs = useProperty();
const {property} = storeToRefs(propertyToRefs);
const notify = useNotification();


const formData = ref({
  plan_title: "",
  plan_bedrooms: "",
  plan_bathrooms: null,
  plan_price: null,
  plan_postfix: null,
  plan_size: "",
});

const localErrors = ref({
  plan_title: "",
  plan_bedrooms:"",
  plan_price:"",
  plan_size:"",

});

const validateField = (field) => {
  if (field === "plan_title" && !formData.value.plan_title) {
    localErrors.value.plan_title = "Plan title field is required.";
  } else if (field === "plan_price") {
    if (!formData.value.plan_price) {
      localErrors.value.plan_price = "Plan price field is required.";
    } else if (isNaN(formData.value.plan_price)) {
      localErrors.value.plan_price = "Plan price field must be a number.";
    } else {
      localErrors.value.plan_price = "";
    }
  } else if (field === "plan_bedrooms" && formData.value.plan_bedrooms && isNaN(formData.value.plan_bedrooms)) {
    localErrors.value.plan_bedrooms = "Plan bedrooms field must be a number.";
  } else if (field === "plan_size" && formData.value.plan_size && isNaN(formData.value.plan_size)) {
    localErrors.value.plan_size = "Plan size field must be a number.";
  } else {
    localErrors.value[field] = "";
  }
};

const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

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

const formSubmit = () => {
  alert("Form Submitted!");
}
</script>