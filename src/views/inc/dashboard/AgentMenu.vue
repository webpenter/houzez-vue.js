<template>
    <ul class="side-menu list-unstyled">

		<template v-for="route in DASHBOARD_ROUTES" :key="route.id">
				<li class="side-menu-item" :class="{'side-menu-parent-selected':route.sub.length > 0}">
					<RouterLink :to="{name:route.name}" active-class="active">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
					<template v-if="route.sub.length > 0">
							<ul class="side-menu-dropdown list-unstyled">
								<template v-for="sub_route in route.sub" :key="sub_route.id">
									<li class="side-menu-item">
										<RouterLink :to="{name:sub_route.name}" active-class="active" >
											<i class="houzez-icon icon-arrow-right-1"></i>
											{{ sub_route.title }}
										</RouterLink>
									</li>
								</template>
							</ul>
					</template>
					<span v-if="route.title == 'Messages'" class="notification-circle"></span>
				</li>
		</template>
		
		<li class="side-menu-item">
			<a href="javascript:void(0)" @click.prevent="$filters.logout()">
				<i class="houzez-icon icon-lock-5 mr-2"></i>
				Log Out
			</a>
		</li>
</ul>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {DASHBOARD_ROUTES} from "@/constants/index.js";
</script>

<style scoped>
 .side-menu-dropdown a {
	color: #839EB2;
}
</style>