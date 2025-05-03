<template>
    <nav class="logged-in-nav-wrap navi-login-register slideout-menu slideout-menu-right" id="navi-user">
      <div class="d-flex align-items-center justify-content-end gap-3">
        
        <!-- Phone Number -->
        <span class="btn-phone-number d-flex align-items-center me-3">
        <a :href="`tel:${profile.mobile}`" class="text-decoration-none d-flex align-items-center">
          <i class="houzez-icon icon-phone-actions-ring me-1 mr-2"></i> {{ profile.mobile }}
        </a>
        </span>
  
        <!-- Create Listing Button -->
        <RouterLink class="btn btn-create-listing hidden-xs hidden-sm me-3" :to="{name:'dashboard'}">
          Create a Listing
        </RouterLink>
  
        <!-- Profile Avatar Dropdown -->
        <div class="navbar-logged-in-wrap navbar dropdown">
          <a href="#" class="dropdown-toggle d-flex align-items-center" data-toggle="dropdown">
            <img
                width="42"
                height="42"
                alt="author"
                :src="profilePicture || 'https://placehold.co/42'"
                class="rounded-circle"
              />
          </a>
          <ul class="logged-in-nav dropdown-menu dropdown-menu-end">
            <li><a href="crm.php"><i class="houzez-icon icon-layout-dashboard me-2"></i>Board</a></li>
            <li><a href="dashboard-agent-all-properties.php"><i class="houzez-icon icon-building-cloudy me-2"></i>Properties</a></li>
            <li><a href="dashboard-agent-add-new-property-get-package.php"><i class="houzez-icon icon-add-circle me-2"></i>Create a Listing</a></li>
            <li><a href="dashboard-agent-favorite-properties.php"><i class="houzez-icon icon-love-it me-2"></i>Favourites</a></li>
            <li><a href="dashboard-agent-saved-searches.php"><i class="houzez-icon icon-search me-2"></i>Saved Searches</a></li>
            <li><a href="dashboard-agent-messages.php"><i class="houzez-icon icon-messages-bubble me-2"></i>Messages</a></li>
            <li><a href="dashboard-agent-membership.php"><i class="houzez-icon icon-task-list-text-1 me-2"></i>Membership</a></li>
            <li><a href="dashboard-agent-invoices.php"><i class="houzez-icon icon-accounting-document me-2"></i>Invoices</a></li>
            <li><a href="dashboard-agent-my-profile.php"><i class="houzez-icon icon-single-neutral-circle me-2"></i>My Profile</a></li>
            <li><a href="#"><i class="houzez-icon icon-lock-5 me-2"></i>Log Out</a></li>
          </ul>
        </div>
  
      </div>
    </nav>
  </template>
  
  <script setup>
 import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProfile } from "@/stores/index.js";
import { RouterLink } from "vue-router";

// Initialize store
const profileStore = useProfile();
const { profile, profilePicture } = storeToRefs(profileStore);

// Fetch profile data
onMounted(async () => {
  await profileStore.getProfileInfo();
  await profileStore.getProfilePicture();
});
</script>

  