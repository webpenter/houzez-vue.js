<template>
    <RouterLink class="btn btn-primary btn-slim mr-2" :to="{name:route}">
        {{ title }} ({{ count }})
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['route','title','count']);
</script>
