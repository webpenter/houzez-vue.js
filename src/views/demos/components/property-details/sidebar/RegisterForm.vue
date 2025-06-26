<template>
  <form @submit.prevent="submitRegister">
    <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}<i class="houzez-icon icon-remove-circle cursor-pointer" @click="error = null" title="Close"></i>
    </div>

    <div class="register-form-wrap">
      <div class="form-group">
        <div class="form-group-field username-field">
          <input type="text" class="form-control" placeholder="Username" v-model="form.username">
        </div>
      </div>

      <div class="form-group">
        <div class="form-group-field email-field">
          <input type="email" class="form-control" placeholder="Email" v-model="form.email">
        </div>
      </div>

      <div class="form-group">
        <div class="form-group-field password-field">
          <input type="password" class="form-control" placeholder="Password" v-model="form.password">
        </div>
      </div>

      <div class="form-group">
        <div class="form-group-field password-field">
          <input type="password" class="form-control" placeholder="Confirm password" v-model="form.password_confirmation">
        </div>
      </div>
    </div>

    <div class="form-tools">
      <label class="control control--checkbox">
        <input type="checkbox" v-model="form.agree"> I agree with the <a href="#">Terms &amp; Conditions</a>
        <span class="control__indicator"></span>
      </label>
    </div>

    <button type="submit" class="btn btn-primary btn-full-width" :disabled="loading">
      <span v-if="loading">Registering...</span>
      <span v-else>Register</span>
    </button>
  </form>
</template>


<script setup>
import { ref, reactive } from 'vue'
import { useAuth } from '@/stores/index.js'

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
        error.value = 'Username is required'
        return
    }
    if (!form.username.match(/^[a-zA-Z0-9_]+$/)) {
        error.value = 'Username can only contain letters, numbers, and underscores'
        return
    }
    if (form.username.length < 4 || form.username.length > 20) {
        error.value = 'Username must be at least 4 characters.'
        return
    }
    if (!form.email) {
        error.value = 'Email is required'
        return
    }
    if(!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        error.value = 'Email is not valid'
        return
    }
    if (!form.password) {  
        error.value = 'Password is required'
        return
    }
    if (form.password.length < 8) {
        error.value = 'Password must be at least 8 characters'
        return
    }
    if (!form.password_confirmation) {  
        error.value = 'Confirmation Password is required'
        return
    }
    if (form.password !== form.password_confirmation) {
        error.value = 'Passwords do not match'
        return
    }
    if (!form.agree) {
        error.value = 'You must agree to the Terms & Conditions'
        return
    }

  loading.value = true
  try {
    await auth.register(form)
  } catch (err) {
    error.value = err?.data?.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>
