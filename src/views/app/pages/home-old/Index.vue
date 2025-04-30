<template>
  <div id="hero-section">
    <HeroSection/>
    <SearchBar/>
  </div>
  <featured-properties/>
  <TeamSection/>
  <LatestProperties/>
  <Services/>
  <NewsAndBlogs/>
</template>

<script setup>
import HeroSection from "@/views/app/pages/home-old/HeroSection.vue";
import FeaturedProperties from "@/views/app/pages/home-old/featured-properties/Index.vue";
import LatestProperties from "@/views/app/pages/home-old/latest-properties/Index.vue";
import TeamSection from "@/views/app/pages/home-old/TeamSection.vue";
import Services from "@/views/app/pages/home-old/Services.vue";
import NewsAndBlogs from "@/views/app/pages/home-old/NewsAndBlogs.vue";
import SearchBar from "@/views/app/pages/home-old/SearchBar.vue";
</script>