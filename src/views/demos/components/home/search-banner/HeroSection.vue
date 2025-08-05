<template>
  <section class="top-banner-wrap position-relative overflow-hidden" style="height: 600px;">
    <!-- AutoComplete Results -->
    <AutoCompleteKeyword v-if="searchType === 'parallax'" :results="searchResults" />

    <!-- Banner background -->
    <div
      class="banner-inner position-absolute w-100 h-100"
      :style="`background-image: url(${beachImg}); background-size: cover; background-position: center; z-index: 1;`">
    </div>

    <!-- Banner content -->
    <div class="banner-caption text-white text-center position-relative" style="z-index: 2; padding-top: 0px;">
      <h2 class="banner-title display-4 font-weight-bold mb-3">
        {{ $t('Welcome to Buy WebPenter') }}
      </h2>
      <p class="banner-subtitle lead">
        {{ $t('Housing Suite Theme for Real Estate') }}
      </p>

      <!-- Conditionally render components -->
      <BannerSearch v-if="searchType === 'banner'" />
      <!-- ✅ Listen for emitted results -->
      <SearchParallaxBanner v-else-if="searchType === 'parallax'" @results="searchResults = $event" />
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import BannerSearch from './BannerSearch.vue';
import SearchParallaxBanner from './SearchParallaxBanner.vue';
import AutoCompleteKeyword from './AutoCompleteKeyword.vue';
import beachImg from '@/assets/img/app-side/miami-beach-1.jpg';

const props = defineProps({
  searchType: { type: String, default: 'banner' }
});

const searchResults = ref([]); // ✅ Store results here
</script>
