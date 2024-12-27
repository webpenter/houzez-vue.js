<template>
    <DashboardHeader heading="Saved Searches">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>

        <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        You don't have any saved search.
                    </div><!-- dashboard-content-block -->
                    <table class="dashboard-table table-lined responsive-table">
                        <thead>
                            <tr>
                                <th>Search Parameters</th>
                                <th class="action-col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Search Parameters">
                                    <strong>Countries:</strong> United States, Argentina, Spain /
                                    <strong>States:</strong> Illinois, Florida /
                                    <strong>Cities:</strong> Los Angeles, Miami, New York /
                                    <strong>Areas:</strong> Brickel, Midtown /
                                    <strong>Status:</strong> For Sale /
                                    <strong>Types:</strong> Apartment, Condo /
                                    <strong>Labels:</strong> Hot Offer, Open House /
                                    <strong>Property ID:</strong> HZ-001, HZ-002 /
                                    <strong>Bedrooms:</strong> 2,3,4 /
                                    <strong>Bathrooms:</strong> 2,3,4 /
                                    <strong>Min Area (Sq Ft):</strong> 1,200 /
                                    <strong>Max Area (Sq Ft):</strong> 3,400 /
                                    <strong>Min Price:</strong> $1,200 /
                                    <strong>Max Price:</strong> $3,400 /
                                </td>
                                <td class="property-table-actions" data-label="Actions">
                                    <div class="dropdown property-action-menu">
                                        <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Actions
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">View</a>
                                            <a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
                                        </div>
                                    </div>
                                </td>    
                            </tr>

                            <tr>
                                <td data-label="Search Parameters">
                                    <strong>Countries:</strong> United States, Argentina, Spain /
                                    <strong>States:</strong> Illinois, Florida, /
                                    <strong>Cities:</strong> Los Angeles, Miami, New York /
                                    <strong>Areas:</strong> Brickel, Midtown /
                                    <strong>Status:</strong> For Sale /
                                    <strong>Types:</strong> Apartment, Condo /
                                    <strong>Labels:</strong> Hot Offer, Open House /
                                    <strong>Property ID:</strong> HZ-001, HZ-002 /
                                    <strong>Bedrooms:</strong> 2,3,4 /
                                    <strong>Bathrooms:</strong> 2,3,4 /
                                </td>
                                <td class="property-table-actions" data-label="Actions">
                                    <div class="dropdown property-action-menu">
                                        <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Actions
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">View</a>
                                            <a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
                                        </div>
                                    </div>
                                </td>    
                            </tr>
                        </tbody>
                    </table><!-- dashboard-table -->
                    <Pagination />
                    
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
        <section class="dashboard-side-wrap">
            
            <SideWrap />
            
        </section>
   

</template>

<script setup>
import SideWrap from '@/views/inc/dashboard/SideWrap.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';

</script>