<template>
    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <h2>Change Password</h2>
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <form @submit.prevent="submitPasswordForm">
                                  <div class="row">
                                    <div class="col-md-12 col-sm-12">
                                      <div class="form-group">
                                        <label>Old Password</label>
                                        <input class="form-control" v-model="passwordForm.current_password" placeholder="Enter your current password" type="text">
                                      </div>
                                    </div><!-- col-md-12 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>New Password</label>
                                        <input class="form-control" v-model="passwordForm.new_password" placeholder="Enter your new password" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Confirm New Password</label>
                                        <input class="form-control" v-model="passwordForm.password_confirmation" placeholder="Enter your new password again" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                  </div><!-- row -->
                                  <button class="btn btn-success">Update Password</button>
                                </form>
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->
</template>

<script setup>
import {ref} from "vue";
import {useAuth, useNotification} from "@/stores/index.js";

const notify = useNotification();

const passwordForm = ref({
  current_password: null,
  new_password: null,
  password_confirmation: null,
});

const resetPasswordForm = () => {
  passwordForm.value = {
    current_password: null,
    new_password: null,
    password_confirmation: null,
  };
};

const submitPasswordForm = async () => {
  try {
    const res = await useAuth().changePassword(passwordForm.value);

    if (res.status === 200) {
      notify.Success("Password changed successfully.");
      resetPasswordForm();
    }
  } catch (error) {
    notify.Error("Error occurs: ",error);
  }

}
</script>