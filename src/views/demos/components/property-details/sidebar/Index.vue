<template>
    <aside class="sidebar-wrap">
        <!-- 
        <?php include 'inc/widgets/blog-posts-widget.php';?>
        <?php include 'inc/widgets/logged-in-widget.php';?>
        <?php include 'inc/widgets/login-register-widget.php';?> 
        -->
        
        <PropertyFormTabs :property="property" />
        <PropertyForm />
        <LongListWidget />
        <AdvancedSearchWidget />
        <MortgageCalculatorWidget />
        <RecentlyViewedWidget />
        <!-- <TaxonomyWidget /> -->
        <PropertiesWidget />
        <FeaturedPropertiesSliderWidget />  
        <FeaturedPropertiesWidget />
        <BlogPostsWidget />
        <LoggedInWidget />
        <LoginRegisterWidget />
    </aside><!-- sidebar-wrap -->
</template>

<script setup>
import BrochureButton from '@/views/app/components/property-details/property/BrochureButton.vue';
import PropertyFormTabs from '@/views/app/components/property-details/property/PropertyFormTabs.vue';
import PropertyForm from '@/views/app/components/property-details/property/PropertyForm.vue';
import LongListWidget from './widgets/LongListWidget.vue';
import AdvancedSearchWidget from './widgets/AdvancedSearchWidget.vue';
import MortgageCalculatorWidget from './widgets/MortgageCalculatorWidget.vue';
import RecentlyViewedWidget from './widgets/RecentlyViewedWidget.vue';
import TaxonomyWidget from './widgets/TaxonomyWidget.vue';
import PropertiesWidget from './widgets/PropertiesWidget.vue';
import FeaturedPropertiesSliderWidget from './widgets/FeaturedPropertiesSliderWidget.vue';
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
</script>

