<template>
    <div class="property-cards-module property-cards-module-v1 property-cards-module-3-cols">
		<div class="listing-view grid-view card-deck grid-view-3-cols">
			<template v-if="loading">
				<!-- <PropertyCardSkeleton :loop="6" /> -->
				 <FinePropertiesSkeleton v-for="n in 6" :key="'skeleton-' + n" />
			</template>
			<template v-else>
				<FinePropertyItem 
					v-for="property in latestProperties"
							:key="property.id"
							:property="property"
				/>
			</template>
			
		</div><!-- listing-view -->
	<div class="load-more-wrap">
		<a class="btn btn-primary-outlined btn-load-more" href="#">Load More</a>	
	</div><!-- load-more-wrap -->
</div><!-- property-grid-module -->
</template>

<script setup>
import { useAppPropertyDemo01 } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";  
import FinePropertyItem from './FinePropertyIem.vue';
import PropertyCardSkeleton from '@/components/skeleton/PropertyCardSkeleton.vue';
import FinePropertiesSkeleton from "@/components/skeleton/FinePropertiesSkeleton.vue";


const propertyToRefs = useAppPropertyDemo01();
const { latestProperties } = storeToRefs(propertyToRefs);
const loading = ref(true);

const fetchLatestProperties = async () => {
  loading.value = true;
  const res = await propertyToRefs.getLatestPropertiesDemo01();

  if (res.status === 200) { 
    loading.value = false;
  }
};

onMounted(() => fetchLatestProperties());
</script>