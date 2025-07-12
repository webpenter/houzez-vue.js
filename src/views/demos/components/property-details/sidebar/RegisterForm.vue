<template>
  <form @submit.prevent="submitRegister">
    <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}<i class="houzez-icon icon-remove-circle cursor-pointer" @click="error = null" title="Close"></i>
    </div>

    <div class="register-form-wrap">
      <div class="form-group">
        <div class="form-group-field username-field">
          <input type="text" class="form-control" :placeholder="$t('Username')" v-model="form.username">
        </div>
      </div>

      <div class="form-group">
        <div class="form-group-field email-field">
          <input type="email" class="form-control" :placeholder="$t('Email')" v-model="form.email">
        </div>
      </div>

      <div class="form-group">
        <div class="form-group-field password-field">
          <input type="password" class="form-control" :placeholder="$t('Password')" v-model="form.password">
        </div>
      </div>

      <div class="form-group">
        <div class="form-group-field password-field">
          <input type="password" class="form-control" :placeholder="$t('Confirm password')" v-model="form.password_confirmation">
        </div>
      </div>
    </div>

    <div class="form-tools">
      <label class="control control--checkbox">
        <input type="checkbox" v-model="form.agree"> I agree with the <a href="#">{{ $t('Terms and Conditions') }}</a>
        <span class="control__indicator"></span>
      </label>
    </div>

    <button type="submit" class="btn btn-primary btn-full-width" :disabled="loading">
      <span v-if="loading">{{ $t('Registering') }}...</span>
      <span v-else>{{ $t('Register') }}</span>
    </button>
  </form>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { useAuth } from '@/stores/index.js'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const auth = useAuth()
const loading = ref(false)
const error = ref(null)

const form = reactive({
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  agree: false
})

const submitRegister = async () => {
  error.value = null

    if (!form.username) {
        error.value = t('Username is required')
        return
    }
    if (!form.username.match(/^[a-zA-Z0-9_]+$/)) {
        error.value = t('Username can only contain letters, numbers, and underscores')
        return
    }
    if (form.username.length < 4 || form.username.length > 20) {
        error.value = t('Username must be at least 4 characters')
        return
    }
    if (!form.email) {
        error.value = t('Email is required')
        return
    }
    if(!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        error.value = t('Email is not valid')
        return
    }
    if (!form.password) {  
        error.value = t('Password is required')
        return
    }
    if (form.password.length < 8) {
        error.value = t('Password must be at least 8 characters')
        return
    }
    if (!form.password_confirmation) {  
        error.value = t('Confirmation Password is required')
        return
    }
    if (form.password !== form.password_confirmation) {
        error.value = t('Passwords do not match')
        return
    }
    if (!form.agree) {
        error.value = t('You must agree to the Terms & Conditions')
        return
    }

  loading.value = true
  try {
    await auth.register(form)
  } catch (err) {
    error.value = err?.data?.message || t('Registration failed')
  } finally {
    loading.value = false
  }
}
</script>
