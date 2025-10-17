<template>
    <DashboardHeader heading="Email Management">
        <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.step-1'}">
            Create New Template
        </RouterLink>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <!-- <Information/>
                    <SiteInformation/>
                    <ContactSettings />
                    <SocialMedia/>
                    <EmailSettings />
                    <StripeSettings />
                    <SeoSettings/> -->
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import Information from './Information.vue';
import SiteInformation from './SiteInformation.vue';
import SocialMedia from './SocialMedia.vue';
import StripeSettings from './StripeSettings.vue';
import ContactSettings from './ContactSettings.vue';
import EmailSettings from './EmailSettings.vue';
import SeoSettings from './SeoSettings.vue';
</script>