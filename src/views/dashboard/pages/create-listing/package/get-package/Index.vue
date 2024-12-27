<template>
    <DashboardHeader heading="Add New Property">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <SnakeNav active="package"/>
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <p>You don't have any package! You need to buy your package.</p>
                        <RouterLink :to="{name:'dashboard.create-listing.select-package'}" class="btn btn-primary">
                            Select Package
                        </RouterLink>
                    </div><!-- dashboard-content-block -->
                    
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SnakeNav from '../../components/SnakeNav.vue';
</script>