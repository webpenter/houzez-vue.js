<template>
  <div class="dashaboard-snake-nav">
    <div class="d-flex justify-content-between">
      <div
        v-for="step in 12"
        :key="step"
        class="step-block text-center"
        :class="{ 'active number-active': active == step }"
        @click="navigateToStep(step)"
      >
        <div class="number">{{ step }}</div>
      </div>
      <div
        class="step-block text-center"
        :class="{ 'active number-active': active === 'done' }"
        @click="navigateToStep('done')"
      >
        <div class="number">&#x2713;</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useMessage } from '@/stores/index.js';
import { useNavigationStore } from '@/stores/index.js';

defineProps(['active']);

const route = useRoute();
const router = useRouter();
const message = useMessage();
const navigationStore = useNavigationStore();

const navigateToStep = (step) => {
  // Get propertyId from current route or navigation store
  const propertyId = route.params.propertyId || navigationStore.propertyId || null;

  if (step === 'done') {
    // Check if already on the completed page
    if (route.name === 'dashboard.create-listing.completed') {
      message.Warning('You are already on the completed page.');
      return;
    }
    // Check if propertyId exists for navigating to done
    if (!propertyId) {
      message.Warning('Cannot navigate to done. Please complete all steps first.');
      return;
    }
    // Navigate to the completed page if propertyId exists
    router.push({ name: 'dashboard.create-listing.completed' });
    return;
  }

  // Determine the route name for the step
  const routeName = `dashboard.create-listing.step-${step}`;

  // Check if already on the target step
  if (route.name === routeName && (propertyId ? route.params.propertyId === propertyId : !route.params.propertyId)) {
    message.Warning(`You are already on step ${step}.`);
    return;
  }

  // Prepare params
  const params = {};
  if (propertyId) {
    params.propertyId = propertyId;
  } else if (step !== 1) {
    // Show warning alert if trying to navigate to steps >1 without a propertyId
    message.Warning(`Cannot navigate to step ${step}. Please complete previous steps first.`);
    return;
  }

  // Navigate using named route and params
  router.push({ name: routeName, params });
};
</script>

<style scoped>
.number {
  font-size: 13px;
  border: 1.2px solid black;
  margin-inline: auto;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer; /* Make the number clickable */
}

.number-active .number {
  background-color: #00aeff;
  border-color: #00aeff;
  color: white;
}
</style>