<template>
    <div class="dashboard-container">
      <DashboardHeader heading="Privacy Settings">
    <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Privacy Feild</a>
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
                <h3>Privacy Settings</h3>
               <p>As a website owner, you may need to follow national or international privacy laws. For example, you may need to create and display a Privacy Policy. If you already have a Privacy Policy page, please select it below. If not, please create one.

The new page will include help and suggestions for your Privacy Policy. However, it is your responsibility to use those resources correctly, to provide the information that your Privacy Policy requires, and to keep that information current and accurate.

After your Privacy Policy page is set, you should edit it. You should also review your Privacy Policy from time to time, especially after installing or updating any themes or plugins. There may be changes or new suggested information for you to consider adding to your policy.

Edit or preview your Privacy Policy page content. Need help putting together your new Privacy Policy page? Check out our Privacy Policy guide for recommendations on what content to include, along with policies suggested by your plugins and theme.</p>
<h3>
  Create a new Privacy Policy Page</h3>
  <a class="btn btn-primary-outlined" href="#modal-save-draft" data-toggle="modal">Create</a><br><br>
  <p>

    Change your Privacy Policy page:
<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count"
  data-actions-box="false">
  <option>Privacy Policy</option>
  <option>Print</option>
  <option>Page</option>

  <option>Bussiness</option>
  <option>Construction</option>
  <option>Marketing</option>
  <option>Real Estate</option>
  <option>uncategorized</option>




</select>
</p>
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
  