<template>
    
    <!-- <div class="export-container"></div> -->
        <DashboardHeader heading="Export Personal Data">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="p-6 bg-gray-100 min-h-screen">
      <!-- <div class="notification update">
        <p>
          There are updates available for the following plugins:
          <a href="#">MailChimp For WP</a>, <a href="#">One Click Demo Import</a>, and <a href="#">Redux Framework</a>.
        </p>
        <a href="#">Begin updating plugins</a> | <a href="#">Dismiss this notice</a>
      </div>
      
      <div class="notification warning">
        <p>Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <a href="#">Run Setup Wizard</a></p>
      </div> -->
      
      <h2>Export Personal Data</h2>
      <p>This tool helps site owners comply with local laws and regulations by exporting known data for a given user in a .zip file.</p>
      
      <div class="export-form">
        <h3>Add Data Export Request</h3>
        <label>Username or email address</label>
        <input type="text" v-model="email" placeholder="Enter email or username" />
        
        <div class="checkbox">
          <input type="checkbox" v-model="sendEmail" id="confirmation" />
          <label for="confirmation">Send personal data export confirmation email.</label>
        </div>
        
        <button @click="sendRequest">Send Request</button>
      </div>
  
      <div class="export-list">
        <h3>All ({{ requests.length }})</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Requester</th>
              <th>Status</th>
              <th>Next steps</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="requests.length === 0">
              <td colspan="4">No items found.</td>
            </tr>
            <tr v-for="request in requests" :key="request.id">
              <td><input type="checkbox" /></td>
              <td>{{ request.requester }}</td>
              <td>{{ request.status }}</td>
              <td>{{ request.nextSteps }}</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align: center; margin-top: 30px;">If the importer you need is not listed, <a href="http://localhost:3000/dashboard/tools">search the plugin directory</a> to see if an importer is available.</p>

      </div>
    </div>
    </div>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        sendEmail: true,
        requests: []
      };
    },
    methods: {
      sendRequest() {
        if (this.email) {
          this.requests.push({
            id: this.requests.length + 1,
            requester: this.email,
            status: "Requested",
            nextSteps: "Processing..."
          });
          this.email = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .export-container {
    max-width: 800px;
    margin: auto;
    font-family: Arial, sans-serif;
  }
  .notification {
    padding: 10px;
    margin-bottom: 10px;
    border-left: 4px solid;
  }
  .update {
    background: #fffbe6;
    border-color: #ffcc00;
  }
  .warning {
    background: #ffe6e6;
    border-color: #ff6666;
  }
  .export-form, .export-list {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
  }
  input[type="text"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .checkbox {
    margin: 10px 0;
  }
  button {
    background: #0073aa;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px;
  }
  button:hover {
    background: #005177;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  th {
    background: #f0f0f0;
  }
  </style>
  