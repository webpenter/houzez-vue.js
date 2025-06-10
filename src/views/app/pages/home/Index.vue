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
import HeroSection from "@/views/app/pages/home/HeroSection.vue";
import FeaturedProperties from "@/views/app/pages/home/featured-properties/Index.vue";
import LatestProperties from "@/views/app/pages/home/latest-properties/Index.vue";
import TeamSection from "@/views/app/pages/home/TeamSection.vue";
import Services from "@/views/app/pages/home/Services.vue";
import NewsAndBlogs from "@/views/app/pages/home/NewsAndBlogs.vue";
import SearchBar from "@/views/app/pages/home/SearchBar.vue";
</script>