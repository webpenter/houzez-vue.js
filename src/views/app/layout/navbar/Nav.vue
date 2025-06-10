<template>
  <template v-for="route in routes">
    <div class="btn-group position-relative">
      <p class=" btn-sm py-1 px-2 bg-none m-0" type="button" data-bs-toggle="dropdown"
         aria-expanded="false">
        {{ route.title }}
      </p>
      <ul class="dropdown-menu bg-white position-absolute border-none">
        <template v-for="subRoute in route.sub">
          <template v-if="subRoute.name === 'app.property-details'">
            <RouterLink :to="{ name: subRoute.name,params: { propertySlug: DEFAULT_PROPERTY_DETAIL_PAGE_SLUG } }">
              <li>{{ subRoute.title }}</li>
            </RouterLink>
          </template>
          <template v-else>
            <RouterLink :to="{ name: subRoute.name }">
              <li>{{ subRoute.title }}</li>
            </RouterLink>
          </template>
        </template>
      </ul>
    </div>
  </template>
  <div class="btn-group position-relative">
    <p class=" btn-sm py-1 px-2 bg-none m-0" type="button" data-bs-toggle="dropdown"
       aria-expanded="false">
      {{locale === 'en' ? 'English' : 'Français'}}
    </p>
    <ul class="dropdown-menu bg-white position-absolute border-none">
      <template v-for="currentLocale in availableLocales">
        <a
            href="javascript:void(0);"
            @click="changeLang(currentLocale)"
        >
          <li>{{currentLocale === 'en' ? 'English' : 'Français'}}</li>
        </a>
      </template>
    </ul>
  </div>
</template>

<script setup>
import {RouterLink} from "vue-router";
import {DEFAULT_PROPERTY_DETAIL_PAGE_SLUG, getAppRoutes} from "@/constants/index.js";
import {useI18n} from "vue-i18n";
import {useLanguage} from "@/stores/index.js";

const routes = getAppRoutes();

import { storeToRefs } from 'pinia';

const { t, locale, availableLocales } = useI18n();
const languageStore = useLanguage();
const { locale: selectedLocale } = storeToRefs(languageStore);

const changeLang = (lang) => {
  selectedLocale.value = lang;
  locale.value = lang;
  languageStore.setLanguage(lang);
};
</script>