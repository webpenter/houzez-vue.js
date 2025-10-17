<template>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <el-skeleton animated :rows="5" />
    </template>

    <template v-else>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <h2>Contact Settings</h2>
        </div>

        <div class="col-md-9 col-sm-12">
          <form @submit.prevent="submitContactForm">
            <div class="form-group mb-3">
              <label>Contact Email</label>
              <input
                v-model="contact.contact_email.value"
                type="email"
                class="form-control"
                placeholder="Enter contact email"
              />
            </div>

            <div class="form-group mb-3">
              <label>Contact Phone</label>
              <input
                v-model="contact.contact_phone.value"
                type="text"
                class="form-control"
                placeholder="Enter contact phone"
              />
            </div>

            <div class="form-group mb-3">
              <label>Mobile Number</label>
              <input
                v-model="contact.mobile_number.value"
                type="text"
                class="form-control"
                placeholder="Enter mobile number"
              />
            </div>

            <div class="form-group mb-3">
              <label>Whatsapp Number</label>
              <input
                v-model="contact.whatsapp_number.value"
                type="text"
                class="form-control"
                placeholder="Enter WhatsApp number"
              />
            </div>

            <div class="form-group mb-3">
              <label>Address</label>
              <textarea
                v-model="contact.address.value"
                class="form-control"
                rows="2"
                placeholder="Enter address"
              ></textarea>
            </div>

            <button class="btn btn-success">
              Update Contact Settings
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

const notify = useNotification();
const settingStore = useSetting();

const contact = ref({
  contact_email: { value: "" },
  contact_phone: { value: "" },
  address: { value: "" },
  mobile_number: { value: "" },
  whatsapp_number: { value: "" },
});

const loading = ref(true);

const submitContactForm = async () => {
  try {
    await settingStore.updateContactSettings(contact.value);
    notify.Success("Contact settings updated successfully!");
  } catch {
    notify.Error("Failed to update contact settings");
  }
};

onMounted(async () => {
  try {
    const res = await settingStore.getContactSettings();
    contact.value = { ...contact.value, ...res.data.contact };
  } catch {
    notify.Error("Failed to fetch contact settings");
  } finally {
    loading.value = false;
  }
});
</script>
