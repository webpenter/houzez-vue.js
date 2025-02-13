<template>
    <DashboardHeader heading="Import">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                 <div class="p-6 bg-gray-100 min-h-screen">
                <!-- Notifications -->
                <div class="bg-white p-4 shadow-md mb-4" style="background: #cbcbcb40;">
                    <p class="text-blue-600 font-semibold" >
                        Create your first folder for media library now.
                        <a href="#" class="text-blue-500 underline">Get Started</a>
                    </p>
                </div>

                <div class="bg-yellow-100 p-4 shadow-md mb-4 border-l-4 border-yellow-500" style="background: #cbcbcb40;">
                    <p class="text-gray-700 font-semibold">
                        There are updates available for the following plugins:
                        <span class="italic">MailChimp For WP, One Click Demo Import, Redux Framework</span>.
                        <a href="#" class="text-blue-500 underline">Begin updating plugins</a> |
                        <a href="#" class="text-blue-500 underline">Dismiss this notice</a>
                    </p>
                </div>

                <div class="bg-yellow-100 p-4 shadow-md mb-4 border-l-4 border-yellow-500" style="background: #cbcbcb40;">
                    <p class="text-gray-700">
                        Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS.
                        <a href="#" class="text-blue-500 underline">Run Setup Wizard</a>
                    </p>
                </div>

                <!-- Import Section -->
                <div class="bg-white p-6 shadow-md">
                   

                    <div class="space-y-4">
                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">Blogger</h3>
                            <p class="text-gray-600">Import posts, comments, and users from a Blogger blog.</p>
                            <a href="#" class="text-blue-500 underline">Install Now</a> |
                            <a href="#" class="text-blue-500 underline">Details</a>
                        </div>

                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">Categories and Tags Converter</h3>
                            <p class="text-gray-600">
                                Convert existing categories to tags or tags to categories, selectively.
                            </p>
                            <a href="#" class="text-blue-500 underline">Install Now</a> |
                            <a href="#" class="text-blue-500 underline">Details</a>
                        </div>

                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">Demo Import</h3>
                            <p class="text-gray-600">Demo Importer</p>
                            <a href="#" class="text-blue-500 underline">Run Importer</a>
                        </div>

                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">LiveJournal</h3>
                            <p class="text-gray-600">Import posts from LiveJournal using their API.</p>
                            <a href="#" class="text-blue-500 underline">Install Now | Details</a>
                        </div>
                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">Movable Type and TypePad</h3>
                            <p class="text-gray-600">Import posts and comments from a Movable Type or TypePad blog.</p>
                            <a href="#" class="text-blue-500 underline">Install Now | Details</a>
                        </div>
                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">RSS</h3>
                            <p class="text-gray-600">Import posts from an RSS feed.</p>
                            <a href="#" class="text-blue-500 underline">Install Now | Details</a>
                        </div>
                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">Tumblr</h3>
                            <p class="text-gray-600">Import posts & media from Tumblr using their API.</p>
                            <a href="#" class="text-blue-500 underline">Install Now | Details</a>
                        </div>
                        <div class="p-4 bg-gray-50 border rounded-md">
                            <h3 class="text-lg font-semibold">WordPress</h3>
                            <p class="text-gray-600">Import posts, pages, comments, custom fields, categories, and tags from a WordPress export file.</p>
                            <a href="#" class="text-blue-500 underline">Install Now | Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p style="text-align: center;">If the importer you need is not listed, <a href="http://localhost:3000/dashboard/tools">search the plugin directory</a> to see if an importer is available.</p>
    </section>
    
</template>

<script>
export default {
    name: "ImportPage",
};
</script>

<style scoped></style>