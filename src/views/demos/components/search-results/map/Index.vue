<template>
	<div class="map-wrap">
		<iframe
			:src="mapUrl"
			width="100%"
			height="450"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		>
		</iframe>
	</div>
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

const address = ref(`${props.property.latitude},${props.property.longitude}`);

const mapUrl = ref(`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.8354345093707!2d${address.value.split(',')[1]}!3d${address.value.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1645488305008`);
</script>

