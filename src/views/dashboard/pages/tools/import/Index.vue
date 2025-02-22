<template>
    <DashboardHeader heading="Import">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Import Feild</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    Realtyna MLS Sync : Could not set a Target Product to Sync with the MLS, <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Run Setup Wizard</strong></a>
                   

                </div>
                <!-- dashboard-content-block -->
  </div>
  </div>

  <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    Blogger : Import posts, comments, and users from a Blogger blog. <br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Install Now | Details</strong></a><br><br>
                    Categories and Tags Converter:    Convert existing categories to tags or tags to categories, selectively.. <br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Install Now | Details</strong></a><br><br>
                  
                    Demo Import:   Import posts from LiveJournal using their API.<br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Run Importer</strong></a><br><br>

                    LiveJournal:    Import posts from LiveJournal using their API <br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Install Now | Details</strong></a><br><br>
                    Movable Type and TypePad:    Import posts and comments from a Movable Type or TypePad blog.<br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Install Now | Details</strong></a><br><br>
                    RSS:    ]Import posts from an RSS feed.<br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Install Now | Details</strong></a><br><br>
                    Tumblr:   Import posts & media from Tumblr using their API.<br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Install Now | Details</strong></a><br><br>
                    Vue Js:   Import posts, pages, comments, custom fields, categories, and tags from a VueJs export file..<br>
                    <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong> Install Now | Details</strong></a>
                </div>
                If the importer you need is not listed   <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>  search the plugin directory</strong></a>to see if an importer is available.<br><br>

                <!-- dashboard-content-block -->
  </div>
  </div>
  </section>
    
</template>

<script>
export default {
    name: "ImportPage",
};
</script>

<style scoped></style>