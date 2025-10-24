<template>
  <div class="nav-mobile">
    <div
    id="nav-mobile"
    class="main-nav navbar slideout-menu slideout-menu-left">
      <Nav />
    </div><!-- main-nav -->
    <LoggedInNav />
  </div><!-- nav-mobile -->
  <main id="main-wrap" class="main-wrap">
    <header class="header-main-wrap">
      <HeaderV4LoggedIn />
       <HeaderMobile />
    </header><!-- .header-main-wrap -->
  </main>
  <!-- .main-wrap -->

  <!-- <div style="height: 800px"></div> -->
  <!-- delete this -->
</template>

<script setup>
import HeaderMobile from './HeaderMobile.vue';
import HeaderV4LoggedIn from './HeaderV4LoggedIn.vue';
import LoggedInNav from './LoggedInNav.vue';
import Nav from './Nav.vue';

</script>
