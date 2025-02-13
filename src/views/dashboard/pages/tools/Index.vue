<template>
     <DashboardHeader heading="Tools">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap" style="padding: 5px 30px 0;">
            <div class="dashboard-content-block-wrap"></div>
    <div class="p-6 bg-gray-100 min-h-screen">
      <!-- Update Notification -->
      <!-- <div class="bg-white p-4 border-l-4 border-yellow-400 shadow-md mb-4">
        <p>
          <a href="#" class="text-blue-500 font-semibold">WordPress 6.7.1</a> is available! 
          <a href="#" class="text-blue-500 underline">Please update now.</a>
        </p>
      </div> -->
  
      <!-- Tools Section -->
      <div class="bg-white p-6 shadow-md">
        <!-- <h2 class="text-xl font-bold mb-4">Tools</h2> -->
  
        <!-- Plugin Updates -->
        <div class="p-4 bg-gray-50 border-l-4 border-yellow-400 mb-4" >
          <p>
            There are updates available for the following plugins: 
            <a href="#" class="text-blue-500 font-semibold">MailChimp For WP</a>, 
            <a href="#" class="text-blue-500 font-semibold">One Click Demo Import</a>, and 
            <a href="#" class="text-blue-500 font-semibold">Redux Framework</a>.
          </p>
          <a href="#" class="text-blue-500 underline">Begin updating plugins</a> | 
          <a href="#" class="text-blue-500 underline">Dismiss this notice</a>
        </div>
  
        <!-- Realtyna MLS Sync Notification -->
        <div class="p-4 bg-gray-50 border-l-4 border-yellow-400 mb-4">
          <p>
            Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, 
            <a href="#" class="text-blue-500 underline">Run Setup Wizard</a>
          </p>
        </div>
  
        <!-- Categories and Tags Converter -->
        <div class="p-6 bg-gray-50 border rounded-md">
          <h3 class="text-lg font-semibold" style="    margin-left: 15px;
    margin-top: 10px;">Categories and Tags Converter</h3>
          <p class="text-gray-600 mt-2" style="    font-size: 14px;
    /* text-align: center; */
    margin-left: 22px;">
            If you want to convert your categories to tags (or vice versa), use the 
            <a href="#" class="text-blue-500 underline" >Categories and Tags Converter</a> available from the Import screen.
          </p>
        </div>
      </div>
    </div>
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
  