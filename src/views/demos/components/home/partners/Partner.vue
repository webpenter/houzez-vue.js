<template> 
    <div class="partners-module partners-module-slider">
	<div class="property-carousel-buttons-wrap">
        <button type="button" class="slick-prev btn-primary-outlined">Prev</button>
        <button type="button" class="slick-next btn-primary-outlined">Next</button>
    </div><!-- property-carousel-buttons-wrap -->
    <div class="partners-slider-wrap">
        <PartnerItem
            v-for="(team, index) in appTeams"
            :key="team.id || index"
            :team="team"
        />
    </div><!-- testimonials-slider -->
</div><!-- testimonials-module -->
</template>

<script setup>
import { onMounted } from 'vue';
import { useTeam } from '@/stores/index';
import { storeToRefs } from 'pinia';
import PartnerItem from './PartnerItem.vue';

const teamStore = useTeam();
const { appTeams } = storeToRefs(teamStore);

onMounted(async () => {
  await teamStore.getAppTeams();
});
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