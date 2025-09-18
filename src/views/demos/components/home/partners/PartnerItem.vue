<template>  
    <div class="partner-item">
	<!-- <a href=""> -->
		<img :src="partner.image" alt="partner image" />
	<!-- </a> -->
</div><!-- partner-item -->
</template>

<script setup>
const props = defineProps({
  partner: {
    type: Object,
    required: true
  }
});
</script>