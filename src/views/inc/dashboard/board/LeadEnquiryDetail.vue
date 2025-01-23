<template>
    <div class="lead-detail-wrap">
	<h2>Enquiry Detail</h2>
	<a class="label primary-label edit-lead-detail open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewDeal">Edit</a>
	<!-- Modal -->
    <AddNewDealPanel v-if="isModelVisibleAddNewDeal" @close="toggleModalAddNewDeal" />
	<ul class="list-unstyled mb-5">
		<li>
			<strong>Contact</strong><br>
			<a href="#"><strong>Martin Moore</strong></a>
		</li>
		<li>
			<strong>Enquiry Type</strong><br>
			Buy
		</li>
		<li>
			<strong>Property Type</strong><br>
			Apartment
		</li>
		<li>
			<strong>Price</strong><br>
			$300,000
		</li>
		<li>
			<strong>Bedrooms</strong><br>
			3
		</li>
		<li>
			<strong>Bathrooms</strong><br>
			2
		</li>
		<li>
			<strong>Area</strong><br>
			2
		</li>
		<li>
			<strong>Lot Area</strong><br>
			2
		</li>
		<li>
			<strong>Location</strong><br>
			Miami, FL
		</li>
		<li>
			<strong>Message</strong><br>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat.
		</li>
	</ul>
	
</div><!-- lead-detail-wrap -->
</template>
<script setup>
import { computed } from 'vue';
import { useModelStore } from '@/stores';
import AddNewDealPanel from './AddNewDealPanel.vue';

const modalStore = useModelStore(); 
// Compute modal visibility from Vuex store
const isModelVisibleAddNewDeal = computed(() => modalStore.isModalVisibleAddNewDeal);


// Action to toggle modal visibility
const toggleModalAddNewDeal = () => {
    modalStore.toggleModalAddNewDeal();
};
</script>