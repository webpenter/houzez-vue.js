<template>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <div class="row">
        <el-skeleton animated :rows="7" />
      </div>
    </template>

    <template v-else>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <h2>Email Settings</h2>
        </div>

        <div class="col-md-9 col-sm-12">
          <form @submit.prevent="submitEmailForm">
            <div class="form-group mb-3">
              <label>Mail Driver</label>
              <select v-model="email.mail_driver.value" class="form-control">
                <option value="smtp">SMTP</option>
                <option value="sendmail">Sendmail</option>
                <option value="mailgun">Mailgun</option>
                <option value="ses">SES</option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label>SMTP Host</label>
              <input type="text" v-model="email.mail_host.value" class="form-control" placeholder="Enter SMTP Host" />
            </div>

            <div class="form-group mb-3">
              <label>SMTP Port</label>
              <input type="number" v-model="email.mail_port.value" class="form-control" placeholder="Enter SMTP Port" />
            </div>

            <div class="form-group mb-3">
              <label>Username</label>
              <input type="text" v-model="email.mail_username.value" class="form-control" placeholder="Enter username" />
            </div>

            <div class="form-group mb-3">
              <label>Password</label>
              <input type="password" v-model="email.mail_password.value" class="form-control" placeholder="Enter password" />
            </div>

            <div class="form-group mb-3">
              <label>From Email</label>
              <input type="email" v-model="email.mail_from_address.value" class="form-control" placeholder="Enter from email" />
            </div>

            <div class="form-group mb-3">
              <label>From Name</label>
              <input type="text" v-model="email.mail_from_name.value" class="form-control" placeholder="Enter from name" />
            </div>

            <button class="btn btn-success">Update Email Settings</button>
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

const email = ref({
  mail_driver: { value: "smtp" },
  mail_host: { value: "" },
  mail_port: { value: "" },
  mail_username: { value: "" },
  mail_password: { value: "" },
  mail_from_address: { value: "" },
  mail_from_name: { value: "" },
});

const loading = ref(true);

const submitEmailForm = async () => {
  try {
    await settingStore.updateEmailSettings(email.value);
    notify.Success("Email settings updated successfully!");
  } catch (err) {
    notify.Error("Failed to update email settings");
  }
};

onMounted(async () => {
  try {
    const res = await settingStore.getEmailSettings();
    email.value = { ...email.value, ...res.data.email_settings };
  } catch (err) {
    notify.Error("Failed to fetch email settings");
  } finally {
    loading.value = false;
  }
});
</script>
