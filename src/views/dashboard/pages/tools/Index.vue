<template>
      <DashboardHeader heading="Tool">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Add New Enquiry</a>
    </DashboardHeader>
     <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                   There are updates available for the following plugins: <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>MailChimp For WP, One Click Demo Import</strong></a> 
                   and
                   <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Begin updating plugins | Dismiss this notice</strong></a>
                   Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <!-- <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Run Setup Wizard</strong></a> -->

                </div>
                <!-- dashboard-content-block -->
  </div>
  </div>
  <div class="dashboard-content-block-wrap">
	<h2>Categories and Tags Converter</h2>
	<div class="dashboard-content-block">
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>If you want to convert your categories to tags (or vice versa), use the</label>
          <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Categories and Tags Converter</strong></a>
          available from the Import screen.

				</div>
				</div>
			
		</div><!-- row -->
	</div><!-- dashboard-content-block -->
</div>
  </section>
  </template>
  
  <script>
  export default {
    name: "ToolsPage",
  };
  </script>
  
  <style scoped>
  </style>
  