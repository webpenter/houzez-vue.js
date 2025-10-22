<template>
    <div class="nav-mobile">
        <div id="nav-mobile" class="main-nav navbar slideout-menu slideout-menu-left">
            <Nav/>
        </div><!-- main-nav -->
        <MobileUserNav/>
    </div><!-- nav-mobile -->
    <main id="main-wrap" class="main-wrap dashboard-main-wrap">
        <HeaderMobile/>
  
        <RouterView/>
        
        <section class="dashboard-side-wrap">
            <SideWrap/>
        </section>
    </main><!-- .main-wrap -->
    <DashboardFooter/>
</template>

<script setup>
import DashboardFooter from '@/views/inc/dashboard/DashboardFooter.vue';
import SideWrap from '@/views/inc/dashboard/SideWrap.vue';
import HeaderMobile from '@/views/inc/nav/HeaderMobile.vue';
import MobileUserNav from '@/views/inc/nav/MobileUserNav.vue';
import Nav from '@/views/inc/nav/Nav.vue';
import { RouterView } from 'vue-router';
</script>

<style>
@import url("@/assets/css/main-ltr.css");
</style>