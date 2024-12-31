<template>
<table class="dashboard-table table-lined responsive-table">
    <thead>
        <tr>
            <th class="table-nowrap">Package</th>
            <th class="table-nowrap">Price</th>
            <th class="table-nowrap">Time Period</th>
            <th class="table-nowrap">Number of Listings</th>
            <th class="table-nowrap">Featured Listings</th>
            <th class="table-nowrap">Number of Images</th>
            <th class="table-nowrap action-col">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Package"><i class="houzez-icon icon-check-circle-1 mr-2 ml-2 primary-text"></i> <strong>Free Trial</strong></td>
            <td data-label="Price"><strong>$0.00</strong></td>
            <td data-label="Time Period">7 Days</td>
            <td data-label="Listings">1</td>
            <td data-label="Featured Listings">0</td>
            <td data-label="Images">5</td>
            <td data-label="Actions">
                <RouterLink :to="{name:'dashboard.create-listing.complete-order'}" class="btn btn-primary">
                    Select
                </RouterLink>
            </td>
        </tr>
        <tr>
            <td data-label="Package"><i class="houzez-icon icon-check-circle-1 mr-2 ml-2 primary-text"></i> <strong>Standard</strong></td>
            <td data-label="Price"><strong>$19.00</strong></td>
            <td data-label="Time Period">7 Days</td>
            <td data-label="Listings">10</td>
            <td data-label="Featured Listings">3</td>
            <td data-label="Images">10</td>
            <td data-label="Actions">
                <RouterLink :to="{name:'dashboard.create-listing.complete-order'}" class="btn btn-primary">
                    Select
                </RouterLink>
            </td>
        </tr>
        <tr>
            <td data-label="Package"><i class="houzez-icon icon-check-circle-1 mr-2 ml-2 primary-text"></i> <strong>Premium</strong></td>
            <td data-label="Price"><strong>$39.00</strong></td>
            <td data-label="Time Period">3 Months</td>
            <td data-label="Listings">50</td>
            <td data-label="Featured Listings">20</td>
            <td data-label="Images">20</td>
            <td data-label="Actions">
                <RouterLink :to="{name:'dashboard.create-listing.complete-order'}" class="btn btn-primary">
                    Select
                </RouterLink>
            </td>
        </tr>
        <tr>
            <td data-label="Package"><i class="houzez-icon icon-check-circle-1 mr-2 ml-2 primary-text"></i> <strong>Enterprice</strong></td>
            <td data-label="Price"><strong>$59.00</strong></td>
            <td data-label="Time Period">1 Year</td>
            <td data-label="Listings">Unlimited</td>
            <td data-label="Featured Listings">70</td>
            <td data-label="Images">Unlimited</td>
            <td data-label="Actions">
                <RouterLink :to="{name:'dashboard.create-listing.complete-order'}" class="btn btn-primary">
                    Select
                </RouterLink>
            </td>
        </tr>
    </tbody>   
    </table><!-- dashboard-table -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
