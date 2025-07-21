<template>
	<div class="agent-list-wrap">
		<div class="d-flex">
			<div class="agent-list-image">
			<RouterLink :to="{ name: 'demo01.agent-details', params: { agentUsername: agent.username } }">
			<img
				class="img-fluid"
				:src="imgSrc"
				alt="Agent"
				@error="onImageError"
			/>
			</RouterLink>
			</div><!-- agent-list-image -->
			<div class="agent-list-content flex-grow-1">
				<div class="d-flex xxs-column">
					<h2>
						<span v-if="agent.is_verified" class="badge badge-success agent-verified-badge mr-2"><i class="houzez-icon icon-check-circle-1 mr-1"></i> Verified</span> 
						<RouterLink :to="{ name: 'demo01.agent-details', params: { agentUsername: agent.username } }">
							{{ agent.name }}
						</RouterLink>
					</h2>
					<!-- <?php include 'inc/property/templates/rating.php';?> -->
					 <!-- <OverallRating /> -->
					  <OverallRating :value="agent.average_rating" />
				</div><!-- d-flex -->
				<p class="agent-list-position"> {{ agent.position || null }} <a
						href="#"><!--  Modern House Real Estate --></a></p>
				<ul class="agent-list-contact list-unstyled">
					<li><strong>{{ $t('Office') }}</strong> <span class="agent-phone agent-phone-hidden">{{ agent.phone || null
							}}</span></li>
					<li><strong>{{ $t('Mobile') }}</strong> <span class="agent-phone agent-phone-hidden">{{ agent.mobile || null
							}}</span></li>
					<li><strong>{{ $t('Fax') }}</strong> <span>{{ agent.fax_number || null }}</span></li>
					<li><strong>{{ $t('Email') }}</strong> <a href="tel:#">{{ agent?.email || null }}</a></li>
				</ul><!-- agent-list-contact -->
				<div class="d-flex sm-column">
					<div class="agent-social-media flex-grow-1 d-flex mt-4">
						<span v-if="agent.facebook">
							<a class="btn-facebook" target="_blank" :href="agent.facebook">
								<i class="houzez-icon icon-social-media-facebook mr-2"></i>
							</a>
						</span>
						<span v-if="agent.instagram">
							<a class="btn-instagram" target="_blank" :href="agent.instagram">
								<i class="houzez-icon icon-social-instagram mr-2"></i>
							</a>
						</span>
						<span v-if="agent.twitter">
							<a class="btn-twitter" target="_blank" :href="agent.twitter">
								<i class="houzez-icon icon-x-logo-twitter-logo-2 mr-2"></i>
							</a>
						</span>
						<span v-if="agent.linkedin">
							<a class="btn-linkedin" target="_blank" :href="agent.linkedin">
								<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
							</a>
						</span>
						<span v-if="agent.google_plus">
							<a class="btn-googleplus" target="_blank" :href="agent.google_plus">
								<i class="houzez-icon icon-social-media-google-plus-1 mr-2"></i>
							</a>
						</span>
						<span v-if="agent.youtube">
							<a class="btn-youtube" target="_blank" :href="agent.youtube">
								<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
							</a>
						</span>
						<span v-if="agent.pinterest">
							<a class="btn-pinterest" target="_blank" :href="agent.pinterest">
								<i class="houzez-icon icon-social-pinterest mr-2"></i>
							</a>
						</span>
						<span v-if="agent.vimeo">
							<a class="btn-vimeo" target="_blank" :href="agent.vimeo">
								<i class="houzez-icon icon-social-video-vimeo mr-2"></i>
							</a>
						</span>
						<span v-if="agent.skype">
							<a class="btn-skype" target="_blank" :href="agent.skype">
								<i class="houzez-icon icon-skype-5 mr-2"></i>
							</a>
						</span>
					</div><!-- agent-social-media -->
					<RouterLink :to="{ name: 'demo01.agent-details', params: { agentUsername: agent.username } }"
						class="agent-list-link mt-3"><strong>{{ $t('View My Listings') }}</strong></RouterLink>
				</div><!-- d-flex -->
			</div><!-- agent-list-content -->
		</div><!-- d-flex -->
	</div><!-- agent-list-wrap -->
</template>

<script setup>
import { ref, watch } from 'vue';
import defaultAvatar from '@/assets/img/fb-avatar.png'; // ✅ Relative path for Vite/Webpack
import OverallRating from '../property-details/property/template/OverallRating.vue';

const props = defineProps({
  agent: {
    type: Object,
    required: true,
  }
});

// Reactive image source
const imgSrc = ref(props.agent.profile || defaultAvatar);

// Fallback on image error
const onImageError = () => {
  imgSrc.value = defaultAvatar;
};

// Watch for prop changes (if agent is reactive)
watch(
  () => props.agent.profile,
  (newVal) => {
    imgSrc.value = newVal || defaultAvatar;
  }
);

</script>
