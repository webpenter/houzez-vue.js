<template>
    <section class="advanced-search advanced-search-nav">
        <div class="container">
            <h3 class="widget-title mb-4">Find Agent</h3>
            <div class="advanced-search-v1">
                <div class="">
                    <!-- Search by Name -->
                    <div class="flex-search flex-grow-1">
                        <div class="form-group">
                            <div class="search-icon">
                                <input v-model="searchName" type="text" class="form-control" placeholder="Search by Name">
                            </div>
                        </div>
                    </div>

                    <!-- Search by Address -->
                    <div class="flex-search">
                        <div class="form-group">
                            <select v-model="searchAddress" class="selectpicker form-control bs-select-hidden" title="City"
                                data-live-search="false" data-selected-text-format="count">
                                <option value="Chicago">Chicago</option>
                                <option value="Miami">Miami</option>
                                <option value="New York">New York</option>
                                <option value="San Francisco">San Francisco</option>
                            </select>
                        </div>
                    </div>

                    <!-- Search Button -->
                    <div class="flex-search">
                        <button @click="handleSearch" class="btn btn-search btn-secondary btn-full-width">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useAgent } from '@/stores/index.js'

const agentStore = useAgent();
const searchName = ref('');
const searchAddress = ref('');

const handleSearch = async () => {
  await agentStore.searchAgent({
    name: searchName.value,
    address: searchAddress.value,
  });
};

onMounted(() => {
  nextTick(() => {
    $('.selectpicker').selectpicker('refresh');
  });
});
</script>
