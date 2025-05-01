<template>
  <div class="col-md-5">
    <img src="@/assets/img/client-side/logo%20(1).png" alt="Company Logo" class="mb-3">
    <p>{{ $t('Rapidiously myocardinate cross-platform intellectual capital model. Appropriately create interactive infrastructures.')}}</p>
    <div class="social-icons">
      <RouterLink :to="{name:'app'}"><i class="fab fa-facebook"></i></RouterLink>
      <RouterLink :to="{name:'app'}"><i class="fab fa-twitter"></i></RouterLink>
      <RouterLink :to="{name:'app'}"><i class="fab fa-instagram"></i></RouterLink>
    </div>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>