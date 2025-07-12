<template>
    <div class="blog-post-item-widget">
	<div class="d-flex">
		<div class="blog-post-image-widget">
			<a href="#">
				<img class="img-fluid" :src="blog.image" alt="image">	
			</a>
		</div><!-- blog-post-image-widget -->
		<div class="blog-post-content-widget">
			<h4><a href="#">{{ blog.title }}</a></h4>
			<p>{{ blog.description }}</p>
			<div class="widget-read-more">
				<a href="#">{{ $t('Read more') }}</a>
			</div><!-- widget-read-more -->
		</div><!-- blog-post-content-widget -->
	</div><!-- d-flex -->
</div><!-- blog-post-item-widget -->
</template>

<script setup>
defineProps({
  blog: Object
})
</script>