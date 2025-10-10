<template>
  <h2>General Information</h2>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <el-skeleton style="--el-skeleton-circle-size: 200px" animated>
            <template #template>
              <el-skeleton-item variant="circle" />
            </template>
          </el-skeleton>
        </div>
        <div class="col-md-9 col-sm-12">
          <el-skeleton animated :rows="15" />
        </div>
      </div>
    </template>

    <template v-else>
      <div class="row">
        <!-- Logo -->
        <div class="col-md-3 col-sm-12">
          <h3>Logo</h3>

          <img
            v-if="logoPreview"
            class="img-fluid"
            :src="logoPreview"
            alt="logo"
          />

          <template v-else>
            <el-skeleton style="width: 200px">
              <template #template>
                <el-skeleton-item
                  variant="image"
                  style="width: 200px; height: 240px"
                />
              </template>
            </el-skeleton>
          </template>

          <button
            type="button"
            class="btn btn-primary btn-full-width mt-3"
            @click="triggerFileInput"
          >
            Update Logo
          </button>

          <input
            ref="fileInput"
            type="file"
            style="display: none"
            @change="handleFileChange"
          />
        </div>

        <!-- Banner Image -->
        <div class="col-md-3 col-sm-12">
          <h3>Banner Image</h3>

          <img
            v-if="bannerPreview"
            class="img-fluid"
            :src="bannerPreview"
            alt="banner"
          />

          <template v-else>
            <el-skeleton style="width: 200px">
              <template #template>
                <el-skeleton-item
                  variant="image"
                  style="width: 200px; height: 240px"
                />
              </template>
            </el-skeleton>
          </template>

          <button
            type="button"
            class="btn btn-primary btn-full-width mt-3"
            @click="triggerBannerInput"
          >
            Update Banner Image
          </button>

          <input
            ref="bannerInput"
            type="file"
            style="display: none"
            @change="handleBannerChange"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useNotification, useSetting } from "@/stores/index.js";

const notify = useNotification();
const settingStore = useSetting();

const logoPreview = ref("");
const bannerPreview = ref("");
const fileInput = ref(null);
const bannerInput = ref(null);
const loading = ref(true);

/**
 * Trigger logo file input
 */
const triggerFileInput = () => {
  fileInput.value?.click();
};

/**
 * Handle logo upload and update
 */
const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const validExtensions = ["image/jpeg", "image/png", "image/jpg"];
  const maxSizeInBytes = 4 * 1024 * 1024;

  if (!validExtensions.includes(file.type)) {
    notify.Error("Invalid file type. Only JPG, JPEG, and PNG are allowed.");
    event.target.value = "";
    return;
  }

  if (file.size > maxSizeInBytes) {
    notify.Error("File size exceeds 4MB limit.");
    event.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    logoPreview.value = e.target.result;
  };
  reader.readAsDataURL(file);

  const formData = new FormData();
  formData.append("logo", file);

  try {
    const response = await settingStore.updateLogo(formData);
    if (response.status === 200) {
      notify.Success("Logo successfully updated!");
      logoPreview.value = response.data.logo;
    } else {
      notify.Error("Failed to update logo.");
    }
  } catch {
    notify.Error("Something went wrong while updating logo.");
  }
};

/**
 * Trigger banner file input
 */
const triggerBannerInput = () => {
  bannerInput.value?.click();
};

/**
 * Handle banner upload and update
 */
const handleBannerChange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const validExtensions = ["image/jpeg", "image/png", "image/jpg"];
  const maxSizeInBytes = 4 * 1024 * 1024;

  if (!validExtensions.includes(file.type)) {
    notify.Error("Invalid file type. Only JPG, JPEG, and PNG are allowed.");
    event.target.value = "";
    return;
  }

  if (file.size > maxSizeInBytes) {
    notify.Error("File size exceeds 4MB limit.");
    event.target.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    bannerPreview.value = e.target.result;
  };
  reader.readAsDataURL(file);

  const formData = new FormData();
  formData.append("banner", file);

  try {
    const response = await settingStore.updateBanner(formData);
    if (response.status === 200) {
      notify.Success("Banner successfully updated!");
      bannerPreview.value = response.data.banner;
    } else {
      notify.Error("Failed to update banner.");
    }
  } catch {
    notify.Error("Something went wrong while updating banner.");
  }
};

/**
 * Fetch settings on mount
 */
onMounted(async () => {
  try {
    const resLogo = await settingStore.getLogo();
    logoPreview.value = resLogo.data.logo || "";

    const resBanner = await settingStore.getBanner();
    bannerPreview.value = resBanner.data.banner || "";
  } catch {
    notify.Error("Failed to fetch settings.");
  } finally {
    loading.value = false;
  }
});
</script>

<script>
export default {
  name: "GeneralInformation",
};
</script>
