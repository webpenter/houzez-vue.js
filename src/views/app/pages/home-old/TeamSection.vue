<template>
  <div class="team-container-main">
    <div class="team-header">
      <div>
        <h2>{{ $t('Meat Our Awesome Team') }}</h2>
        <p>{{ $t('team description') }}</p>
      </div>
      <div>
        <a href="" class="view-all-team">{{ $t('View All Team') }}<i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>

    <div class="our-team-container">
      <div class="team-box-left" @click="prevSlide" ref="prevBtn"><i class="fa-solid fa-chevron-left"></i></div>

      <div class="" id="our-team-box" ref="teamBox">
        <!-- Skeleton Loader -->
        <template v-if="loading">
          <div v-for="n in 3" :key="n" class="team-member skeleton">
            <div class="skeleton-image"></div>
            <div class="team-member-info">
              <div>
                <div class="skeleton-text short"></div>
                <div class="skeleton-text long"></div>
              </div>
              <div>
                <div class="skeleton-icon"></div>
              </div>
            </div>
          </div>
        </template>

        <!-- Team Members -->
        <template v-else>
          <div
              class="team-member"
              v-for="member in appTeams"
              :key="member.id"
              ref="teamMembers"
          >
            <img :src="member.image" :alt="member.name" />
            <div class="team-member-info">
              <div>
                <p>{{ member.name }}</p>
                <p>{{ member.designation }}</p>
              </div>
              <div>
                <a :href="'tel:' + member.phone" class="fa-solid fa-phone"></a>
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="team-box-right" @click="nextSlide" ref="nextBtn"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from "vue";
import { useTeam } from "@/stores/index.js";
import { storeToRefs } from "pinia";

const teamStore = useTeam();
const { appTeams } = storeToRefs(teamStore);
const loading = ref(true);

const getTeam = async () => {
  loading.value = true;
  await teamStore.getAppTeams();
  loading.value = false;
  await nextTick();
  updateSlider();
};

// Slider Logic
const teamBox = ref(null);
const teamMembers = ref([]);
const prevBtn = ref(null);
const nextBtn = ref(null);
const currentIndex = ref(0);
const visibleCount = ref(3);

const getVisibleCount = () => {
  if (window.innerWidth <= 700) return 1;
  if (window.innerWidth <= 990) return 2;
  return 3;
};

const updateSlider = () => {
  visibleCount.value = getVisibleCount();
  teamMembers.value = Array.from(document.querySelectorAll(".team-member"));
  const total = teamMembers.value.length;

  if (window.innerWidth <= 700) {
    prevBtn.value.style.display = "none";
    nextBtn.value.style.display = "none";
    teamBox.value.style.overflowX = "auto";
    teamBox.value.style.scrollBehavior = "smooth";
    teamMembers.value.forEach((m) => {
      m.style.display = "flex";
      m.style.minWidth = "200px";
      m.style.flexShrink = "0";
    });
  } else {
    prevBtn.value.style.display = "flex";
    nextBtn.value.style.display = "flex";
    teamBox.value.style.overflowX = "hidden";

    teamMembers.value.forEach((member, index) => {
      member.style.display =
          index >= currentIndex.value && index < currentIndex.value + visibleCount.value
              ? "flex"
              : "none";
    });

    prevBtn.value.style.visibility = currentIndex.value === 0 ? "hidden" : "visible";
    nextBtn.value.style.visibility =
        currentIndex.value + visibleCount.value >= total ? "hidden" : "visible";
  }
};

const nextSlide = () => {
  if (currentIndex.value + visibleCount.value < teamMembers.value.length) {
    currentIndex.value++;
    updateSlider();
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    updateSlider();
  }
};

onMounted(() => {
  getTeam();
  window.addEventListener("resize", updateSlider);
});
</script>

<style scoped>
/* Skeleton Styling */
.skeleton {
  background-color: #f3f3f3;
  border-radius: 10px;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  height: 400px;
  display: flex;
  justify-content: space-between;
  animation: pulse 1.5s infinite;
  position: relative;
  overflow: hidden;
}

.skeleton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -150px;
  height: 100%;
  width: 150px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    left: -150px;
  }
  100% {
    left: 100%;
  }
}

.skeleton-image {
  width: 150px;
  height: 150px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 auto;
}

.skeleton-text {
  height: 20px;
  background-color: #ccc;
  border-radius: 4px;
  margin: 5px 0;
}

.skeleton-text.short {
  width: 100px;
}

.skeleton-text.long {
  width: 150px;
}

.skeleton-icon {
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  margin-left: auto;
}

@keyframes pulse {
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e4e4e4;
  }
  100% {
    background-color: #f0f0f0;
  }
}

</style>
