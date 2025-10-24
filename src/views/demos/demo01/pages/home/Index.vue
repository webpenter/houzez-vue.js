<template>
  <HeroSection searchType="banner" />
  <FeaturedListings />
  <Taxonomy />
  <LatestProperties />
  <Team />
  <Testimonial />
  <Agents />
  <Partners />
</template>

<script setup>
import HeroSection from '@/views/demos/components/home/search-banner/HeroSection.vue';
import FeaturedListings from '@/views/demos/components/home/featured-listings/Index.vue';
import Taxonomy from '@/views/demos/components/home/taxonomy/Index.vue';
import LatestProperties from '@/views/demos/components/home/finest-properties/Index.vue';
import Team from '@/views/demos/components/home/team/Index.vue';
import Testimonial from '@/views/demos/components/home/testimonial/Index.vue';
import Partners from '@/views/demos/components/home/partners/Index.vue';
import Agents from '@/views/demos/components/home/agents/Index.vue';

</script>