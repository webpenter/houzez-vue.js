<template>
    <div class="dashboard-logo-wrap">
	<LogoWhite/>
	<div class="dashboard-notification-wrap">
		<i class="houzez-icon icon-alarm-bell"></i>		
		<span class="notification-circle"></span>
	</div><!-- dashboard-notification-wrap -->
</div><!-- dashboard-logo-wrap -->
<div class="dashboard-side-menu-wrap">
	<AgentMenu/>
</div><!-- dashboard-side-menu-wrap -->
</template>

<script setup>
import LogoWhite from '../nav/LogoWhite.vue';
import AgentMenu from './AgentMenu.vue';
</script>