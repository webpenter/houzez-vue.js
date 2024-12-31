<template>
<RouterLink class="btn btn-primary" :to="{name:route}">
    Next 
    <i class="houzez-icon icon-arrow-right-1 ml-2"></i>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['route'])
</script>
