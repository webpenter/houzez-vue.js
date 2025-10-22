<template>
<form @submit.prevent="submitLogin">
    <div v-if="error" class="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
        <div class="d-flex align-items-center">
            <span>{{ error }}</span>
        </div>
        <i
class="houzez-icon icon-remove-circle ms-3 cursor-pointer" style="cursor: pointer;" title="Dismiss"
            @click="error = null"></i>
    </div><!-- alert-danger -->

    <div class="login-form-wrap">
        <div class="form-group">
            <div class="form-group-field username-field">
                <input v-model="email" type="email" class="form-control" :placeholder="$t('Email')" />
            </div><!-- input-group -->
        </div><!-- form-group -->
        <div class="form-group">
            <div class="form-group-field password-field">
                <input v-model="password" type="password" class="form-control" :placeholder="$t('Password')" />
            </div><!-- input-group -->
        </div><!-- form-group -->
    </div><!-- login-form-wrap -->

    <div class="form-tools">
        <div class="d-flex">
            <label class="control control--checkbox flex-grow-1">
                <input type="checkbox" name="air-conditioning">{{ $t('Remeber me') }}
                <span class="control__indicator"></span>
            </label>
            <!-- <a href="#" data-toggle="modal" data-target="#reset-password-form" data-dismiss="modal">Forgot
                passoword?</a> -->
        </div><!-- d-flex -->
    </div><!-- form-tools -->

     <button type="submit" class="btn btn-primary btn-full-width">{{ $t('Login') }}</button>

    <!-- <div class="social-login-wrap">
        <button type="button" class="btn btn-facebook-login btn-full-width"> Continue with Facebook</button>
        <button type="button" class="btn btn-google-plus-lined btn-full-width"><img class="google-icon"
                src="../../../../../assets/img/app-side/Google__G__Logo.svg" /> Sign in with google</button>
    </div> -->
    <!-- social-login-wrap -->
</form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth, useProfile } from '@/stores/index' // ✅ import useProfile
const auth = useAuth()
const profileStore = useProfile() // ✅ initialize profile store
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const email = ref('')
const password = ref('')
const error = ref(null)

const submitLogin = async () => {
  error.value = null

  // Front-end validations
  if (!email.value) {
    error.value = t('Email is required')
    return
  }
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    error.value = t('Please enter a valid email')
    return
  }
  if (!password.value) {
    error.value = t('Password is required')
    return
  }

  try {
    const response = await auth.login({
      email: email.value,
      password: password.value
    })

    if (response.status === 401) {
        error.value = response.data.message || t('Invalid email or password')
        return
    }
    // ✅ Immediately fetch profile data after login
    await profileStore.getProfileInfo()
    await profileStore.getProfilePicture()

    error.value = null
  } catch (err) {
    error.value = err?.response?.data?.message || t('Invalid email or password')
  }
}
</script>
