<template>
  <DashboardHeader heading="General Settings">
    <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <div class="dashboard-content-block">
            <div class="form-group">
              <label>Logo</label>
              <input
                class="form-control"
                type="file"
                name="logo"
              >
            </div>

            <div class="form-group">
              <label>Background Image</label>
              <input
                class="form-control"
                type="file"
                name="bg-image"
              >
            </div>

            <div class="form-group">
              <label>Hero Image</label>
              <input
                class="form-control"
                type="file"
                name="hero-image"
              >
            </div>

            <div class="form-group">
              <label>Hero Title</label>
              <input
                class="form-control"
                type="text"
                name="hero_title"
                placeholder="Enter the Hero Title"
              >
            </div>

            <div class="form-group">
              <label>Hero Caption</label>
              <input
                class="form-control"
                type="text"
                name="hero_caption"
                placeholder="Enter the Hero Caption"
              >
            </div>

            <div class="form-group">
              <label>Address</label>
              <input
                class="form-control"
                type="text"
                name="address"
                placeholder="Enter the Address"
              >
            </div>

            <div class="form-group">
              <label>Phone 1</label>
              <input
                class="form-control"
                type="tel"
                name="phone"
                placeholder="Enter the Phone 1"
              >
            </div>

            <div class="form-group">
              <label>Phone 2</label>
              <input
                class="form-control"
                type="tel"
                name="phone"
                placeholder="Enter the Phone 1"
              >
            </div>

            <div class="form-group">
              <label>Email 1</label>
              <input
                class="form-control"
                type="email"
                name="email"
                placeholder="Enter the Email"
              >
            </div>

            <div class="form-group">
              <label>Email 2</label>
              <input
                class="form-control"
                type="email"
                name="email"
                placeholder="Enter the Email"
              >
            </div>

            <div class="form-group">
              <label>Footer Caption</label>
              <input
                class="form-control"
                type="text"
                name="footer_caption"
                placeholder="Enter the Footer Caption"
              >
            </div>

            <div class="form-group">
              <label>Facebook Link</label>
              <input
                class="form-control"
                type="url"
                name="facebook_link"
                placeholder="Enter the Facebook Link"
              >
            </div>

            <div class="form-group">
              <label>Twitter Link</label>
              <input
                class="form-control"
                type="url"
                name="twitter_link"
                placeholder="Enter the Twitter Link"
              >
            </div>

            <div class="form-group">
              <label>Instagram Link</label>
              <input
                class="form-control"
                type="url"
                name="instagram_link"
                placeholder="Enter the Instagram Link"
              >
            </div>
            
          </div><!-- dashboard-content-block -->
        </div><!-- dashboard-content-block-wrap -->
        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard'}">
              Cancel
          </RouterLink>
          <SaveBtn :btnLoading="btnLoading" :hasErrors="hasErrors"/>
        </div>
      </form>
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>


<script setup>
import SaveBtn from "@/views/dashboard/components/SaveBtn.vue";

</script>