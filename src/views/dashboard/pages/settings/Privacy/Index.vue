<template>
    <div class="dashboard-container">
      <DashboardHeader heading="Privacy Settings" />
      
  
      <section class="dashboard-content-wrap">
        <div class="settings-container">
          <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap"></div>
  
            <!-- Alerts -->
            <div class="alert-box bg-yellow-100 text-yellow-900 border border-yellow-300">
              <p>
                <strong>Realtyna MLS Sync:</strong> Could not set a Target Product to Sync with the MLS,
                <a href="#" class="text-blue-500">Run Setup Wizard</a>
              </p>
            </div>
  
            <div class="alert-box bg-blue-100 text-blue-900 border border-blue-300">
              <p>
                There are updates available for the following plugins:
                <a href="#" class="text-blue-500 font-semibold">MailChimp For WP</a>,
                <a href="#" class="text-blue-500 font-semibold">One Click Demo Import</a>, and
                <a href="#" class="text-blue-500 font-semibold">Redux Framework</a>.
              </p>
              <div class="mt-2">
                <a href="#" class="text-blue-500 font-medium mr-4">Begin updating plugins</a>
                <a href="#" class="text-blue-500 font-medium">Dismiss this notice</a>
              </div>
            </div>
  
            <!-- Privacy Settings -->
            <div class="privacy-settings p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
              <h2 class="text-xl font-semibold mb-4">Privacy Settings</h2>
              <p class="text-sm text-gray-600">
                As a website owner, you may need to follow national or international privacy laws.
                For example, you may need to create and display a Privacy Policy. If you already
                have a Privacy Policy page, please select it below. If not, please create one.
              </p>
  
              <p class="text-sm text-gray-600 mt-4">
                The new page will include help and suggestions for your Privacy Policy. However, it is your
                responsibility to use those resources correctly, to provide the information that your
                Privacy Policy requires, and to keep that information current and accurate.
              </p>
  
              <p class="text-sm text-gray-600 mt-4">
                After your Privacy Policy page is set, you should edit it. You should also review your Privacy
                Policy from time to time, especially after installing or updating any themes or plugins.
                There may be changes or new suggested information for you to consider adding to your policy.
              </p>
  
              <p class="text-sm text-blue-500 mt-4">
                <a href="#" class="font-semibold">Edit</a> or
                <a href="#" class="font-semibold">preview</a> your Privacy Policy page content.
                Need help putting together your new Privacy Policy page?
                <a href="#" class="font-semibold">Check out our Privacy Policy guide</a>
                for recommendations on what content to include, along with policies suggested by your plugins and theme.
              </p>
  
              <!-- Create Privacy Policy -->
              <div class="mt-6">
                <h5 class="text-lg font-semibold mb-2">Create a new Privacy Policy Page</h5>
                <button class="btn btn-secondary">Create</button>
              </div>
  
              <!-- Change Privacy Policy -->
              <div class="mt-6">
                <h5 class="text-lg font-semibold mb-2">Change your Privacy Policy page</h5>
                <select v-model="selectedPolicy" class="input-field">
                  <option value="privacy-policy">Privacy Policy</option>
                  <option value="custom-policy">Custom Privacy Policy</option>
                </select>
                <button class="btn btn-primary ml-2">Use This Page</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedPolicy: 'privacy-policy'
      };
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    font-family: Arial, sans-serif;
  }
  
  .alert-box {
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 16px;
  }
  
  .privacy-settings {
    background: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .input-field {
    width: 200px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-top: 20px;
  }
  
  .btn {
    width: 150px;
        border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .btn-primary {
    background: #0073aa;
    color: white;
  }
  
  .btn-primary:hover {
    background: #005f87;
  }
  
  .btn-secondary {
    background: #f1f1f1;
    color: #333;
    border: 1px solid #ccc;
    margin-bottom: 25px;
    margin-top: 10px;
  }
  
  .btn-secondary:hover {
    background: #e0e0e0;
  }
  </style>
  