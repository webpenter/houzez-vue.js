<template>
    <RouterLink class="btn btn-primary" :to="{name:'dashboard.users.addnew'}">
         Add New
     </RouterLink>       
     <div></div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
