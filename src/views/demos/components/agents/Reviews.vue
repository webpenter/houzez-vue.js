<template>
   <p 
   v-if="paginatedReviews.length == 0" 
   class="text-center mt-3" >No reviews found.</p>
  <div id="property-review-wrap" class="property-review-wrap property-section-wrap" >
    <div class="block-title-wrap review-title-wrap d-flex align-items-center">
      <h2>{{ reviewsList.length }} {{ $t('Reviews') }}</h2>
      <OverallRating :value="averageRating" />
      <a class="btn btn-primary btn-slim" href="#property-review-form">{{ $t('Leave a Review') }}</a>
    </div>

    <ul class="review-list-wrap list-unstyled">
      <Review v-for="(review, index) in paginatedReviews" :key="index" :review="review" />
    </ul>

    <div 
    v-if="totalPages > 1" 
    class="pagination-wrap">
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="goToPage(currentPage - 1)">
              <i class="houzez-icon icon-arrow-left-1"></i>
            </a>
          </li>
          <li
            v-for="page in totalPages"
            :key="page"
            class="page-item"
            :class="{ active: page === currentPage }"
          >
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="goToPage(currentPage + 1)">
              <i class="houzez-icon icon-arrow-right-1"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div id="property-review-form" class="block-wrap">
      <div class="block-title-wrap">
        <h3>{{ $t('Leave a Review') }}</h3>
      </div>
      <div class="block-content-wrap">
        <!-- Error Alert -->
        <div
          v-if="errors?.data?.errors && Object.keys(errors.data.errors).length"
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <ul>
            <li v-for="(error, key) in errors.data.errors" :key="key">
              {{ error[0] }}
            </li>
          </ul>
          <button type="button" class="close" @click="errors = {}">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- Success Alert -->
        <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
          {{ successMessage }}
          <button type="button" class="close" @click="successMessage = ''">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>{{ $t('Title') }}</label>
              <input v-model="form.title" class="form-control" :placeholder="$t('Enter a title')" type="text"  />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>{{ $t('Rating') }}</label>
              <select v-model="form.rating" class="form-control">
                <option disabled value="">{{ $t('Select a rating') }}</option>
                <option value="1">{{ $t('1 Star - Poor') }}</option>
                <option value="2">{{ $t('2 Star - Fair') }}</option>
                <option value="3">{{ $t('3 Star - Average') }}</option>
                <option value="4">{{ $t('4 Star - Good') }}</option>
                <option value="5">{{ $t('5 Star - Excellent') }}</option>
              </select>
            </div>
          </div>

          <div class="col-sm-12 col-xs-12">
            <div class="form-group form-group-textarea">
              <label>{{ $t('Review') }}</label>
              <textarea
              v-model="form.comment"
                class="form-control"
                rows="5"
                :placeholder="$t('Write a review')"
                
              ></textarea>
            </div>
          </div>

          <div class="col-sm-12 col-xs-12">
            <button class="btn btn-secondary btn-sm-full-width" @click.prevent="submitReview">
              <span v-if="loading">{{ $t('Submitting') }}...</span>
              <span v-else>{{ $t('Submit') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import OverallRating from '../../components/property-details/property/template/OverallRating.vue';
import Review from '../../components/property-details/property/template/Review.vue';
import { useAgent, useAgency } from '@/stores/index';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['updateAverageRating']);
const { t } = useI18n();

const props = defineProps({
  reviews: { type: Array, default: () => [] },
  agent: { type: Object, default: () => null },
  agency: { type: Object, default: () => null }
});

const entityType = computed(() => (props.agent ? 'agent' : 'agency'));
const reviewsList = computed(() => (Array.isArray(props.reviews) ? props.reviews : []));

// Store
const { errors, loading } = storeToRefs(useAgent());
const successMessage = ref('');
const form = ref({
  title: '',
  rating: '',
  comment: '',
  agent_id: props.agent?.id || null,
  agency_id: props.agency?.id || null
});

// Pagination
const currentPage = ref(1);
const perPage = 4;
const paginatedReviews = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return reviewsList.value.slice(start, start + perPage);
});
const totalPages = computed(() => Math.ceil(reviewsList.value.length / perPage));
const goToPage = (page) => { if (page >= 1 && page <= totalPages.value) currentPage.value = page; };

// Average Rating
const averageRating = computed(() =>
  reviewsList.value.length
    ? parseFloat((reviewsList.value.reduce((s, r) => s + r.rating, 0) / reviewsList.value.length).toFixed(1))
    : 0
);
watch(averageRating, (val) => emit('updateAverageRating', val), { immediate: true });

const submitReview = async () => {
  successMessage.value = '';
  errors.value = {};
  loading.value = true;

  try {
    if (entityType.value === 'agent') {
      await useAgent().addReview(form.value);
    } else {
      await useAgency().addReview(form.value);
    }

    if (!Object.keys(errors.value?.data?.errors || {}).length) {
      successMessage.value = t('Your review has been submitted');
      form.value = { title: '', rating: '', comment: '', agent_id: props.agent?.id || null, agency_id: props.agency?.id || null };
    }
  } finally {
    loading.value = false;
  }
};
</script>