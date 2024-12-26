<template>
    <div class="header-desktop header-v1">
        <div class="container">
            <div class="header-inner-wrap">
                <div class="navbar d-flex align-items-center">
                    <LogoWhite/>
                    <nav class="main-nav navbar-expand-lg flex-grow-1 on-hover-menu with-angle-icon">
                        <Nav/>
                    </nav><!-- main-nav -->
                    <LoginRegister/>
                </div><!-- navbar -->
            </div><!-- header-inner-wrap -->
        </div><!-- .container -->    
    </div><!-- .header-v1 -->
</template>

<script setup>
import LoginRegister from './LoginRegister.vue';
import LogoWhite from './LogoWhite.vue';
import Nav from './Nav.vue';
</script>