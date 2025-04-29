<template>
  <NewsletterSection/>
  <footer class="footer mt-5">
    <div class="container">
      <div class="row">
        <Info/>
        <GetInTouch/>
        <Links/>
      </div>
    </div>
  </footer>
  <Bottom/>
</template>

<script setup>
import Bottom from "@/views/app/layout/footer/Bottom.vue";
import Info from "@/views/app/layout/footer/Info.vue";
import GetInTouch from "@/views/app/layout/footer/GetInTouch.vue";
import Links from "@/views/app/layout/footer/Links.vue";
import NewsletterSection from "@/views/app/layout/footer/NewsletterSection.vue";
</script>