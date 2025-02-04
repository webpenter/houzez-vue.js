<template>
     <DashboardHeader heading="Currency Switcher">
    </DashboardHeader>
    <div class="container">
     
      <div class="box">
        <h3 class="subtitle">
          <span class="icon">⚙️</span> API Settings
        </h3>
        <p>
          Plugin gets currency data from
          <a href="https://openexchangerates.org" target="_blank">openexchangerates.org</a>
          and imports it into the WordPress database. The exchange rates will be updated on a frequency that you can specify below.
        </p>
        
        <label class="label">API Key</label>
        <input v-model="apiKey" class="input" type="text" placeholder="Enter the Open Exchange Rates API key" />
        <p class="help">
          Get yours at:
          <a href="https://openexchangerates.org" target="_blank">openexchangerates.org</a>
        </p>
        
        <label class="label">Update Interval</label>
        <select v-model="updateInterval" class="dropdown">
          <option value="Hourly">Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Biweekly">Biweekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        
        <button class="button" @click="saveSettings">Save</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        apiKey: '',
        updateInterval: 'Weekly',
      };
    },
    methods: {
      saveSettings() {
        alert(`Settings saved!\nAPI Key: ${this.apiKey}\nUpdate Interval: ${this.updateInterval}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: calc(100% - 250px);
    margin-left: 15rem;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .box {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background: #f9f9f9;
  }
  .subtitle {
    font-size: 18px;
    font-weight: bold;
  }
  .label {
    display: block;
    margin-top: 15px;
    font-weight: bold;
  }
  .input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .dropdown {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .button {
    display: block;
    margin-top: 20px;
    padding: 10px 15px;
    background: #0073e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .button:hover {
    background: #005bb5;
  }
  .help {
    font-size: 12px;
    color: #666;
  }
  </style>
  