<template>
    <DashboardHeader heading="My Properties">
        <CreateListingBtn/>
    </DashboardHeader>

        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                      <div class="dashboard-property-search-wrap">
                        <div class="d-flex">
                          <div class="flex-grow-1">
                            <div class="dashboard-property-search">
                              <div class="d-flex">
                                <div class="form-group flex-grow-1">
                                  <div class="search-icon">
                                    <input type="text" v-model="searchQuery" @input="getProperties" class="form-control" placeholder="Search">
                                  </div><!-- search-icon -->
                                </div><!-- form-group -->
                                <button type="submit" class="btn btn-search btn-secondary">Search</button>
                              </div>
                            </div>
                          </div>
                          <div class="dashboard-property-sort-by">
                            <div class="sort-by">
                              <div class="d-flex align-items-center">
                                <div class="sort-by-title">
                                  Sort by:
                                </div><!-- sort-by-title -->
                                <select v-model="selectedSort" @change="getProperties" class="form-control" title="Default Order" data-live-search="false" data-dropdown-align-right="auto">
                                  <option value="default">Default Order</option>
                                  <option value="price_high_low">Price - High to Low</option>
                                  <option value="price_low_high">Price - Low to High</option>
                                  <option value="date_new_old">Date - New to Old</option>
                                  <option value="date_old_new">Date - Old to New</option>
                                </select><!-- selectpicker -->
                              </div><!-- d-flex -->
                            </div><!-- sort-by -->
                          </div>
                        </div>
                      </div><!-- dashboard-property-search -->

                      <div class="dashboard-table-property-bar-count">
                        <StatusBtn route="dashboard.my-properties.published" title="Published" count="30" />
                        <StatusBtn route="dashboard.my-properties.pending" title="pending" count="30" />
                        <StatusBtn route="dashboard.my-properties.draft" title="draft" count="30" />
                        <StatusBtn route="dashboard.my-properties.expired" title="expired" count="30" />
                        <StatusBtn route="dashboard.my-properties.hold" title="hold" count="30" />
                        <StatusBtn route="dashboard.my-properties.disapproved" title="disapproved" count="30" />
                      </div><!-- dashboard-table-property-bar-count -->
                      <Table>
                        <template v-if="loading">
                          <tr>
                            <td colspan="7">
                              <el-skeleton :rows="10" animated />
                            </td>
                          </tr>
                        </template>
                        <template v-else>
                          <tr v-for="property in dashboardProperties" :key="property.id">
                            <td class="property-table-thumbnail" data-label="Thumbnail">
                              <div class="table-property-thumb">
                                <span v-if="property.is_paid" class="label property-payment-status">Paid</span>
                                <a href="#"><img :src="property.thumbnail" width="100px"></a>
                              </div><!-- table-property-thumb -->
                            </td>
                            <td class="property-table-address" data-label="Address">
                              <a href="#"><strong>{{ property.title }}</strong></a><br>
                              {{ $filters.subStr(property.address,0,40) }}<br>
<!--                              <strong>Expiration:</strong> June 9, 2019 - 6:46 pm-->
                            </td>
                            <td>
                              <span class="badge badge-warning">{{ property.property_status }}</span>
                            </td>
                            <td class="property-table-type" data-label="Type">{{ property.type }}</td>
                            <td class="property-table-status" data-label="Status">{{ property.status }}</td>
                            <td class="property-table-price" data-label="Price">
                              <strong>{{ $filters.formatPrice(property.price) }}</strong>
                            </td>
                            <td class="property-table-actions" data-label="Actions">
                              <div class="dropdown property-action-menu">
                                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Actions
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                  <a class="dropdown-item" href="#">Publish</a>
                                  <RouterLink class="dropdown-item" :to="{
                                    name:'dashboard.create-listing.step-1',
                                    params:{propertyId:property.id}
                                  }">
                                    Edit
                                  </RouterLink>
                                  <a class="dropdown-item" @click.prevent="deleteProperty(property.id)" href="#">Delete</a>
                                  <a class="dropdown-item" @click.prevent="duplicateProperty(property.id)" href="#">Duplicate</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </template>
                      </Table>
                    <template v-if="dashboardProperties.length < 1">
                      <NoProperty />
                    </template>
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import PropertySearch from '@/views/inc/dashboard/property/PropertySearch.vue';
import PropertyTableItem from '@/views/inc/dashboard/property/PropertyTableItem.vue';
import ListingSortBy from '@/views/inc/listing/ListingSortBy.vue';
import CreateListingBtn from '../components/CreateListingBtn.vue';
import NoProperty from '../components/NoProperty.vue';
import StatusBtn from '../components/StatusBtn.vue';
import Table from '../components/Table.vue';
import {useConfirm, useMessage, useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import router from "@/router/index.js";

const propertyToRefs = useProperty();
const {dashboardProperties} = storeToRefs(propertyToRefs);
const loading = ref(false);
const searchQuery = ref('');
const selectedSort = ref('default');

const getProperties = async () => {
  loading.value = true;
  try {
    const res = await propertyToRefs.getUserProperties(searchQuery.value, selectedSort.value);

    if (res.status === 200) {
      loading.value = false;
    } else {
      loading.value = false;
      useNotification().Error("An error occur while fetching data");
    }

  } catch (error) {
    loading.value = false;
    useNotification().Error("An error occur");
  }
}

const deleteProperty = async (propertyId) => {
  useConfirm().Warning("Are you sure you want to delete this property?")
      .then(async () => {
        try {
          const response = await propertyToRefs.deleteProperty(propertyId);

          if(response.status === 200) {
            useNotification().Success("Property deleted successfully");
            getProperties();
          }
        } catch (error) {
          useNotification().Error(error);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.");
      })
}

const duplicateProperty = async (propertyId) => {
  useConfirm().Warning("Are you sure you want to duplicate this property?")
      .then(async () => {
        try {
          const response = await propertyToRefs.duplicateProperty(propertyId);

          if(response.status === 201) {
            useNotification().Success("Property duplicated successfully");
            getProperties();
          }
        } catch (error) {
          useNotification().Error(error);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.");
      })
}

onMounted(() => getProperties());
</script>