<template>
	<ul class="side-menu list-unstyled">
		<template v-for="route in DASHBOARD_ROUTES" :key="route.id">

			<li class="side-menu-item" :class="{ 'side-menu-parent-selected': route.sub.length > 0 }">
				<template v-if="route.name == 'dashboard.crm'">
					<RouterLink :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenBoard = !isOpenBoard">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.my-properties'">
					<RouterLink :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenProperties = !isOpenProperties">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.tools'">
					<RouterLink :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenTools = !isOpenTools">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.admin'">
					<RouterLink :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenAdmin = !isOpenAdmin">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.posts'">
					<RouterLink :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenPosts = !isOpenPosts">
						<i class="houzez-icon mr-2" :class="route.icon"></i>
						{{ route.title }}
					</RouterLink>
				</template>
				<template v-else-if="route.name == 'dashboard.settings.general'">
					<RouterLink :to="{ name: route.name }" active-class="active"
						@click.prevent="isOpenSettings = !isOpenSettings">
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
					<ul class="side-menu-dropdown list-unstyled" v-show="isOpenBoard">
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
					<ul class="side-menu-dropdown list-unstyled" v-show="isOpenProperties">
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
				<template v-if="route.name == 'dashboard.tools'">
					<ul class="side-menu-dropdown list-unstyled" v-show="isOpenTools">
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
				<template v-if="route.name == 'dashboard.admin'">
					<ul class="side-menu-dropdown list-unstyled" v-show="isOpenAdmin">
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
				<template v-if="route.name == 'dashboard.posts'">
					<ul class="side-menu-dropdown list-unstyled" v-show="isOpenPosts">
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
					<ul class="side-menu-dropdown list-unstyled" v-show="isOpenSettings">
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
import {ref} from "vue";
import {useAdmin} from "@/stores/index.js";


const isOpenBoard = ref(false);
const isOpenProperties = ref(false);
const isOpenAdmin = ref(false);
const isOpenPosts = ref(false);
const isOpenTools = ref(false);
const isOpenSettings = ref(false);

const admin = useAdmin().getAdmin;
</script>

<style scoped>
.side-menu-dropdown a {
	color: #839eb2;
}
</style>