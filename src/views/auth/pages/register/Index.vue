<template>
  <AuthLayout
      heading="Sign up your account"
      route-text="Already have an account?"
      route-name="auth.login"
      route-title="Login"
  >
            <form id="stripe-login" @submit.prevent="submit">
              <div class="field padding-bottom--24">
                <label for="username">Username</label>
                <input
                    v-model="formData.username"
                    type="text"
                    name="username"
                    @input="validateField('username')">
                <div v-if="localErrors.username" class="text-danger mt-2">
                  {{ localErrors.username }}
                </div>
              </div>
              <div class="field padding-bottom--24">
                <label for="email">Email</label>
                <input
                    v-model="formData.email"
                    type="email"
                    name="email"
                    @input="validateField('email')"
                >
                <div v-if="localErrors.email" class="text-danger mt-2">
                  {{ localErrors.email }}
                </div>
              </div>
              <div class="field padding-bottom--24">
                <div class="grid--50-50">
                  <label for="password">Password</label>
                </div>
                <input
                    v-model="formData.password"
                    type="password"
                    name="password"
                    @input="validateField('password')"
                >
                <div v-if="localErrors.password" class="text-danger mt-2">
                  {{ localErrors.password }}
                </div>
              </div>
              <div class="field padding-bottom--24">
                <div class="grid--50-50">
                  <label for="password">Confirm Password</label>
                </div>
                <input
                    v-model="formData.password_confirmation"
                    type="password"
                    name="password_confirmation"
                    @input="validateField('password_confirmation')"
                >
                <div v-if="localErrors.password_confirmation" class="text-danger mt-2">
                  {{ localErrors.password_confirmation }}
                </div>
              </div>
              <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
              </div>
              <div class="field padding-bottom--24">
                <button
type="submit" class="submit-btn"
                        :style="{pointerEvents: btnLoading || hasErrors ? 'none' : 'auto'}"
                        :disabled="hasErrors || btnLoading">
                  <span v-if="!btnLoading">Sign up</span>
                  <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
              </div>
            </form>
  </AuthLayout>
</template>

<script setup>
import {computed, reactive, ref} from "vue";
import {useAuth, useNotification} from "@/stores/index.js";
import router from "@/router/index.js";
import AuthLayout from "@/views/auth/layout/AuthLayout.vue";

const notify = useNotification();
const btnLoading = ref(false);

const formData = reactive({
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const localErrors = ref({
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const validateField = (field) => {
  if (field === "username") {
    if (!formData.username) {
      localErrors.value.username = "Username field is required.";
    } else if (formData.username.length < 4) {
      localErrors.value.username = "Username must be at least 4 characters.";
    } else if (/\s/.test(formData.username)) {
      localErrors.value.username = "Username cannot contain spaces.";
    } else if (!/^[A-Za-z_]\w*$/.test(formData.username)) {
      localErrors.value.username = "Username must start with a letter or underscore and contain only letters, numbers, or underscores.";
    } else {
      localErrors.value.username = "";
    }
  } else if (field === "email") {
    if (!formData.email) {
      localErrors.value.email = "Email field is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      localErrors.value.email = "Please enter a valid email address.";
    } else {
      localErrors.value.email = "";
    }
  } else if (field === "password") {
    if (!formData.password) {
      localErrors.value.password = "Password field is required.";
    } else if (formData.password.length < 8) {
      localErrors.value.password = "Password must be at least 8 characters.";
    } else {
      localErrors.value.password = "";
    }
  } else if (field === "password_confirmation") {
    if (!formData.password_confirmation) {
      localErrors.value.password_confirmation = "Password Confirmation field is required.";
    } else if (formData.password !== formData.password_confirmation) {
      localErrors.value.password_confirmation = "Passwords do not match.";
    } else {
      localErrors.value.password_confirmation = "";
    }
  } else {
    localErrors.value[field] = "";
  }
};



const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const submit = async () => {
  Object.keys(localErrors.value).forEach((field) => validateField(field));

  if (hasErrors.value) {
    notify.Error("Please fix the validation errors before proceeding.");
    return;
  }

  btnLoading.value = true;
  try {
    const response = await useAuth().register(formData)

    btnLoading.value = false;

    if (response.status === 201) {
      notify.Success("Registration successful.");
      router.push({ name: 'dashboard.create-listing.step-1' });
    } else if (response.status === 422) {
      const errors = response.data.errors;
      if (errors) {
        Object.keys(errors).forEach((field) => {
          notify.Error(`${errors[field].join(', ')}`);
        });
      }
    } else {
      notify.Error("Registration failed.");
    }
  } catch (error) {
    notify.Error("An error occurred.");
  }
}

</script>