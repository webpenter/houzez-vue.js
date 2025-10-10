<template>
  <section
    v-if="partners.length > 0"
    class="content-wrap"
  >
    <div class="container">
      <div class="row">
        <div class="col-12"> 
          <h2 class="my-5 text-center">{{ $t('Partners') }}</h2>
          <!-- ✅ Pass partners as prop -->
          <Partner :partners="partners" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Partner from './Partner.vue';
import { usePartners } from "@/stores/index.js";
import { storeToRefs } from "pinia";

// Multi-word component name to satisfy ESLint
defineOptions({
  name: 'HomePartnersIndex'
});

const partnerStore = usePartners();
const { partners } = storeToRefs(partnerStore);
</script>
