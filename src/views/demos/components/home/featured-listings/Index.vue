<template>
  <!-- Show section only if there are properties OR still loading -->
  <section 
    class="content-wrap" 
    v-if="loading || (featuredProperties && featuredProperties.length > 0)"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="my-5 mb-4 text-center">
            {{ $t('Discover Our Featured Properties') }}
          </h2>

          <div class="property-cards-module property-cards-module-v1 property-cards-module-3-cols">
            <div class="listing-view grid-view card-deck grid-view-3-cols">

              <!-- Show skeletons while loading -->
              <template v-if="loading">
                <FeaturedPropertiesSkeleton v-for="n in 6" :key="'skeleton-' + n" />
              </template>

              <!-- Show actual properties after loading -->
              <template v-else>
                <PropertyCard
                  v-for="property in featuredProperties"
                  :key="property.id"
                  :property="property"
                />
              </template>

            </div><!-- listing-view -->

            <!-- Load more button -->
            <div 
            v-if="!loading && featuredProperties.length > 0"
            class="load-more-wrap">
              <router-link
                class="btn btn-primary-outlined btn-load-more"
                :to="{ name: 'demo01.properties' }"
                @click="viewMode.setFeaturedView(true)"
              >
                {{ $t('See More') }}
              </router-link>
            </div><!-- load-more-wrap -->

          </div><!-- property-grid-module -->
        </div><!-- col-12 -->
      </div><!-- row -->
    </div><!-- container -->
  </section><!-- listing-wrap -->
</template>

<script setup>
import { useAppPropertyDemo01, useViewMode } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import FeaturedPropertiesSkeleton from '@/components/skeleton/FeaturedPropertiesSkeleton.vue';
import PropertyCard from './ListItem.vue';

defineOptions({
  name: 'FeaturedListingsIndex'
});

const viewMode = useViewMode();
const propertyToRefs = useAppPropertyDemo01();
const { featuredProperties } = storeToRefs(propertyToRefs);
const loading = ref(true);

const fetchFeaturedProperties = async () => {
  loading.value = true;
  try {
    const res = await propertyToRefs.getFeaturedPropertiesDemo01();
    if (res.status !== 200) {
      // console.error("Failed to fetch featured properties");
    }
  } catch (err) {
    // console.error("Failed to fetch featured properties:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchFeaturedProperties());
</script>

