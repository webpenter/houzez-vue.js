<template>
  <nav class="logged-in-nav-wrap navi-login-register slideout-menu slideout-menu-right" id="navi-user">
    <div class="d-flex align-items-center justify-content-end gap-3">
      
      <!-- Phone Number (only if logged in) -->
      <span v-if="token" class="btn-phone-number d-flex align-items-center me-3">
        <a :href="`tel:${profile.mobile}`" class="text-decoration-none d-flex align-items-center">
          <i class="houzez-icon icon-phone-actions-ring me-1 mr-2"></i> {{ profile.mobile }}
        </a>
      </span>

      <!-- Create Listing Button (optional: protect this as well) -->
      <RouterLink class="btn btn-create-listing hidden-xs hidden-sm me-3" :to="{ name: 'dashboard' }">
        Create a Listing
      </RouterLink>

      <!-- Profile Section -->
      <div class="navbar-logged-in-wrap navbar dropdown">
        <a href="#" class="dropdown-toggle d-flex align-items-center" data-toggle="dropdown">
          <img
            v-if="token"
            width="42"
            height="42"
            alt="author"
            :src="profilePicture || 'https://placehold.co/42'"
            class="rounded-circle"
          />
          <i v-else class="houzez-icon icon-single-neutral-circle fs-3"></i>
        </a>

        <!-- Dropdown only for logged in users -->
        <ul v-if="token" class="logged-in-nav dropdown-menu dropdown-menu-end">
          <li><router-link :to="{name:'dashboard.crm'}"><i class="houzez-icon icon-layout-dashboard me-2"></i>Board</router-link></li>
          <li><router-link :to="{name:'dashboard.my-properties'}"><i class="houzez-icon icon-building-cloudy me-2"></i>Properties</router-link></li>
          <li><router-link :to="{name:'dashboard.create-listing.step-1'}"><i class="houzez-icon icon-add-circle me-2"></i>Create Listing</router-link></li>
          <li><router-link :to="{name:'dashboard.favorite-properties'}"><i class="houzez-icon icon-love-it me-2"></i>Favourites</router-link></li>
          <li><router-link :to="{name:'dashboard.saved-searches'}"><i class="houzez-icon icon-search me-2"></i>Saved Searches</router-link></li>
          <li><router-link :to="{name:'dashboard.messages'}"><i class="houzez-icon icon-messages-bubble me-2"></i>Messages</router-link></li>
          <li><router-link :to="{name:'dashboard.subscriptions'}"><i class="houzez-icon icon-task-list-text-1 me-2"></i>Membership</router-link></li>
          <li><router-link :to="{name:'dashboard.invoices'}"><i class="houzez-icon icon-accounting-document me-2"></i>Invoices</router-link></li>
          <li><router-link :to="{name:'dashboard.my-profile'}"><i class="houzez-icon icon-single-neutral-circle me-2"></i>My Profile</router-link></li>
          <li><a href="javascript:void(0)" @click.prevent="$filters.logout()"><i class="houzez-icon icon-lock-5 me-2"></i>Log Out</a></li>
        </ul>
      </div>

    </div>
  </nav>
</template>

  
<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProfile,useToken } from "@/stores/index.js";
import { RouterLink } from "vue-router";

// Token check
const {token} = useToken();

// Initialize store
const profileStore = useProfile();
const { profile, profilePicture } = storeToRefs(profileStore);

// Fetch profile data only if token exists
onMounted(async () => {
  if (token) {
    await profileStore.getProfileInfo();
    await profileStore.getProfilePicture();
  }
});
</script>


  