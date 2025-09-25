<template>
	<div class="agent-list-wrap">
		<div class="d-flex">
			<div class="agent-list-image">
				<RouterLink v-if="type === 'agent'"
					:to="{ name: 'demo01.agent-details', params: { agentUsername: data.username } }">
					<img class="img-fluid" :src="imgSrc" alt="Agent" @error="onImageError" />
				</RouterLink>

				<RouterLink v-else :to="{ name: 'demo01.agency-details', params: { agencyUsername: data.username } }">
					<img class="img-fluid" :src="imgSrc" alt="Agency" @error="onImageError" />
				</RouterLink>
			</div>

			<div class="agent-list-content flex-grow-1">
				<div class="d-flex xxs-column">
					<h2 class="d-flex">
						<span v-if="type === 'agent' && data.is_verified"
							class="badge badge-success agent-verified-badge mr-2 pt-2 d-flex">
							<i class="houzez-icon icon-check-circle-1 mr-1"></i> {{ $t('Verified') }}
						</span>
						<span v-else class="badge badge-success agent-verified-badge mr-2 pt-2 d-flex">
							<i class="houzez-icon icon-check-circle-1 mr-1"></i> {{ $t('Verified') }}
						</span>

						<RouterLink :to="type === 'agent'
							? { name: 'demo01.agent-details', params: { agentUsername: data.username } }
							: { name: 'demo01.agency-details', params: { agencyUsername: data.username } }">
							{{ data.name }}
						</RouterLink>
					</h2>

					<!-- <OverallRating :value="data.average_rating" /> -->
				</div>

				<p v-if="type === 'agent' && data.position" class="agent-list-position">
					{{ data.position }}
					<span v-if="data.agencies?.[0]?.agency_name">
						{{ $t('at') }} 
						<RouterLink style="color: #00aeff;"
							:to="{
								name: 'demo01.agency-details',
								params: { agencyUsername: data.agencies[0].username }
							}"
							>
							{{ data.agencies[0].agency_name }}
						</RouterLink>
					</span>
				</p>
				<p v-else-if="data.address" class="agent-list-position">
					<i class="houzez-icon icon-pin"></i>
					{{ data.address }}
				</p>

				<ul class="agent-list-contact list-unstyled">
					<li><strong>{{ $t('Office') }}</strong> <span>{{ data.phone || null }}</span></li>
					<li><strong>{{ $t('Mobile') }}</strong> <span>{{ data.mobile || null }}</span></li>
					<li><strong>{{ $t('Fax') }}</strong> <span>{{ data.fax_number || null }}</span></li>
					<li><strong>{{ $t('Email') }}</strong> <a href="mailto:#">{{ data.email || null }}</a></li>
				</ul>

				<div class="d-flex sm-column">
					<div class="agent-social-media flex-grow-1 d-flex mt-4">
						<template v-for="(value, key) in socialLinks" :key="key">
							<span v-if="value">
								<a :class="'btn-' + key" target="_blank" :href="value">
									<i :class="iconClass(key)" class="mr-2"></i>
								</a>
							</span>
						</template>
					</div>

					<RouterLink v-if="type === 'agent'"
						:to="{ name: 'demo01.agent-details', params: { agentUsername: data.username } }"
						class="agent-list-link mt-3">
						<strong>{{ $t('View My Listings') }}</strong>
					</RouterLink>

					<RouterLink v-else
						:to="{ name: 'demo01.agency-details', params: { agencyUsername: data.username } }"
						class="agent-list-link mt-3">
						<strong>{{ $t('View Agency Listings') }}</strong>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import defaultAvatar from '@/assets/img/fb-avatar.png';

const props = defineProps({
	data: { type: Object, required: true },
	type: { type: String, default: 'agent' }, // 'agent' or 'agency'
});

// fallback image logic
const imgSrc = ref(props.data.profile || defaultAvatar);
const onImageError = () => {
	imgSrc.value = defaultAvatar;
};

watch(
	() => props.data.profile,
	(newVal) => {
		imgSrc.value = newVal || defaultAvatar;
	}
);

// social icons (agent & agency share similar keys)
const socialLinks = computed(() => ({
	facebook: props.data.facebook,
	instagram: props.data.instagram,
	twitter: props.data.twitter,
	linkedin: props.data.linkedin,
	googleplus: props.data.google_plus,
	youtube: props.data.youtube,
	pinterest: props.data.pinterest,
	vimeo: props.data.vimeo,
	skype: props.data.skype,
}));

// social icon class mapping
const iconClass = (platform) => {
	const map = {
		facebook: 'houzez-icon icon-social-media-facebook',
		instagram: 'houzez-icon icon-social-instagram',
		twitter: 'houzez-icon icon-x-logo-twitter-logo-2',
		linkedin: 'houzez-icon icon-professional-network-linkedin',
		googleplus: 'houzez-icon icon-social-media-google-plus-1',
		youtube: 'houzez-icon icon-social-video-youtube-clip',
		pinterest: 'houzez-icon icon-social-pinterest',
		vimeo: 'houzez-icon icon-social-video-vimeo',
		skype: 'houzez-icon icon-skype-5',
	};
	return map[platform] || '';
};

</script>
