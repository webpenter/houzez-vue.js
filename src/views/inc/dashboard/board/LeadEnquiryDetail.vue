<template>
    <div class="lead-detail-wrap">
	<h2>{{$t('Enquiry Detail')}}</h2>
	<a class="label primary-label edit-lead-detail open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewDeal">Edit</a>
	<!-- Modal -->
    <AddNewDealPanel v-if="isModelVisibleAddNewDeal" @close="toggleModalAddNewDeal" />
	<ul class="list-unstyled mb-5">
		<li>
			<strong>{{$t('Contact')}}</strong><br>
			<a href="#"><strong>{{$t('Martin Moore')}}</strong></a>
		</li>
		<li>
			<strong>{{$t('Enquiry Type')}}</strong><br>
			{{$t('Buy')}}
		</li>
		<li>
			<strong>{{$t('Property Type')}}</strong><br>
			{{$t('Apartment')}}
		</li>
		<li>
			<strong>{{$t('Price')}}</strong><br>
			$300,000
		</li>
		<li>
			<strong>{{$t('Bedrooms')}}</strong><br>
			3
		</li>
		<li>
			<strong>{{$t('Bathrooms')}}</strong><br>
			2
		</li>
		<li>
			<strong>{{$t('Area')}}</strong><br>
			2
		</li>
		<li>
			<strong>{{$t('Lot Area')}}</strong><br>
			2
		</li>
		<li>
			<strong>{{$t('Location')}}</strong><br>
			{{$t('Miami, FL')}}
		</li>
		<li>
			<strong>{{$t('Message')}}</strong><br>
			{{ $t('Lorem') }}
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