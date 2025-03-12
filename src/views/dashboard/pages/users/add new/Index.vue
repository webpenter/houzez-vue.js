<template>
  <DashboardHeader heading="Add New User" />
  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <div class="dashboard-content-block">
            <div v-for="field in fields" :key="field.name" class="form-group">
              <label>{{ field.label }}</label>
              <input v-model="formData[field.name]" class="form-control" :placeholder="field.placeholder"
                :type="field.type" @blur="validateField(field.name)" />
              <span class="text-danger" v-if="localErrors[field.name]">
                {{ localErrors[field.name] }}
              </span>
            </div>
            <div class="form-group">
              <label>Send User Notification</label><br>
              <input type="checkbox" id="send-email" v-model="formData.sendEmail" />
              Send the new user an email about their account.
            </div>
            <div class="form-group">
              <label>Role</label>
              <el-select v-model="formData.role" filterable placeholder="Choose role for your new user">
                <el-option v-for="role in roles" :key="role.id" :label="role.name" :value="role.name" />
              </el-select>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard.my-properties' }">
            Cancel
          </RouterLink>
          <button type="submit" class="btn btn-primary" :disabled="btnLoading">Save</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRole, useNotification } from "@/stores/index.js";

const route = useRoute();
const router = useRouter();
const notify = useNotification();
const { roles } = useRole();

const formData = ref({
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  website: "",
  password: "",
  role: "",
  sendEmail: false
});

const localErrors = ref({});
const btnLoading = ref(false);

const fields = [
  { name: "username", label: "Username", placeholder: "Enter username", type: "text" },
  { name: "email", label: "Email", placeholder: "Enter email", type: "email" },
  { name: "first_name", label: "First Name", placeholder: "Enter first name", type: "text" },
  { name: "last_name", label: "Last Name", placeholder: "Enter last name", type: "text" },
  { name: "website", label: "Website", placeholder: "Enter website", type: "text" },
  { name: "password", label: "Password", placeholder: "Enter password", type: "password" },
];

const validateField = (field) => {
  if (!formData.value[field]) {
    localErrors.value[field] = `${field.replace("_", " ")} is required.`;
  } else {
    localErrors.value[field] = "";
  }
};

const hasErrors = computed(() => Object.values(localErrors.value).some(error => error !== ""));

const formSubmit = async () => {
  fields.forEach(field => validateField(field.name));
  if (hasErrors.value) {
    notify.error("Please fix the validation errors before proceeding.");
    return;
  }
  btnLoading.value = true;
  setTimeout(() => {
    btnLoading.value = false;
    notify.success("User added successfully.");
    router.push({ name: 'dashboard.my-properties' });
  }, 2000);
};
</script>
