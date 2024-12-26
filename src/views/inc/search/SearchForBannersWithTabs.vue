<template>
<form>
	<ul class="nav nav-pills justify-content-center" role="tablist" data-toggle="buttons">
		<li class="nav-item">
			<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="pills-status" aria-selected="true">
				<input type="radio" />All Status
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" id="pills-home-tab" data-toggle="pill" href="#" role="tab" aria-controls="pills-for-rent" aria-selected="true">
				<input type="radio" />For Rent
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#" role="tab" aria-controls="pills-for-sale" aria-selected="false">
				<input type="radio" />For Sale
			</a>
		</li>
	</ul>
	<SearchForBanners/>
</form>
</template>

<script setup>
import SearchForBanners from './SearchForBanners.vue';
</script>