<template>
  <template v-if="loading">
    <PropertyDetailsSkeleton/>
  </template>
  <template v-else>
    <TopBar :property="property" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <ImageCarousel :images="property.images"/>
                <div class="container overflow-hidden">
                  <Overview :property="property"/>
                  <Address :property="property"/>
                  <Details :property="property"/>
                  <Gallery :images="property.images"/>
                  <EnergyClass :property="property"/>
                  <template v-if="property.property_feature?.length > 0">
                    <Features :propertyFeature="property.property_feature"/>
                  </template>
<!--                  <MortgageCalculator :property="property"/>-->
<!--                  <FloorPlans :property="property"/>-->
                  <template v-if="property.video_url">
                    <Video :videoUrl="property.video_url"/>
                  </template>
                  <template v-if="property.virtual_tour">
                    <VirtualTour :virtualTour="property.virtual_tour"/>
                  </template>
                  <Review :propertyId="property.id"/>
                </div>
              </div>
              <SideForm :propertyId="property.id"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import SideForm from "./SideForm.vue";
import TopBar from "./TopBar.vue";
import ImageCarousel from "./ImageCarousel.vue";
import Overview from "./Overview.vue";
import Details from "./Details.vue";
import Address from "./Address.vue";
import Features from "./Features.vue";
import EnergyClass from "./EnergyClass.vue";
import FloorPlans from "./FloorPlans.vue";
import Gallery from "./Gallery.vue";
import MortgageCalculator from "./MortgageCalculator.vue";
import Video from "./Video.vue";
import Review from "./Review.vue";
import VirtualTour from "@/views/app/pages/property-details/VirtualTour.vue";
import {useAppProperty, useInsight} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import PropertyDetailsSkeleton from "@/components/skeleton/PropertyDetailsSkeleton.vue";

const {params} = useRoute();
const router = useRouter();
const propertySlug = params.propertySlug;

const propertyStore = useAppProperty();
const {property} = storeToRefs(propertyStore);

const loading = ref(false);

const getPropertyData = async () => {
  loading.value = true;
  try {
    const res = await propertyStore.getProperty(propertySlug);

    loading.value = false;

    if (res.status !== 200)  {
      router.push({name:'property-not-found-404'});
    }
  } catch (error) {
    router.push({name:'property-not-found-404'});
  }
};

const propertyViews = async () => await useInsight().propertyViews(propertySlug);

onMounted(() => {
  getPropertyData();
  propertyViews();
});
</script>

