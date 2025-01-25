<template>
  <div class="dashboard-content-block">
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <h2>Change Password</h2>
      </div>
      <div class="col-md-9 col-sm-12">
        <form @submit.prevent="submitPasswordForm">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <label>Old Password</label>
                <input
                    class="form-control"
                    :class="{ 'is-invalid': localErrors.current_password }"
                    v-model="passwordForm.current_password"
                    placeholder="Enter your current password"
                    type="text"
                    @input="validateField('current_password')"
                />
                <span class="text-danger" v-if="localErrors.current_password">
                  {{ localErrors.current_password }}
                </span>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <label>New Password</label>
                <input
                    class="form-control"
                    :class="{ 'is-invalid': localErrors.new_password }"
                    v-model="passwordForm.new_password"
                    placeholder="Enter your new password"
                    type="text"
                    @input="validateField('new_password')"
                />
                <span class="text-danger" v-if="localErrors.new_password">
                  {{ localErrors.new_password }}
                </span>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="form-group">
                <label>Confirm New Password</label>
                <input
                    class="form-control"
                    :class="{ 'is-invalid': localErrors.password_confirmation }"
                    v-model="passwordForm.password_confirmation"
                    placeholder="Enter your new password again"
                    type="text"
                    @input="validateField('password_confirmation')"
                />
                <span class="text-danger" v-if="localErrors.password_confirmation">
                  {{ localErrors.password_confirmation }}
                </span>
              </div>
            </div>
          </div>
          <button class="btn btn-success" :disabled="hasErrors">Update Password</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuth, useNotification } from "@/stores/index.js";
import { storeToRefs } from "pinia";

const notify = useNotification();
const { errors } = storeToRefs(useAuth());

const passwordForm = ref({
  current_password: "",
  new_password: "",
  password_confirmation: "",
});

const localErrors = ref({
  current_password: "",
  new_password: "",
  password_confirmation: "",
});

// Validation logic
const validateField = (field) => {
  if (field === "current_password" && !passwordForm.value.current_password) {
    localErrors.value.current_password = "Old password is required.";
  } else if (field === "new_password" && !passwordForm.value.new_password) {
    localErrors.value.new_password = "New password is required.";
  } else if (field === "new_password" && passwordForm.value.new_password.length < 8) {
    localErrors.value.new_password = "New password must be at least 8 characters.";
  } else if (field === "password_confirmation" && !passwordForm.value.password_confirmation) {
    localErrors.value.password_confirmation = "Password confirmation is required.";
  } else if (field === "password_confirmation" && passwordForm.value.password_confirmation !== passwordForm.value.new_password) {
    localErrors.value.password_confirmation = "Passwords do not match.";
  } else {
    localErrors.value[field] = "";
  }
};

// Check if there are any errors
const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const resetPasswordForm = () => {
  passwordForm.value = {
    current_password: "",
    new_password: "",
    password_confirmation: "",
  };
  localErrors.value = {
    current_password: "",
    new_password: "",
    password_confirmation: "",
  };
};

const submitPasswordForm = async () => {
  Object.keys(passwordForm.value).forEach(validateField);
  if (hasErrors.value) {
    notify.Error("Please fix the errors before submitting.");
    return;
  }

  try {
    const res = await useAuth().changePassword(passwordForm.value);

    if (res.status === 200) {
      notify.Success("Password changed successfully.");
      resetPasswordForm();
    } else if (res.status === 403) {
      notify.Error("Current password is incorrect.");
    } else {
      notify.Error("Password change failed.");
    }
  } catch (error) {
    notify.Error(error);
  }
};
</script>
