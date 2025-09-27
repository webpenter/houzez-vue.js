<template>
    <div
    id="property-review-wrap"
    class="property-review-wrap property-section-wrap">
        <div class="block-title-wrap review-title-wrap d-flex align-items-center">
            <h2>{{ reviews.length }} {{ $t('Reviews') }}</h2>
            <OverallRating :value="parseFloat(averageRating)" />
            <!-- <ReviewsSortBy /> -->
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

        <div
        id="property-review-form"
        class="block-wrap">
            <div class="block-title-wrap">
                <h3>{{ $t('Leave a Review') }}</h3>
            </div>
            <div class="block-content-wrap">
                <!-- Form -->
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('Title') }}*</label>
                            <input class="form-control" :placeholder="$t('Enter a title')" type="text">
                            <div v-if="clientErrors.title" class="text-danger">{{ clientErrors.title }}</div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('Rating') }}*</label>
                            <select 
                             v-model="form.rating"
                            class="form-control">
                                <option disabled value="">{{ $t('Select a rating') }}</option>
                                <option value="1">{{ $t('1 Star - Poor') }}</option>
                                <option value="2">{{ $t('2 Star - Fair') }}</option>
                                <option value="3">{{ $t('3 Star - Average') }}</option>
                                <option value="4">{{ $t('4 Star - Good') }}</option>
                                <option value="5">{{ $t('5 Star - Excellent') }}</option>
                            </select>
                            <div v-if="clientErrors.rating" class="text-danger">{{ clientErrors.rating }}</div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12">
                        <div class="form-group">
                            <label>{{ $t('Email') }}*</label>
                            <input 
                            v-model="form.email"
                            class="form-control" :placeholder="$t('Enter your email')" type="email"
                                >
                            <div v-if="clientErrors.email" class="text-danger">{{ clientErrors.email }}</div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xs-12">
                        <div class="form-group form-group-textarea">
                            <label>{{ $t('Review') }}*</label>
                            <textarea 
                            v-model="form.comment"
                            class="form-control" rows="5" :placeholder="$t('Write a review')"
                                ></textarea>
                            <div v-if="clientErrors.comment" class="text-danger">{{ clientErrors.comment }}</div>
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
import OverallRating from './template/OverallRating.vue';
import Review from './template/Review.vue';
import { useReview, useNotification } from '@/stores/index';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    property: {
        type: Object,
        required: true
    }
});

// Stores
const reviewStore = useReview();
const notificationStore = useNotification();
const { reviews, loading } = storeToRefs(reviewStore);

// Client-side errors
const clientErrors = ref({});

// Review form data
const form = ref({
    property_id: props.property.id,
    title: '',
    rating: '',
    email: '',
    comment: ''
});

// Client-side validation
function validate() {
    clientErrors.value = {};
    const fieldsWithError = [];

    if (!form.value.title) {
        clientErrors.value.title = t('Title is required.');
        fieldsWithError.push('Title');
    }
    if (!form.value.rating) {
        clientErrors.value.rating = t('Rating is required.');
        fieldsWithError.push('Rating');
    }
    if (!form.value.email) {
        clientErrors.value.email = t('Email is required.');
        fieldsWithError.push('Email');
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        clientErrors.value.email = t('Email is invalid.');
        fieldsWithError.push('Email');
    }
    if (!form.value.comment) {
        clientErrors.value.comment = t('Review is required.');
        fieldsWithError.push('Review');
    }

    return fieldsWithError;
}

// Fetch reviews when property changes
watch(
    () => props.property.id,
    (id) => {
        if (id) {
            reviewStore.fetchReviews(id);
        }
    },
    { immediate: true }
);

// Submit review
const submitReview = async () => {
    clientErrors.value = {};
    reviewStore.errors = {};

    // Run client-side validation
    const invalidFields = validate();

    if (invalidFields.length > 0) {
        const fieldList = invalidFields.join(', ');
        notificationStore.Error(`Please correct the following fields: ${fieldList}`);
        return;
    }

    reviewStore.loading = true;

    try {
        await reviewStore.addReview(form.value);

        const hasErrors = Object.keys(reviewStore.errors.value?.data?.errors || {}).length > 0;

        if (!hasErrors) {
            notificationStore.Success(t('Your review has been submitted'));
            form.value = {
                property_id: props.property.id,
                title: '',
                rating: '',
                email: '',
                comment: ''
            };
            // Optionally refetch reviews after success
            reviewStore.fetchReviews(props.property.id);
        } else {
            // Concatenate server errors for notification
            const errorMessages = Object.values(reviewStore.errors.value?.data?.errors || {}).flat().join(' ');
            notificationStore.Error(errorMessages || t('An error occurred while submitting your review.'));
        }
    } catch (error) {
        notificationStore.Error(t('An unexpected error occurred. Please try again.', error));
    } finally {
        reviewStore.loading = false;
    }
};

// Pagination Logic
const currentPage = ref(1);
const perPage = 4;

const paginatedReviews = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return reviews.value.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(reviews.value.length / perPage);
});

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const averageRating = ref(0);

watch(
    reviews,
    (newReviews) => {
        if (!newReviews.length) {
            averageRating.value = 0;
        } else {
            const total = newReviews.reduce((sum, review) => sum + review.rating, 0);
            averageRating.value = parseFloat((total / newReviews.length).toFixed(1));
        }
    },
    { immediate: true, deep: true }
);
</script>