<template>
  <div class="col-md-5">
    <!-- Display the logo -->
    <img v-if="setting.logo" :src="setting.logo" alt="Company Logo" class="mb-3"/>
    <img v-else src="@/assets/img/client-side/logo%20(1).png" alt="Default Logo" class="mb-3" />
    
    <p>{{ $t('Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.') }}</p>
    
    <!-- Social media icons -->
    <div class="social-icons">
      <a v-if="socialMedia?.facebook?.is_visible && socialMedia?.facebook?.value" :href="socialMedia.facebook.value" target="_blank">
        <i class="fab fa-facebook"></i>
      </a>
      <a v-if="socialMedia?.twitter?.is_visible && socialMedia?.twitter?.value" :href="socialMedia.twitter.value" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <a v-if="socialMedia?.instagram?.is_visible && socialMedia?.instagram?.value" :href="socialMedia.instagram.value" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a v-if="socialMedia?.linkedin?.is_visible && socialMedia?.linkedin?.value" :href="socialMedia.linkedin.value" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a>
      <a v-if="socialMedia?.google_plus?.is_visible && socialMedia?.google_plus?.value" :href="socialMedia.google_plus.value" target="_blank">
        <i class="fab fa-google-plus"></i>
      </a>
      <a v-if="socialMedia?.youtube?.is_visible && socialMedia?.youtube?.value" :href="socialMedia.youtube.value" target="_blank">
        <i class="fab fa-youtube"></i>
      </a>
      <a v-if="socialMedia?.pinterest?.is_visible && socialMedia?.pinterest?.value" :href="socialMedia.pinterest.value" target="_blank">
        <i class="fab fa-pinterest"></i>
      </a>
      <a v-if="socialMedia?.vimeo?.is_visible && socialMedia?.vimeo?.value" :href="socialMedia.vimeo.value" target="_blank">
        <i class="fab fa-vimeo"></i>
      </a>
      <a v-if="socialMedia?.skype?.is_visible && socialMedia?.skype?.value" :href="socialMedia.skype.value" target="_blank">
        <i class="fab fa-skype"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useSetting } from "@/stores/index"; // Adjust the path based on your project structure

// Initialize the Pinia store
const setting = useSetting();

// Create a computed property to ensure socialMedia is reactive and matches the API structure
const socialMedia = computed(() => setting.socialMedia || {});

// Fetch the logo and social media links when the component mounts
onMounted(async () => {
  try {
    await Promise.all([
      setting.getLogo(), // Fetch the logo
      setting.getSocialMedia(), // Fetch social media links
    ]);
    console.log("Social Media Data:", setting.socialMedia); // Debug the data
  } catch (error) {
    console.error("Failed to fetch settings:", error);
  }
});
</script>

