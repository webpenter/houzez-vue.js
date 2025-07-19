<template>
  <section class="content-wrap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 style="margin: 100px 0 30px 0; text-align: center;">
            {{ $t('Meet Our Agents') }}
          </h2>

          <div class="row">
            <template v-if="loading">
              <div class="col-4" v-for="n in 3" :key="'skeleton-' + n">
                <Agent :loading="true" />
              </div>
            </template>

            <template v-else>
              <div
                v-for="agent in allAgents"
                :key="agent.id"
                class="col-4"
              >
                <Agent :agent="agent" :loading="false" />
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
import { useAgent } from "@/stores/index.js";
import { storeToRefs } from "pinia";

const agentStore = useAgent();
const { allAgents } = storeToRefs(agentStore); // ✅ Correct property
const loading = ref(true);

const getAgents = async () => {
  loading.value = true;
  await agentStore.getAllAgents();
  loading.value = false;
};

onMounted(() => getAgents());
</script>
