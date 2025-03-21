<template>
  <div class="container mt-5">
    <!-- Newsletter Section -->
    <div class="newsletter d-flex">
      <h2>{{ $t('Newsletter To Get Updated')}}<br> {{ $t('The Latest News')}}</h2>
      <div class="d-flex flex-grow-1 subscribe-input-btn">
        <input type="email" v-model="email" class="form-control" :placeholder="$t('Enter your Email')">
        <button @click="subscribeNewsletter" class="btn subscribe-btn">
          {{ $t('Subscribe Now')}} <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useNewsletterSubscriber, useNotification} from "@/stores/index.js";

const email = ref('');
const newsLetterStore = useNewsletterSubscriber();
const notify = useNotification();

const subscribeNewsletter = async () => {
  if (!email.value) {
    notify.Error("Please enter an email address!");
    return;
  }

  try {
    const response = await newsLetterStore.subscribeNewsletter(email.value);

      if (response.status === 200) {
        notify.Success("Newsletter subscribed successfully.");
        email.value = '';
      } else if (response.status === 400) {
        notify.Error("Please enter a valid email!");
      } else if (response.status === 409) {
        notify.Error("You are already Subscribed.");
      } else {
        notify.Error("Subscription Failed.");
      }
  } catch (error) {
    notify.Error("An error occurred. Please try again.");
  }
};
</script>
