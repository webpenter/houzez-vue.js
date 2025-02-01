<template>
    <div class="dashboard-content-block-wrap">
	<h2>Multi Units / Sub Properties</h2>
	<div class="dashboard-content-block">
		<div class="form-group">
			<label>Do you want to enable multi units / sub properties?</label>
			<select class="selectpicker form-control bs-select-hidden" title="Disable" data-live-search="false" data-selected-text-format="count"  data-actions-box="false">
				<option>Disable</option>
				<option>Enable</option>
			</select><!-- selectpicker -->
		</div><!-- form-group -->
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

<div class="dashboard-content-block-wrap">
	<h2>Add a Sub Property</h2>
	<div v-for="(sub, index) in subproperty" :key="sub.id" class="dashboard-content-block mb-4">
		<h3> Sub Property {{ index +1 }}</h3>
        <FormSubProperty />
		<!-- <?php include 'inc/dashboard/property/form-sub-property.php'; ?> -->
		<button class="btn btn-primary-outlined btn-left-icon" @click="deletesubproperty(sub.id )"><i class="houzez-icon icon-remove-circle"></i> Delete</button>
	</div>
	<div class="dashboard-content-block mt-4">
		<button class="btn btn-primary btn-left-icon" @click="addnewsubproperty"><i class="houzez-icon icon-add-circle"></i> Add New</button>
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import FormSubProperty from './FormSubProperty.vue';


// create a reactive array
const subproperty = reactive([{id: Date.now()}]);

// function to add new form
const addnewsubproperty = () => {
	subproperty.push({id: Date.now()});

};

// function for delete
const deletesubproperty = (id) => {
	const index = subproperty.findIndex((sub) => sub.id === id);
	if (index > -1) {
		subproperty.splice(index, 1);
	}
};
</script>
