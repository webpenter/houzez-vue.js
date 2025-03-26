<template>
  <div class="team-container-main">
    <div class="team-header">
      <div>

        <h2>{{ $t('Meat Our Awesome Team')}}</h2>
        <p>{{$t('team description')}}</p>
      </div>
      <div>
        <a href="" class="view-all-team">{{ $t('View All Team')}}<i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
    <div class="our-team-container">
      <div class="team-box-left"><i class="fa-solid fa-chevron-left"></i></div>

      <div id="our-team-box">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index" 
          class="team-member"
        >
          <img :src="member.image" :alt="member.name">
          <div class="team-member-info">
            <div>
              <p>{{ member.name }}</p>
              <p>{{ member.designation }}</p>
              <p>{{ member.description }}</p>
              
            </div>
            <div>
              <a :href="`tel:${member.contact_no}`" class="fa-solid fa-phone"></a>

            </div>
          </div>
        </div>
      </div>
      <div class="team-box-right"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount,nextTick } from "vue";
import { useTeamSectionStore } from "@/stores/teamSection.js";

const teamStore = useTeamSectionStore();
const teamMembers = ref([]);

// Slider references
const teamBox = ref(null);
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
  const totalMembers = teamMembers.value.length;

  if (window.innerWidth <= 700) {
    prevBtn.value.style.display = "none";
    nextBtn.value.style.display = "none";
    teamBox.value.style.overflowX = "auto";
    teamBox.value.style.scrollBehavior = "smooth";
    
    // Use Array.from to convert NodeList to array
    Array.from(teamBox.value.children).forEach(member => {
      member.style.display = "flex";
      member.style.minWidth = "200px";
      member.style.flexShrink = "0";
    });
  } else {
    prevBtn.value.style.display = "flex";
    nextBtn.value.style.display = "flex";
    teamBox.value.style.overflowX = "hidden";

    Array.from(teamBox.value.children).forEach((member, index) => {
      member.style.display = (index >= currentIndex.value && 
        index < currentIndex.value + visibleCount.value) ? "flex" : "none";
    });

    prevBtn.value.style.visibility = currentIndex.value === 0 ? "hidden" : "visible";
    nextBtn.value.style.visibility = currentIndex.value + visibleCount.value >= totalMembers 
      ? "hidden" : "visible";
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

const initializeSlider = () => {
  teamBox.value = document.getElementById("our-team-box");
  prevBtn.value = document.querySelector(".team-box-left");
  nextBtn.value = document.querySelector(".team-box-right");

  updateSlider();
  
  // Add event listeners
  prevBtn.value.addEventListener("click", prevSlide);
  nextBtn.value.addEventListener("click", nextSlide);
  window.addEventListener("resize", updateSlider);
};

onMounted(async () => {
  try {
    const response = await teamStore.fetchTeamMembers();

    if (response.success && Array.isArray(response.data)) {
      teamMembers.value = response.data;
    } else {
      console.error("Unexpected API response:", response);
      teamMembers.value = [];
    }

    await nextTick();
    initializeSlider();
  } catch (error) {
    console.error("Failed to fetch team members:", error);
    teamMembers.value = [];
  }
});


onBeforeUnmount(() => {
  if (prevBtn.value && nextBtn.value) {
    prevBtn.value.removeEventListener("click", prevSlide);
    nextBtn.value.removeEventListener("click", nextSlide);
  }
  window.removeEventListener("resize", updateSlider);
});
</script>