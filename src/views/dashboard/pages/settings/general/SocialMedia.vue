<template>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <div class="row">
        <el-skeleton animated :rows="8"/>
      </div>
    </template>

    <template v-else>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <h2>Social Media</h2>
        </div>

        <div class="col-md-9 col-sm-12">
          <form @submit.prevent="submitSocialMediaForm">
            <div class="row">
              <div v-for="(value, key) in socialMedia" :key="key" class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ formatLabel(key) }}</label>
                  <input class="form-control" v-model="socialMedia[key]" :placeholder="`Enter your ${formatLabel(key)} URL`" type="text">
                  
                </div>
              </div>
            </div>
            <button class="btn btn-success mt-3">Update Profile</button>
          </form>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSetting, useNotification } from "@/stores/index.js";

const notify = useNotification();
const settingStore = useSetting();

const socialMedia = ref({
  facebook: "",
  twitter: "",
  linkedin: "",
  instagram: "",
  google_plus: "",
  youtube: "",
  pinterest: "",
  vimeo: "",
  skype: "",
  website: ""
});

const loading = ref(true);

// Format labels from keys (facebook -> Facebook)
const formatLabel = (key) => key.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase());

const submitSocialMediaForm = async () => {
  try {
    const res = await settingStore.updateSocialMedia(socialMedia.value);
    notify.Success("Social media updated successfully!");
  } catch (err) {
    notify.Error("Failed to update social media");
  }
};

onMounted(async () => {
  try {
    const res = await settingStore.getSocialMedia();
    socialMedia.value = { ...socialMedia.value, ...res.data.social_media };
  } catch (err) {
    notify.Error("Failed to fetch social media");
  } finally {
    loading.value = false;
  }
});
</script>
