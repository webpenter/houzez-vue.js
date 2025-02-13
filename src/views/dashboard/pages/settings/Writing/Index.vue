<template>
   <DashboardHeader heading="Writing Settings">
        <a class="btn btn-primary" href="#">View Public Profile</a>
    </DashboardHeader>
  
    <section class="dashboard-content-wrap">
        <div class="settings-container" >
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap"></div>
    
      <!-- <div class="alert-box">Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <a href="#">Run Setup Wizard</a></div>
      <div class="alert-box">There are updates available for the following plugins: <a href="#">MailChimp For WP</a>, <a href="#">One Click Demo Import</a>, and <a href="#">Redux Framework</a>. <a href="#">Begin updating plugins</a> | <a href="#">Dismiss this notice</a></div> -->
      
      <label>Default Post Category</label>
      <select v-model="settings.defaultCategory">
        <option value="uncategorized">Uncategorized</option>
      </select>
      
      <label>Default Post Format</label>
      <select v-model="settings.defaultFormat" style="    margin-bottom: 15px;">
        <option value="standard" > Standard</option>
      </select>
      
      <h5>Post via Email</h5>
      <p>To post to WordPress by email, you must set up a secret email account with POP3 access...</p>
      <label>Mail Server</label>
      <input type="text" v-model="settings.mailServer" />
      <label>Port</label>
      <input type="number" v-model="settings.mailPort" />
      <label>Login Name</label>
      <input type="email" v-model="settings.loginName" />
      <label>Password</label>
      <input type="password" v-model="settings.password" />
      
      <button @click="saveSettings">Save Changes</button>
    </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        settings: {
          defaultCategory: 'uncategorized',
          defaultFormat: 'standard',
          mailServer: 'mail.example.com',
          mailPort: 110,
          loginName: 'login@example.com'
        }
      };
    },
    methods: {
      saveSettings() {
        console.log("Settings saved:", this.settings);
        alert("Settings have been saved!");
      }
    }
  };
  </script>
  
  <style scoped>
  .settings-container {
    max-width: 1013pxpx;
    margin: auto;
    font-family: Arial, sans-serif;
  }
  .alert-box {
    background-color: #ffebcc;
    padding: 10px;
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-top: 10px;
  }
  input, select {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
  }
  button {
    margin-top: 15px;
    padding: 10px;
    background-color: #0073aa;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  