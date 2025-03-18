<template>
    <div class="dashboard-content-block">
        {{$t("You don't have any")}} {{ propertyStatus }} {{$t('property listed.')}}
    </div><!-- dashboard-content-block -->
</template>

<script setup>
defineProps({
  propertyStatus: { type: String, default: '' },
});
</script>
