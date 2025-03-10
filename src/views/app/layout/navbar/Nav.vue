<template>
  <template v-for="route in routes">
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
<!--  <div class="btn-group position-relative">-->
<!--    <p class=" btn-sm py-1 px-2 bg-none m-0" type="button" data-bs-toggle="dropdown"-->
<!--       aria-expanded="false">-->
<!--      Language-->
<!--    </p>-->
<!--    <ul class="dropdown-menu bg-white position-absolute border-none">-->
<!--      <a-->
<!--          href="javascript:void(0);"-->
<!--          @click="changeLanguage('en')"-->
<!--      >-->
<!--        <li>English</li>-->
<!--      </a>-->
<!--      <a-->
<!--          href="javascript:void(0);"-->
<!--          @click="changeLanguage('fr')"-->
<!--      >-->
<!--        <li>French</li>-->
<!--      </a>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<script setup>
import {RouterLink} from "vue-router";
import {getAppRoutes} from "@/constants/index.js";
import {useI18n} from "vue-i18n";
import {useLanguage} from "@/stores/index.js";

const routes = getAppRoutes();
const { t,locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  useLanguage().changeLanguage(lang);
};
</script>