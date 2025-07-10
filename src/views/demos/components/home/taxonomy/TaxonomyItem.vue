<template>
  <div
    class="taxonomy-item"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <router-link class="taxonomy-link hover-effect-flat" :to="{
			name:'demo01.property-type',
			params:{
				propertyType:link
			}
		}">
      <div class="taxonomy-text-wrap">
        <div class="taxonomy-title">{{ title }}</div>
        <div class="taxonomy-subtitle">{{ $t('More Details') }}</div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['img', 'title','link'])

const backgroundUrl = computed(() => {
  return new URL(`/src/assets/img/types/${props.img}`, import.meta.url).href
})
</script>
