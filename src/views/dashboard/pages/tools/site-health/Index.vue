<template>
    <DashboardHeader heading="Site Health">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="p-6 bg-gray-100 min-h-screen">

                    <div class="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
                        <h2 class="text-xl font-bold">Site Health</h2>
                        <div class="flex items-center mt-2">
                            <span class="h-4 w-4 bg-green-500 rounded-full mr-2"></span>
                            <span>Good</span>
                        </div>

                        <div class="mt-4 border-t pt-4">
                            <div class="bg-yellow-100 p-3 rounded-lg mb-3">
                                <p>There are updates available for the following plugins: <span
                                        class="text-blue-600">MailChimp For WP, One Click Demo Import, Redux
                                        Framework</span>.</p>
                                <div class="mt-2">
                                    <button class="text-blue-600 mr-4" style="    border: 1px solid;
    border-color: #dce0e0;">Begin updating plugins</button>
                                    <button class="text-blue-600" style="    border: 1px solid;
    border-color: #dce0e0;">Dismiss this notice</button>
                                </div>
                            </div>

                            <div class="bg-yellow-100 p-3 rounded-lg">
                                <p>Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <span
                                        class="text-blue-600">Run Setup Wizard</span></p>
                            </div>
                        </div>

                        <div class="mt-4 border-t pt-4">
                            <h3 class="text-lg font-semibold">Site Health Status</h3>
                            <p class="text-gray-600">The site health check shows critical information about your
                                Vue Js
                                configuration and items that require your attention.</p>

                                <div class="p-6 bg-gray-100 min-h-screen">
    <div class="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 class="text-xl font-bold">5 recommended improvements</h2>
      
      <div class="mt-4 border-t pt-4">
        <div v-for="(item, index) in improvements" :key="index" class="border-b py-2 flex justify-between items-center">
          <p class="font-semibold">{{ item.text }}</p>
          <button class="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg" style="    border: 1px solid;
    border-color: rgb(0, 81, 119);">{{ item.category }}</button>
        </div>
      </div>
      
      <div class="mt-4 flex justify-center">
        <button class="border px-4 py-2 rounded-lg" style="    border: 1px solid;
    border-color: #dce0e0; background: rgb(0, 81, 119); color: #dce0e0;" >Passed tests </button>
            <p style="text-align: center; margin-top: 30px;">If the importer you need is not listed, <a href="http://localhost:3000/dashboard/tools">search the plugin directory</a> to see if an importer is available.</p>

      </div>
    </div>
  </div>
                        </div>
                    </div>
                </div>
            </div>
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