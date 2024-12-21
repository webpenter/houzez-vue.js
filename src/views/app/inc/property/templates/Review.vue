<template>
    <li class="property-review">
      <div class="d-flex">
        <div class="review-image flex-grow-1">
          <img class="rounded-circle" src="https://placehold.co/64x64" alt="agent">
        </div>
        <div class="review-message">
          <div class="d-flex align-items-center">
            <h4 class="review-title">This is a review title</h4>
            <!-- Rating Component Placeholder -->
          </div>
          <time class="review-date" datetime="2018-07-26T04:37:21+00:00">
            <i class="houzez-icon icon-attachment mr-1"></i> July 26, 2018
          </time>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
  
          <div class="review-like mt-2">
            <ul class="list-inline">
              <li class="list-inline-item review-like-button">
                <a @click="incrementLike"><i class="houzez-icon icon-like mr-1"></i></a> {{ likeCount }}
              </li>
              <li class="list-inline-item review-dislike-button">
                <a @click="incrementDislike"><i class="houzez-icon icon-dislike mr-1"></i></a> {{ dislikeCount }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const likeCount = ref(3);
  const dislikeCount = ref(1);
  
  const incrementLike = () => {
    likeCount.value++;
  };
  
  const incrementDislike = () => {
    dislikeCount.value++;
  };
  </script>
  