<template>
	<div class="widget widget-wrap widget-featured-property">
		<div class="widget-header">
			<h3 class="widget-title">
				Featured Properties
			</h3><!-- widget-title -->
		</div><!-- widget-header -->
		<div class="widget-body">
			<FeaturedPropertyItem v-for="property in featuredProperties" :key="property.id" :property="property" />
		</div><!-- widget-body -->
	</div><!-- widget-featured-property -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAppPropertyDemo01 } from '@/stores/index.js';
import { storeToRefs } from 'pinia';
import FeaturedPropertyItem from './template/FeaturedPropertyItem.vue';

// Pinia store and reactive state
const store = useAppPropertyDemo01();
const { featuredProperties } = storeToRefs(store);
const loading = ref(true);

// Fetch featured properties
const fetchFeaturedProperties = async () => {
	try {
		loading.value = true;
		const res = await store.getFeaturedPropertiesDemo01();

		if (res.status !== 200 || !res.data.success) {
			console.error('Failed to fetch featured properties');
		}
	} catch (error) {
		console.error('Error fetching featured properties:', error);
	} finally {
		loading.value = false;
	}
};

// Fetch on component mount
onMounted(() => {
	fetchFeaturedProperties();
});
</script>
