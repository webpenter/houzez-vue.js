<template>
  <div class="rentals-container-main">
    <p class="featured-rentals-btn">Latest Properties</p>
    <div class="featured-rentals-header">
      <h2>Featured Rentals</h2>
      <a href=""><p>View all</p> <i class="fa-solid fa-arrow-right"></i></a>
    </div>

    <div class="featured-rentals-container">
      <template v-if="loading">
        <PropertyCardSkeleton :loop="6" />
      </template>
      <template v-else v-for="(property, index) in featuredProperties" :key="property.id">
        <div class="property-card">
          <div class="property-image-container">
            <div v-if="!isLoaded[index]" class="property-image property-image-load"></div>
            <img
                v-show="isLoaded[index]"
                :src="property.thumbnail"
                :alt="property.title"
                class="property-image"
                @load="imageLoaded(index)"
            >

            <!-- Heart Icon -->
            <i 
              class="fa-solid fa-heart favorite-icon" 
              :class="{ 'favorited': property.is_favorite }"
              @click="toggleFavorite(property)"
            ></i>
          </div>

          <div class="property-details">
            <div class="property-title">
              {{ $filters.subStr($filters.capitalize(property.title), 0, 30) }}
            </div>
            <div class="property-location">
              <i class="fas fa-map-marker-alt"></i>
              {{ $filters.subStr(property.address, 0, 40) }}
            </div>
            <div class="property-description">
              {{ $filters.subStr(property.description, 0, 60) }}
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
              <RouterLink :to="{name:'app.property-details',params:{propertySlug:property.slug}}" class="details-button">Details <i class="fas fa-arrow-right"></i></RouterLink>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { useAppProperty } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import { useFavoriteStore } from '@/stores/favourite.js';
const propertyToRefs = useAppProperty();
const { featuredProperties } = storeToRefs(propertyToRefs);
const loading = ref(true);
const isLoaded = reactive({});
const imageLoaded = (index) => {
  isLoaded[index] = true;
};

// ** Toggle Favorite Function **
const toggleFavorite = async (property) => {
  try {
    const favoriteStore = useFavoriteStore();
    const response = await favoriteStore.toggleFavorite(property);
    
    if (response.success) {
      // Update local state or reload data
      property.is_favorite = !property.is_favorite;
    }
  } catch (error) {
    console.error("Error toggling favorite:", error);
    alert("Failed to toggle favorite. Please try again.");
  }
};


const fetchFeaturedProperties = async () => {
  loading.value = true;
  const res = await propertyToRefs.getFeaturedProperties();

  console.log("Response Data:", res.data); // Debugging

  if (res.status === 200) {
    loading.value = false;

    if (Array.isArray(res.data)) {
      res.data.forEach((_, index) => {
        isLoaded[index] = false;
      });
    } else {
      console.error("Expected an array, but got:", res.data);
    }
  }
};


onMounted(() => fetchFeaturedProperties());
</script>

<style scoped>
.property-image-container {
  position: relative;
  width: 375px;
  height: 250px;
  border-radius: 10px;
}

.property-image {
  width: 375px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.property-image-load {
  background-color: #f0f0f0;
  width: 375px;
  height: 250px;
  border-radius: 10px;
}

/* Heart Icon Styling */
.favorite-icon {
  position: absolute;
  top: 15px;
  right: 30px;
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s ease;
  color: green; /* Default (Not Favorited) */
}

.favorite-icon.favorited {
  color: red; /* Favorited */
}
</style>
