<template>
  <template v-for="route in APP_ROUTES">
    <div class="btn-group position-relative">
      <p class=" btn-sm py-1 px-2 bg-none m-0" type="button" data-bs-toggle="dropdown"
         aria-expanded="false">
        {{ route.title }}
      </p>
      <ul class="dropdown-menu bg-white position-absolute border-none">
        <template v-for="subRoute in route.sub">
          <RouterLink :to="{ name: subRoute.name }">
            <li>{{ subRoute.title }}</li>
          </RouterLink>
        </template>
      </ul>
    </div>
  </template>
</template>

<script setup>
import {RouterLink} from "vue-router";
import {APP_ROUTES} from "@/constants/index.js";
</script>