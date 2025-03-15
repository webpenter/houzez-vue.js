<template>
<TopBar/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <ImageCarousel/>
              <div class="container overflow-hidden">
                <Overview/>
                <Address/>
                <Details/>
                <Gallery/>
                <EnergyClass/>
                <Features/>
                <MortgageCalculator/>
                <FloorPlans/>
                <Video/>
                <VirtualTour/>
                <Review/>
              </div>
            </div>
          <SideForm/>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</script>