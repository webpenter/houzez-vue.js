<template>
  <DashboardHeader heading="Blog" />
  <h2>Blog</h2>

  <div v-if="loading">
    <p>Loading...</p>
  </div>

  <div v-else class="row">
    <div class="col-md-3"></div>

    <div
      class="col-md-9"
      style="background-color: white; margin-left: 285px; padding: 10px"
    >
      <form @submit.prevent="submitForm">
        <div class="row">
  <!-- Blog Image Upload (like profile picture) -->
  <div class="col-md-3 text-center">
    <div v-if="imagePreviewUrl" class="mb-2">
      <img
        :src="imagePreviewUrl"
        alt="Preview"
        class="img-fluid"
        style="height: 180px; width: 180px;   border: 1px solid #ccc;"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary btn-block"
      @click="triggerImageUpload"
      style="width: 100%;"
    >
      Upload Blog Picture
    </button>
    <input
      type="file"
      ref="imageInput"
      @change="handleImage"
      style="display: none"
    />
    <span v-if="errors.image" class="text-danger mt-1 d-block">{{
      errors.image[0]
    }}</span>
  </div>

  <!-- Form Fields (like input style shown in screenshot) -->
  <div class="col-md-9">
    <div class="row">
      <!-- Date -->
      <div class="col-md-6 mb-3">
        <label class="form-label fw-bold">Date</label>
        <input
          type="date"
          class="form-control"
          v-model="form.date"
        />
        <span v-if="errors.date" class="text-danger mt-1 d-block">{{
          errors.date[0]
        }}</span>
      </div>

      <!-- Time -->
      <div class="col-md-6 mb-3">
        <label class="form-label fw-bold">Time</label>
        <input
          type="time"
          class="form-control"
          v-model="form.time"
        />
        <span v-if="errors.time" class="text-danger mt-1 d-block">{{
          errors.time[0]
        }}</span>
      </div>

      <!-- Title -->
      <div class="col-md-6 mb-3">
        <label class="form-label fw-bold">Title</label>
        <input
          type="text"
          class="form-control"
          v-model="form.title"
          placeholder="Enter your title"
        />
        <span v-if="errors.title" class="text-danger mt-1 d-block">{{
          errors.title[0]
        }}</span>
      </div>

      <!-- Detail -->
      <div class="col-md-12 mb-3">
        <label class="form-label fw-bold">Detail</label>
        <textarea
          class="form-control"
          v-model="form.detail"
          placeholder="Enter blog detail"
          rows="6"
        ></textarea>
        <span v-if="errors.detail" class="text-danger mt-1 d-block">{{
          errors.detail[0]
        }}</span>
      </div>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="btn btn-success mt-3"
      :disabled="loading"
    >
      Submit
    </button>
  </div>
</div>


      
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useNotification } from "@/stores/index.js";
import { useBlogStore } from "@/stores/blog.js";

const blogStore = useBlogStore();
const loading = ref(false);
const errors = reactive({});
const imageInput = ref(null);
const imagePreviewUrl = ref(null);
const form = reactive({
  image: null,
  date: "",
  time: "",
  title: "",
  detail: "",
});

// Trigger hidden file input
const triggerImageUpload = () => {
  imageInput.value.click();
};

// Handle image file
const handleImage = (event) => {
  const file = event.target.files[0];
  form.image = file;
  imagePreviewUrl.value = file ? URL.createObjectURL(file) : null;
};

// Submit the blog
const submitForm = async () => {
  loading.value = true;
  Object.keys(errors).forEach((key) => delete errors[key]);

  try {
    const response = await blogStore.addBlog(form);

    if (response.success) {
      useNotification().Success("Blog created successfully!");

      Object.assign(form, {
        image: null,
        date: "",
        time: "",
        title: "",
        detail: "",
      });
      imagePreviewUrl.value = null;

      if (imageInput.value) imageInput.value.value = null;
    } else {
      Object.assign(errors, response.errors || {});
      useNotification().Error(response.message || "Something went wrong!");
    }
  } catch (error) {
    useNotification().Error("An error occurred, please try again!");
  }

  loading.value = false;
};
</script>

<style scoped>
button.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 8px 16px;
  font-weight: 500;
}

img.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
