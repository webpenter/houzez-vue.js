<template>
  <div class="">
    <p
class=" btn-sm bg-none m-0" type="button" data-bs-toggle="dropdown"
       aria-expanded="false">
      <i class="fa-regular fa-user"></i>
    </p>
    <ul class="dropdown-menu bg-white position-absolute border-none">
      <RouterLink :to="{name:'auth.login'}">
        <li>Login</li>
      </RouterLink>
      <RouterLink :to="{name:'auth.register'}">
        <li>Sign up</li>
      </RouterLink>
    </ul>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>