<template>
    Property Details

  <br>
  <button @click="toggleFavoriteProperty" class="btn-sm btn-dark">
    {{isFavorite ? 'Remove' : 'Add'}} to favorite
  </button>
</template>

<script setup>
import {useFavoriteProperty, useNotification} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";

const favoritePropertyStore = useFavoriteProperty();
const {isFavorite} = storeToRefs(favoritePropertyStore);

const propertyId = ref(23);

const toggleFavoriteProperty = async () => {
  try {
    const res = await favoritePropertyStore.addOrRemovePropertyToFavorite(propertyId.value);

    if (res.status === 201) {
      useNotification().Success("Property added to favorites.");
      await isFavoriteProperty()
    } else if (res.status === 200) {
      useNotification().Success("Property removed from favorites.");
      await isFavoriteProperty()
    } else {
      useNotification().Error("An error occurred.");
    }
  } catch (error) {
    useNotification().Error("An error occurred while processing.");
  }
}

const isFavoriteProperty = async () => await favoritePropertyStore.isFavoriteProperty(propertyId.value);

onMounted(isFavoriteProperty);
</script>