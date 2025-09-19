<template>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <div class="row">
        <el-skeleton animated :rows="6" />
      </div>
    </template>

    <template v-else>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <h2>Site Information</h2>
        </div>

        <div class="col-md-9 col-sm-12">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div v-for="(item, key) in siteInfo" :key="key" class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>{{ formatLabel(key) }}</label>
                  <div class="form-check mr-2 float-end">
                    <input type="checkbox" class="form-check-input" v-model="item.is_visible" :id="`${key}_visible`">
                    <label class="form-check-label" :for="`${key}_visible`">Visible</label>
                  </div>
                  <input class="form-control" v-model="item.value" :placeholder="`Enter ${formatLabel(key)}`" type="text">
                </div>
              </div>
            </div>
            <button class="btn btn-success mt-3">Update Information</button>
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

const loading = ref(true);
const siteInfo = ref({
  email: { value: "", is_visible: true },
  phone_number: { value: "", is_visible: true },
  site_name: { value: "", is_visible: true },
  site_title: { value: "", is_visible: true },
});

const formatLabel = (key) => key.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase());

const submitForm = async () => {
  try {
    const payload = {};
    for (const key in siteInfo.value) {
      payload[key] = {
        value: siteInfo.value[key].value,
        is_visible: siteInfo.value[key].is_visible ? 1 : 0
      };
    }
    await settingStore.updateSiteInformation(payload);
    notify.Success("Site information updated successfully!");
  } catch (err) {
    notify.Error("Failed to update site information");
  }
};

onMounted(async () => {
  try {
    const res = await settingStore.getSiteInformation();
    siteInfo.value = { ...siteInfo.value, ...res.data.site_information };
  } catch (err) {
    notify.Error("Failed to fetch site information");
  } finally {
    loading.value = false;
  }
});
</script>
