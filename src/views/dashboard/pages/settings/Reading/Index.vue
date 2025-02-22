<template>
  <DashboardHeader heading="Reading Settings">
    <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Reading Feild</a>
  </DashboardHeader>

  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <div class="dashboard-content-block">
          Realtyna MLS Sync : Could not set a Target Product to Sync with the MLS, <a class="open-close-slide-panel"
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

                <h3> Your homepage displays</h3>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning">Your latest posts
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> A <a href="">static page</a> (select below)
                  <span class="control__indicator"></span>
                </label>
                <!-- 3 -->

                <!-- <label class="control control--radio radio-tab">
                <input name="" value="" type="radio">
                <span class="radio-tab-inner"></span>
            </label> -->

                <div class="col-md-6 col-sm-12">

                </div>
                <p>

                  Homepage:
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
                <p>

                  Posts page:
                  <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count"
                    data-actions-box="false">
                    <option>Blog</option>
                    <option>Board</option>
                    <option>Contact</option>
                    <option>Held</option>
                    <option>order</option>

                    <option>Uncategorized</option>
                    <option>Bussiness</option>
                    <option>Construction</option>
                    <option>Marketing</option>
                    <option>Real Estate</option>
                    <option>uncategorized</option>




                  </select>
                </p>
                <h3>For each post in a feed, include</h3>

                <div class="form-group">
                  <label>Blog pages show at most</label>
                  <input class="form-control is-valid" name="name" placeholder="Enter the Blog pages show at most"
                    type="number">
                </div>
                <div class="form-group">
                  <label>Syndication feeds show the most recent</label>
                  <input class="form-control is-valid" name="name"
                    placeholder="Enter the Syndication feeds show the most recent" type="number">
                </div>
                <h3>For each post in a feed, include</h3>

                <label class="control control--radio">
                  <input type="radio" name="air-conditioning">Full text
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning">Excerpt
                  <span class="control__indicator"></span>
                </label>
                <h3>For each post in a feed, include</h3>

                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Discourage search engines from indexing this site
                  <span class="control__indicator"></span>
                </label>
              </div>
              <a class="btn btn-primary-outlined" href="#modal-save-draft" data-toggle="modal">Save Changes</a>

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
      homepageDisplay: 'static',
      homepage: 'Homepage Default',
      postsPage: 'Blog',
      blogPosts: 10,
      syndicationFeeds: 10
    };
  }
};
</script>

<style scoped>
.reading-settings {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px;
}

.notice,
.updates {
  background-color: #f8f9fa;
  padding: 10px;
  margin-bottom: 10px;
  border-left: 4px solid #ffc107;
}

.form-group {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  display: block;
}

input,
select {
  padding: 5px;
  margin-top: 5px;
}
</style>