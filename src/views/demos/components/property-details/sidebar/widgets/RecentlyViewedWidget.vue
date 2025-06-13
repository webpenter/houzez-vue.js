<template>  
    <div class="widget widget-wrap widget-properties">
	<div class="widget-header">
		<h3 class="widget-title">
			Recently Viewed
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
		<!-- <?php include 'inc/widgets/templates/recently-viewed.php';?>
		<?php include 'inc/widgets/templates/recently-viewed.php';?>
		<?php include 'inc/widgets/templates/recently-viewed.php';?>
		<?php include 'inc/widgets/templates/recently-viewed.php';?>
		<?php include 'inc/widgets/templates/recently-viewed.php';?> -->
        <RecentlyViewed />
        <RecentlyViewed />
        <RecentlyViewed />
        <RecentlyViewed />
        <RecentlyViewed />
	</div><!-- widget-body -->
</div><!-- widget-properties -->
</template>
<script setup>
import RecentlyViewed from './template/RecentlyViewed.vue';
</script>