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
                    <select id="city-select" v-model="formData.city" class="selectpicker form-control" title="Cities"
                        multiple data-actions-box="true">
                        <option>Rahim Yar Khan</option>
                        <option>Miami</option>
                        <option>New York</option>
                        <option>San Francisco</option>
                    </select>

                </div>
            </div><!-- flex-search -->
            <div class="flex-search">
                <div class="form-group">
                    <select id="types-select" v-model="formData.types" class="selectpicker form-control" title="Type"
                        multiple data-actions-box="true">
                        <option>Office</option>
                        <option>Villa</option>
                        <option>Loft</option>
                        <option>Multi Family Home</option>
                        <option>Single Family Home</option>
                        <option>Townhouse</option>
                    </select>
                </div>
            </div><!-- flex-search -->
            <div class="flex-search">
                <div class="form-group">
                    <select v-model="formData.bedrooms" class="selectpicker form-control" title="Max. Bedrooms">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
            </div><!-- flex-search -->
            <div class="flex-search">
                <div class="form-group">
                    <select v-model="formData.maxPrice" class="selectpicker form-control" title="Max. Price">
                        <option>Any</option>
                        <option>$5,000</option>
                        <option>$10,000</option>
                        <option>$50,000</option>
                        <option>$100,000</option>
                        <option>$200,000</option>
                        <option>$300,000</option>
                        <option>$400,000</option>
                        <option>$500,000</option>
                    </select>

                </div>
            </div><!-- flex-search -->
        </div><!-- d-flex -->
    </div><!-- search-banner-wrap -->
</template>

<script>
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import $ from 'jquery';
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAppProperty, useNotification } from "@/stores/index.js";

export default {
    name: 'BannerSearch',
    setup() {
        const btnLoading = ref(false);
        const router = useRouter();
        const propertyToRefs = useAppProperty();

        const formData = ref({
            search: "",
            types: [],
            city: [],
            bedrooms: "",
            maxPrice: "",
        });

        const updateSelectValues = () => {
            formData.value.city = $('#city-select').val() || [];
            formData.value.types = $('#types-select').val() || [];
        };

        const searchProperty = async () => {
            btnLoading.value = true;
            updateSelectValues(); // sync latest multiselect values

            const hasAnyFilter =
                formData.value.search ||
                formData.value.types.length > 0 ||
                formData.value.city.length > 0 ||
                formData.value.bedrooms ||
                (formData.value.maxPrice && formData.value.maxPrice !== "Any");

            try {
                if (hasAnyFilter) {
                    await propertyToRefs.getSearchedAndFilteredProperties(formData.value);
                }

                router.push({
                    name: "demo01.search-results",
                    query: {
                        ...(formData.value.search && { search: formData.value.search }),
                        ...(formData.value.types.length && { types: formData.value.types.join(",") }),
                        ...(formData.value.city.length && { city: formData.value.city.join(",") }),
                        ...(formData.value.bedrooms && { bedrooms: formData.value.bedrooms }),
                        ...(formData.value.maxPrice && formData.value.maxPrice !== "Any" && {
                            maxPrice: formData.value.maxPrice.replace(/\D/g, ""),
                        }),
                    }
                });


            } catch (error) {
                useNotification().Error("Error fetching properties:", error);
            } finally {
                btnLoading.value = false;
            }
        };

        onMounted(() => {
            $('.selectpicker').selectpicker().on('changed.bs.select', updateSelectValues);
        });

        return {
            formData,
            searchProperty,
            btnLoading,
        };
    },
};
</script>