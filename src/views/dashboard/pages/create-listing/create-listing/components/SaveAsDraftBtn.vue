<template>
  <RouterLink :to="route" class="btn btn-primary-outlined">
    {{ buttonText }}
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["status"]);

const route = computed(() =>
    props.status === "draft"
        ? { name: "dashboard.my-properties.draft" }
        : { name: "dashboard.my-properties" }
);

const buttonText = computed(() =>
    props.status === "draft" ? "Save as Draft" : "My Properties"
);
</script>
