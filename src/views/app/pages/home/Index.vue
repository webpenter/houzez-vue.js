<template>

    <ParallaxBannerWithTabs/>

    

    <ModulePropertyCardsV1/>
    <div style="margin-block: 60px;"></div>
    <ModulePropertyTabsV1/>
    <ModuleTaxonomyGrids/>
    <div style="margin-block: 60px;"></div>
    <Testimonials />
</template>

<script setup>
import ParallaxBannerWithTabs from '../../../inc/header/ParallaxBannerWithTabs.vue';
import Testimonials from './Testimonials.vue';
import ModulePropertyCardsV1 from './ModulePropertyCardsV1.vue';
import ModulePropertyTabsV1 from './ModulePropertyTabsV1.vue';
import ModuleTaxonomyGrids from './ModuleTaxonomyGrids.vue';

</script>