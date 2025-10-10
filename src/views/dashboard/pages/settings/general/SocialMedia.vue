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
              <div
                v-for="(item, key) in socialMedia"
                :key="key"
                class="col-md-6 col-sm-12"
              >
                <div class="form-group">
                  <label>{{ formatLabel(key) }}</label>
                  <div class="form-check mr-2 float-end">
                    <input
                    :id="`${key}_visible`"
                      v-model="item.is_visible"
                      type="checkbox"
                      
                      class="form-check-input"
                    />
                    <label
                      class="form-check-label"
                      :for="`${key}_visible`"
                    >
                      Visible
                    </label>
                  </div>
                  <input
                    v-model="item.value"
                    type="text"
                    class="form-control"
                    :placeholder="`Enter your ${formatLabel(key)} URL`"
                  />
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
  website: { value: "", is_visible: false },
});

const loading = ref(true);

/**
 * Format social media key names (e.g., facebook → Facebook)
 * @param {string} key
 * @return {string}
 */
const formatLabel = (key) =>
  key.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());

/**
 * Submit social media form updates
 * @return {Promise<void>}
 */
const submitSocialMediaForm = async () => {
  try {
    const payload = {};
    for (const key in socialMedia.value) {
      payload[key] = {
        value: socialMedia.value[key].value,
        is_visible: socialMedia.value[key].is_visible ? 1 : 0,
      };
    }
    await settingStore.updateSocialMedia(payload);
    notify.Success("Social media updated successfully!");
  } catch {
    notify.Error("Failed to update social media");
  }
};

/**
 * Fetch existing social media data on mount
 * @return {Promise<void>}
 */
onMounted(async () => {
  try {
    const res = await settingStore.getSocialMedia();
    socialMedia.value = { ...socialMedia.value, ...res.data.social_media };
  } catch {
    notify.Error("Failed to fetch social media");
  } finally {
    loading.value = false;
  }
});
</script>
