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
            <RouterLink class="menu-edit-property-link active" to="/dashboard/dashboard-agent-edit-property">
                <i class="houzez-icon icon-arrow-right-1"></i> Description and Price
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="dashboard-agent-edit-property-details">
                <i class="houzez-icon icon-arrow-right-1"></i> Details
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="dashboard-agent-edit-property-features">
                <i class="houzez-icon icon-arrow-right-1"></i> Features
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="dashboard-agent-edit-property-energy-class">
                <i class="houzez-icon icon-arrow-right-1"></i> Energy Class
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="dashboard-agent-edit-property-location">
                <i class="houzez-icon icon-arrow-right-1"></i> Location
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="dashboard-agent-edit-property-media">
                <i class="houzez-icon icon-arrow-right-1"></i> Media
            </RouterLink>
        </li>
        <li>
            <RouterLink class="menu-edit-property-link" to="dashboard-agent-edit-property-360-virtual-tour">
                <i class="houzez-icon icon-arrow-right-1"></i> 360 Virtual tour
            </RouterLink>
        </li>
        <li>
            <a class="menu-edit-property-link" href="dashboard-agent-edit-property-floor-plans.php">
                <i class="houzez-icon icon-arrow-right-1"></i> Floor Plans
            </a>
        </li>
        <li>
            <a class="menu-edit-property-link" href="dashboard-agent-edit-property-sub-properties.php">
                <i class="houzez-icon icon-arrow-right-1"></i> Sub Properties
            </a>
        </li>
        <li>
            <a class="menu-edit-property-link" href="dashboard-agent-edit-property-contact-information.php">
                <i class="houzez-icon icon-arrow-right-1"></i> Contact Information
            </a>
        </li>
        <li>
            <a class="menu-edit-property-link" href="#">
                <i class="houzez-icon icon-arrow-right-1"></i> Calendar
            </a>
        </li>
        <li>
            <a class="menu-edit-property-link" href="dashboard-agent-edit-property-attachments.php">
                <i class="houzez-icon icon-arrow-right-1"></i> Attachments
            </a>
        </li>
        <li>
            <a class="menu-edit-property-link" href="dashboard-agent-edit-property-private-note.php">
                <i class="houzez-icon icon-arrow-right-1"></i> Private Notes
            </a>
        </li>
        <li>
            <a class="menu-edit-property-link" href="dashboard-agent-edit-property-settings.php">
                <i class="houzez-icon icon-arrow-right-1"></i> Settings
            </a>
        </li>
    </ul>
</div><!-- menu-edit-property-wrap -->
</template>