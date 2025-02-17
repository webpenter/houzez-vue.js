<template>
    <div class="dashboard-content-block">
        You don't have any {{ propertyStatus }} property listed.
    </div><!-- dashboard-content-block -->
</template>

<script setup>
defineProps({
  propertyStatus: { type: String, default: '' },
});
</script>
