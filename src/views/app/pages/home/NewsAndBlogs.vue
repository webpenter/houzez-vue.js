<template>
  <div class="news-container">
    <h2>News & Updates</h2>

    <div v-if="loading">Loading blogs...</div>
    <div v-else-if="error">Failed to load blogs. Please try again.</div>
    
    <div v-else class="news-slider">
      <div v-for="blog in blogs" :key="blog.id" class="news-card">
        <img v-if="blog.image" :src="blog.image" alt="News">
        <div class="news-card-body">
          <p class="news-date">{{ blog.date }}</p>
          <p class="news-title-text">{{ blog.title }}</p>
          <a href="#" class="news-btn">
            
            Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useBlogStore } from '@/stores/blog/blog';

const { blogs, loading, error, fetchBlogs } = useBlogStore();

onMounted(() => {
  fetchBlogs();
});
</script>
