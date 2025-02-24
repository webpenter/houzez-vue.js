<template>
<<<<<<< HEAD
    
    <DashboardHeader heading="General Settings">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">General Feild</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
      <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                   There are updates available for the following plugins: <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>MailChimp For WP, One Click Demo Import</strong></a> -->
                   and
                   <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Begin updating plugins | Dismiss this notice</strong></a>
                   Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <!-- <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Run Setup Wizard</strong></a> -->

                </div>
                <!-- dashboard-content-block -->
  </div>
  </div>
  <div class="dashboard-content-block-wrap">
	<!-- <h2>Site Health Status</h2> -->
 
	<div class="dashboard-content-block">
    <h3>Site Health Status</h3>
    <p>Realtyna MLS Sync : Could not set a Target Product to Sync with the MLS,</p>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
        
         <div class="dashboard-content-block">
          <!-- 1 -->
          <p>
            Site Title
                    	<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>Houzez</option>

					</select>
        </p><!-- selectpicker --><br>
          <!-- 2 -->
          <p>
            Tagline
                    	<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>webpenter testing zone</option>

					</select></p><!-- selectpicker --><br>
          <!-- 3 -->
          <p>
            WordPress Address (URL)
                    	<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>http://houzez.webpenter.com</option>

					</select></p><!-- selectpicker --><br>
          <!-- 4 -->
          <p>
            Site Address (URL)
                    	<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>http://houzez.webpenter.com</option>

					</select></p><!-- selectpicker --><br>

          <!-- link -->
          If the importer you need is not listed   <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>  search the plugin directory</strong></a>to see if an importer is available.<br><br>
<!-- 5 -->
<p>
  Administration Email Address
                    	<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>homey@gmail.com</option>
            

					</select></p>
          This address is used for admin purposes. If you change this, an email will be sent to your new address to confirm it. The new address will not become active until confirmed.
                   
                </div>
                <a class="btn btn-primary-outlined" href="#modal-save-draft" data-toggle="modal">Updated Your Site To Use Https</a>

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
  
=======
  <DashboardHeader heading="General Settings">
<!--     <a class="btn btn-primary" href="#">View Public Profile</a>-->
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">


      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
</script>
>>>>>>> 0f7e2fa935e561328ddc9469d19e3005db470ff0
