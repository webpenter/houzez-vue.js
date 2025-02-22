<template>
     <DashboardHeader heading="Site Health">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Health Feild</a>
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
    <p>The site health check shows critical information about your WordPress configuration and items that require your attention.</p>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<label>If you want to convert your categories to tags (or vice versa), use the</label>
         <p>5 recommended improvements</p>
         <div class="dashboard-content-block">
          <!-- 1 -->
                    	<select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>Vue Js Update avaiable (3.5.3)</option>
						<option>A new version of Vue Js is available.</option> 
						<option> Install the latest version of Vue Js </option>
					</select><!-- selectpicker --><br>
          <!-- 2 -->
          <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>You Should Remove inactive Plugings</option>
						<option>Plugins extend your site’s functionality with things like contact forms, ecommerce and much more. </option> 
						<option> Your site has 6 plugins waiting to be updated. </option>
            <option> Your site has 2 inactive plugins. Inactive plugins are tempting targets for attackers. I. </option>

					</select><!-- selectpicker --><br>
          <!-- 3 -->
          <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>You Should Remove inactive Themes</option>
						<option>Themes add your site’s look and feel. It’s important to keep them up to date</option> 
						<option> Your site has 3 themes waiting to be updated.</option>
            <option> Your site has 2 inactive themes, other than Twenty Twenty-Two, the default Vue Js theme, and Houzez, your active theme.</option>
            <option>should consider removing any unused themes to enhance your site’s security.</option>
					</select><!-- selectpicker --><br>
          <!-- 4 -->
          <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>Background Updated May Not Be Working Properly</option>
						<option>Background updates ensure that Vue Js can auto-update if a security update</option> 
						<option> Your installation of WordPress does not require FTP credentials to perform updates. </option>
            <option>  All of your WordPress files are writable. </option>
					</select><!-- selectpicker --><br>
          <!-- 5 -->
          <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
						<option>Your Website Does Not Use Https</option>
						<option>You are accessing this website using HTTPS, but your</option> 
						<option> HTTPS is already supported for your website.</option>
					</select><!-- selectpicker --><br>
                   
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
    name: "SiteHealth",
    data() {
    return {
      improvements: [
        { text: "Word update available (6.7.1)", category: "Performance" },
        { text: "You should remove inactive plugins", category: "Security" },
        { text: "You should remove inactive themes", category: "Security" },
        { text: "Background updates may not be working properly", category: "Security" },
        { text: "Your website does not use HTTPS", category: "Security" }
      ]
    };
  }
};

</script>

<style scoped>
button:hover {
  background-color: #dbeafe;
}
</style>