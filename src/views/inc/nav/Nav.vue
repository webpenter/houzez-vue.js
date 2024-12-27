<template>
    	<!-- -------------------------------------------------------------------------------------------
	note: to add have the nav bar on the right add this class "justify-content-end" to "navbar-nav"
	-------------------------------------------------------------------------------------------- -->	
	<ul class="navbar-nav">
		<template v-for="route in APP_ROUTES" :key="route.id">
			<li class="nav-item">
				<RouterLink :to="{name:route.name}" class="nav-link">
					{{ route.title }}
				</RouterLink>
			</li>
		</template>

		<!-- Dropdown Link -->
		<li class="nav-item dropdown">
			<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Other</a>
			<ul class="dropdown-menu">
				<li class="nav-item">
					<a class="dropdown-item" href="#">Action</a>
				</li>
				<li class="nav-item">
					<a class="dropdown-item" href="#">Another action</a>
				</li>
				<li class="nav-item dropdown">
					<a class="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#">Submenu</a>
					<ul class="dropdown-menu">
						<li class="nav-item">
							<a class="dropdown-item" href="#">Submenu action</a>
						</li>
						<li class="nav-item">
							<a class="dropdown-item" href="#">Another submenu action</a>
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action aa</a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-item dropdown-toggle" href="#">Second subsubmenu</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action bb</a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
					<ul class="dropdown-menu">
						<li class="nav-item"><a class="dropdown-item" href="#">Submenu action 2</a></li>
						<li class="nav-item"><a class="dropdown-item" href="#">Another submenu action 2</a></li>


						<li class="nav-item"><a class="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action 1 3</a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action 2 3</a></li>
							</ul>
						</li>
						<li class="nav-item"><a class="dropdown-item dropdown-toggle" href="#">Second subsubmenu 3</a>
							<ul class="dropdown-menu">
								<li class="nav-item"><a class="dropdown-item" href="#">Subsubmenu action 3 </a></li>
								<li class="nav-item"><a class="dropdown-item" href="#">Another subsubmenu action 3</a></li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script setup>
import { APP_ROUTES } from "@/constants/routeList";
import { RouterLink } from "vue-router";
</script>