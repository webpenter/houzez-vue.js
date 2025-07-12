<template>  
    <div class="widget widget-wrap widget-properties">
	<div class="widget-header">
		<h3 class="widget-title">
			{{ $t('Recently Viewed') }}
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
        <RecentlyViewed
			v-for="(property, index) in recentlyViewed"
			:key="property.id"
			:property="property"
		/>
	</div><!-- widget-body -->
</div><!-- widget-properties -->
</template>

<script setup>
import RecentlyViewed from './template/RecentlyViewed.vue';
import { useInsight } from '@/stores';
import { storeToRefs } from 'pinia';

const insightStore = useInsight();
const { recentlyViewed } = storeToRefs(insightStore);
</script>
