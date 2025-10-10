<template>
  <!-- Show this section only if still loading OR we have latest properties -->
  <section
    v-if="loading || latestProperties?.length"
    class="content-wrap"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 style="margin: 100px 0 30px 0; text-align: center;">
            {{ $t('Discover Our Latest Properties') }}
          </h2>
          <FineProperty
            :latest-properties="latestProperties"
            :loading="loading"
          />
        </div><!-- col-12 -->
      </div><!-- row -->
    </div><!-- container -->
  </section><!-- listing-wrap -->
</template>

<script setup>
import { useAppPropertyDemo01 } from "@/stores/index.js";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

import FineProperty from "./FineProperty.vue";

// Give component a multi-word name to satisfy ESLint
defineOptions({
  name: 'FinestPropertiesIndex'
});

const propertyStore = useAppPropertyDemo01();
const { latestProperties } = storeToRefs(propertyStore);

const loading = ref(true);

const fetchLatestProperties = async () => {
  loading.value = true;
  try {
    const res = await propertyStore.getLatestPropertiesDemo01();
    if (res.status !== 200) {
      // Use console.warn instead of console.error or replace with notification if you want
      console.warn("Unexpected response status:", res.status);
    }
  } catch (err) {
    console.warn("Failed to fetch latest properties:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchLatestProperties();
});
</script>
