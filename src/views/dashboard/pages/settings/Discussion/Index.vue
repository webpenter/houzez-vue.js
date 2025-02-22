<template>
  <DashboardHeader heading="Discussion Settings">
    <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Discussion Feild</a>
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

                <h3> Default post settings</h3>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning">Attempt to notify any blogs linked to from the post
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Allow link notifications from other blogs (pingbacks
                  and trackbacks) on new posts
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Allow people to submit comments on new posts
                  <span class="control__indicator"></span>
                </label>
                <h3>Other comment settings</h3>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Comment author must fill out name and email
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Users must be registered and logged in to comment
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Automatically close comments on posts older than
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Enable threaded (nested) comments
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Break comments into pages with
                  <span class="control__indicator"></span>
                </label>
                <h3>Email me whenever</h3>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Anyone posts a comment
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning">A comment is held for moderation
                  <span class="control__indicator"></span>
                </label>
                <h3>Before a comment appears</h3>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning"> Comment must be manually approved
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning">Comment author must have a previously approved comment
                  <span class="control__indicator"></span>
                </label>
                <h3>Comment Moderation</h3>
                When a comment contains any of these words in its content, author name, URL, email, IP address, or
                browser’s user agent string, it will be held in the moderation queue. One word or IP address per line.
                It will match inside words, so “press” will match “Vue Js”.
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="10"
                    placeholder="Enter the property description"></textarea>
                </div>
                <h3>Disallowed Comment Keys</h3>
                When a comment contains any of these words in its content, author name, URL, email, IP address, or
                browser’s user agent string, it will be held in the moderation queue. One word or IP address per line.
                It will match inside words, so “press” will match “Vue Js”.
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="10"
                    placeholder="Enter the property description"></textarea>
                </div>
                <!-- 3 -->

                <!-- <label class="control control--radio radio-tab">
                <input name="" value="" type="radio">
                <span class="radio-tab-inner"></span>
            </label> -->

                <div class="col-md-6 col-sm-12">

                </div>
                <h3>Avatars</h3>
                <!-- <p>
          
      Homepage:
                                <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
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
                                    <select class="form-control" title="Select" data-live-search="false" data-selected-text-format="count" data-actions-box="false">
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
                      </p> -->
                <h3>
                  Avatar Display</h3>

                <!-- <div class="form-group">
			<label>Blog pages show at most</label>
			<input class="form-control is-valid" name="name" placeholder="Enter the Blog pages show at most" type="number">
		</div>
    <div class="form-group">
			<label>Syndication feeds show the most recent</label>
			<input class="form-control is-valid" name="name" placeholder="Enter the Syndication feeds show the most recent" type="number">
		</div>
                      <h3>For each post in a feed, include</h3>  -->

                <label class="control control--checkbox">
                  <input type="checkbox" name="air-conditioning">Show Avatars
                  <span class="control__indicator"></span>
                </label>
                <h3>Maximum Rating</h3>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> G — Suitable for all audiences
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> PG — Possibly offensive, usually for audiences 13 and
                  above
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> R — Intended for adult audiences above 17
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> X — Even more mature than above
                  <span class="control__indicator"></span>
                </label>
                <h3>Default Avatar</h3>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Mystery Person
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Blank
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Gravatar Logo
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Identicon (Generated)
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Wavatar (Generated)
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> MonsterID (Generated)
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--radio">
                  <input type="radio" name="air-conditioning"> Retro (Generated)
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
      settings: {
        notifyBlogs: false,
        allowPingbacks: true,
        allowComments: true,
        requireNameEmail: true,
        requireRegistration: false,
        autoCloseComments: false,
        autoCloseDays: 14,
        showCookies: true,
        enableThreaded: true,
        threadDepth: 5,
        breakComments: true,
        commentsPerPage: 50
      }
    };
  }
};
</script>

<style scoped>
.discussion-settings {
  max-width: 1013px;
  margin: auto;
}

.alert {
  border-left: 4px solid #d97706;
}

label {
  display: block;
  margin-bottom: 8px;
}
</style>