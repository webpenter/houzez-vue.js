<template>
    <div class="dashboard-container">
      <DashboardHeader heading="Permalink Settings">
        <a class="btn btn-primary" href="#">View Public Profile</a>
      </DashboardHeader>
  
      <section class="dashboard-content-wrap">
        <div class="settings-container">
          <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap"></div>
  
            <div class="permalink-settings p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
              <p class="text-sm text-gray-600 mb-2">Choose the structure of your URLs.</p>
  
              <div class="alert-box bg-yellow-100 text-yellow-900 border border-yellow-300">
                <p>
                  <strong>Realtyna MLS Sync:</strong> Could not set a Target Product to Sync with the MLS,
                  <a href="#" class="text-blue-500">Run Setup Wizard</a>
                </p>
              </div>
  
              <div class="alert-box bg-blue-100 text-blue-900 border border-blue-300">
                <p>
                  There are updates available for the following plugins:
                  <a href="#" class="text-blue-500">MailChimp For WP</a>,
                  <a href="#" class="text-blue-500">One Click Demo Import</a>, and
                  <a href="#" class="text-blue-500">Redux Framework</a>.
                </p>
                <div class="mt-2">
                  <a href="#" class="text-blue-500 mr-4">Begin updating plugins</a>
                  <a href="#" class="text-blue-500">Dismiss this notice</a>
                </div>
              </div>
  
              <div class="settings-section">
                <h3 class="text-lg font-semibold mb-4" >Common Settings</h3>
                <div class="space-y-3">
                  <label
                    v-for="option in options"
                    :key="option.value"
                    class="radio-option"
                    id = "bttom"
                  >
                    <input type="radio" v-model="selectedOption" :value="option.value"   />
                    <div>
                      <span class="font-medium">{{ option.label }}</span>
                      <span class="block text-sm text-gray-500">{{ option.url }}</span>
                    </div>
                  </label>
                </div>
              </div>
  
              <div class="settings-section">
                <h3 class="text-lg font-semibold mb-2">Optional</h3>
                <label class="block mb-2">Category base:</label>
                <input type="text" v-model="categoryBase" class="input-field" />
  
                <label class="block mt-4 mb-2">Tag base:</label>
                <input type="text" v-model="tagBase" class="input-field" />
              </div>
  
              <button @click="saveSettings" class="save-button">Save Changes</button>
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
        selectedOption: 'post-name',
        categoryBase: '',
        tagBase: '',
        options: [
          { label: 'Plain', value: 'plain', url: 'http://example.com/?p=123' },
          { label: 'Day and name', value: 'day-name', url: 'http://example.com/2025/02/12/sample-post/' },
          { label: 'Month and name', value: 'month-name', url: 'http://example.com/2025/02/sample-post/' },
          { label: 'Numeric', value: 'numeric', url: 'http://example.com/archives/123' },
          { label: 'Post name', value: 'post-name', url: 'http://example.com/sample-post/' },
          { label: 'Custom Structure', value: 'custom', url: 'http://example.com/%postname%/' }
        ]
      };
    },
    methods: {
      saveSettings() {
        alert('Settings saved successfully!');
      }
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
  
  .settings-section {
    background: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  
  .radio-option {
    display: flex;
    align-items: center;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
  }
  #bttom{
    margin-bottom: 10px;
  }
  
  .radio-option:hover {
    background: #f9f9f9;
  }
  
  .radio-option input {
    margin-right: 12px;
    accent-color: #0073aa;
  }
  
  .input-field {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
  }
  
  .save-button {
    background: #0073aa;
    color: white;
    padding: 10px 16px;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .save-button:hover {
    background: #005f87;
  }
  </style>
  