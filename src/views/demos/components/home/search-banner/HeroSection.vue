<template>
  <section class="top-banner-wrap position-relative overflow-hidden" style="height: 600px;">
    <!-- AutoComplete Results -->
    <AutoCompleteKeyword v-if="searchType === 'parallax'" :results="searchResults" />

    <!-- Banner background -->
    <div
      class="banner-inner position-absolute w-100 h-100"
      :style="{
        backgroundImage: `url(${bannerToShow})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }"
    ></div>

    <!-- Banner content -->
    <div class="banner-caption text-white text-center position-relative" style="z-index: 2; padding-top: 0px;">
      <h2 class="banner-title display-4 font-weight-bold mb-3">
        <!-- {{ $t('Welcome to Buy WebPenter') }} -->
      </h2>
      <p class="banner-subtitle lead">
        <!-- {{ $t('Housing Suite Theme for Real Estate') }} -->
      </p>

      <!-- Conditionally render components -->
      <BannerSearch v-if="searchType === 'banner'" />
      <SearchParallaxBanner v-else-if="searchType === 'parallax'" @results="searchResults = $event" />
      <SearchBannerAdvanced v-else-if="searchType === 'advanced'" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useSetting } from "@/stores/index"; // ✅ import store
import { storeToRefs } from "pinia";

import BannerSearch from "./BannerSearch.vue";
import SearchParallaxBanner from "./SearchParallaxBanner.vue";
import AutoCompleteKeyword from "./AutoCompleteKeyword.vue";
import SearchBannerAdvanced from "./SearchBannerAdvanced.vue";

// Static fallback image
import beachImg from "@/assets/img/app-side/miami-beach-1.jpg";

// Props
defineProps({
  searchType: { type: String, default: "banner" },
});

// Local state
const searchResults = ref([]);

// ✅ Pinia store
const settingStore = useSetting();
const { banner } = storeToRefs(settingStore);

// ✅ Computed banner (fallback if API is empty)
const bannerToShow = computed(() => banner.value || beachImg);

// ✅ Fetch banner on mount
onMounted(async () => {
  try {
    await settingStore.getBanner();
  } catch (err) {
    console.error("Failed to fetch banner:", err);
  }
});
</script>
