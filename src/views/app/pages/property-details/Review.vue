<template>
  <div class="Reviews">
    <!-- Reviews Heading + Summary -->
    <div class="block-title-wrap review-title-wrap d-flex align-items-center">
      <div class="row w-100">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
          <h4 class="my-4">{{ reviews.length }} Reviews</h4>
          <div class="rating-score-wrap flex-grow-1 ms-1">
            <span v-for="n in 5" :key="n" class="star">
              <i :class="n <= averageRating ? 'fa-solid fa-star' : 'fa-solid empty-star'"></i>
            </span>
            <span class="star-text star-text-right">
              ({{ averageRating }} out of 5)
            </span>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-end">
          <template v-if="token">
            <button @click="leaveReviewForm = true" class="btn hz-btn-lreview btn-primary">
              <p class="fs-6 text-white">Leave&nbsp;a&nbsp;Review</p>
            </button>
          </template>
          <template v-else>
            <button @click="noAuthDialog = true" class="btn hz-btn-lreview btn-primary">
              <p class="fs-6 text-white">Leave&nbsp;a&nbsp;Review</p>
            </button>
          </template>
<!--          <button @click="leaveReviewForm = true" class="btn hz-btn-lreview btn-primary">-->
<!--            <p class="fs-6 text-white">Leave&nbsp;a&nbsp;Review</p>-->
<!--          </button>-->
        </div>

        <!-- All Reviews -->
        <div class="col-12 mt-4" v-if="reviews.length">
          <div v-for="review in reviews" :key="review.id" class="d-flex mt-3">
            <div class="review-image">
              <img class="rounded-circle" width="64" height="64" :alt="review.user?.name || 'User'" src="https://demo01.houzez.co/wp-content/themes/houzez/img/profile-avatar.png">
            </div>
            <div class="review-message ps-3 w-100">
              <div class="d-flex align-items-center">
                <p class="fw-bold">{{ review.user?.name || 'Anonymous' }}</p>
                <div class="rating-score-wrap flex-grow-1 ps-2">
                  <span v-for="n in 5" :key="n" class="star">
                    <i :class="n <= review.rating ? 'fa-solid fa-star' : 'fa-solid empty-star'"></i>
                  </span>
                </div>
              </div>
              <time class="review-date d-flex align-items-center">
                <i class="fa-solid fa-clock"></i>
                <p class="ms-2">{{ review.created_at }}</p>
              </time>
              <p class="mt-2">{{ review.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Review Modal -->
    <el-dialog v-model="leaveReviewForm" title="Leave a Review" width="500" align-center>
      <form @submit.prevent="submitReview">
        <div class="row">
          <!-- Email -->
          <div class="col-md-12 col-sm-12">
            <div class="form-group">
              <label class="my-2 fw-bold">Email</label>
              <input v-model="form.email" @input="validateField('email')" class="form-control" placeholder="you@example.com" type="text">
              <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
            </div>
          </div>

          <!-- Title -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label class="my-2 fw-bold">Title</label>
              <input v-model="form.title" @input="validateField('title')" class="form-control" placeholder="Enter your Title" type="text">
              <small v-if="errors.title" class="text-danger">{{ errors.title }}</small>
            </div>
          </div>

          <!-- Rating -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label class="my-2 fw-bold">Rating</label>
              <input v-model.number="form.rating" @input="validateField('rating')" class="form-control" placeholder="Enter Rating (1-5)" type="number" min="1" max="5">
              <small v-if="errors.rating" class="text-danger">{{ errors.rating }}</small>
            </div>
          </div>

          <!-- Comment -->
          <div class="col-sm-12">
            <div class="form-group form-group-textarea">
              <label class="fw-bold py-2">Review</label>
              <textarea v-model="form.comment" @input="validateField('comment')" class="form-control hz-form-message" rows="5" placeholder="Enter your Message"></textarea>
              <small v-if="errors.comment" class="text-danger">{{ errors.comment }}</small>
            </div>
          </div>

          <!-- Submit -->
          <div class="col-sm-12 col-12 mt-3">
            <button class="btn btn-success w-100" :disabled="loading">
              <span v-if="loading" class="spinner-border spinner-border-sm me-1"></span>
              Submit Review
            </button>
          </div>
        </div>
      </form>
    </el-dialog>
    <el-dialog v-model="noAuthDialog" title="Alert" width="500" align-center>
      <span>
        You can add leave a review only if you are authenticated. Please log in or sign up first to access this feature.
      </span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="noAuthDialog = false">Cancel</el-button>
          <el-button type="primary" @click="showLoginPage">
            Login
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {useReview, useToken} from "@/stores/index.js";
import {useRouter} from "vue-router";

const router = useRouter();
const leaveReviewForm = ref(false);
const noAuthDialog = ref(false)
const props = defineProps(['propertyId']);
const propertyId = props.propertyId;

const token = useToken().getToken;

const reviewStore = useReview();

const form = ref({
  property_id: propertyId,
  email: '',
  title: '',
  rating: 1,
  comment: '',
});

const errors = ref({});

// Real-time validation for each field
const validateField = (field) => {
  switch (field) {
    case 'email':
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.value.email) {
        errors.value.email = 'Email is required';
      } else if (!emailPattern.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email';
      } else {
        delete errors.value.email;
      }
      break;

    case 'title':
      if (!form.value.title) {
        errors.value.title = 'Title is required';
      } else if (form.value.title.length > 100) {
        errors.value.title = 'Title must be under 100 characters';
      } else {
        delete errors.value.title;
      }
      break;

    case 'rating':
      if (!form.value.rating || form.value.rating < 1 || form.value.rating > 5) {
        errors.value.rating = 'Rating must be between 1 and 5';
      } else {
        delete errors.value.rating;
      }
      break;

    case 'comment':
      if (!form.value.comment) {
        errors.value.comment = 'Comment is required';
      } else if (form.value.comment.length > 500) {
        errors.value.comment = 'Comment must be under 500 characters';
      } else {
        delete errors.value.comment;
      }
      break;
  }
};

// Full form validation (before submission)
const validateForm = () => {
  validateField('email');
  validateField('title');
  validateField('rating');
  validateField('comment');
  return Object.keys(errors.value).length === 0;
};

// Submit Review
const submitReview = async () => {
  if (!validateForm()) return;
  try {
    await reviewStore.addReview(form.value);
    leaveReviewForm.value = false;
    form.value = {
      property_id: propertyId,
      email: '',
      title: '',
      rating: 1,
      comment: '',
    };
  } catch (e) {
    console.error('Error submitting review:', e);
  }
};

// Reviews & Stats
const reviews = computed(() => reviewStore.reviews);
const loading = computed(() => reviewStore.loading);

const averageRating = computed(() => {
  if (!reviews.value.length) return 0;
  const sum = reviews.value.reduce((acc, r) => acc + r.rating, 0);
  return (sum / reviews.value.length).toFixed(2);
});

const showLoginPage = () => {
  router.push({name:'auth'});
  noAuthDialog.value = false;
}

onMounted(() => {
  reviewStore.fetchReviews(propertyId);
});
</script>
