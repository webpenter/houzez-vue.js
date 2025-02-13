<template>
    <div class="container"></div>
        <DashboardHeader heading="JWT Authentication">
        <a class="btn btn-primary" href="#">View Public Profile</a>
      </DashboardHeader>
  
      <section class="dashboard-content-wrap">
        <div class="settings-container">
          <div class="dashboard-content-inner-wrap">

            <div class="dashboard-content-block-wrap"></div>
            
      <div class="card">
        <h2 class="title">Help Me Improve JWT Authentication for WP REST API!</h2>
        <p class="text">
          Hello there! I'm always working to make the JWT Authentication for WP REST API plugin better for you.
          To do this, I'd like to understand the environment where the plugin is used. Could you share the following information with me?
        </p>
        <ul class="info-list">
          <li><strong>PHP Version:</strong> Helps ensure compatibility and decide when to phase out older versions.</li>
          <li><strong>WordPress Version:</strong> Helps optimize the plugin for common WP setups.</li>
          <li><strong>WooCommerce Version:</strong> Helps focus on WooCommerce compatibility.</li>
          <li><strong>Activated Plugins Count:</strong> Helps understand WP install complexity.</li>
        </ul>
        <p class="text"><strong>I promise that:</strong></p>
        <ul class="promise-list">
          <li>I'll only collect the above information.</li>
          <li>Your data will remain confidential and won’t be shared.</li>
          <li>No personal or site information is shared.</li>
          <li>This feature will not affect website performance.</li>
        </ul>
        <p class="text">By sharing this information, you're helping improve JWT Authentication for WP REST API.</p>
        <p class="text">Thank you for your trust and support! <br> <strong>Enrique Chavez</strong></p>
        
        <div class="toggle-wrap">
          <label>You are not currently sharing data.</label>
          <input type="checkbox" v-model="sharingData" class="toggle" />
        </div>
      </div>
      
      <div class="card support-card">
        <h3>Need Priority Support?</h3>
        <p>Hello! I'm <a href="#">Enrique Chavez</a>, a freelance WordPress developer with 10+ years of experience.</p>
        <button class="btn">Get in touch</button>
      </div>
      
      <div class="card newsletter-card">
        <h3>Newsletter</h3>
        <p>Sign up to get the latest news and updates!</p>
        <input type="email" placeholder="Enter your email" class="input" />
        <button class="btn">Sign up</button>
      </div>
    </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sharingData: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
  }
  .card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .text {
    font-size: 0.9rem;
    color: #555;
  }
  .info-list, .promise-list {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 10px;
    color: #333;
  }
  .toggle-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  .toggle {
    cursor: pointer;
  }
  .btn {
    background: #0073aa;
    color: white;
    /* padding: 10px; */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    /* margin-top: 10px; */
  }
  .btn:hover {
    background: #005f87;
  }
  .input {
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .support-card, .newsletter-card {
    text-align: center;
  }
  </style>