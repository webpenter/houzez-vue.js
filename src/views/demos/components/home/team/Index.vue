<template>
  <section class="content-wrap" v-if="appTeamsDemo01.length">
    <div class="container">
      <div class="row">
        <div class="col-12">

          <h2 style="margin: 100px 0 30px 0; text-align: center;">Meet Our Team</h2>

          <div class="row">
            <div
              class="col-12 col-md-4 mb-4"
              v-for="(member, index) in appTeamsDemo01"
              :key="index"
            >
              <Team :member="member" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Team from './Team.vue';
import { onMounted } from 'vue';
import { useTeam } from '@/stores/index';
import { storeToRefs } from 'pinia';

const teamStore = useTeam();
const { appTeamsDemo01 } = storeToRefs(teamStore);

onMounted(async () => {
  await teamStore.getAppTeamsDemo01();
});
</script>
