<template>
  <div
    class="property-cards-module property-cards-module-v1 property-cards-module-3-cols"
  >
    <div class="listing-view grid-view card-deck grid-view-3-cols">
      <!-- Skeletons while loading -->
      <template v-if="loading">
        <FinePropertiesSkeleton
          v-for="n in 6"
          :key="'skeleton-' + n"
        />
      </template>

      <!-- Show properties -->
      <template v-else>
        <FinePropertyItem
          v-for="property in latestProperties"
          :key="property.id"
          :property="property"
        />
      </template>
    </div><!-- listing-view -->

    <!-- Load more button -->
    <div v-if="!loading && latestProperties?.length" class="load-more-wrap">
      <router-link
        class="btn btn-primary-outlined btn-load-more"
        :to="{ name: 'demo01.properties' }"
        @click="viewMode.setFeaturedView(false)"
      >
        {{ $t('See More') }}
      </router-link>
    </div><!-- load-more-wrap -->
  </div><!-- property-grid-module -->
</template>

<script setup>
import { useViewMode } from "@/stores/index.js";
import FinePropertyItem from "./FinePropertyIem.vue";
import FinePropertiesSkeleton from "@/components/skeleton/FinePropertiesSkeleton.vue";

defineProps({
  latestProperties: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const viewMode = useViewMode();
</script>
