<template>
    <ul class="side-menu list-unstyled">

		<template v-for="route in routes" :key="route.id">
				<li class="side-menu-item" :class="{'side-menu-parent-selected':route.sub.length > 0}">
					<RouterLink :to="{name:route.name}" active-class="active">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
					<template v-if="route.sub.length > 0">
							<ul class="side-menu-dropdown list-unstyled">
								<template v-for="sub_route in route.sub" :key="sub_route.id">
									<li class="side-menu-item">
										<RouterLink :to="{name:sub_route.name}" active-class="active">
											<i class="houzez-icon icon-arrow-right-1"></i>
											{{ sub_route.title }}
										</RouterLink>
									</li>
								</template>
							</ul>
					</template>
					<span v-if="route.title == 'Messages'" class="notification-circle"></span>
				</li>
			<!-- <li class="side-menu-item">
				<RouterLink :to="{name:route.name}" active-class="active">
					<i class="houzez-icon mr-2" :class="route.icon"></i>
					{{ route.title }}
				</RouterLink>
				<span v-if="route.title == 'Messages'" class="notification-circle"></span>
			</li> -->
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
	{ 
		id:1,
		title:'Board',
		name:'dashboard.crm',
		icon:'icon-layout-dashboard',
		sub:[
			{id:1, title:'Activities', name:'dashboard.crm'},
			{id:2, title:'Deals', name:'dashboard.crm-active-deals'},
			{id:3, title:'Leads', name:'dashboard.crm-leads'},
			{id:4, title:'Enquiries', name:'dashboard.crm-enquiries'},
		] 
	},
	{ id:2, title:'Insight', name:'dashboard.insight', icon:'icon-analytics-bars', sub:[] },
	{ 
		id:3,
		title:'My Properties',
		name:'dashboard.my-properties',
		icon:'icon-building-cloudy',
		sub:[
			// {id:1, title:'All', name:'dashboard.'},
			// {id:2, title:'Published', name:'dashboard.'},
			// {id:3, title:'Pending', name:'dashboard.'},
			// {id:4, title:'Expired', name:'dashboard.'},
			// {id:5, title:'Draft', name:'dashboard.'},
			// {id:6, title:'On Hold', name:'dashboard.'},
			// {id:7, title:'Disapproved', name:'dashboard.'},
		] 
	},
	{ id:4, title:'Create Listing', name:'dashboard.create-listing', icon:'icon-add-circle', sub:[] },
	{ id:5, title:'Favorites', name:'dashboard.favorite-properties', icon:'icon-love-it', sub:[] },
	{ id:6, title:'Saved Searches', name:'dashboard.saved-searches', icon:'icon-search', sub:[] },
	{ id:7, title:'Invoices', name:'dashboard.invoices', icon:'icon-accounting-document', sub:[] },
	{ id:8, title:'Messages', name:'dashboard.messages', icon:'icon-messages-bubble', sub:[] },
	{ id:9, title:'My Profile', name:'dashboard.my-profile', icon:'icon-single-neutral-circle', sub:[] },
];
</script>

<style scoped>
	ul li .active{
		color: #fff;
	}
</style>