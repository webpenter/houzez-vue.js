<template>
  <div class="container mt-5">
    <!-- Newsletter Section -->
    <div class="newsletter d-flex">
      <h2>Newsletter To Get Updated<br> The Latest News</h2>
      <div class="d-flex flex-grow-1 subscribe-input-btn">
        <input type="email" v-model="email" class="form-control" placeholder="Enter your Email">
        <button @click="subscribeNewsletter" class="btn subscribe-btn">
          Subscribe Now <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
    <!-- Success/Error Message -->
    <p v-if="message" :class="{'text-success': success, 'text-danger': !success}">
      {{ message }}
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useNewsLetter } from '@/stores/newsletter/subscribe'; // Import Pinia store

export default {
  setup() {
    const email = ref('');
    const message = ref('');
    const success = ref(false);
    const newsLetter = useNewsLetter(); // Initialize store

    const subscribeNewsletter = async () => {
      if (!email.value) {
        message.value = "Please enter a valid email!";
        success.value = false;
        return;
      }

      const response = await newsLetter.subscribeNewsletter(email.value);
      message.value = response.message;
      success.value = response.success;

      if (response.success) email.value = ''; // Clear input field on success
    };

    return { email, message, success, subscribeNewsletter };
  }
};
</script>
