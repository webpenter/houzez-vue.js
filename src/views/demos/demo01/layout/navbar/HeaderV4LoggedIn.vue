<template>
	<div class="header-desktop header-v4">
		<div class="container">
			<div class="header-inner-wrap">
				<div class="navbar d-flex align-items-center">
					<Logo />
					<nav class="main-nav navbar-expand-lg flex-grow-1">
						<NavItem />
					</nav><!-- main-nav -->
					<LoggedInNav />
				</div><!-- navbar -->
			</div><!-- header-inner-wrap -->
		</div><!-- .container -->
	</div><!-- .header-v4 -->
</template>

<script setup>
import LoggedInNav from './LoggedInNav.vue';
import Logo from './Logo.vue';
import NavItem from './Nav.vue';

</script>
