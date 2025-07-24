<template>
	<div class="agent-contacts-wrap">
		<h3 class="widget-title">{{ $t('Contacts') }}</h3>
		<div v-if="contact.address" class="agent-map">
			<address><i class="houzez-icon icon-pin"></i> {{ contact.address }}</address>
		</div>
		<ul class="list-unstyled">
			<li v-if="contact.phone"><strong>{{ $t('Office') }}:</strong> <span>{{ contact.phone }}</span></li>
			<li v-if="contact.mobile"><strong>{{ $t('Mobile') }}:</strong> <span>{{ contact.mobile }}</span></li>
			<li v-if="contact.whatsapp"><strong>{{ $t('Whatsapp') }}:</strong> <span>{{ contact.whatsapp }}</span></li>
			<li v-if="contact.fax_number"><strong>{{ $t('Fax') }}:</strong> <span>{{ contact.fax_number }}</span></li>
			<li v-if="contact.email"><strong>{{ $t('Email') }}:</strong> <span><a href="#">{{ contact.email
						}}</a></span></li>
			<li v-if="contact.website"><strong>{{ $t('Website') }}</strong> <span><a href="#">{{ contact.website
						}}</a></span></li>
		</ul>

		<p>{{ $t('Find') }} {{ contact.name }} {{ $t('on') }}:</p>

		<div class="agent-social-media d-flex">
			<span v-if="contact.facebook">
				<a class="btn-facebook" target="_blank" :href="contact.facebook">
					<i class="houzez-icon icon-social-media-facebook mr-2"></i>
				</a>
			</span>
			<!-- repeat for other social links like instagram, twitter etc., replacing `agent` with `contact` -->
		</div>
	</div>

</template>

<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
  }
})
</script>