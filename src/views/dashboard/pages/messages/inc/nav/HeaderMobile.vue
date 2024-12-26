<template>
  <div class="header-mobile d-flex align-items-center">
	<div class="header-mobile-left">
		<button class="btn toggle-button-left">
			<i class="houzez-icon icon-navigation-menu"></i>
		</button><!-- toggle-button-left -->	
	</div><!-- .header-mobile-left -->
	<div class="header-mobile-center flex-grow-1">
		<LogoWhite/>
	</div>
	<div class="header-mobile-right">
		<button class="btn toggle-button-right">
			<i class="houzez-icon icon-single-neutral-circle ml-1"></i>
		</button><!-- toggle-button-right -->	
	</div><!-- .header-mobile-right -->
</div><!-- header-mobile -->
</template>
<script setup>
import LogoWhite from './LogoWhite.vue';

</script>