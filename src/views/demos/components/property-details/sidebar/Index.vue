<template>
    <aside class="sidebar-wrap">
        <PropertyFormTabs :property="property" />
        <LongListWidget />
        <AdvancedSearchWidget />
        <MortgageCalculatorWidget /> 
        <RecentlyViewedWidget />
        <PropertiesWidget />
        <FeaturedPropertiesWidget />
        <BlogPostsWidget />
        <LoggedInWidget v-if="isLoggedIn" />
        <LoginRegisterWidget v-else />
    </aside><!-- sidebar-wrap -->
</template>

<script setup>
import PropertyFormTabs from '@/views/app/components/property-details/property/PropertyFormTabs.vue';
import LongListWidget from './widgets/LongListWidget.vue';
import AdvancedSearchWidget from './widgets/AdvancedSearchWidget.vue';
import MortgageCalculatorWidget from './widgets/MortgageCalculatorWidget.vue';
import RecentlyViewedWidget from './widgets/RecentlyViewedWidget.vue';
import PropertiesWidget from './widgets/PropertiesWidget.vue';
import FeaturedPropertiesWidget from './widgets/FeaturedPropertiesWidget.vue';
import BlogPostsWidget from './widgets/BlogPostsWidget.vue';
import LoggedInWidget from './widgets/LoggedInWidget.vue';
import LoginRegisterWidget from './widgets/LoginRegisterWidget.vue';


const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})


import { computed } from 'vue'

// Example: Check if token is stored in localStorage
const isLoggedIn = computed(() => {
  return !!localStorage.getItem('token') // or 'auth_token' based on your app
})

</script>

