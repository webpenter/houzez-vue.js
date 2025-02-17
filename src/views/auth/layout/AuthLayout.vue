<template>
  <div class="formbg-outer">
    <div class="formbg">
      <div class="formbg-inner">
        <h5 class="padding-bottom--15">{{heading}}</h5>
        <slot/>
      </div>
    </div>
    <div class="footer-link padding-top--24">
      <span>
        {{routeText}}
        <RouterLink :to="{name:routeName}">
          {{routeTitle}}
        </RouterLink>
      </span>
      <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
        <span>
          <RouterLink :to="{name:'app'}">Home</RouterLink>
        </span>
        <span>
          <RouterLink :to="{name:'app'}">Contact</RouterLink>
        </span>
        <span>
          <RouterLink :to="{name:'app'}">Terms & Policy</RouterLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";

defineProps(['heading','routeText','routeName','routeTitle']);
</script>