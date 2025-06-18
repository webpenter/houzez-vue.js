<template>
    <div class="property-review-wrap property-section-wrap" id="property-review-wrap">
        <div class="block-title-wrap review-title-wrap d-flex align-items-center">
            <h2>{{ reviews.length }} Reviews</h2>
            <Rating />
            <ReviewsSortBy />
            <a class="btn btn-primary btn-slim" href="#property-review-form">Leave a Review</a>
        </div>

        <ul class="review-list-wrap list-unstyled">
            <Review v-for="(review, index) in reviews" :key="index" :review="review" />
        </ul>

        <div class="pagination-wrap">
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <i class="houzez-icon icon-arrow-left-1"></i>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <i class="houzez-icon icon-arrow-right-1"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="block-wrap" id="property-review-form">
            <div class="block-title-wrap">
                <h3>Leave a Review</h3>
            </div><!-- block-title-wrap -->
            <div class="block-content-wrap">
                <!-- Error Alert -->
                <div v-if="errors?.data?.errors && Object.keys(errors.data.errors).length"
                    class="alert alert-danger alert-dismissible fade show" role="alert">
                    <ul>
                        <li v-for="(error, key) in errors.data.errors" :key="key">
                            {{ error[0] }}
                        </li>
                    </ul>
                    <button type="button" class="close" @click="errors = {}">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!-- alert -->
                <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ successMessage }}
                    <button type="button" class="close" @click="successMessage = ''">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!-- alert -->
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <label>Title</label>
                            <input class="form-control" placeholder="Enter a title" type="text" v-model="form.title">
                        </div>
                    </div><!-- col-md-6 col-sm-12 -->
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <label>Rating</label>
                            <select class="form-control" v-model="form.rating">
                                <option disabled value="">Select a rating</option>
                                <option value="1">1 Star - Poor</option>
                                <option value="2">2 Star - Fair</option>
                                <option value="3">3 Star - Average</option>
                                <option value="4">4 Star - Good</option>
                                <option value="5">5 Star - Excellent</option>
                            </select><!-- selectpicker -->
                        </div>
                    </div><!-- col-md-6 col-sm-12 -->
                    <div class="col-md-12 col-sm-12">
                        <div class="form-group">
                            <label>Email</label>
                            <input class="form-control" placeholder="Enter your email" type="email"
                                v-model="form.email">
                        </div>
                    </div><!-- col-md-6 col-sm-12 -->
                    <div class="col-sm-12 col-xs-12">
                        <div class="form-group form-group-textarea">
                            <label>Review</label>
                            <textarea class="form-control" rows="5" placeholder="Write a review"
                                v-model="form.comment"></textarea>
                        </div>
                    </div><!-- col-sm-12 col-xs-12 -->
                    <div class="col-sm-12 col-xs-12">
                        <button class="btn btn-secondary btn-sm-full-width" @click.prevent="submitReview">
                            <span class="btn-loader" v-if="loading">Submitting...</span>
                            <span v-else>Submit</span>
                        </button>
                    </div><!-- col-sm-12 col-xs-12 -->
                </div><!-- row -->
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Rating from './template/Rating.vue';
import ReviewsSortBy from './template/ListingSortBy.vue';
import Review from './template/Review.vue';
import { useReview } from '@/stores/index';
import { storeToRefs } from 'pinia';

const props = defineProps({
    property: {
        type: Object,
        required: true
    }
});

// Store
const reviewStore = useReview();
const { reviews, errors, loading } = storeToRefs(reviewStore);

// Success message
const successMessage = ref('');

// Review form data
const form = ref({
    property_id: props.property.id,
    title: '',
    rating: '',
    email: '',
    comment: ''
});

// Fetch reviews on mount
onMounted(() => {
    reviewStore.fetchReviews(props.property.id);
});

// Submit review
const submitReview = async () => {
    successMessage.value = '';
    reviewStore.errors = {};
    reviewStore.loading = true;

    try {
        await reviewStore.addReview(form.value);

        // ✅ Only show success if there are no validation errors
        if (!Object.keys(reviewStore.errors.value?.data?.errors || {}).length) {
            successMessage.value = 'Your review has been submitted.';

            // ✅ Reset form
            form.value = {
                property_id: props.property.id,
                title: '',
                rating: '',
                email: '',
                comment: ''
            };
        }
    } catch (error) {
        // Do nothing — error alert will show in the template
    } finally {
        reviewStore.loading = false;
    }
};

</script>
