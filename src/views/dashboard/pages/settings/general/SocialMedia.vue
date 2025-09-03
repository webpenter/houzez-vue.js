<template>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <div class="row">
        <el-skeleton animated :rows="8" />
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
              <div v-for="(item, key) in socialMedia" :key="key" class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ formatLabel(key) }}</label>
                  <div class="form-check mr-2 float-end">
                    <input type="checkbox" class="form-check-input" v-model="item.is_visible" :id="`${key}_visible`">
                    <label class="form-check-label" :for="`${key}_visible`">
                      Visible
                    </label>
                  </div>
                  <input class="form-control" v-model="item.value" :placeholder="`Enter your ${formatLabel(key)} URL`"
                    type="text">
                  
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
  facebook: { value: "", is_visible: false },
  twitter: { value: "", is_visible: false },
  linkedin: { value: "", is_visible: false },
  instagram: { value: "", is_visible: false },
  google_plus: { value: "", is_visible: false },
  youtube: { value: "", is_visible: false },
  pinterest: { value: "", is_visible: false },
  vimeo: { value: "", is_visible: false },
  skype: { value: "", is_visible: false },
  website: { value: "", is_visible: false }
});

const loading = ref(true);

// Format labels from keys (facebook -> Facebook)
const formatLabel = (key) => key.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase());

const submitSocialMediaForm = async () => {
  try {
    const payload = {};
    for (const key in socialMedia.value) {
      payload[key] = {
        value: socialMedia.value[key].value,
        is_visible: socialMedia.value[key].is_visible ? 1 : 0
      };
    }
    await settingStore.updateSocialMedia(payload);
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
