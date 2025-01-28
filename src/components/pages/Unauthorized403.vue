<template>
  <div class="body">
        <div class="container">
            <LogoWhite class="mb-4"/>
            <h1>403</h1>
            <p>You are not authorized to perform any action to this property.</p>
            <router-link :to="{name:'dashboard.my-properties'}" class="btn-home">
              Go to My properties
            </router-link>
        </div>
  </div>
</template>

<script setup>
import LogoWhite from '@/views/inc/nav/LogoWhite.vue';
</script>

<style scoped>
    .body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #002B4B;
      color: white;
    }

    .container {
      text-align: center;
    }

    h1 {
      font-size: 3em;
      margin: 0 0 20px;
    }

    p {
      font-size: 1.2em;
      margin: 0 0 30px;
    }

    .btn-home {
      display: inline-block;
      padding: 10px 20px;
      font-size: 1em;
      color: #fff;
      background-color: #007bff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .btn-home:hover {
      background-color: #0056b3;
    }
  </style>
