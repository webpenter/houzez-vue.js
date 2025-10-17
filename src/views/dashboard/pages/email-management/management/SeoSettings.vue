<template>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <el-skeleton animated :rows="6" />
    </template>

    <template v-else>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <h2>SEO Settings</h2>
        </div>

        <div class="col-md-9 col-sm-12">
          <form @submit.prevent="submitSeoForm">
            <div class="form-group">
              <label>Meta Title</label>
              <input
                v-model="seo.meta_title"
                type="text"
                class="form-control"
                placeholder="Enter Meta Title"
              />
            </div>

            <div class="form-group">
              <label>Meta Description</label>
              <textarea
                v-model="seo.meta_description"
                class="form-control"
                placeholder="Enter Meta Description"
              ></textarea>
            </div>

            <div class="form-group">
              <label>Meta Keywords</label>
              <input
                v-model="seo.meta_keywords"
                type="text"
                class="form-control"
                placeholder="Enter Meta Keywords"
              />
            </div>

            <div class="form-group">
              <label>Google Analytics Code</label>
              <textarea
                v-model="seo.google_analytics_code"
                class="form-control"
                placeholder="Paste Google Analytics Code"
              ></textarea>
            </div>

            <div class="form-group">
              <label>Facebook Pixel Code</label>
              <textarea
                v-model="seo.facebook_pixel_code"
                class="form-control"
                placeholder="Paste Facebook Pixel Code"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success mt-3">
              Update SEO Settings
            </button>
          </form>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSetting, useNotification } from "@/stores/index.js";

const settingStore = useSetting();
const notify = useNotification();

const seo = ref({
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  google_analytics_code: "",
  facebook_pixel_code: "",
});

const loading = ref(true);

/**
 * ✅ Submit SEO Settings
 */
const submitSeoForm = async () => {
  try {
    await settingStore.updateSeo(seo.value);
    notify.Success("SEO settings updated successfully!");
  } catch {
    notify.Error("Failed to update SEO settings");
  }
};

/**
 * ✅ Fetch SEO Settings on Mount
 */
onMounted(async () => {
  try {
    const res = await settingStore.getSeo();
    seo.value = { ...seo.value, ...res.data.seo };
  } catch {
    notify.Error("Failed to fetch SEO settings");
  } finally {
    loading.value = false;
  }
});
</script>

<script>
export default {
  name: "GeneralSeoSettings",
};
</script>
