<template>
  <div class="form-group">
    <select
      v-model="selectedBedrooms"
      ref="selectRef"
      class="selectpicker form-control"
      :title="$t('Bedrooms')"
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Define props with type
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const selectedBedrooms = ref(props.modelValue);
const selectRef = ref(null);

const bedroomStore = useBedroom();
const bedroomOptions = bedroomStore.bedrooms;

const emitBedrooms = () => {
  emit('update:modelValue', selectedBedrooms.value);
};

// Refresh selectpicker on mount and whenever options change
onMounted(() => {
  nextTick(() => {
    if (selectRef.value && window.$) {
      window.$(selectRef.value).selectpicker('refresh');
    }
  });
});

watch(bedroomOptions, () => {
  nextTick(() => {
    if (selectRef.value && window.$) {
      window.$(selectRef.value).selectpicker('refresh');
    }
  });
});

// Keep selectedBedrooms in sync with parent prop
watch(
  () => props.modelValue,
  (newVal) => {
    selectedBedrooms.value = newVal;
  }
);
</script>
