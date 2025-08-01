<template>
    <section class="advanced-search advanced-search-nav">
        <div class="container">
            <h3 class="widget-title mb-4">Find {{ typeLabel }}</h3>
            <div class="advanced-search-v1">
                <div class="">
                    <!-- Search by Name -->
                    <div class="flex-search flex-grow-1 pb-3">
                        <div class="form-group">
                            <div class="search-icon">
                                <input v-model="searchName" type="text" class="form-control" :placeholder="`Search ${typeLabel} by Name`">
                            </div>
                        </div>
                    </div>

                    <!-- Search by Address -->
                    <div class="flex-search pb-3">
                        <div class="form-group">
                            <select v-model="searchAddress" class="selectpicker form-control bs-select-hidden" title="City"
                                data-live-search="false" data-selected-text-format="count">
                                <option v-for="city in cities" :key="city.id" :value="city.name">
                                {{ city.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Search Button -->
                    <div class="flex-search pb-3">
                        <button @click="handleSearch" class="btn btn-search btn-secondary btn-full-width">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import { useAgent, useAgency, useCity } from '@/stores/index.js'

const props = defineProps({
    type: {
        type: String,
        required: true,
        validator: (val) => ['agent', 'agency'].includes(val)
    }
});

const searchName = ref('');
const searchAddress = ref('');

const agentStore = useAgent();
const agencyStore = useAgency();
const cityStore = useCity(); 
const cities = computed(() => cityStore.cities);

const typeLabel = computed(() => props.type === 'agent' ? 'Agent' : 'Agency');

const handleSearch = async () => {
    if (props.type === 'agent') {
        await agentStore.searchAgent({
            name: searchName.value,
            address: searchAddress.value,
        });
    } else {
        await agencyStore.searchAgency({
            name: searchName.value,
            address: searchAddress.value,
        });
    }
};

onMounted(() => {
    nextTick(() => {
        $('.selectpicker').selectpicker('refresh');
    });
});
</script>
