<template>
<<<<<<< HEAD
    <!-- Properties -->
    <section class="listing-wrap">
            <div class="container">
                <div class="page-title-wrap">
                    <!-- <?php include 'inc/page/breadcrumb.php';?>  -->
                     <BreadCrumb />
                    <div class="d-flex align-items-center">
                        <!-- <?php include 'inc/page/page-title.php';?>  -->
                         <PageTitle />
                        <!-- <?php include 'inc/listing/listing-switch-view.php';?>  -->
                         <ListingSwitchView />
                    </div><!-- d-flex -->  
                </div><!-- page-title-wrap -->
                <div class="row">
                    <div class="col-lg-8 col-md-12 bt-content-wrap">                      
                        <div class="listing-tools-wrap">
                            <div class="d-flex align-items-center">
                                <!-- <?php include 'inc/listing/listing-tabs.php';?>     -->
                                 <ListingTabs />
                                <!-- <?php include 'inc/listing/listing-sort-by.php';?>     -->
                                 <ListingSortBy />
                            </div><!-- d-flex -->
                        </div><!-- listing-tools-wrap -->                   
                        <div class="listing-view list-view">
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />
                             <ItemV1 />



                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                           

                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?> -->
                            <!-- <?php include 'inc/listing/item-v1.php';?>    -->
                        </div><!-- listing-view -->
                        <!-- <?php include 'inc/listing/pagination.php';?> -->
                         <Pagination />
                    </div><!-- bt-content-wrap -->
                    <div class="col-lg-4 col-md-12 bt-sidebar-wrap">
            
                    </div><!-- bt-sidebar-wrap -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
</template>

<script setup>
import BreadCrumb from '@/views/inc/page/BreadCrumb.vue';
import PageTitle from '@/views/inc/page/PageTitle.vue';
import ListingSwitchView from '@/views/inc/listing/ListingSwitchView.vue';
import ListingTabs from '@/views/inc/listing/ListingTabs.vue';
import ListingSortBy from '@/views/inc/listing/ListingSortBy.vue';
import ItemV1 from '@/views/inc/listing/ItemV1.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';

</script>
=======
  <div id="property-main">
    <div id="property-sidebar">
      <div class="property-search-bar" style="background-color: #ffffff">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
            placeholder="Search properties..."
            v-model="formData.search"
            type="search"
            class="search-property input"
            @input="searchProperty"
        >
      </div>
      <div id="properties-filters">
        <div>
          <label style="margin-bottom: 0">Property Type</label>
          <el-select
              v-model="formData.types"
              multiple
              clearable
              filterable
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose/Search Types"
              @change="searchProperty"
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
          <label style="margin-bottom: 0">Location</label>
          <el-select
              v-model="formData.city"
              clearable
              filterable
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose/Search City"
              @change="searchProperty"
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
          <label style="margin-bottom: 0">Property Size</label>
          <el-select
              v-model="formData.bedrooms"
              filterable
              clearable
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose/Search Max Bedrooms"
              @change="searchProperty"
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
          <label style="margin-bottom: 0">Your Budget</label>
          <el-select
              v-model="formData.maxPrice"
              filterable
              clearable
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose/Search Max Price"
              @change="searchProperty"
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
      <button @click.prevent="resetFilters" class="sidebar-search-btn">Reset filters</button>
    </div>
    <div id="properties">
      <div class="properties-header">
        <div class="from-to-from">
          <i class="fa-regular fa-house"></i>
          <RouterLink :to="{name:'app.home'}">Home</RouterLink>
          <i class="fa-regular fa-chevron-right"></i>
          <a href="#">
            Properties
          </a>
        </div>
        <h1>Properties</h1>
        <template v-if="allProperties.length > 0">
          <div class="total-properties">
            <p>{{ $filters.formatTextWithNumber(allProperties.length,"Property") }} </p>
            <div @click.prevent="refreshProperties" style="cursor: pointer">
              <i :class="{'fa-solid fa-rotate': true, 'rotate-animation': isRefreshing}"></i>
              Refresh
            </div>
          </div>
        </template>
      </div>
      <NoDataFound
          v-if="allProperties.length < 1"
          :font-size="30"
          :icon-size="100"
          class="mt-5"
      />
      <template v-else>
        <div class="cards-container">
          <Cards
              :properties="allProperties"
              :loading="loading"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useAppProperty, useBedroom, useCity, useNotification, usePrice, useType} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {RouterLink, useRoute, useRouter} from "vue-router";
import Cards from "@/views/app/pages/properties/Cards.vue";
import NoDataFound from "@/views/app/components/NoDataFound.vue";

const router = useRouter();
const route = useRoute();

const loading = ref(false);
const isRefreshing = ref(false);

const propertyToRefs = useAppProperty();
const {allProperties} = storeToRefs(propertyToRefs);

const {types} = storeToRefs(useType());
const {cities} = storeToRefs(useCity());
const {prices} = storeToRefs(usePrice());
const {bedrooms} = storeToRefs(useBedroom());

const formData = ref({
  search: route.query.search || "",
  types: route.query.types ? route.query.types.split(',') : [],
  city: route.query.city || "",
  bedrooms: route.query.bedrooms || "",
  maxPrice: route.query.maxPrice || "",
});

const searchProperty = async () => {
  loading.value = true;
  try {
    await router.push({
      name:"app.properties",
      query: {
        search: formData.value.search,
        types: formData.value.types.join(','),
        city: formData.value.city,
        bedrooms: formData.value.bedrooms,
        maxPrice: formData.value.maxPrice,
      },
    });

    await propertyToRefs.getAllProperties(formData.value);
    loading.value = false;

  } catch (error) {
    useNotification().Error("Error fetching properties:", error);
    loading.value = false;
  }
};

const resetFilters = () => {
  formData.value = {
    search: "",
    types: [],
    city: "",
    bedrooms: "",
    maxPrice: "",
  };

  router.replace({ name: "app.properties", query: {} });
  searchProperty();
};

const refreshProperties = () => {
  isRefreshing.value = true;

  formData.value = {
    search: "",
    types: [],
    city: "",
    bedrooms: "",
    maxPrice: "",
  };

  router.replace({ name: "app.properties", query: {} });

  setTimeout(() => {
    isRefreshing.value = false;
  }, 2000);

  searchProperty();
};


onMounted(() => searchProperty());
</script>

<style scoped>
.rotate-animation {
  animation: spin 1s linear;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
>>>>>>> 0f7e2fa935e561328ddc9469d19e3005db470ff0
