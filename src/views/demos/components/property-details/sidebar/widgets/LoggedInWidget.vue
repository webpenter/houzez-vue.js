<template>
    <div class="widget widget-wrap widget-login-register">
	<div class="widget-header">
		<h3 class="widget-title">
			WELL COME
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
		<div class="logged-in-wrap">
			<div class="d-flex align-items-center">
				<img style="height: 50px;" class="rounded-circle" :src="profilePicture || 'https://placehold.co/42'" alt="image">
				<div>
					{{ profile.username || 'Guest' }}
					<br>
					{{ profile.email || 'Guest Email' }}
					<br>
					<a role="button" class="logout-link" @click.prevent="handleLogout">Log out</a>
				</div>	
			</div><!-- d-flex -->
		</div><!-- logged-in-wrap -->		
	</div><!-- widget-body -->
</div><!-- widget-about-site -->
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useProfile, useToken, useAuth } from "@/stores/index.js";

// Router for redirect
const router = useRouter();

// Auth store
const auth = useAuth();

// Token store
const tokenStore = useToken();
const { token } = storeToRefs(tokenStore);

// Profile store
const profileStore = useProfile();
const { profile, profilePicture } = storeToRefs(profileStore);

// Fetch profile info if token exists
onMounted(async () => {
  if (token.value) {
    await profileStore.getProfileInfo();
    await profileStore.getProfilePicture();
  }
});

// 🔑 Handle logout
const handleLogout = async () => {
  try {
    await auth.logout();
    profileStore.clearProfile(); // Optional: clear profile
    router.push('/login'); // Redirect to login
  } catch (err) {
    console.error('Logout failed:', err);
  }
};
</script>
