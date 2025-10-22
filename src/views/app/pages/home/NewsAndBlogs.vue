<template>
  <div class="news-container position-relative">
    <button class="slider-btn left-btn"><i class="fas fa-chevron-left"></i></button>
    <p class="news-blog-txt">{{ $t('News & Blogs') }}</p>

    <div class="news-blogs-header">
      <h2 class="news-title">{{ $t('News & Update') }}</h2>
      <RouterLink :to="{name:'app'}" class="blogs-txt">{{ $t('View All Blogs') }} <i class="fa-solid fa-arrow-right"></i></RouterLink>
    </div>

    <div id="newsSlider" class="news-slider">
      <!-- Skeleton Loader -->
      <div v-for="n in 5" v-if="loading" :key="'skeleton-' + n" class="news-card">
        <div class="skeleton-img shimmer"></div>
        <div class="news-card-body">
          <div class="news-date">
            <p class="skeleton-text shimmer" style="width: 60px; height: 10px;"></p>
          </div>
          <p class="news-title-text skeleton-text shimmer" style="height: 16px; width: 80%;"></p>
          <div class="news-btn skeleton-text shimmer" style="width: 100px; height: 12px;"></div>
        </div>
      </div>

      <!-- Actual Blogs -->
      <div v-for="(blog, index) in appBlogs" v-else :key="index" class="news-card">
        <img :src="blog.image" alt="News">
        <div class="news-card-body">
          <div class="news-date">
            <p>{{ blog.date }}</p>
          </div>
          <p class="news-title-text">{{ blog.title }}</p>
          <RouterLink :to="{name:'app'}" class="news-btn">
            {{ $t('Read More') }} <i class="fas fa-arrow-right"></i>
          </RouterLink>
        </div>
      </div>
    </div>

    <button class="slider-btn right-btn"><i class="fas fa-chevron-right"></i></button>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { useBlog } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import {RouterLink} from "vue-router";

const blogStore = useBlog();
const { appBlogs } = storeToRefs(blogStore);
const loading = ref(false);

const getBlog = async () => {
  loading.value = true;
  await blogStore.getAppBlogs();
  loading.value = false;
};

const slider = ref(null);
const leftBtn = ref(null);
const rightBtn = ref(null);
const scrollAmount = 500;

const scrollRight = () => {
  slider.value.scrollBy({ left: scrollAmount, behavior: "smooth" });
};

const scrollLeft = () => {
  slider.value.scrollBy({ left: -scrollAmount, behavior: "smooth" });
};

onMounted(() => {
  getBlog();

  slider.value = document.getElementById("newsSlider");
  leftBtn.value = document.querySelector(".left-btn");
  rightBtn.value = document.querySelector(".right-btn");

  rightBtn.value.addEventListener("click", scrollRight);
  leftBtn.value.addEventListener("click", scrollLeft);
});

onBeforeUnmount(() => {
  rightBtn.value.removeEventListener("click", scrollRight);
  leftBtn.value.removeEventListener("click", scrollLeft);
});
</script>

<style scoped>
.skeleton-img {
  width: 100%;
  height: 180px;
  background-color: #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.skeleton-text {
  background-color: #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
}

.shimmer {
  background: linear-gradient(
      to right,
      #dddddd 0%,
      #f3f3f3 50%,
      #dddddd 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
