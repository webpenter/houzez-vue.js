<template>
    <DashboardHeader heading="Disapproved Properties">
        <CreateListingBtn/>
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <NoProperty/>
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
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                        <PropertyTableItem/>
                    </Table>
                    
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
</script>