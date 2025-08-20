<template>
  <h2>Information</h2>
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
        <!-- Logo  -->
        <div class="col-md-3 col-sm-12">
          <h3>Logo</h3>

          <!-- Show logo if exists -->
          <img v-if="logoPreview" class="img-fluid" :src="logoPreview" alt="logo">

          <!-- Skeleton loader -->
          <template v-else>
            <el-skeleton style="width: 200px">
              <template #template>
                <el-skeleton-item variant="image" style="width: 200px; height: 240px" />
              </template>
            </el-skeleton>
          </template>

          <!-- Upload button -->
          <button @click="triggerFileInput" type="button" class="btn btn-primary btn-full-width mt-3">
            Update Logo
          </button>

          <!-- Hidden file input -->
          <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" />
        </div><!-- col-md-3 col-sm-12 -->

        <!-- Banner or Hero Section Image-->
        <div class="col-md-3 col-sm-12">
          <h3>Banner Image</h3>

          <!-- Show banner if exists -->
          <img v-if="bannerPreview" class="img-fluid" :src="bannerPreview" alt="banner">

          <!-- Skeleton loader -->
          <template v-else>
            <el-skeleton style="width: 200px">
              <template #template>
                <el-skeleton-item variant="image" style="width: 200px; height: 240px" />
              </template>
            </el-skeleton>
          </template>

          <!-- Upload button -->
          <button @click="triggerBannerInput" type="button" class="btn btn-primary btn-full-width mt-3">
            Update Banner Image
          </button>

          <!-- Hidden file input -->
          <input type="file" ref="bannerInput" style="display: none;" @change="handleBannerChange" />
        </div><!-- col-md-3 col-sm-12 -->
      </div><!-- row -->
    </template>
  </div><!-- dashboard-content-block -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useNotification, useSetting } from "@/stores/index.js";

const notify = useNotification();
const settingStore = useSetting();
const { logo, banner } = storeToRefs(settingStore);

const logoPreview = ref("");
const bannerPreview = ref("");
const fileInput = ref(null);
const bannerInput = ref(null);
const loading = ref(true);

// ✅ Trigger Logo Input
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

// ✅ Handle Logo Change
const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const validExtensions = ["image/jpeg", "image/png", "image/jpg"];
    const maxSizeInBytes = 4 * 1024 * 1024; // 4MB

    if (!validExtensions.includes(file.type)) {
      notify.Error("Invalid file type. Only JPG, JPEG, and PNG files are allowed.");
      event.target.value = "";
      return;
    }

    if (file.size > maxSizeInBytes) {
      notify.Error("File size exceeds the 4MB limit.");
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
    } catch (error) {
      notify.Error(error);
    }
  }
};

// ✅ Trigger Banner Input
const triggerBannerInput = () => {
  if (bannerInput.value) {
    bannerInput.value.click();
  }
};

// ✅ Handle Banner Change
const handleBannerChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const validExtensions = ["image/jpeg", "image/png", "image/jpg"];
    const maxSizeInBytes = 4 * 1024 * 1024; // 4MB

    if (!validExtensions.includes(file.type)) {
      notify.Error("Invalid file type. Only JPG, JPEG, and PNG files are allowed.");
      event.target.value = "";
      return;
    }

    if (file.size > maxSizeInBytes) {
      notify.Error("File size exceeds the 4MB limit.");
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
    } catch (error) {
      notify.Error(error);
    }
  }
};

// ✅ Fetch both logo & banner on mount
onMounted(async () => {
  try {
    const resLogo = await settingStore.getLogo();
    logoPreview.value = resLogo.data.logo;

    const resBanner = await settingStore.getBanner();
    bannerPreview.value = resBanner.data.banner;
  } catch (err) {
    notify.Error("Failed to fetch settings");
  } finally {
    loading.value = false;
  }
});
</script>
