<template>
     <DashboardHeader heading="Erase Personal Data">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Erase Feild</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
    
      <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                  This tool helps site owners comply with local laws and regulations by deleting or anonymizing known data for a given user.
                   <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Begin updating plugins | Dismiss this notice</strong></a>
                   Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <!-- <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Run Setup Wizard</strong></a> -->

                </div>
                <!-- dashboard-content-block -->
                <div class="dashboard-content-block">
    <h3>Add Data Erasure Request</h3>
    <label> Username or email address</label>        <input type="text"><br><br>
    <h3>Confirmation email</h3>   <label class="control control--checkbox">
							<input type="checkbox" name="air-conditioning"> Send personal data erasure confirmation email.
							<span class="control__indicator"></span>
						</label>
            <a class="btn btn-primary-outlined" href="#modal-save-draft" data-toggle="modal">Send Request</a>
   
	</div><!-- dashboard-content-block -->
  <table class="dashboard-table table-lined responsive-table">
    <tbody>
        <tr>
          
						
            <th class="table-nowrap">Requester  </th>
            <th class="table-nowrap"> Status</th>
            <th class="table-nowrap">Requester</th>
            <th class="table-nowrap">Next steps</th>
         
        </tr>
     
        <tr>
          
						
          <th class="table-nowrap">Requester  </th>
          <th class="table-nowrap"> Status</th>
          <th class="table-nowrap">Requester</th>
          <th class="table-nowrap">Next steps</th>
       
      </tr>
    </tbody>
    <tbody>
      
     
     
    </tbody>   
    </table><!-- dashboard-table -->
  </div>
  </div>
 
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        sendConfirmation: true
      };
    },
    methods: {
      submitRequest() {
        alert(`Request sent for: ${this.email}`);
      }
    }
  };
  </script>

  