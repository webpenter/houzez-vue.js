<template>
      <div class="nav-mobile">
          <div class="main-nav navbar slideout-menu slideout-menu-left" id="nav-mobile">
              <Nav/>
          </div><!-- main-nav -->
          <LoginRegisterMobile/>
      </div><!-- nav-mobile -->
  
      <main id="main-wrap" class="main-wrap">
          
          <header class="header-main-wrap">
             <HeaderV1/>
             <HeaderMobile/>
          </header><!-- .header-main-wrap -->
          
          <RouterView/>
  
      </main><!-- .main-wrap -->
  
      <FooterV5/>
  </template>
  
  <script setup>
  import { RouterView } from 'vue-router';
  import FooterV5 from '../inc/footer/FooterV5.vue';
  import HeaderMobile from '../inc/nav/HeaderMobile.vue';
  import HeaderV1 from '../inc/nav/HeaderV1.vue';
  import LoginRegisterMobile from '../inc/nav/LoginRegisterMobile.vue';
  import Nav from '../inc/nav/Nav.vue';
  </script>