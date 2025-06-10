<template>
  <div class="rentals-container-main">
    <p class="featured-rentals-btn">{{$t('Discover')}}</p>
    <div class="featured-rentals-header">
      <h2> {{$t('Latest Properties')}}</h2>
      <RouterLink :to="{name:'app.properties'}">
        <p> {{$t('View all')}}</p> <i class="fa-solid fa-arrow-right"></i>
      </RouterLink>
    </div>

    <div class="featured-rentals-container">
      <template v-if="loading">
        <PropertyCardSkeleton :loop="6" />
      </template>
      <template v-else>
        <PropertyCards
            v-for="property in latestProperties"
            :key="property.id"
            :property="property"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useAppProperty } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import {RouterLink} from "vue-router";
import PropertyCards from "@/views/app/pages/home/components/PropertyCards.vue";

const propertyToRefs = useAppProperty();
const { latestProperties } = storeToRefs(propertyToRefs);
const loading = ref(true);

const fetchLatestProperties = async () => {
  loading.value = true;
  const res = await propertyToRefs.getLatestProperties();

  if (res.status === 200) {
    loading.value = false;
  }
};

onMounted(() => fetchLatestProperties());
</script>
