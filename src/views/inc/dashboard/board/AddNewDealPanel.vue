<template>
    <div class="dashboard-slide-panel-wrap">
	<h2>{{$t('Add New Deal')}}</h2>
	<button type="button" class="btn open-close-slide-panel" @click="closePanel">
		<span aria-hidden="true">&times;</span>
	</button>
	<div class="form-group">
		<label>{{$t('Group')}}</label>
		<select v-model="Group" class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
			<option>{{$t('Active Deals')}}</option>
			<option>{{$t('Won Deals')}}</option>
			<option>{{$t('Lost Deals')}}</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>{{$t('Title')}}</label>
		<input class="form-control is-valid" name="name" :placeholder="$t('Enter the deal title')" type="text">
	</div>
	<div class="form-group">
		<label>{{$t('Contact Name')}}</label>
		<select v-model="Contact" class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="true" data-selected-text-format="count" data-actions-box="false">
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>{{$t('Agent')}}</label>
		<select v-model="Agent" class="selectpicker form-control bs-select-hidden" title="Select" data-live-search="true" data-selected-text-format="count" data-actions-box="false">
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
			<option>Option</option>
		</select><!-- selectpicker -->
	</div><!-- form-group -->
	<div class="form-group">
		<label>{{$t('Deal Value')}}</label>
		<input class="form-control is-invalid" name="name" :placeholder="$t('Enter the deal value')" type="text">
	</div>
	<button type="button" class="btn btn-primary btn-full-width mt-2">{{$t('Save')}}</button>
</div><!-- dashboard-slide-panel-wrap -->
</template>

<script>
// import { defineEmits } from 'vue';


export default {
    emits: ['close'], // Add emits here
    mounted() {
        $('.selectpicker').selectpicker();
    },
    data() {
        return {
            Agent: '',
            Contact: '',
            Group: '',
        };
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
