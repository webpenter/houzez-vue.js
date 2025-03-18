<template>
  <div class="Reviews">
    <div class="block-title-wrap review-title-wrap d-flex align-items-center">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
          <h5 class="my-4">6 Reviews</h5>
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
                                                        <span itemprop="bestRating">5
                                                        </span>
                                                        )
                                                    </span>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
          <div class="row w-100">
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="sort-by-title">
                  <p class="pe-2">{{$t('Sort')}}&nbsp;{{$t('by:')}}</p>
                </div>
                <!-- sort-by-title -->
                <div class="me-2">
                  <div class="dropdown bootstrap-select">
                    <select id="sort_review"
                            class="selectpicker form-control" title=""
                            data-live-search="false"
                            data-dropdown-align-right="auto">
                      <option value="">Default Order</option>
                      <option value="a_date">Date Old to New</option>
                      <option value="d_date">Date New to Old</option>
                      <option value="a_rating">Rating (Low to High)
                      </option>
                      <option value="d_rating">Rating (High to Low)
                      </option>
                    </select>
                    <div class="dropdown-menu">
                      <div class="inner show" role="listbox"
                           id="bs-select-3" tabindex="-1">
                        <div class="dropdown-menu inner show"
                             role="presentation"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- d-flex -->
            </div>
            <div class="col-6">
              <a class="btn hz-btn-lreview btn-primary" href="">
                <p class="fs-6 text-white">{{$t('Leave a Review')}}</p>
              </a>
            </div>
          </div>
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
    </div>
  </div>
  <div class="Leave-Review mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div
        class="py-lg-5 py-md-3 py-sm-2 py-2 d-flex justify-content-between align-items-center">
      <h5>{{$t('Leave a Review')}}</h5>
    </div><!-- block-title-wrap -->
    <div class="block-content-wrap">
      <form method="post" action="#">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="form-group">
              <div class="my-2 fw-bold">{{$t('Email')}}</div>
              <input class="form-control" name="name"
                     :placeholder="$t('you@example.com')" type="text">
            </div>
          </div><!-- col-md-6 col-sm-12 -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="my-2 fw-bold">{{$t('Title')}}</div>
              <input class="form-control" name="mobile"
                     :placeholder="$t('Enter your Title')" type="text">
            </div>
          </div><!-- col-md-6 col-sm-12 -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="my-2 fw-bold">{{$t('Rating')}}</div>
              <input class="form-control" name="email"
                     :placeholder="$t('Enter your Rating')" type="email">
            </div>
          </div>
          <!-- col-md-6 col-sm-12 -->
          <div class="col-sm-12 col-xs-12">
            <div class="form-group form-group-textarea">
              <div class="fw-bold py-2">{{$t('Review')}}</div>
              <textarea class="form-control hz-form-message" name="message"
                        rows="5"
                        :placeholder="$t('Enter your Message')">Hello, I am interested in [Renovated apartment at last floor]</textarea>
            </div>
          </div><!-- col-sm-12 col-xs-12 -->
          <div class="col-sm-12 col-12">
            <div class="form-group">
              <div
                  class="control control--checkbox m-0 hz-terms-of-use hz-no-gdpr-checkbox">
                <div class="gdpr-text-wrap py-3">
                  {{$t('By submitting this form I agree to')}}
                  <a href="" class="text-primary">{{$t('Terms of Use')}}</a>
                </div>
                <button class="btn btn-secondary bg-success">
                  <span class="btn-loader houzez-loader-js"></span>
                  {{$t('Submit Review')}}
                </button>
              </div>
            </div><!-- form-group -->
          </div>
        </div><!-- row -->
      </form>
    </div><!-- block-content-wrap -->
  </div>
</template>

<script setup>
</script>