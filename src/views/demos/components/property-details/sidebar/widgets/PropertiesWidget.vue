<template>
  <div class="widget widget-wrap widget-properties">
    <div class="widget-header">
      <h3 class="widget-title">{{ $t('Properties') }}</h3>
    </div>
    <div class="widget-body">
      <PropertyItem 
        v-for="property in latestProperties" 
        :key="property.id" 
        :property="property" 
      />
    </div>
  </div>
</template>

<script setup>
import { useAppPropertyDemo01 } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import PropertyItem from './template/PropertyItem.vue';

const propertyToRefs = useAppPropertyDemo01();
const { latestProperties } = storeToRefs(propertyToRefs);
const loading = ref(true);

const fetchLatestProperties = async () => {
  loading.value = true;
  const res = await propertyToRefs.getLatestPropertiesDemo01();
  if (res.status === 200) {
    loading.value = false;
  }
};

onMounted(() => fetchLatestProperties());
</script>
