<template>
   <p class="text-center mt-3" v-if="paginatedReviews.length == 0">No reviews found.</p>
  <div class="property-review-wrap property-section-wrap" id="property-review-wrap">
    <div class="block-title-wrap review-title-wrap d-flex align-items-center">
      <h2>{{ reviewsList.length }} {{ $t('Reviews') }}</h2>
      <OverallRating :value="averageRating" />
      <a class="btn btn-primary btn-slim" href="#property-review-form">{{ $t('Leave a Review') }}</a>
    </div>

    <ul class="review-list-wrap list-unstyled">
      <Review v-for="(review, index) in paginatedReviews" :key="index" :review="review" />
    </ul>

    <div class="pagination-wrap" v-if="totalPages > 1">
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

    <div class="block-wrap" id="property-review-form">
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
              <input class="form-control" :placeholder="$t('Enter a title')" type="text" v-model="form.title" />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>{{ $t('Rating') }}</label>
              <select class="form-control" v-model="form.rating">
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
                class="form-control"
                rows="5"
                :placeholder="$t('Write a review')"
                v-model="form.comment"
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

<!-- <script setup>
import { ref, watch, computed } from 'vue';
import OverallRating from '../../components/property-details/property/template/OverallRating.vue';
import Review from '../../components/property-details/property/template/Review.vue';
import { useAgent, useAgency } from '@/stores/index';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

const emit = defineEmits(['updateAverageRating']);
const { t } = useI18n();

const props = defineProps({
  reviews: {
    type: Array,
    default: () => []
  },
  agent: {
    type: Object,
    default: () => null
  },
  agency: {
    type: Object,
    default: () => null
  }
});

const entity = computed(() => props.agent || props.agency);
const entityType = computed(() => (props.agent ? 'agent' : 'agency'));

// Store
const reviewStore = useAgent();
const { reviews: storeReviews, errors, loading } = storeToRefs(reviewStore);

// Reactive wrapper for reviews
const reviewsList = computed(() => Array.isArray(props.reviews) ? props.reviews : []);

// Pagination setup
const currentPage = ref(1);
const perPage = 4;

const paginatedReviews = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return reviewsList.value.slice(start, start + perPage);
});

const totalPages = computed(() => {
  return Math.ceil(reviewsList.value.length / perPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Average Rating
const averageRating = computed(() => {
  if (!reviewsList.value.length) return 0;
  const total = reviewsList.value.reduce((sum, review) => sum + review.rating, 0);
  return parseFloat((total / reviewsList.value.length).toFixed(1));
});

watch(averageRating, (newVal) => {
  emit('updateAverageRating', newVal);
}, { immediate: true });

// Form and Submit
const successMessage = ref('');
const form = ref({
  title: '',
  rating: '',
  comment: '',
  agent_id: props.agent?.id || null,
  agency_id: props.agency?.id || null
});

const resetForm = () => {
  form.value = {
    title: '',
    rating: '',
    comment: '',
    agent_id: props.agent?.id || null,
    agency_id: props.agency?.id || null
  };
};

const { addReview: addAgentReview } = useAgent();
const { addReview: addAgencyReview } = useAgency();

const submitReview = async () => {
  successMessage.value = '';
  reviewStore.errors = {};
  reviewStore.loading = true;

  try {
    let response;

    if (entityType.value === 'agent') {
      response = await addAgentReview(form.value);
    } else if (entityType.value === 'agency') {
      response = await addAgencyReview(form.value);
    } else {
      throw new Error('Unknown entity type');
    }

    const hasErrors = Object.keys(reviewStore.errors.value?.data?.errors || {}).length > 0;

    if (!hasErrors) {
      successMessage.value = t('Your review has been submitted');
      resetForm();
    }
  } catch (error) {
    // Errors handled in store
  } finally {
    reviewStore.loading = false;
  }
};
</script> -->

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