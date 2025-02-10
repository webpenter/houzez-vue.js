<template>
    <DashboardHeader heading="My Properties">
        <CreateListingBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <template v-if="dashboardProperties.length < 0">
                      <NoProperty />
                    </template>
                    <template v-else>
                      <div class="dashboard-property-search-wrap">
                        <div class="d-flex">
                          <div class="flex-grow-1">
                            <div class="dashboard-property-search">
                              <PropertySearch/>
                            </div>
                          </div>
                          <div class="dashboard-property-sort-by">
                            <ListingSortBy/>
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
                                <!--                            <span class="label property-payment-status">Paid</span>-->
                                <a href="#"><img :src="property.thumbnail" width="100px"></a>
                              </div><!-- table-property-thumb -->
                            </td>
                            <td class="property-table-address" data-label="Address">
                              <a href="#"><strong>{{ property.title }}</strong></a><br>
                              {{ $filters.subStr(property.address,0,40) }}<br>
<!--                              <strong>Expiration:</strong> June 9, 2019 - 6:46 pm-->
                            </td>
                            <td>
                              <!--                          <span class="badge badge-warning">Pending</span>-->
                            </td>
                            <!-- <td class="property-table-id" data-label="ID">HZ-001</td> -->
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
                                  <a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
                                  <a class="dropdown-item" href="#">Duplicate</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </template>
                      </Table>
                    </template>
                    <!-- <?php include 'inc/listing/pagination.php';?> -->
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
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";

const propertyToRefs = useProperty();
const {dashboardProperties} = storeToRefs(propertyToRefs);
const loading = ref(false);

const getProperties = async () => {
  loading.value = true;
  try {
    const res = await propertyToRefs.getUserProperties();

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

onMounted(() => {
  getProperties();
});
</script>