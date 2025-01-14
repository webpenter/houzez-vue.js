<template>
    <DashboardHeader heading="My Profile">
        <a class="btn btn-primary" href="#">View Public Profile</a>
<!--      {{ profile }}-->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <Information/>
                    <SocialMedia/>
                    <ChangePassword/>
                    <DeleteAccount/>
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import ChangePassword from './ChangePassword.vue';
import DeleteAccount from './DeleteAccount.vue';
import Information from './Information.vue';
import SocialMedia from './SocialMedia.vue';
import {useProfile} from "@/stores/index.js";
import {onMounted} from "vue";

// const profile = useProfile().getProfile;

</script>