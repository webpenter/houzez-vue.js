<template>
  <div class="news-container position-relative">
    <button class="slider-btn left-btn"><i class="fas fa-chevron-left"></i></button>
    <p class="news-blog-txt">News & Blogs</p>
    <div class="news-blogs-header">
      <h2 class="news-title">News & Update</h2>
      <a href="" class="blogs-txt">View All Blogs <i class="fa-solid fa-arrow-right"></i></a>
    </div>

    <div class="news-slider" id="newsSlider">
      <div class="news-card">
        <img src="/public/img/client-side/hero-section-img.png" alt="News">
        <div class="news-card-body">
          <div class="news-date"><p>March 17, 20224</p><p>3 min read</p></div>
          <p class="news-title-text">Dynamically simplify superior human capital</p>
          <a href="#" class="news-btn">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <div class="news-card">
        <img src="/public/img/client-side/bg-hero.png" alt="News">
        <div class="news-card-body">
          <div class="news-date"><p>March 17, 20224</p><p>3 min read</p></div>
          <p class="news-title-text">Enrich Your Mind Envision Your Future Education</p>
          <a href="#" class="news-btn">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <div class="news-card">
        <img src="/public/img/client-side/hero-section-img.png" alt="News">
        <div class="news-card-body">
          <div class="news-date"><p>March 17, 20224</p><p>3 min read</p></div>
          <p class="news-title-text">University class starting soon with teamwork</p>
          <a href="#" class="news-btn">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <div class="news-card">
        <img src="/public/img/client-side/bg-hero.png" alt="News">
        <div class="news-card-body">
          <div class="news-date"><p>March 17, 20224</p><p>3 min read</p></div>
          <p class="news-title-text">Emphasizes the importance of continuous learning</p>
          <a href="#" class="news-btn">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <div class="news-card">
        <img src="/public/img/client-side/hero-section-img.png" alt="News">
        <div class="news-card-body">
          <div class="news-date"><p>March 17, 20224</p><p>3 min read</p></div>
          <p class="news-title-text">Emphasizes the importance of continuous learning</p>
          <a href="#" class="news-btn">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <button class="slider-btn right-btn"><i class="fas fa-chevron-right"></i></button>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";

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