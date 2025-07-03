<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Agents Sample</h2>
    <h2 class="text-xl font-bold mb-4"></h2>

    <!-- Loading -->
    <div v-if="agentStore.loading">Loading agents...</div>

    <!-- Error -->
    <div v-if="agentStore.errors && agentStore.errors.data" class="text-red-500">
      {{ agentStore.errors.data.message }}
    </div>

    <!-- Agent List -->
    <div v-if="agentStore.allAgents.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="agent in agentStore.allAgents" :key="agent.id" class="p-4 border rounded shadow">
        <RouterLink
            :to="{ name: 'demo01.agent-details', params: { agentUsername: agent.username } }"
            class="text-lg font-semibold text-blue-600 hover:underline"
            >
            {{ agent.name }}
        </RouterLink>
        <p><strong>Username:</strong> {{ agent.username }}</p>
        <p><strong>Email:</strong> {{ agent.email }}</p>
        <p><strong>Role:</strong> {{ agent.role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useAgent } from '@/stores/index.js'

const agentStore = useAgent()
const { agent } = storeToRefs(agentStore);

onMounted(async () => {
  try {
    await agentStore.getAllAgents()
  } catch (err) {
    console.error('Failed to fetch agents:', err)
  }
})
</script>
