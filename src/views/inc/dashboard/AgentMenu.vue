<template>
    <ul class="side-menu list-unstyled">

		<template v-for="route in routes" :key="route.id">
			<li class="side-menu-item">
				<RouterLink :to="{name:route.name}" active-class="active">
					<i class="houzez-icon mr-2" :class="route.icon"></i>
					{{ route.title }}
				</RouterLink>
				<span v-if="route.title == 'Messages'" class="notification-circle"></span>
			</li>
		</template>
		
		<li class="side-menu-item">
			<a href="#">
				<i class="houzez-icon icon-lock-5 mr-2"></i>
				Log Out
			</a>
		</li>
</ul>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// Dashboard Route List
const routes = [
	{ id:1, title:'Board', name:'dashboard.board', icon:'icon-layout-dashboard' },
	{ id:2, title:'Insight', name:'dashboard.insight', icon:'icon-analytics-bars' },
	{ id:3, title:'My Properties', name:'dashboard.my-properties', icon:'icon-building-cloudy' },
	{ id:4, title:'Create Listing', name:'dashboard.create-listing', icon:'icon-add-circle' },
	{ id:5, title:'Favorites', name:'dashboard.favorite-properties', icon:'icon-love-it' },
	{ id:6, title:'Saves Searches', name:'dashboard.saved-searches', icon:'icon-search' },
	{ id:7, title:'Invoices', name:'dashboard.invoices', icon:'icon-accounting-document' },
	{ id:8, title:'Messages', name:'dashboard.messages', icon:'icon-messages-bubble' },
	{ id:9, title:'My Profile', name:'dashboard.my-profile', icon:'icon-single-neutral-circle' },
];
</script>

<style scoped>
	ul li .active{
		color: #fff;
	}
</style>