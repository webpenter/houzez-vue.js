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
					<a href="#">Log out</a>
				</div>	
			</div><!-- d-flex -->
		</div><!-- logged-in-wrap -->		
	</div><!-- widget-body -->
</div><!-- widget-about-site -->
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProfile, useToken } from "@/stores/index.js";

// ✅ Use storeToRefs to make it reactive
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
</script>