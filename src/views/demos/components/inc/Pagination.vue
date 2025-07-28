<template>
<div v-if="totalItems" class="pagination-wrap">
  <nav>
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="" @click.prevent="goToPage(currentPage - 1)">
          <i class="houzez-icon icon-arrow-left-1"></i>
        </a>
      </li>

      <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
        <a class="page-link" href="" @click.prevent="goToPage(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="" @click.prevent="goToPage(currentPage + 1)">
          <i class="houzez-icon icon-arrow-right-1"></i>
        </a>
      </li>
    </ul>
  </nav>
</div>

</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 6
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:currentPage'])

const { totalItems, pageSize } = toRefs(props)

const totalPages = computed(() => {
  return Math.ceil(totalItems.value / pageSize.value)
})

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page)
  }
}
</script>
