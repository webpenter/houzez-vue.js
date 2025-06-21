<template>
  <section class="content-wrap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 style="margin: 100px 0 30px 0; text-align: center;">
            {{ $t('Meat Our Awesome Team') }}
          </h2>

          <div class="row">
            <template v-if="loading">
              <div class="col-4" v-for="n in 3" :key="'skeleton-' + n">
                <Agent :loading="true" />
              </div>
            </template>

            <template v-else>
              <div
                v-for="team in appTeamsDemo01"
                :key="team.id"
                class="col-4"
              >
                <Agent :team="team" :loading="false" />
              </div>
            </template>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Agent from './Agent.vue';
import { onMounted, ref } from "vue";
import { useTeam } from "@/stores/index.js";
import { storeToRefs } from "pinia";

const teamStore = useTeam();
const { appTeamsDemo01 } = storeToRefs(teamStore);
const loading = ref(true);

const getTeam = async () => {
  loading.value = true;
  await teamStore.getAppTeamsDemo01();
  loading.value = false;
};

onMounted(() => getTeam());
</script>
