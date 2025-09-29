<template>
  <section class="top-banner-wrap position-relative overflow-hidden" style="height: 600px;">
      <!-- Banner background image -->
      <div
  class="banner-inner position-absolute w-100 h-100"
  :style="`background-image: url(${beachImg}); background-size: cover; background-position: center; z-index: 1;`">
</div>
  
      <!-- Banner content -->
        <div class="banner-caption text-white text-center position-relative" style="z-index: 2; padding-top: 0px;">
        <h2 class="banner-title display-4 font-weight-bold mb-3">{{ $t('About Us') }}</h2>
        <p class="banner-subtitle lead" style="padding-inline: 150px;">{{ $t('houzez about page text') }}
        </p>
  
      </div>
    </section>
  <Team />
  <Testimonial />
  <Partners />
</template>

<script setup>
import Team from '@/views/demos/components/home/team/Index.vue';
import Testimonial from '@/views/demos/components/home/testimonial/Index.vue';
import Partners from '@/views/demos/components/home/partners/Index.vue';
import beachImg from '@/assets/img/app-side/miami-beach-1.jpg';
</script>