<template>
	<div class="agent-contacts-wrap">
		<h3 class="widget-title">Contacts</h3>
		<div v-if="agent.profile.address" class="agent-map">
			<address><i class="houzez-icon icon-pin"></i> {{ agent.profile.address }}
			</address>
		</div>
		<ul class="list-unstyled">
			<li v-if="agent.profile.phone"><strong>Office:</strong> <span>{{ agent.profile.phone }}</span></li>
			<li v-if="agent.profile.mobile"><strong>Mobile:</strong> <span>{{ agent.profile.mobile }}</span></li>
			<li v-if="agent.profile.fax_number"><strong>Fax:</strong> <span>{{ agent.profile.fax_number }}</span></li>
			<li v-if="agent.email"><strong>Email:</strong> <span><a href="#">{{ agent.email }}</a></span></li>
			<li v-if="agent.profile.website"><strong>Website</strong> <span><a href="#">{{ agent.profile.website }}</a></span></li>
		</ul>
		<p>Find {{ agent.name }} on:</p>
		<div class="agent-social-media d-flex">
			<span v-if="agent.profile.facebook">
				<a class="btn-facebook" target="_blank" :href=" agent.profile.facebook ">
					<i class="houzez-icon icon-social-media-facebook mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.instagram">
				<a class="btn-instagram" target="_blank" :href=" agent.profile.instagram ">
					<i class="houzez-icon icon-social-instagram mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.twitter">
				<a class="btn-twitter" target="_blank" :href=" agent.profile.twitter">
					<i class="houzez-icon icon-x-logo-twitter-logo-2 mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.linkedin">
				<a class="btn-linkedin" target="_blank" :href=" agent.profile.linkedin">
					<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.google_plus">
				<a class="btn-googleplus" target="_blank" :href=" agent.profile.google_plus ">
					<i class="houzez-icon icon-social-media-google-plus-1 mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.youtube">
				<a class="btn-youtube" target="_blank" :href=" agent.profile.youtube ">
					<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.skype">
				<a class="btn-pinterest" target="_blank" :href=" agent.profile.skype ">
					<i class="houzez-icon icon-social-skype mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.pinterest">
				<a class="btn-pinterest" target="_blank" :href=" agent.profile.pinterest ">
					<i class="houzez-icon icon-social-pinterest mr-2"></i>
				</a>
			</span>
			<span v-if="agent.profile.vimeo">
				<a class="btn-vimeo" target="_blank" :href=" agent.profile.vimeo">
					<i class="houzez-icon icon-social-video-vimeo mr-2"></i>
				</a>
			</span>
			
		</div><!-- agent-social-media -->
	</div><!-- agent-bio-wrap -->
</template>

<script setup>
defineProps({
  agent: {
    type: Object,
    required: true,
  }
})
</script>