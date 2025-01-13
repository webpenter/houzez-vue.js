<template>
  <div class="body">
  <form @submit.prevent="submit" class="registration-form">
    <h2>Register</h2>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" v-model="formData.username" id="username" name="username" placeholder="Enter your username" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" v-model="formData.email" id="email" name="email" placeholder="Enter your email" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" v-model="formData.password" id="password" name="password" placeholder="Enter your password" required>
    </div>
    <div class="form-group">
      <label for="password">Confirm Password</label>
      <input type="password" v-model="formData.password_confirmation" id="confirm_password" name="confirm_password" placeholder="Enter password again" required>
    </div>
    <button type="submit" class="submit-btn">Register</button>
  </form>
  </div>

</template>


<style scoped>
.body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}

.registration-form {
  background: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.registration-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.submit-btn:active {
  background-color: #003f7f;
}
</style>

<script setup>
import {reactive} from "vue";
import {useAuth} from "@/stores/index.js";
import router from "@/router/index.js";

const formData = reactive({
  username: '',
  email: '',
  password: '',
})

const submit = async () => {
  try {
    const response = await useAuth().register(formData)
    console.log(response)
    if (response.status === 201) {
      router.push({ name: 'dashboard' })
    }
  } catch (error) {
    console.log(error)
  }
}
</script>