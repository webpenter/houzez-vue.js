<template>
  <div class="rentals-container-main">
    <p class="featured-rentals-btn">Latest Properties</p>
    <div class="featured-rentals-header">
      <h2>Featured Rentals</h2>
      <a href=""><p>View all</p> <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div class="featured-rentals-container">
      <template v-for="property in featuredProperties">
        <div class="property-card">
          <div class="property-image">
            <img :src="property.thumbnail" alt="Apartments Auckland">
          </div>
          <div class="property-details">
            <div class="property-title">
              {{ $filters.subStr($filters.capitalize(property.title),0,30) }}
            </div>
            <div class="property-location">
              <i class="fas fa-map-marker-alt"></i>
              {{ $filters.subStr(property.address,0,40) }}
            </div>
            <div class="property-description">
              {{ $filters.subStr(property.description,0,60) }}
            </div>
            <div class="property-features">
              <span><i class="fas fa-bed"></i><p> Bed {{ property.bedrooms }}</p></span>
              <div class="line-y"></div>
              <span><i class="fas fa-bath"></i> <p>Bath {{ property.bathrooms }}</p></span>
              <div class="line-y"></div>
              <span><i class="fas fa-ruler-combined"></i> <p>{{ property.area_size }} sqft</p></span>
            </div>
            <div class="property-last-sec">
              <div class="property-price">
                {{ $filters.formatPrice(property.price) }}
              </div>
              <button class="details-button">Details <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {useAppProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";

const propertyToRefs = useAppProperty();
const {featuredProperties} = storeToRefs(propertyToRefs);

const fetchFeaturedProperties = async () => await propertyToRefs.getFeaturedProperties();

onMounted(() => fetchFeaturedProperties());
</script>