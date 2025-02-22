<template>
    <div class="dashboard-container">
      <DashboardHeader heading="Permalink Settings">
    <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Permalink Feild</a>
  </DashboardHeader>
      <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <div class="dashboard-content-block">
          Realtyna MLS Sync : Could not set a Target Product to Sync with the MLS <a class="open-close-slide-panel"
            href="#" @click.prevent="toggleModalAddNewEnquiry"></a>
          <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Run Setup
              Wizard</strong></a>
          <!-- <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Run Setup Wizard</strong></a> -->

        </div>
        <!-- dashboard-content-block -->
      </div>
    </div>
    <div class="dashboard-content-block-wrap">
      <!-- <h2>Site Health Status</h2> -->

      <div class="dashboard-content-block">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="form-group">

              <div class="dashboard-content-block">
                <h3>Common Settings</h3>
                <!-- 3 -->
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Plain
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Day and name
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning">  Month and name
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Numeric
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning">Post name
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning">Custom Structure
                  <span class="control__indicator"></span>
                </label>
            
                <h3>Optional</h3>
                <p>If you like, you may enter custom structures for your category and tag URLs here. For example, using topics as your category base would make your category links like http://houzez.webpenter.com/topics/uncategorized/. If you leave these blank the defaults will be used.</p>
                <h3> Category base</h3>
                <input class="form-control" placeholder="" type="text"><br>
                <h3>Tag base</h3>
                <input class="form-control" placeholder="" type="text">
              </div><a class="btn btn-primary-outlined" href="#modal-save-draft" data-toggle="modal">Save Changes</a>

            </div>
          </div>

        </div><!-- row -->
      </div><!-- dashboard-content-block -->
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
  