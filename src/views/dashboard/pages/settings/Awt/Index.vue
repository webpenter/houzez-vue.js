<template>
    <div class="container"></div>
    <DashboardHeader heading="JWT Authentication">
    <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">JWT Feild</a>
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
                <h3>Help Me improve JWT Authentication for WP REST API!</h3>
             <p>Hello there! I'm always working to make the JWT Authentication for WP REST API plugin better for you. To do this, I'd like to understand the environment where the plugin is used. Could you share the following information with me?

- PHP Version:This helps me ensure compatibility and decide when it's time to phase out older versions.
- WordPress Version: Knowing this helps me optimize the plugin for the most common WordPress setups.
- WooCommerce Version:Knowing this helps me to understand if I need to focus more on WooCommerce compatibility.
- Activated Plugins Count:This helps to know the complexity of the WP installs.
I promise that:

I'll only collect the above information.
Your data will remain confidential and won't be shared with third parties.
No personal or site information is shared.
This feature will in no way affect your website's performance.
By sharing this information, you're helping me make JWT Authentication for WP REST API even better for everyone.

Thank you for your trust and support!

Enrique Chavez.

</p>
<h3>
  You are not currently sharing data</h3>

        </div><a class="btn btn-primary-outlined" href="#modal-save-draft" data-toggle="modal">Save Changes</a>

            </div>
          </div>

        </div><!-- row -->
      </div><!-- dashboard-content-block -->
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