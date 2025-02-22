<template>
      <DashboardHeader heading="Media Settings">
    <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Media Feild</a>
  </DashboardHeader>
  
   <section  class="dashboard-content-wrap">
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
                <h3> Image Size</h3>
                <!-- 3 -->
                The sizes listed below determine the maximum dimensions in pixels to use when adding an image to the Media Library.
                <div class="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>
                      Thumbnail size</label>
                    Width<input class="form-control" placeholder="" type="number">
                    Height<input class="form-control" placeholder="" type="number">
                  </div>
                  <div class="form-group">
                    <label>
                      Medium size</label>
                   Max Width<input class="form-control" placeholder="" type="number">
                   Max Height<input class="form-control" placeholder="" type="number">
                  </div>
                  <div class="form-group">
                    <label>Large size</label>
                  Max Width<input class="form-control" placeholder="" type="number">
                  Max Height<input class="form-control" placeholder="" type="number">
                  </div>
                </div>
            
                <h3>Uploading Files</h3>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Organize my uploads into month- and year-based folders
                  <span class="control__indicator"></span>
                </label>
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
        thumbnail: { width: 150, height: 150, crop: true },
        medium: { width: 300, height: 300 },
        large: { width: 1024, height: 1024 },
        uploadSettings: { organize: true },
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1013px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    margin-left: 19%;

  }
  .input {
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 4px;
    width: 60px;
    margin-left: 5px;
  }
  </style>
  