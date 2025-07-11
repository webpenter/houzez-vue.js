<template>
  <div class="form-group">
    <select
      class="selectpicker form-control"
      :title="$t('Bedrooms')"
      v-model="selectedBedrooms"
      ref="selectRef"
      @change="emitBedrooms"
    >
      <option
        v-for="bedroom in bedroomOptions"
        :key="bedroom.id"
        :value="bedroom.name"
      >
        {{ bedroom.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useBedroom } from '@/stores/index.js';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const selectedBedrooms = ref(props.modelValue); // bind from parent
const selectRef = ref(null);

const bedroomStore = useBedroom();
const bedroomOptions = bedroomStore.bedrooms;

const emitBedrooms = () => {
  emit('update:modelValue', selectedBedrooms.value); // emit back to parent
};

onMounted(() => {
  $(selectRef.value).selectpicker('refresh');
});

watch(bedroomOptions, () => {
  nextTick(() => {
    $(selectRef.value).selectpicker('refresh');
  });
});
</script>

