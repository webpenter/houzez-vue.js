<template>  
    <div class="partner-item">
	<a href="#">
		<img :src="team.image" :alt="team.name || 'logo'" />
	</a>
</div><!-- partner-item -->
</template>

<script setup>
const props = defineProps({
  team: {
    type: Object,
    required: true
  }
});
</script>