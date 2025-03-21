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
      <div class="" id="our-team-box">
        <div class="team-member">
          <img src="@/assets/img/client-side/member.png" alt="">
          <div class="team-member-info">
            <div>
              <p>{{ $t('Michel smith')}}</p>
              <p>{{ $t('Property Expert')}}</p>
            </div>
            <div>
              <a href="" class="fa-solid fa-phone"></a>
            </div>
          </div>
        </div>
        <div class="team-member">
          <img src="@/assets/img/client-side/property.png" alt="">
          <div class="team-member-info">
            <div>
              <p>{{ $t('Michel smith')}}</p>
              <p>{{ $t('Property Expert')}}</p>
            </div>
            <div>
              <a href="" class="fa-solid fa-phone"></a>
            </div>
          </div>
        </div>
        <div class="team-member">
          <img src="@/assets/img/client-side/ss.png" alt="">
          <div class="team-member-info">
            <div>
              <p>{{ $t('Michel smith')}}</p>
              <p>{{ $t('Property Expert')}}</p>
            </div>
            <div>
              <a href="" class="fa-solid fa-phone"></a>
            </div>
          </div>
        </div>
        <div class="team-member">
          <img src="@/assets/img/client-side/hero-section-img.png" alt="">
          <div class="team-member-info">
            <div>
              <p>{{ $t('Michel smith')}}</p>
              <p>{{ $t('Property Expert')}}</p>
            </div>
            <div>
              <a href="" class="fa-solid fa-phone"></a>
            </div>
          </div>
        </div>
        <div class="team-member">
          <img src="@/assets/img/client-side/bg-hero.png" alt="">
          <div class="team-member-info">
            <div>
              <p>{{ $t('Michel smith')}}</p>
              <p>{{ $t('Property Expert')}}</p>
            </div>
            <div>
              <a href="" class="fa-solid fa-phone"></a>
            </div>
          </div>
        </div>
        <div class="team-member">
          <img src="@/assets/img/client-side/logo (1).png" alt="">
          <div class="team-member-info">
            <div>
              <p>{{ $t('Michel smith')}}</p>
              <p>{{ $t('Property Expert')}}</p>
            </div>
            <div>
              <a href="" class="fa-solid fa-phone"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="team-box-right"><i class="fa-solid fa-chevron-right"></i></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";

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
  const totalMembers = teamMembers.value.length;

  if (window.innerWidth <= 700) {
    prevBtn.value.style.display = "none";
    nextBtn.value.style.display = "none";
    teamBox.value.style.overflowX = "auto";
    teamBox.value.style.scrollBehavior = "smooth";
    teamMembers.value.forEach((member) => {
      member.style.display = "flex";
      member.style.minWidth = "200px";
      member.style.flexShrink = "0";
    });
  } else {
    prevBtn.value.style.display = "flex";
    nextBtn.value.style.display = "flex";
    teamBox.value.style.overflowX = "hidden";

    teamMembers.value.forEach((member, index) => {
      if (index >= currentIndex.value && index < currentIndex.value + visibleCount.value) {
        member.style.display = "flex";
      } else {
        member.style.display = "none";
      }
    });

    prevBtn.value.style.visibility = currentIndex.value === 0 ? "hidden" : "visible";
    nextBtn.value.style.visibility = currentIndex.value + visibleCount.value >= totalMembers ? "hidden" : "visible";
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
  teamBox.value = document.getElementById("our-team-box");
  teamMembers.value = Array.from(document.querySelectorAll(".team-member"));
  prevBtn.value = document.querySelector(".team-box-left");
  nextBtn.value = document.querySelector(".team-box-right");

  prevBtn.value.addEventListener("click", prevSlide);
  nextBtn.value.addEventListener("click", nextSlide);
  window.addEventListener("resize", updateSlider);

  updateSlider();
});

onBeforeUnmount(() => {
  prevBtn.value.removeEventListener("click", prevSlide);
  nextBtn.value.removeEventListener("click", nextSlide);
  window.removeEventListener("resize", updateSlider);
});
</script>
