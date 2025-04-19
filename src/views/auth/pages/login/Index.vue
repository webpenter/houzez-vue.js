<template>
  <AuthLayout heading="Sign in to your account" route-text="Don't have an account?" route-name="auth.register"
    route-title="Sign up">
    <form @submit.prevent="submit" id="stripe-login">
      <div class="field padding-bottom--24">
        <label for="email">Email </label>
        <input @input="validateField('email')" type="email" v-model="formData.email" name="email">
        <div class="text-danger mt-2" v-if="localErrors.email">
          {{ localErrors.email }}
        </div>
      </div>
      <div class="field padding-bottom--24">
        <div class="grid--50-50">
          <label for="password">Password</label>
          <!--                  <div class="reset-pass">-->
          <!--                    <a href="#">Forgot your password?</a>-->
          <!--                  </div>-->
        </div>
        <input @input="validateField('password')" type="password" v-model="formData.password" name="password">
        <div class="text-danger mt-2" v-if="localErrors.password">
          {{ localErrors.password }}
        </div>
      </div>
      <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
        <!--                <label for="checkbox">-->
        <!--                  <input type="checkbox" name="checkbox"> Stay signed in-->
        <!--                </label>-->
      </div>
      <div class="field padding-bottom--24">
        <button type="submit" class="submit-btn" :style="{ pointerEvents: btnLoading || hasErrors ? 'none' : 'auto' }"
          :disabled="hasErrors || btnLoading">
          <span v-if="!btnLoading">Login</span>
          <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        </button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useAuth, useNotification } from "@/stores/index.js";
import router from "@/router/index.js";
import AuthLayout from "@/views/auth/layout/AuthLayout.vue";

const notify = useNotification();
const btnLoading = ref(false);

const formData = reactive({
  email: '',
  password: '',
});

const localErrors = ref({
  email: "",
  password: "",
});

const validateField = (field) => {
  if (field === "email") {
    if (!formData.email) {
      localErrors.value.email = "Email field is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      localErrors.value.email = "Please enter a valid email address.";
    } else {
      localErrors.value.email = "";
    }
  } else if (field === "password" && !formData.password) {
    localErrors.value.password = "Password field is required.";
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
    const response = await useAuth().login(formData);

    btnLoading.value = false;

    if (response.status === 200) {
      notify.Success("Login successfully");
      router.push({ name: 'dashboard' });
    } else if (response.status === 401) {
      notify.Error("Invalid email or password");
    } else {
      notify.Error("An error occurred while trying to login.");
    }
  } catch (error) {
    notify.Error("An error occurred");
  }
}
</script>