<template>
    <div class="form-group">
	<select
      class="selectpicker form-control"
      title="Max. Price"
      data-live-search="false"
      @change="emitMaxPrice"
      ref="selectRef"
    >
		<option>Any</option>
		<option>$5,000</option>
		<option>$10,000</option>
		<option>$50,000</option>
		<option>$100,000</option>
		<option>$200,000</option>
		<option>$300,000</option>
		<option>$400,000</option>
		<option>$500,000</option>
	</select><!-- selectpicker -->
</div><!-- form-group -->
</template>


<script setup>
import { ref, onMounted } from 'vue';
const emit = defineEmits(['update:maxPrice']);
const selectRef = ref(null);

const emitMaxPrice = () => {
  const selected = selectRef.value.value;
  emit('update:maxPrice', selected);	
};

onMounted(() => {
  setTimeout(() => {
    $('.selectpicker').selectpicker('refresh');
  }, 0);
});
</script>
