<template>
    <div class="widget widget-wrap widget-blog-posts">
	<div class="widget-header">
		<h3 class="widget-title">
			Lastes Blogs
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
        <BlogPostItem
			v-for="(blog, index) in blogStore.appBlogs"
			:key="index"
			:blog="blog"
		/>
	</div><!-- widget-body -->
</div><!-- widget-blog-posts -->
</template>

<script setup>
import { onMounted } from 'vue'
import { useBlog } from '@/stores/index'
import BlogPostItem from './template/BlogPostItem.vue'

const blogStore = useBlog()

onMounted(() => {
  blogStore.getAppBlogs()
})
</script>
