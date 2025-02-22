<template>
  <DashboardHeader heading="Writing Settings">
    <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Writing Feild</a>
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
                <!-- 1 -->
                <p>

                  Default Post Category
                  <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count"
                    data-actions-box="false">
                    <option>Bussiness</option>
                    <option>Construction</option>
                    <option>Marketing</option>
                    <option>Real Estate</option>
                    <option>uncategorized</option>




                  </select>
                </p><!-- selectpicker --><br>
                <!-- 2 -->
                <p>
                  Default Post Format
                  <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count"
                    data-actions-box="false">
                    <option>Standard</option>
                    <option>webpenter testing zone</option>
                    <option>Aside</option>
                    <option>Chat</option>
                    <option>Gallery</option>
                    <option>Link</option>
                    <option>Image</option>
                    <option>Qoute</option>
                    <option>Status</option>
                    <option>Video</option>
                    <option>Audio</option>


                  </select>
                </p><!-- selectpicker --><br>
                <h3> Post via email</h3>
                <!-- 3 -->



                To post to WordPress by email, you must set up a secret email account with POP3 access. Any mail
                received at this address will be posted, so it’s a good idea to keep this address very secret. Here are
                three random strings you could use:
                <div class="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>
                      Mail Server</label>
                    <input class="form-control" placeholder="mail.example.com" type="text">
                  </div>
                  <div class="form-group">
                    <label>
                      Login Name </label>
                    <input class="form-control" placeholder="login@example.com	" type="text">
                  </div>
                  <div class="form-group">
                    <label>
                      Password </label>
                    <input class="form-control" placeholder="Password	" type="text">
                  </div>

                </div>
                <p>

                  Default Mail Category
                  <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count"
                    data-actions-box="false">
                    <option>Uncategorized</option>
                    <option>Bussiness</option>
                    <option>Construction</option>
                    <option>Marketing</option>
                    <option>Real Estate</option>
                    <option>uncategorized</option>




                  </select>
                </p>
                <h3> Update Services</h3>
                Vue Js is not notifying any <a class="open-close-slide-panel" href="#"
                  @click.prevent="toggleModalAddNewEnquiry"><strong> Run Setup Wizard</strong></a> because of your
                site’s
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
      settings: {
        defaultCategory: 'uncategorized',
        defaultFormat: 'standard',
        mailServer: 'mail.example.com',
        mailPort: 110,
        loginName: 'login@example.com'
      }
    };
  },
  methods: {
    saveSettings() {
      console.log("Settings saved:", this.settings);
      alert("Settings have been saved!");
    }
  }
};
</script>

<style scoped>
.settings-container {
  max-width: 1013pxpx;
  margin: auto;
  font-family: Arial, sans-serif;
}

.alert-box {
  background-color: #ffebcc;
  padding: 10px;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-top: 10px;
}

input,
select {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
}

button {
  margin-top: 15px;
  padding: 10px;
  background-color: #0073aa;
  color: white;
  border: none;
  cursor: pointer;
}
</style>