<template>
     <RouterLink class="btn btn-primary" :to="{name:'dashboard.create-listing.step-1'}">
          Create a Listing
      </RouterLink>       
      <div></div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
