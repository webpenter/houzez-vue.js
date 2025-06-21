<template> 
<div class="partners-module partners-module-slider my-5">
    <div class="partners-slider-wrap">
        <PartnerItem
            v-for="(partner, index) in partners"
            :key="partner.id || index"
            :partner="partner"
        />
    </div><!-- testimonials-slider -->
</div><!-- testimonials-module -->
</template>

<script setup>
import PartnerItem from './PartnerItem.vue';
import { usePartners } from "@/stores/index.js";
import { storeToRefs } from "pinia";

const partnerStore = usePartners();
const { partners } = storeToRefs(partnerStore);

</script>

<style scoped>
.partners-slider-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
</style>