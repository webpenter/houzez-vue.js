<template>
  <div class="team-module hover-effect">
    <a href="#" class="team-mobile-link"></a>

    <template v-if="imageLoading">
      <div class="skeleton-card animate-skeleton p-3 rounded">
        <div class="skeleton-img mb-3 rounded"></div>
        <div class="skeleton-line w-75 mb-2"></div>
        <div class="skeleton-line w-50 mb-4"></div>
        <div class="skeleton-line w-100 mb-1"></div>
        <div class="skeleton-line w-100 mb-1"></div>
        <div class="skeleton-line w-75"></div>
      </div>
    </template>

    <template v-else>
      <img class="img-fluid" :src="agent.profile" alt="agent" style="width: 100%; height: auto;" />

      <div class="team-content-wrap team-content-wrap-before">
        <div class="team-content">
          <div class="team-name">
            <strong>{{ agent.name }}</strong>
          </div>
          <div class="team-title">
            {{ agent.position }}
          </div>
        </div>
      </div>

      <div class="team-content-wrap team-content-wrap-after">
        <div class="team-content">
          <div class="team-name">
            <strong>{{ agent.name }}</strong>
          </div>
          <div class="team-title">
            {{ agent.position }}
          </div>
          <div class="team-description">
            <div><i class="bi bi-telephone-fill me-2"></i>{{ agent.phone }}</div>
            <div><i class="bi bi-envelope-fill me-2"></i>{{ agent.email }}</div>
            <div><i class="bi bi-geo-alt-fill me-2"></i>{{ agent.address }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  agent: {
    type: Object,
    default: () => ({}),
  },
  loading: Boolean,
});
console.log('Received agent prop:', props.agent);
const imageLoading = ref(true);

// Watch for loading and image to handle lazy load
watch(
  () => props.loading,
  (newVal) => {
    if (!newVal && props.agent?.profile) {
      const img = new Image();
      img.src = props.agent.profile;
      img.onload = () => {
        imageLoading.value = false;
      };
      img.onerror = () => {
        imageLoading.value = false;
      };
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.animate-skeleton {
  background-color: #f3f3f3;
  animation: pulse 1.5s infinite ease-in-out;
}

.skeleton-img {
  width: 100%;
  height: 250px;
  background-color: #dee2e6;
  border-radius: 8px;
}

.skeleton-line {
  height: 16px;
  background-color: #dee2e6;
  border-radius: 4px;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}
</style>
