<template>
    <div class="dashboard-slide-panel-wrap">
	<h2>Add New Deal</h2>
	<button type="button" class="btn open-close-slide-panel" @click="closePanel">
		<span aria-hidden="true">&times;</span>
	</button>
	<div class="form-group">
		<label>Group</label>
		<select v-model="Group" class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
			<option>Active Deals</option>
			<option>Won Deals</option>
			<option>Lost Deals</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>Title</label>
		<input class="form-control is-valid" name="name" placeholder="Enter the deal title" type="text">
	</div>
	<div class="form-group">
		<label>Contact Name</label>
		<select v-model="Contact" class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="true" data-selected-text-format="count" data-actions-box="false">
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>Agent</label>
		<select v-model="Agent" class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="true" data-selected-text-format="count" data-actions-box="false">
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>Deal Value</label>
		<input class="form-control is-invalid" name="name" placeholder="Enter the deal value" type="text">
	</div>
	<button type="button" class="btn btn-primary btn-full-width mt-2">Save</button>
</div><!-- dashboard-slide-panel-wrap -->
</template>

<script>
// import { defineEmits } from 'vue';


export default {
    emits: ['close'],
    data() {
        return {
            Agent: '',
            Contact: '',
            Group: '',
        };
    }, // Add emits here
    mounted() {
        $('.selectpicker').selectpicker();
    },
    methods: {
        closePanel() {
            this.$emit('close'); // Correct event emission
        },
    },
};



</script>
<style>
.dashboard-slide-panel-wrap {
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  width: 400px;
  height: 100%;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow-y: auto;
  z-index: 100;
}
</style>
