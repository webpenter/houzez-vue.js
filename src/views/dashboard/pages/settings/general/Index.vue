<template>
    
    <DashboardHeader heading="General Settings">
        <a class="btn btn-primary" href="#">View Public Profile</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="settings-container">

        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap"></div>
    
      
      <form @submit.prevent="saveSettings">
        <div class="form-group">
          <label>Administration Email Address</label>
          <input type="email" v-model="settings.adminEmail" />
          <small>This address is used for admin purposes. If you change this, an email will be sent to your new address to confirm it. <strong>The new address will not become active until confirmed.</strong></small>
        </div>
        
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="settings.membership" />
            Anyone can register
          </label>
        </div>
        
        <div class="form-group">
          <label>New User Default Role</label>
          <select v-model="settings.userRole">
            <option>Subscriber</option>
            <option>Contributor</option>
            <option>Author</option>
            <option>Editor</option>
            <option>Administrator</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Site Language</label>
          <select v-model="settings.language">
            <option>English (United States)</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        
        <div class="form-group">
          <label>Timezone</label>
          <select v-model="settings.timezone">
            <option>UTC+0</option>
            <option>UTC+1</option>
            <option>UTC+2</option>
            <option>UTC-5</option>
            <option>UTC-8</option>
          </select>
          <small>Choose either a city in the same timezone as you or a UTC (Coordinated Universal Time) time offset.</small>
        </div>
        
        <div class="form-group">
          <label>Date Format</label>
          <div>
            <label><input type="radio" v-model="settings.dateFormat" value="F j, Y" /> February 8, 2025</label>
            <label><input type="radio" v-model="settings.dateFormat" value="Y-m-d" /> 2025-02-08</label>
            <label><input type="radio" v-model="settings.dateFormat" value="m/d/Y" /> 02/08/2025</label>
            <label><input type="radio" v-model="settings.dateFormat" value="d/m/Y" /> 08/02/2025</label>
          </div>
        </div>
        
        <button type="submit">Save Changes</button>
      </form>
      <p style="text-align: center; margin-top: 30px;">If the importer you need is not listed, <a href="http://localhost:3000/dashboard/settings">search the plugin directory</a> to see if an importer is available.</p>

    </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        settings: {
          adminEmail: 'homey@gmail.com',
          membership: false,
          userRole: 'Subscriber',
          language: 'English (United States)',
          timezone: 'UTC+0',
          dateFormat: 'F j, Y'
        }
      };
    },
    methods: {
      saveSettings() {
        console.log('Settings saved:', this.settings);
      }
    }
  };
  </script>
  
  <style>
  .settings-container {
    max-width: 1013px;
    /* margin: auto; */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    font-weight: bold;
  }
  .form-group input,
  .form-group select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 15px;
    background: #0073aa;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #005b8e;
  }
  </style>
  