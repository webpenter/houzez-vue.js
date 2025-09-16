<template>
  <footer class="footer-wrap footer-wrap-v1 mt-3">
    <div class="footer-top-wrap">
      <div class="container">
        <div class="row">
          <!-- About Real Estate -->
          <div class="col-lg-3 col-md-6">
            <div class="widget widget-wrap widget-about-site">
              <div class="widget-header">
                <h3 class="widget-title">{{ $t("About Real Estate") }}</h3>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <p>{{ $t("footer real estate text") }}</p>
                </div>
                <div class="widget-read-more">
                  <router-link :to="{ name: 'demo01.about-us' }">
                    {{ $t("Read more") }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- About This Website -->
          <div class="col-lg-3 col-md-6">
            <div class="widget widget-wrap widget-about-site">
              <div class="widget-header">
                <h3 class="widget-title">{{ $t("About This Website") }}</h3>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <p>{{ $t("footer website text") }}</p>
                </div>
                <div class="widget-read-more">
                  <router-link :to="{ name: 'demo01.about-us' }">
                    {{ $t("Read more") }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- About Houzez -->
          <div class="col-lg-6 col-md-6">
            <div class="widget widget-wrap widget-about-site">
              <div class="widget-header">
                <h3 class="widget-title">{{ $t("About Houzez") }}</h3>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <p>{{ $t("footer houzez text") }}</p>
                </div>
                <div class="widget-read-more">
                  <router-link :to="{ name: 'demo01.about-us' }">
                    {{ $t("Read more") }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div><!-- row -->
      </div><!-- container -->
    </div><!-- footer-top-wrap -->

    <div class="footer-bottom-wrap footer-bottom-wrap-v4">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <!-- Copyright -->
          <div class="footer-copyright">
            &copy; Buy WebPenter - {{ $t("All rights reserved") }}
          </div>

          <!-- Logo -->
          <div class="logo">
            <RouterLink :to="{ name: 'app' }">
              <img src="@/assets/img/app-side/logo-houzez-white.png" alt="logo" />
            </RouterLink>
          </div>

          <!-- Social Icons -->
          <div class="footer-social">
            <span v-for="link in links" :key="link.platform">
              <a
                :class="`btn-${link.platform}`"
                target="_blank"
                rel="noopener noreferrer"
                :href="link.url"
              >
                <i :class="iconClass(link.platform)" class="mr-2"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div><!-- footer-bottom-wrap -->
  </footer>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useSetting } from "@/stores/index"; // <- make sure this exports useSetting

const setting = useSetting();

// Only return visible + valid links
const links = computed(() =>
  Object.entries(setting.socialMedia)
    .filter(([_, data]) => data?.is_visible && data?.value)
    .map(([platform, data]) => ({
      platform,
      url: data.value,
    }))
);

onMounted(() => {
  if (!Object.keys(setting.socialMedia).length) {
    setting.getSocialMedia();
  }
});

// Map social media platform -> icon classes
const iconClass = (platform) => {
  const map = {
    facebook: "houzez-icon icon-social-media-facebook",
    twitter: "houzez-icon icon-x-logo-twitter-logo-2",
    linkedin: "houzez-icon icon-professional-network-linkedin",
    instagram: "houzez-icon icon-social-instagram",
    google_plus: "houzez-icon icon-social-media-google-plus-1",
    youtube: "houzez-icon icon-social-video-youtube-clip",
    pinterest: "houzez-icon icon-social-pinterest",
    vimeo: "houzez-icon icon-social-video-vimeo",
    skype: "fab fa-skype",
    website: "fas fa-globe",
  };

  return map[platform] || "fas fa-link"; // fallback
};
</script>

<style scoped>
.footer-social {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.footer-social span {
  display: inline-block;
}
</style>
