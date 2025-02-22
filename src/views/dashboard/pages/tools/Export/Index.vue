<template>
    
    <!-- <div class="export-container"></div> -->
    <DashboardHeader heading="Export">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Export Feild</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
      <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                  Realtyna MLS Sync : Could not set a Target Product to Sync with the MLS : <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong></strong></a>
                   <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>, Run Setup Wizard</strong></a> <!-- <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Run Setup Wizard</strong></a> -->

                </div>
                <!-- dashboard-content-block -->
  </div>
  </div>
  <div class="dashboard-content-block-wrap">
	<!-- <h2>Site Health Status</h2> -->
 
	<div class="dashboard-content-block">
    <h3>When you click the button below WordPress will create an XML file for you to save to your computer.</h3>
    <p>This format, which is called WordPress eXtended RSS or WXR, will contain your posts, pages, comments, custom fields, categories, and tags.</p>
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div class="form-group">
					<p>Once you’ve saved the download file, you can use the Import function in another WordPress installation to import the content from this site.</p>
         <h2>Choose what to export</h2>
         <!-- 1 -->
         <label class="control control--radio">
							<input type="radio" name="air-conditioning"> All content
							<span class="control__indicator"></span>
						</label>
            <p>This will contain all of your posts, pages, comments, custom fields, terms, navigation menus, and custom posts.</p>
            <!-- 2 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning">Pages
							<span class="control__indicator"></span>
						</label>
            <!-- 3 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning"> Landing Pages
							<span class="control__indicator"></span>
						</label>
            <!-- 4 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning">My Templates
							<span class="control__indicator"></span>
						</label>
            <!-- 5 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning"> Properties
							<span class="control__indicator"></span>
						</label>
            <!-- 6 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning"> Agencies
							<span class="control__indicator"></span>
						</label>
            <!-- 7 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning"> Agents
							<span class="control__indicator"></span>
						</label>
            <!-- 8 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning">Testimonials
							<span class="control__indicator"></span>
						</label>
            <!-- 9 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning"> Partners
							<span class="control__indicator"></span>
						</label>
            <!-- 10 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning">Invoices
							<span class="control__indicator"></span>
						</label>
            <!-- 11 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning">Reviews
							<span class="control__indicator"></span>
						</label>
            <!-- 12 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning">Packages
							<span class="control__indicator"></span>
						</label>
            <!-- 13 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning"> Mailchimp Sign-up Forms
							<span class="control__indicator"></span>
						</label>
            <!-- 14 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning"> Media
							<span class="control__indicator"></span>
						</label>
            <!-- 15 -->
            <label class="control control--radio">
							<input type="radio" name="air-conditioning">Posts
							<span class="control__indicator"></span>
						</label>
            
         <div class="dashboard-content-block">
        
                   
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
  