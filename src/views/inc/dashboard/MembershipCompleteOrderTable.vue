<template>
<div class="membership-package-order-detail-wrap">
    <div class="dashboard-content-block">
        <h3>Membership Package</h3>
        <div class="membership-package-order-detail">

            <ul class="list-unstyled mebership-list-info">
                <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> Package <strong>Premium</strong></li>
                <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> Price <strong>$39.00</strong></li>
                <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> Time Period <strong>3 Months</strong></li>
                <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> Number of Listings <strong>20</strong></li>
                <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> Number of Images <strong>20</strong></li>
                <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> Taxes <strong>10%</strong></li>
                <li class="total-price">Total Price <strong>$42.90</strong></li>
            </ul>
        </div><!-- membership-package-order-detail -->    
    </div>
    <div class="text-center">
        <RouterLink :to="{name:'dashboard.create-listing.select-package'}">
            Change Package
        </RouterLink>
    </div>
</div><!-- membership-package-order-detail-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
