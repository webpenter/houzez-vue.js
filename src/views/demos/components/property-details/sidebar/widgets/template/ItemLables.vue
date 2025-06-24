<template>
    <span class="labels-wrap labels-right">
        <a href="#" class="label-status label">
             {{ label }}
        </a><!-- label-status -->
    </span><!-- labels-wrap -->
</template>

<script setup>
defineProps({
  label: String,

});
</script>