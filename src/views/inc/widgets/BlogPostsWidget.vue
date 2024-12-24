<template>  
    <div class="widget widget-wrap widget-blog-posts">
	<div class="widget-header">
		<h3 class="widget-title">
			Lastes Posts
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
		<BlogPostItem />
		<BlogPostItem />
		<BlogPostItem />
		
	</div><!-- widget-body -->
</div><!-- widget-blog-posts -->

</template>
<script setup>
import BlogPostItem from './templates/BlogPostItem.vue';


</script>