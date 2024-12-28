<template>
    <div class="dashboard-logo-wrap">
	<!-- <?php include 'inc/nav/logo-white.php';?> -->
<LogoWhite />
	<div class="dashboard-notification-wrap">
		<i class="houzez-icon icon-alarm-bell"></i>		
		<span class="notification-circle"></span>
	</div><!-- dashboard-notification-wrap -->
</div><!-- dashboard-logo-wrap -->
<div class="dashboard-side-menu-wrap">
	<!-- <?php include 'inc/dashboard/agent-menu.php';?> -->
     <AgentMenu />
</div><!-- dashboard-side-menu-wrap -->
</template>
<script setup>
import LogoWhite from '@/views/inc/nav/LogoWhite.vue';
import AgentMenu from '@/views/inc/dashboard/AgentMenu.vue';
</script>