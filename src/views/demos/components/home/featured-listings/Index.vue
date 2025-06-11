<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin: 100px 0 30px 0; text-align: center;">Discover Our Featured Listings</h2>
                    <div class="property-cards-module property-cards-module-v1 property-cards-module-3-cols">
                        <div class="listing-view grid-view card-deck grid-view-3-cols">
                            <template v-if="loading">
                                <PropertyCardSkeleton :loop="6" />
                            </template>
                            <template v-else>
                                <ListItem
                                    v-for="property in featuredProperties"
                                    :key="property.id"
                                    :property="property" />
                            </template>
                        </div><!-- listing-view -->
                        <div class="load-more-wrap">
                            <a class="btn btn-primary-outlined btn-load-more" href="#">Load More</a>
                        </div><!-- load-more-wrap -->
                    </div><!-- property-grid-module -->
                </div><!-- col-12 -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- listing-wrap -->
</template>

<script setup>
import { useAppProperty } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";  
import { RouterLink } from "vue-router";
import PropertyCardSkeleton from '@/components/skeleton/PropertyCardSkeleton.vue';
import ListItem from './ListItem.vue';

const propertyToRefs = useAppProperty();
const { featuredProperties } = storeToRefs(propertyToRefs);
const loading = ref(true);

const fetchFeaturedProperties = async () => {
  loading.value = true;
  const res = await propertyToRefs.getFeaturedProperties();

  if (res.status === 200) { 
    loading.value = false;
  }
};

onMounted(() => fetchFeaturedProperties());
</script>