<template>
  <DashboardHeader heading="All Blogs">
         <RouterLink class="btn btn-primary" :to="{name:'dashboard.admin.create-blog'}">
           Create blog
         </RouterLink>
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="dashboard-content-inner-wrap">
      <div class="dashboard-content-block-wrap">
        <NoDataMsg msg="You don't have any blog yet!" v-if="allBlogs.length < 1"/>
        <Table
            v-else
            :all-blogs="allBlogs"
            :loading="loading"
            @delete-blog="(id) => deleteBlog(id)"
        />
      </div><!-- dashboard-content-block-wrap -->
    </div><!-- dashboard-content-inner-wrap -->
  </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import {RouterLink} from "vue-router";
import {useBlog, useConfirm, useMessage, useNotification} from "@/stores/index.js";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import Table from "@/views/dashboard/pages/admin/blogs/all-blogs/Table.vue";

const blogStore = useBlog();
const {allBlogs} = storeToRefs(blogStore);

const loading = ref(false);

const getBlog = async () => {
  loading.value = true;
  await blogStore.getAllBlogs();
  loading.value = false;
}

const deleteBlog = async (id) => {
  useConfirm().Warning("Are you sure you want to delete this blog?")
      .then(async () => {
        try {
          const res = await blogStore.deleteBlog(id);

          if (res.status === 200) {
            useNotification().Success("Successfully deleted blog");
            await getBlog();
          } else {
            useNotification().Error(`Failed to delete blog`);
          }
        } catch (error) {
          useNotification().Error(`An error occurred ${error}`);
        }
      })
      .catch(() => {
        useMessage().Info("Request cancelled.")
      });

}

onMounted(() => getBlog());
</script>