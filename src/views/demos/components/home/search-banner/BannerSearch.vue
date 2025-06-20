<template>
    <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist" style="margin-top: 65px;">
        <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">All Status</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">For Rent</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                aria-controls="pills-profile" aria-selected="false">For Sale</a>
        </li>
    </ul><!-- nav -->
    <div class="advanced-search-banner-wrap">
        <div class="d-flex flex-sm-max-column">
            <div class="flex-grow-1 flex-search">
                <div class="form-group">
                    <div class="search-icon">
                        <input type="text" class="form-control" placeholder="Search" v-model="formData.search" />
                    </div><!-- search-icon -->
                </div><!-- form-group -->
            </div><!-- flex-search -->
            <div class="flex-search">
                <button @click.prevent="searchProperty" :disabled="btnLoading"
                    class="btn btn-search btn-secondary btn-full-width">
                    {{ btnLoading ? 'Searching...' : 'Search' }}
                </button>
            </div><!-- flex-search -->
        </div><!-- d-flex -->
        <div class="d-flex flex-sm-max-column">
            <div class="flex-search flex-sm-max-column">
                <div class="form-group">
                    <select id="city-select" v-model="formData.city" class="selectpicker form-control" title="Cities" multiple data-actions-box="true">
                        <option v-for="city in cities" :key="city.id" :value="city.name">{{ city.name }}</option>
                    </select>
                </div>
            </div><!-- flex-search -->
            <div class="flex-search">
                <div class="form-group">
                    <select id="types-select" v-model="formData.types" class="selectpicker form-control" title="Type" multiple data-actions-box="true">
                        <option v-for="type in types" :key="type.id" :value="type.name">{{ type.name }}</option>
                    </select>
                </div>
            </div><!-- flex-search -->
            <div class="flex-search">
                <div class="form-group">
                   <select v-model="formData.bedrooms" class="selectpicker form-control" title="Max. Bedrooms">
                        <option v-for="bedroom in bedrooms" :key="bedroom.id" :value="bedroom.name">{{ bedroom.name }}</option>
                    </select>
                </div>
            </div><!-- flex-search -->
            <div class="flex-search">
                <div class="form-group">
                    <select v-model="formData.maxPrice" class="selectpicker form-control" title="Max. Price">
                        <option v-for="price in prices" :key="price.id" :value="price.name">{{ price.name === 'Any' ? 'Any' : formatPrice(price.name) }}</option>
                    </select>

                </div>
            </div><!-- flex-search -->
        </div><!-- d-flex -->
    </div><!-- search-banner-wrap -->
</template>

<script>
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppPropertyDemo01, useNotification, useType, useCity, useBedroom, usePrice } from '@/stores/index.js';
import $ from 'jquery';

export default {
  name: 'BannerSearch',
  setup() {
    const btnLoading = ref(false);
    const router = useRouter();
    const propertyToRefs = useAppPropertyDemo01();

    const formData = ref({
      search: "",
      types: [],
      cities: [],
      bedrooms: "",
      maxPrice: "",
    });

    const { types } = useType();
    const { cities } = useCity();
    const { bedrooms } = useBedroom();
    const { prices } = usePrice();

    const updateSelectValues = () => {
      formData.value.city = $('#city-select').val() || [];
      formData.value.types = $('#types-select').val() || [];
    };

    const formatPrice = (value) => {
      return `$${parseInt(value).toLocaleString()}`;
    };

    const searchProperty = async () => {
      btnLoading.value = true;
      updateSelectValues();

      try {
        await propertyToRefs.getSearchedAndFilteredPropertiesDemo01(formData.value);
        router.push({
          name: "demo01.search-results",
          query: {
            ...(formData.value.search && { search: formData.value.search }),
            ...(formData.value.types.length && { types: formData.value.types.join(',') }),
            ...(formData.value.city.length && { cities: formData.value.city.join(',') }),
            ...(formData.value.bedrooms && { bedrooms: formData.value.bedrooms }),
            ...(formData.value.maxPrice && { maxPrice: formData.value.maxPrice }),
          }
        });
      } catch (error) {
        useNotification().Error("Error fetching properties:", error);
      } finally {
        btnLoading.value = false;
      }
    };

    onMounted(() => {
      $.fn.selectpicker.Constructor.BootstrapVersion = '4';
      $('.selectpicker').selectpicker().on('changed.bs.select', updateSelectValues);
    });

    return {
      formData,
      searchProperty,
      btnLoading,
      types,
      cities,
      bedrooms,
      prices,
      formatPrice,
    };
  },
};

</script>