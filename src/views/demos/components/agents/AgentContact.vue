<template>
	<div class="agent-contacts-wrap">
		<h3 class="widget-title">{{ $t('Contacts') }}</h3>
		<div v-if="agent.address" class="agent-map">
			<address><i class="houzez-icon icon-pin"></i> {{ agent.profile.address }}
			</address>
		</div>
		<ul class="list-unstyled">
			<li v-if="agent.phone"><strong>{{ $t('Office') }}:</strong> <span>{{ agent.phone }}</span></li>
			<li v-if="agent.mobile"><strong>{{ $t('Mobile') }}:</strong> <span>{{ agent.mobile }}</span></li>
			<li v-if="agent.fax_number"><strong>{{ $t('Fax') }}:</strong> <span>{{ agent.fax_number }}</span></li>
			<li v-if="agent.email"><strong>{{ $t('Email') }}:</strong> <span><a href="#">{{ agent.email }}</a></span></li>
			<li v-if="agent.website"><strong>{{ $t('Website') }}</strong> <span><a href="#">{{ agent.website }}</a></span></li>
		</ul>
		<p>{{ $t('Find') }} {{ agent.name }} {{ $t('on') }}:</p>
		<div class="agent-social-media d-flex">
			<span v-if="agent.facebook">
				<a class="btn-facebook" target="_blank" :href=" agent.facebook ">
					<i class="houzez-icon icon-social-media-facebook mr-2"></i>
				</a>
			</span>
			<span v-if="agent.instagram">
				<a class="btn-instagram" target="_blank" :href=" agent.instagram ">
					<i class="houzez-icon icon-social-instagram mr-2"></i>
				</a>
			</span>
			<span v-if="agent.twitter">
				<a class="btn-twitter" target="_blank" :href=" agent.twitter">
					<i class="houzez-icon icon-x-logo-twitter-logo-2 mr-2"></i>
				</a>
			</span>
			<span v-if="agent.linkedin">
				<a class="btn-linkedin" target="_blank" :href=" agent.linkedin">
					<i class="houzez-icon icon-professional-network-linkedin mr-2"></i>
				</a>
			</span>
			<span v-if="agent.google_plus">
				<a class="btn-googleplus" target="_blank" :href=" agent.google_plus ">
					<i class="houzez-icon icon-social-media-google-plus-1 mr-2"></i>
				</a>
			</span>
			<span v-if="agent.youtube">
				<a class="btn-youtube" target="_blank" :href=" agent.youtube ">
					<i class="houzez-icon icon-social-video-youtube-clip mr-2"></i>
				</a>
			</span>
			<span v-if="agent.skype">
				<a class="btn-pinterest" target="_blank" :href=" agent.skype ">
					<i class="houzez-icon icon-social-skype mr-2"></i>
				</a>
			</span>
			<span v-if="agent.pinterest">
				<a class="btn-pinterest" target="_blank" :href=" agent.pinterest ">
					<i class="houzez-icon icon-social-pinterest mr-2"></i>
				</a>
			</span>
			<span v-if="agent.vimeo">
				<a class="btn-vimeo" target="_blank" :href=" agent.vimeo">
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