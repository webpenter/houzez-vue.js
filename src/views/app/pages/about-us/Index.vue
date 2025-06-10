<template>
  <div class="about-us">{{$t('About Us')}}</div>

  <AboutText/>
  <TeamSection/>
  <NewsAndBlogs/>
</template>

<script setup>
import AboutText from "@/views/app/pages/about-us/AboutText.vue";
import TeamSection from "@/views/app/pages/home/TeamSection.vue";
import NewsAndBlogs from "@/views/app/pages/home/NewsAndBlogs.vue";
</script>