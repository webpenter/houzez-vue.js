<template>
    <DashboardHeader heading="Reading Settings">
        <a class="btn btn-primary" href="#">View Public Profile</a>
    </DashboardHeader>
  
    <section class="dashboard-content-wrap">
                    

        <div class="settings-container" >
        <div class="dashboard-content-inner-wrap"></div>
    <div class="reading-settings">
      
      <div class="notice">
        <p>Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <a href="#">Run Setup Wizard</a></p>
      </div>
      
      <div class="updates">
        <p>There are updates available for the following plugins: 
          <a href="#">MailChimp For WP</a>, 
          <a href="#">One Click Demo Import</a>, and 
          <a href="#">Redux Framework</a>.
        </p>
        <a href="#">Begin updating plugins</a> | <a href="#">Dismiss this notice</a>
      </div>
      
      <div class="form-group">
        <label>Your homepage displays</label>
        <div>
          <input type="radio" id="latest-posts" value="latest" v-model="homepageDisplay" />
          <label for="latest-posts">Your latest posts</label>
        </div>
        <div>
          <input type="radio" id="static-page" value="static" v-model="homepageDisplay" />
          <label for="static-page">A <a href="#">static page</a> (select below)</label>
        </div>
      </div>
      
      <div v-if="homepageDisplay === 'static'">
        <div class="form-group">
          <label for="homepage">Homepage:</label>
          <select id="homepage" v-model="homepage">
            <option>Homepage Default</option>
            <option>Custom Page</option>
          </select>
        </div>
        <div class="form-group">
          <label for="posts-page">Posts page:</label>
          <select id="posts-page" v-model="postsPage">
            <option>Blog</option>
            <option>News</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label for="blog-pages">Blog pages show at most</label>
        <input type="number" id="blog-pages" v-model="blogPosts" /> posts
      </div>
      
      <div class="form-group">
        <label for="syndication">Syndication feeds show the most recent</label>
        <input type="number" id="syndication" v-model="syndicationFeeds" /> items
      </div>
      <button style="margin-top: 15px;
    padding: 10px;
    background-color: #0073aa;
    color: white;
    border: none;
    cursor: pointer;" >Save Changes</button>

    </div>
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
  .notice, .updates {
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
  input, select {
    padding: 5px;
    margin-top: 5px;
  }
  </style>
  