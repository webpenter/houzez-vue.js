<template>
<RouterLink class="btn btn-primary-outlined" :to="{name:route,params:{propertyId:pId}}">
    <i class="houzez-icon icon-arrow-left-1 mr-2"></i> 
    Back
</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps(['route','pId'])
</script>
