<template>
  <div class="container-fluid my-5 pt-5" style="background: #C4A484;">
    <section>
      <div class="text-center mb-5">
        <h2 class="fw-bold display-4 text-white">{{ $t('Our Services') }}</h2>
      </div>
      <div class="row justify-content-center mx-5">
        <template v-for="service in services" :key="service.id">
          <div class="col-12 col-sm-10 col-md-6 col-lg-4 mb-4">
            <div class="bg-white p-4 rounded-4 shadow-sm h-100 transition hover-shadow">
              <div
class="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4"
                   style="width: 70px; height: 70px; background-color: #6f4e37;">
                <i
style="font-size: 30px" class="fa-solid text-white" :class="{
                  'fa-store':service.id === 1,
                  'fa-square-poll-vertical':service.id === 2,
                  'fa-comments-dollar':service.id === 3,
                  'fa-microphone-lines':service.id === 4,
                  'fa-bars-progress':service.id === 5,
                  }"></i>
              </div>
              <div class="text-center">
                <h5 class="text-uppercase fw-bold">{{ service.title }}</h5>
                <p class="text-muted mt-3">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>


</template>

<script setup>
import {useService} from "@/stores/index.js";
import { storeToRefs } from "pinia";

const serviceStore = useService();
const { services } = storeToRefs(serviceStore);
</script>

<style scoped>
.transition {
  transition: all 0.3s ease-in-out;
}
.hover-shadow:hover {
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
  transform: translateY(-4px);
}
</style>
