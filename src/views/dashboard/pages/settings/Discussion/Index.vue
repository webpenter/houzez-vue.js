<template>
    <DashboardHeader heading="Discussion Settings">
        <a class="btn btn-primary" href="#">View Public Profile</a>
    </DashboardHeader>
  
    <section class="dashboard-content-wrap">
        <div class="settings-container" >
       
          
           
        <div class="dashboard-content-inner-wrap"></div>
    <div class="discussion-settings p-6 bg-gray-100 rounded-lg" style="margin-left: 30px;">
      <h5 class="text-xl font-bold mb-4">Discussion Settings</h5>
      
      <div class="alert bg-yellow-100 p-3 rounded mb-2">
        <p>Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <a href="#" class="text-blue-500">Run Setup Wizard</a></p>
      </div>
      
      <div class="alert bg-yellow-100 p-3 rounded mb-4">
        <p>There are updates available for the following plugins: <a href="#" class="text-blue-500">MailChimp For WP</a>, <a href="#" class="text-blue-500">One Click Demo Import</a> and <a href="#" class="text-blue-500">Redux Framework</a>.</p>
        <a href="#" class="text-blue-500" style="margin-top: -15px;">Begin updating plugins</a>  <a href="#" class="text-blue-500" style="margin-top: -15px;">Dismiss this notice</a>
      </div>
      
      <div class="mb-4">
        <h5 class="text-lg font-semibold">Default post settings</h5>
        <label><input type="checkbox" v-model="settings.notifyBlogs"> Attempt to notify any blogs linked to from the post</label><br>
        <label><input type="checkbox" v-model="settings.allowPingbacks"> Allow link notifications from other blogs (pingbacks and trackbacks) on new posts</label><br>
        <label><input type="checkbox" v-model="settings.allowComments"> Allow people to submit comments on new posts</label>
      </div>
      
      <div class="mb-4">
        <h5 class="text-lg font-semibold">Other comment settings</h5>
        <label><input type="checkbox" v-model="settings.requireNameEmail"> Comment author must fill out name and email</label><br>
        <label><input type="checkbox" v-model="settings.requireRegistration"> Users must be registered and logged in to comment</label><br>
        <label>
          <input type="checkbox" v-model="settings.autoCloseComments"> Automatically close comments on posts older than
          <input type="number" v-model="settings.autoCloseDays" class="border p-1 w-16 ml-2"> days
        </label><br>
        <label><input type="checkbox" v-model="settings.showCookies"> Show comments cookies opt-in checkbox</label><br>
        <label>
          <input type="checkbox" v-model="settings.enableThreaded"> Enable threaded (nested) comments
          <select v-model="settings.threadDepth" class="border p-1 ml-2">
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select> levels deep
        </label><br>
        <label>
          <input type="checkbox" v-model="settings.breakComments"> Break comments into pages with
          <input type="number" v-model="settings.commentsPerPage" class="border p-1 w-16 ml-2"> top level comments per page
        </label>
        <label>
          <input type="checkbox" v-model="settings.breakComments"> Comments should be displayed with the
          <input type="number" v-model="settings.commentsPerPage" class="border p-1 w-16 ml-2"> Comments at the top of each page 
        </label>
        </div>
        <div class="mb-4">
        <h5 class="text-lg font-semibold">Email me whenever</h5>
        <label><input type="checkbox" v-model="settings.requireNameEmail">  Anyone posts a comment</label>
        <label><input type="checkbox" v-model="settings.requireRegistration"> A comment is held for moderation</label><br>
        
        </div>
        <div class="mb-4">
        <h5 class="text-lg font-semibold">Before a comment appears</h5>
        <label><input type="checkbox" v-model="settings.requireNameEmail">  Comment must be manually approved</label>
        <label><input type="checkbox" v-model="settings.requireRegistration"> Comment author must have a previously approved comment</label><br>
        
        </div>
        <div class="mb-4">
      <h3 class="text-lg font-semibold">Comment Moderation</h3>
      <label>
        Hold a comment in the queue if it contains
        <input type="number" v-model="settings.moderationLinks" class="border p-1 w-16 ml-2"> or more links.
      </label>
      <p class="text-sm">When a comment contains any of these words in its content, author name, URL, email, IP address, or browser’s user agent string, it will be held in the <a href="#" class="text-blue-500">moderation queue</a>. One word or IP address per line.</p>
      <textarea v-model="settings.moderationWords" class="border p-2 w-full h-24" style="    height: 183px;
    width: 96%;"></textarea>
    </div>
    <div class="mb-4">
      <h3 class="text-lg font-semibold">Disallowed Comment Keys</h3>
      <p class="text-sm">When a comment contains any of these words in its content, author name, URL, email, IP address, or browser’s user agent string, it will be put in the Trash. One word or IP address per line.</p>
      <textarea v-model="settings.disallowedWords" class="border p-2 w-full h-24" style="    height: 183px;
    width: 96%;"></textarea>
    </div>
      </div>
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
  