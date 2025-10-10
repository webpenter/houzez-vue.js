<template>
	<ul class="side-menu list-unstyled">

		<template v-for="route in routes" :key="route.id">
			<li class="side-menu-item" :class="{ 'side-menu-parent-selected': route.sub.length > 0 }">
				<template v-if="route.name == 'dashboard.crm'">
					<RouterLink 
          :to="{ name: route.name }"
           active-class="active"
						@click.prevent="isOpenBoard = !isOpenBoard">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.my-properties'">
					<RouterLink 
          :to="{ name: route.name }"
           active-class="active"
						@click.prevent="isOpenProperties = !isOpenProperties">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.settings.general'">
					<RouterLink 
          v-show="admin" 
          :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenSettings = !isOpenSettings">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.admin.users'">
					<RouterLink
           v-show="admin"
            :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenAdmin = !isOpenAdmin">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else>
					<RouterLink :to="{ name: route.name }" active-class="active">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-if="route.name == 'dashboard.crm'">
					<ul 
           v-show="isOpenBoard"
          class="side-menu-dropdown list-unstyled" 
         >
						<template v-for="sub_route in route.sub" :key="sub_route.id">
							<li class="side-menu-item">
								<RouterLink :to="{ name: sub_route.name }" active-class="active">
									<i class="houzez-icon icon-arrow-right-1"></i>
									{{ sub_route.title }}
								</RouterLink>
							</li>
						</template>
					</ul>
				</template>
				<template v-if="route.name == 'dashboard.my-properties'">
					<ul
           v-show="isOpenProperties"
          class="side-menu-dropdown list-unstyled">
						<template v-for="sub_route in route.sub" :key="sub_route.id">
							<li class="side-menu-item">
								<RouterLink :to="{ name: sub_route.name }" active-class="active">
									<i class="houzez-icon icon-arrow-right-1"></i>
									{{ sub_route.title }}
								</RouterLink>
							</li>
						</template>
					</ul>
				</template>
				<template v-if="route.name == 'dashboard.settings.general'">
					<ul 
          v-show="isOpenSettings"
          class="side-menu-dropdown list-unstyled">
						<template v-for="sub_route in route.sub" :key="sub_route.id">
							<li class="side-menu-item">
								<RouterLink :to="{ name: sub_route.name }" active-class="active">
									<i class="houzez-icon icon-arrow-right-1"></i>
									{{ sub_route.title }}
								</RouterLink>
							</li>
						</template>
					</ul>
				</template>
				<template v-if="route.name == 'dashboard.admin.users'">
					<ul 
          v-show="isOpenAdmin"
          class="side-menu-dropdown list-unstyled" >
						<template v-for="sub_route in route.sub" :key="sub_route.id">
							<li class="side-menu-item">
								<RouterLink :to="{ name: sub_route.name }" active-class="active">
									<i class="houzez-icon icon-arrow-right-1"></i>
									{{ sub_route.title }}
								</RouterLink>
							</li>
						</template>
					</ul>
				</template>
				<!--					<span v-if="route.title == 'Messages'" class="notification-circle"></span>-->
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
import { getDashboardRoutes } from "@/constants/index.js";
import { ref } from "vue";
import { useAdmin } from "@/stores/index.js";

const routes = getDashboardRoutes();
const isOpenBoard = ref(false);
const isOpenProperties = ref(false);
const isOpenSettings = ref(false);
const isOpenAdmin = ref(false);

const admin = useAdmin().getAdmin;
</script>

<style scoped>
.side-menu-dropdown a {
	color: #839EB2;
}
</style>