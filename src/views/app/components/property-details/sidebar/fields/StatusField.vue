<template>
    <div class="form-group">
	<select class="selectpicker form-control bs-select-hidden" title="Status" data-live-search="false" data-selected-text-format="count" multiple data-actions-box="true" >
		<option>For Rent</option>
		<option>For Sale</option>
	</select><!-- selectpicker -->
</div><!-- form-group -->
</template>

<script setup>
import { onMounted } from 'vue'
import $ from 'jquery'

onMounted(() => {
  $('.selectpicker').selectpicker('render')
})
</script>
