<template>
  <div class="body">
        <div class="container">
            <h1>404</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <router-link :to="{name:'app.home'}" class="btn-home">
                Back to home page
            </router-link>
        </div>
  </div>
</template>

<script setup>

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
      background-color: #f4f4f4;
      color: #333;
    }

    .container {
      text-align: center;
      padding: 20px;
      background: #fff;
      border: 1px solid #ddd;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
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
