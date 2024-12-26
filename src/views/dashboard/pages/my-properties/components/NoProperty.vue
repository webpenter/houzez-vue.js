<template>
    <div class="dashboard-content-block">
        You don't have any property listed. 
        <RouterLink :to="{name:'dashboard.create-listing'}">
            <strong>Create a listing</strong>
        </RouterLink>
    </div><!-- dashboard-content-block -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
