<template>
    <section class="top-banner-wrap horizontal-search-wrap" style="height: 600px;">
        <div
         class="banner-inner parallax d-flex" data-parallax-bg-image="/img/miami-beach-1.jpg"
                style="width: 100%; height: 600px; background-size: cover; background-position: center;"
                :style="{ backgroundImage: `url('/img/miami-beach-1.jpg')` }"
        >
            <div class="align-self-center flex-fill">
                <div class="banner-caption">
                    <h2 class="banner-title">Welcome to Houzez 2.0</h2>
                    <p class="banner-subtitle">WordPress Theme For Real Estate</p>
                    <SearchForBannersWithTabs/>
                </div><!-- banner-caption -->
            </div><!-- align-self-center -->
        </div><!-- banner-inner parallax -->
    </section><!-- top-banner-wrap -->
</template>

<script setup>
import SearchForBannersWithTabs from '../search/SearchForBannersWithTabs.vue';
</script>