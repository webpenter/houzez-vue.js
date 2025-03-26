<template>
    <div class="nav-mobile">
        <div class="main-nav navbar slideout-menu slideout-menu-left" id="nav-mobile">
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
    <!-- <AddNewDealPanel /> -->
    <DashboardFooter/>
    
    <!-- <?php include 'inc/dashboard/board/add-new-deal-panel.php'; ?> -->
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