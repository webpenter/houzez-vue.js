<template>
  <div class="searchbar-pattern-container">
    <div id="search-container">
      <div class="search-input-box">
        <label>{{ $t("Property Search") }}</label>
        <el-input
            v-model="formData.search"
            style="width: 100%"
            :placeholder="$t('search placeholder')"
            :suffix-icon="Search"
        />
      </div>
      <div class="search-bar-select-options">
        <div>
          <label>{{ $t('Property Type')}}</label>
          <el-select
              v-model="formData.types"
              multiple
              clearable
              filterable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search Types')"
              style="width: 100%"
          >
            <el-option
                v-for="type in types"
                :key="type.id"
                :label="$filters.capitalize(type.name)"
                :value="type.name"
            />
          </el-select>
        </div>
        <div>
          <label>{{ $t('Location')}}</label>
          <el-select
              v-model="formData.city"
              clearable
              filterable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search City')"
              style="width: 100%"
          >
            <el-option
                v-for="city in cities"
                :key="city.id"
                :label="city.name"
                :value="city.name"
            />
          </el-select>
        </div>
        <div>
          <label>{{ $t('Property Size')}}</label>
          <el-select
              v-model="formData.bedrooms"
              filterable
              clearable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search Max Bedrooms')"
              style="width:100%"
          >
            <el-option
                v-for="bedroom in bedrooms"
                :key="bedroom.id"
                :label="bedroom.name"
                :value="bedroom.name"
            />
          </el-select>
        </div>
        <div>
          <label>{{ $t('Your Budget')}}</label>
          <el-select
              v-model="formData.maxPrice"
              filterable
              clearable
              default-first-option
              :reserve-keyword="false"
              :placeholder="$t('Choose/Search Max Price')"
              style="width: 100%"
          >
            <el-option
                v-for="price in prices"
                :key="price.id"
                :label="$filters.formatPrice(price.name)"
                :value="price.name"
            />
          </el-select>
        </div>
      </div>
      <div class="search-btn">
        <button @click.prevent="searchProperty">
          <span v-if="!btnLoading">{{$t('Search Property')}}</span>
          <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button> 
      </div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useAppProperty, useBedroom, useCity, useNotification, usePrice, useType} from "@/stores/index.js";
import {ref} from "vue";
import {useRouter} from "vue-router";
import { Search } from '@element-plus/icons-vue'

const btnLoading = ref(false);
const router = useRouter();
const propertyToRefs = useAppProperty();

const formData = ref({
  search:"",
  types: [],
  city: "",
  bedrooms: "",
  maxPrice: "",
});

const {types} = storeToRefs(useType());
const {cities} = storeToRefs(useCity());
const {prices} = storeToRefs(usePrice());
const {bedrooms} = storeToRefs(useBedroom());

const searchProperty = async () => {
  btnLoading.value = true;
  try {
    await propertyToRefs.getSearchedAndFilteredProperties(formData.value);

    btnLoading.value = false;

    router.push({
      name: "app.search-results",
      query: {
        search: formData.value.search,
        types: formData.value.types.join(","),
        city: formData.value.city,
        bedrooms: formData.value.bedrooms,
        maxPrice: formData.value.maxPrice,
      },
    });
  } catch (error) {
    useNotification().Error("Error fetching properties:", error);
    btnLoading.value = false;
  }
}
</script>