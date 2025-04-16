<template>
  <div class="news-container position-relative">
    <button class="slider-btn left-btn"><i class="fas fa-chevron-left"></i></button>
    <p class="news-blog-txt">{{ $t('News & Blogs') }}</p>

    <div class="news-blogs-header">
      <h2 class="news-title">{{ $t('News & Update') }}</h2>
      <a href="" class="blogs-txt">{{ $t('View All Blogs') }} <i class="fa-solid fa-arrow-right"></i></a>
    </div>

    <div class="news-slider" id="newsSlider">
      <div v-for="(blog, index) in blogs" :key="index" class="news-card">
        <img :src="blog.image" alt="News" />
        <div class="news-card-body">
          <div class="news-date">
            <p>{{ blog.date }}</p>
            <p>{{ blog.time || '3 min read' }}</p>
          </div>
          <p class="news-title-text">{{ blog.title }}</p>
          <a :href="`/blogs/${blog.id}`" class="news-btn">{{ $t('Read More') }} <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <button class="slider-btn right-btn"><i class="fas fa-chevron-right"></i></button>
  </div>
</template>
<script setup>
import { onMounted, ref, onBeforeUnmount, computed } from 'vue'
import { useBlogStore } from '@/stores/blog.js'

const slider = ref(null)
const leftBtn = ref(null)
const rightBtn = ref(null)
const scrollAmount = 500

const scrollRight = () => {
  slider.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
}
const scrollLeft = () => {
  slider.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
}

// Blog store
const blogStore = useBlogStore()
const blogs = computed(() => blogStore.blogs)

onMounted(async () => {
  slider.value = document.getElementById('newsSlider')
  leftBtn.value = document.querySelector('.left-btn')
  rightBtn.value = document.querySelector('.right-btn')

  rightBtn.value.addEventListener('click', scrollRight)
  leftBtn.value.addEventListener('click', scrollLeft)

  // Fetch blog data from API
  await blogStore.fetchBlogs()
})

onBeforeUnmount(() => {
  rightBtn.value.removeEventListener('click', scrollRight)
  leftBtn.value.removeEventListener('click', scrollLeft)
})
</script>
