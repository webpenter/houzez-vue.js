<template>
    <aside class="sidebar-wrap">
        <BrochureButton />
        <PropertyFormTabs />
        <PropertyForm />
        <LongListsWidget />
        <AdvancedSearchWidget />
        <MortgageCalculatorWidget />
        <RecentlyViewedWidget />
        <TaxonomyWidget />
        <PropertiesWidget />
        <FeaturedPropertiesWidget />
        <BlogPostsWidget />
        <LoggedInWidget />
        <LoginRegisterWidget />
</aside><!-- sidebar-wrap -->
</template>
<script setup>
import BrochureButton from './property/BrochureButton.vue';
import PropertyForm from './property/PropertyForm.vue';
import PropertyFormTabs from './property/PropertyFormTabs.vue';
import AdvancedSearchWidget from './widgets/AdvancedSearchWidget.vue';
import BlogPostsWidget from './widgets/BlogPostsWidget.vue';
import FeaturedPropertiesWidget from './widgets/FeaturedPropertiesWidget.vue';
import LoggedInWidget from './widgets/LoggedInWidget.vue';
import LoginRegisterWidget from './widgets/LoginRegisterWidget.vue';
import LongListsWidget from './widgets/LongListsWidget.vue';
import MortgageCalculatorWidget from './widgets/MortgageCalculatorWidget.vue';
import PropertiesWidget from './widgets/PropertiesWidget.vue';
import RecentlyViewedWidget from './widgets/RecentlyViewedWidget.vue';
import TaxonomyWidget from './widgets/TaxonomyWidget.vue';


</script>