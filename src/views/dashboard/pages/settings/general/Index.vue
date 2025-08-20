<template>
    <DashboardHeader heading="Settings"/>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <Information/>
                    <SocialMedia/>
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import Information from './Information.vue';
import SocialMedia from './SocialMedia.vue';
</script>