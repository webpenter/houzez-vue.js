<template>
    <DashboardHeader heading="Export Personal Data">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap" style="    margin-top: -32px;">
            <div class="dashboard-content-block-wrap"></div>
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <!-- Notification Messages -->
      <div class="p-4 mb-4 bg-yellow-100 border border-yellow-300 rounded-lg">
        <p>
          There are updates available for the following plugins:
          <a href="#" class="text-blue-600 font-semibold">MailChimp For WP</a>,
          <a href="#" class="text-blue-600 font-semibold">One Click Demo Import</a> and
          <a href="#" class="text-blue-600 font-semibold">Redux Framework</a>.
        </p>
        <a href="#" class="text-blue-500">Begin updating plugins</a> |
        <a href="#" class="text-blue-500">Dismiss this notice</a>
      </div>
      
      <div class="p-4 mb-4 bg-yellow-100 border border-yellow-300 rounded-lg">
        <p>Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <a href="#" class="text-blue-600 font-semibold">Run Setup Wizard</a></p>
      </div>
  
      <!-- Data Erasure Form -->
      <h2 class="text-xl font-semibold mb-4">Add Data Erasure Request</h2>
      <form @submit.prevent="submitRequest">
        <div class="mb-4">
          <label class="block font-medium mb-1">Username or email address</label>
          <input type="text" v-model="email" class="w-full border rounded-lg p-2" required  placeholder="User Email Enter" style="    margin-left: 29px;" />
        </div>
        <div class="mb-4 flex items-center">
          <input type="checkbox" v-model="sendConfirmation" class="mr-2" />
          <label>Send personal data erasure confirmation email.</label>
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg" style="    background: #005177;
    border: none;">Send Request</button>
        <p style="text-align: center; margin-top: 30px;">If the importer you need is not listed, <a href="http://localhost:3000/dashboard/tools">search the plugin directory</a> to see if an importer is available.</p>

      </form>
    </div>
    </div>

    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        sendConfirmation: true
      };
    },
    methods: {
      submitRequest() {
        alert(`Request sent for: ${this.email}`);
      }
    }
  };
  </script>
  
  <style>
  body {
    background-color: #f9f9f9;
  }
  </style>
  