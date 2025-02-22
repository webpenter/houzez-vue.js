<template>
  <DashboardHeader heading="Currency Switcher"> </DashboardHeader>

  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <h2>API Settings</h2>
          <div class="dashboard-content-block">
            <div class="form-group">
              <label>API Key</label>
              <input class="form-control" placeholder="Enter the API KEY" type="text" />
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <div class="form-group">
                  <label>Default Post Category</label>
                  <div>
                    <!-- <el-select v-model="formData.type" filterable default-first-option :reserve-keyword="false"
                      placeholder="Choose type for your property" style="width: 300px">
                      <el-option v-for="type in types" :key="type.id" :label="type.name" :value="type.name" />
                    </el-select> -->
                    
                  </div>
                </div><!-- form-group -->
              </div><!-- col-md-4 col-sm-12 -->
              
            </div><!-- row -->
          </div><!-- dashboard-content-block -->
        </div><!-- dashboard-content-block-wrap -->
        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <RouterLink class="btn btn-primary-outlined" :to="{ name: '' }">
            Cancel
          </RouterLink>
          <SaveBtn />
        </div><!-- add-new-listing-bottom-nav-wrap -->
      </form>
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->

</template>

<script setup>
import SaveBtn from "@/views/dashboard/components/SaveBtn.vue";
</script>
