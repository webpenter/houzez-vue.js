<template>
    <DashboardHeader heading="Newsletter Subscriber's" />
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
            <NoNewsLetter v-if="dashboardNewsletter.length < 1"/>
            <Table
            v-else
            :newsLetters="dashboardNewsletter"
            :loading="loading"
            @delete-newsletter="(id) => deleteNewsletter(id)"
            />
            
        </div>
        </div>
    </section>
</template>
<script setup>
import Table from './Table.vue';
import NoNewsLetter from './components/NoNewsLetter.vue';
import { storeToRefs } from "pinia";
import {onMounted, ref} from "vue";

import {
    getNewsletters,
    deleteNewsletter,
    loading,
   
} from "@/traits/newsletter/dashboardNewsletter.js";
import { useNewsletter } from "@/stores/index.js";

const propertyToRefs = useNewsletter();
const { dashboardNewsletter } = storeToRefs(propertyToRefs);

onMounted(() => getNewsletters());
</script>