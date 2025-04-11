<template>
  <div class="Reviews">
    <div class="block-title-wrap review-title-wrap d-flex align-items-center">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
          <h4 class="my-4">6 Reviews</h4>
          <div class="rating-score-wrap flex-grow-1 ms-1">
            <span class="star"><i class="fa-solid fa-star"></i></span>
            <span class="star"><i class="fa-solid fa-star"></i></span>
            <span class="star"><i class="fa-solid fa-star"></i></span>
            <span class="star"><i class="fa-solid empty-star"></i></span>
            <span class="star"><i class="fa-solid empty-star"></i></span>
            <span class="star-text star-text-right">
              (
              <span itemprop="ratingValue">3.33</span>
              out of
              <span itemprop="bestRating">5</span>
              )
            </span>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-end">
          <a @click="leaveReviewForm = true" class="btn hz-btn-lreview btn-primary" href="javascript:void(0);">
            <p class="fs-6 text-white">Leave&nbsp;a&nbsp;Review</p>
          </a>
        </div>

        <div class="col-12">
          <div class="d-flex mt-3">
            <div class="review-image">
              <img class="rounded-circle" width="64" height="64" alt="thumb"
                   data-cfsrc="https://demo01.houzez.co/wp-content/themes/houzez/img/profile-avatar.png"
                   src="https://demo01.houzez.co/wp-content/themes/houzez/img/profile-avatar.png">
            </div>
            <div class="review-message ps-3 w-100">
              <div class="d-flex align-items-center">
                <p class="fw-bold">ijd</p>
                <div class="rating-score-wrap flex-grow-1 ps-2">
                  <span class="star"><i class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                </div>
              </div><!-- d-flex -->
              <time class="review-date d-flex align-items-center">
                <i class="fa-solid fa-link"></i>
                <p class="ms-2">12 months ago</p>
              </time>
              <p class="mt-2">ZS</p>

              <div class="review-like mt-2 d-flex">
                <div class="likes-container-js ms-auto">
                  <div class="list-inline-item review-like-button">
                    <a class="hz-like-dislike-js" data-id="17873"
                       data-type="likes"
                       data-msg="You have already voted">
                      <i class="fa-solid fa-heart"></i>
                    </a>
                    <span class="likes-count">0</span>
                  </div>
                  <div class="list-inline-item review-dislike-button">
                    <a class="hz-like-dislike-js" data-id="17873"
                       data-type="dislikes"
                       data-msg="You have already voted">
                      <i class="fa-solid fa-dis-like"></i>
                    </a>
                    <span class="dislikes-count">0</span>
                  </div>

                </div>
              </div>
            </div><!-- review-message -->
          </div>
          <div class="d-flex mt-3">
            <div class="review-image">
              <img class="rounded-circle" width="64" height="64" alt="thumb"
                   data-cfsrc="https://demo01.houzez.co/wp-content/themes/houzez/img/profile-avatar.png"
                   src="https://demo01.houzez.co/wp-content/themes/houzez/img/profile-avatar.png">
            </div>
            <div class="review-message ps-3 w-100">
              <div class="d-flex align-items-center">
                <p class="fw-bold">ijd</p>
                <div class="rating-score-wrap flex-grow-1 ps-2">
                                                                <span class="star"><i
                                                                    class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                  <span class="star"><i
                      class="fa-solid fa-star"></i></span>
                </div>
              </div><!-- d-flex -->
              <time class="review-date d-flex align-items-center">
                <i class="fa-solid fa-link"></i>
                <p class="ms-2">12 months ago</p>
              </time>
              <p class="mt-2">ZS</p>

              <div class="review-like mt-2 d-flex">
                <div class="likes-container-js ms-auto">
                  <div class="list-inline-item review-like-button">
                    <a class="hz-like-dislike-js" data-id="17873"
                       data-type="likes"
                       data-msg="You have already voted">
                      <i class="fa-solid fa-heart"></i>
                    </a>
                    <span class="likes-count">0</span>
                  </div>
                  <div class="list-inline-item review-dislike-button">
                    <a class="hz-like-dislike-js" data-id="17873"
                       data-type="dislikes"
                       data-msg="You have already voted">
                      <i class="fa-solid fa-dis-like"></i>
                    </a>
                    <span class="dislikes-count">0</span>
                  </div>

                </div>
              </div>
            </div><!-- review-message -->
          </div>
        </div>
      </div>
      <div class="row">
      </div>
    </div>
  </div>
  <el-dialog v-model="leaveReviewForm" title="Leave a Review" width="500" align-center>
      <div class="block-content-wrap">
        <form method="post" action="#">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <div class="my-2 fw-bold">Email</div>
                <input class="form-control" name="name"
                       placeholder="you@example.com" type="text">
              </div>
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <div class="my-2 fw-bold">Title</div>
                <input class="form-control" name="mobile"
                       placeholder="Enter your Title" type="text">
              </div>
            </div><!-- col-md-6 col-sm-12 -->
            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <div class="my-2 fw-bold">Rating</div>
                <input class="form-control" name="email"
                       placeholder="Enter your Rating" type="email">
              </div>
            </div>
            <!-- col-md-6 col-sm-12 -->
            <div class="col-sm-12 col-xs-12">
              <div class="form-group form-group-textarea">
                <div class="fw-bold py-2">Review</div>
                <textarea class="form-control hz-form-message" name="message"
                          rows="5"
                          placeholder="Enter your Message">Hello, I am interested in [Renovated apartment at last floor]</textarea>
              </div>
            </div><!-- col-sm-12 col-xs-12 -->
            <div class="col-sm-12 col-12">
              <div class="form-group">
                <div
                    class="control control--checkbox m-0 hz-terms-of-use hz-no-gdpr-checkbox">
                  <div class="gdpr-text-wrap py-3">
                    By submitting this form I agree to
                    <a href="" class="text-primary">Terms of Use</a>
                  </div>
                  <button class="btn btn-secondary bg-success">
                    <span class="btn-loader houzez-loader-js"></span>
                    Submit Review
                  </button>
                </div>
              </div><!-- form-group -->
            </div>
          </div><!-- row -->
        </form>
      </div><!-- block-content-wrap -->
  </el-dialog>
</template>

<script setup>
import {ref} from "vue";

const leaveReviewForm = ref(false);
</script>