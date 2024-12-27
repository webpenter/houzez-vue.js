<template>
    <DashboardHeader heading="Favorite Properties">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    You don't have any favorite properties yet!
                </div><!-- dashboard-content-block -->
                <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Address</th>
                            <!-- <th>ID</th> -->
                            <th>Type</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Featured</th>
                            <!-- <th>Posted</th>
                                <th>Expire</th> -->
                            <th class="action-col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />
                        <PropertyFavoriteTableItem />

                    </tbody>
                </table><!-- dashboard-table -->
                <Pagination />

            </div><!-- dashboard-content-block-wrap -->
        </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import PropertyFavoriteTableItem from '@/views/inc/dashboard/property/PropertyFavoriteTableItem.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';

</script>