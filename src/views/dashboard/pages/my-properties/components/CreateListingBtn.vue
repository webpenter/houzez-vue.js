<template>
     <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing'}">
          Create a Listing
      </RouterLink>       
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
