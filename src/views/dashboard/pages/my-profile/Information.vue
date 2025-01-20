<template>
    <h2>Information</h2>
  <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                 <template v-if="loading">
                                   <el-skeleton style="width: 240px" animated>
                                     <template #template>
                                       <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                                     </template>
                                   </el-skeleton>
                                 </template>
                                  <template v-else>
                                    <img v-if="formProfilePicture" class="img-fluid" :src="formProfilePicture" alt="thumb">
                                    <el-avatar v-else shape="square" :size="240" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
                                  </template>
                                <button @click="triggerFileInput" type="button" class="btn btn-primary btn-full-width mt-3">
                                  Update Profile Picture
                                </button>
                                <input
                                    type="file"
                                    ref="fileInput"
                                    style="display: none;"
                                    @change="handleFileChange"
                                />
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <form @submit.prevent="submitForm">
                                  <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Email</label>
                                        <input class="form-control" v-model="formData.email" placeholder="Enter your email" type="text" readonly />
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Username</label>
                                        <input
                                            class="form-control"
                                            :class="{ 'is-invalid': localErrors.username }"
                                            @input="validateField('username')"
                                            v-model="formData.username"
                                            placeholder="Enter your username"
                                            type="text">
                                      </div>
                                      <span class="text-danger" v-if="localErrors.username">
                                        {{ localErrors.username }}
                                      </span>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>First Name</label>
                                        <input class="form-control" v-model="formData.first_name" placeholder="Enter your first name" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Last Name</label>
                                        <input class="form-control" v-model="formData.last_name" placeholder="Enter your last name" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Public Name</label>
                                        <input class="form-control" v-model="formData.public_name" placeholder="Enter your last name" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Title</label>
                                        <input class="form-control" v-model="formData.title" placeholder="Enter your title" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Position</label>
                                        <input class="form-control" v-model="formData.position" placeholder="Enter your title" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>License</label>
                                        <input class="form-control" v-model="formData.license" placeholder="Enter your license" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Tax Number</label>
                                        <input class="form-control" v-model="formData.tax_number" placeholder="Enter your tax number" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Mobile</label>
                                        <input class="form-control" v-model="formData.mobile" placeholder="Enter your phone number" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Phone</label>
                                        <input class="form-control" v-model="formData.phone" placeholder="Enter your phone number" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Whatsapp</label>
                                        <input class="form-control" v-model="formData.whatsapp" placeholder="Enter your phone number" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Company Name</label>
                                        <input class="form-control" v-model="formData.company_name" placeholder="Enter your company name" type="text">
                                      </div><!-- form-group -->
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Service area</label>
                                        <input class="form-control" v-model="formData.service_areas" placeholder="Enter your company name" type="text">
                                      </div><!-- form-group -->
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-12 col-sm-12">
                                      <div class="form-group">
                                        <label>Address</label>
                                        <textarea class="form-control" v-model="formData.address" rows="3" placeholder="Enter your address"></textarea>
                                      </div><!-- form-group -->
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-12 col-sm-12">
                                      <div class="form-group">
                                        <label>About me</label>
                                        <textarea class="form-control" v-model="formData.about_me" rows="6" placeholder="Enter a description about you"></textarea>
                                      </div><!-- form-group -->
                                    </div><!-- col-md-6 col-sm-12 -->
                                  </div><!-- row -->
                                  <button class="btn btn-success" :disabled="hasErrors" type="submit">Update Profile</button>
                                </form>
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->
</template>

<script setup>
import {useNotification, useProfile} from "@/stores/index.js";
import {computed, onMounted, ref, watch} from "vue";
import {storeToRefs} from "pinia";

const profileToRefs = useProfile();
const {profile,profilePicture,loading} = storeToRefs(profileToRefs);
const notify = useNotification();

const formData = ref({
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  public_name: "",
  title: "",
  position: "",
  license: "",
  mobile: "",
  whatsapp: "",
  phone: "",
  tax_number: "",
  company_name: "",
  address: "",
  service_areas: "",
  specialties: "",
  about_me: "",
});

const localErrors = ref({
  username: "",
});

const validateField = (field) => {
  if (field === "username") {
    const username = formData.value.username;

    if (!username) {
      localErrors.value.username = "Username is required.";
    } else if (username.length < 4) {
      localErrors.value.username = "Username must be at least 4 characters.";
    } else if (/\s/.test(username)) {
      localErrors.value.username = "Username cannot contain spaces.";
    } else if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(username)) {
      localErrors.value.username =
          "Username must start with a letter or underscore, and contain only letters, numbers, or underscores.";
    } else {
      localErrors.value.username = "";
    }
  } else {
    localErrors.value[field] = "";
  }
};



const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== "")
);

const formProfilePicture = ref("");
const fileInput = ref(null);

const getProfileResult = async () => await profileToRefs.getProfileInfo();
const getProfilePictureResult = async () => await profileToRefs.getProfilePicture();

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const handleFileChange = async (event) => {
  const file = event.target.files[0];
  if (file) {
    const validExtensions = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB

    // Check file type
    if (!validExtensions.includes(file.type)) {
      notify.Error("Invalid file type. Only JPG, JPEG, and PNG files are allowed.");
      event.target.value = "";
      return;
    }

    // Check file size
    if (file.size > maxSizeInBytes) {
      notify.Error("File size exceeds the 2MB limit. Please upload a smaller file.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      formProfilePicture.value = e.target.result;
    };
    reader.readAsDataURL(file);

    const formProfileData = new FormData();
    formProfileData.append("profile_picture", file);

    try {
      const response = await profileToRefs.updateProfilePicture(formProfileData);
      if (response.status === 200) {
        notify.Success("Profile picture successfully updated!");
        formProfilePicture.value = response.data.profile_picture_url;
      } else {
        notify.Error("Failed to update profile picture.");
      }
    } catch (error) {
      notify.Error(error);
    }
  }
};


const submitForm = async () => {
  Object.keys(formData.value).forEach(validateField);
  if (hasErrors.value) {
    notify.Error("Please fix the errors before submitting.");
    return;
  }

  try {
    const res = await profileToRefs.updateProfileInfo(formData.value);

    if (res.status === 200){
      notify.Success("Profile successfully updated");
    } else if (res.status === 409) {
      notify.Error("The username is already taken. Please choose a different one.");
    } else {
      notify.Error("Failed to update profile information.");
    }
  } catch (error) {
    notify.Error(error);
  }
}


onMounted( () => {
  getProfileResult();
  getProfilePictureResult();

  if (profile.value) {
    formData.value = { ...profile.value };
  }

  if (profilePicture.value) {
    formProfilePicture.value = profilePicture.value;
  }
})

watch(profile, (newProfile) => {
  if (newProfile) {
    formData.value = { ...newProfile };
  }
});

watch(profilePicture, (newProfilePicture) => {
  if (newProfilePicture) {
    formProfilePicture.value = newProfilePicture;
  }
});
</script>