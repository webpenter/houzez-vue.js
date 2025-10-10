<template>
  <!-- Show section only if still loading OR we have agents -->
  <section
    class="content-wrap"
    v-if="loading || agents?.length"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="my-5 mb-4 text-center">
            {{ $t('Meet Our Agents') }}
          </h2>

          <div class="row">
            <!-- Skeletons while loading -->
            <template v-if="loading">
              <div
                v-for="n in 3"
                :key="'skeleton-' + n"
                class="col-12 col-md-4"
              >
                <Agent :loading="true" />
              </div>
            </template>

            <!-- Agents after loading -->
            <template v-else>
              <div
                v-for="agent in agents"
                :key="agent.id"
                class="col-12 col-md-4 mb-4"
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
import Agent from './AgentCom.vue';
import { onMounted, ref } from "vue";
import { useAgent, useNotification } from "@/stores/index.js";
import { storeToRefs } from "pinia";

defineOptions({
  name: 'AgentsIndex'
});

const agentStore = useAgent();
const { agents } = storeToRefs(agentStore);
const loading = ref(true);
const notify = useNotification();

const getAgents = async () => {
  loading.value = true;
  try {
    await agentStore.getAllAgents();
  } catch (err) {
    notify.Error("Failed to fetch agents");
  } finally {
    loading.value = false;
  }
};

onMounted(() => getAgents());
</script>

