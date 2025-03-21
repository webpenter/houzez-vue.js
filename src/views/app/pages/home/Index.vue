<template>
  <div id="hero-section">
    <HeroSection/>
    <SearchBar/>
  </div>
  <featured-properties/>
  <TeamSection/>
  <NewsAndBlogs/>
  <NewsletterSection/>
</template>

<script setup>
import HeroSection from "@/views/app/pages/home/HeroSection.vue";
import FeaturedProperties from "@/views/app/pages/home/featured-properties/Index.vue";
import TeamSection from "@/views/app/pages/home/TeamSection.vue";
import NewsAndBlogs from "@/views/app/pages/home/NewsAndBlogs.vue";
import NewsletterSection from "@/views/app/pages/home/NewsletterSection.vue";
import SearchBar from "@/views/app/pages/home/SearchBar.vue";
</script>