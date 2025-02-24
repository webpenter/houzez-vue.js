<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="menu-edit-property-wrap">
    <div class="menu-title">
        Menu 
    </div><!-- menu-title -->
    <ul class="menu-edit-property list-unstyled">
        <!-- <li>
            <a class="menu-edit-property-link active" href="dashboard-agent-edit-property-statistics.php">
                <i class="houzez-icon icon-arrow-right-1"></i> Statistic
            </a>
        </li> -->
        <li>
            <RouterLink class="menu-edit-property-link active" to="/dashboard/edit-property/step-1">
                <i class="houzez-icon icon-arrow-right-1"></i> Description and Price
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-2">
                <i class="houzez-icon icon-arrow-right-1"></i> Details
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-3">
                <i class="houzez-icon icon-arrow-right-1"></i> Features
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-4">
                <i class="houzez-icon icon-arrow-right-1"></i> Energy Class
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-5">
                <i class="houzez-icon icon-arrow-right-1"></i> Location
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-6">
                <i class="houzez-icon icon-arrow-right-1"></i> Media
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-7">
                <i class="houzez-icon icon-arrow-right-1"></i> 360 Virtual tour
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-8">
                <i class="houzez-icon icon-arrow-right-1"></i> Floor Plans
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-9">
                <i class="houzez-icon icon-arrow-right-1"></i> Sub Properties
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-10">
                <i class="houzez-icon icon-arrow-right-1"></i> Contact Information
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="#">
                <i class="houzez-icon icon-arrow-right-1"></i> Calendar
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-12">
                <i class="houzez-icon icon-arrow-right-1"></i> Attachments
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-13">
                <i class="houzez-icon icon-arrow-right-1"></i> Private Notes
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="/dashboard/edit-property/step-14">
                <i class="houzez-icon icon-arrow-right-1"></i> Settings
            </RouterLink>
        </li>
    </ul>
</div><!-- menu-edit-property-wrap -->
</template>