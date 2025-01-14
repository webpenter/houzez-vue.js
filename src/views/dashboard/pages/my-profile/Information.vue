<template>
    <h2>Information</h2>
    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <img v-if="!formProfilePicture" class="img-fluid" src="https://placehold.co/300x300?text=PP" alt="thumb">
                                <img v-else class="img-fluid" :src="formProfilePicture" alt="thumb">
                                <button @click="triggerFileInput" type="button" class="btn btn-primary btn-full-width mt-3">
                                  Update Profile Picture
                                </button>
                                <input
                                    type="file"
                                    ref="fileInput"
                                    style="display: none;"
                                    @change="handleFileChange"
                                />
                                <small class="form-text text-muted text-center">Minimum 300 x 300 px</small>
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
                                        <input class="form-control" v-model="formData.username" placeholder="Enter your username" type="text">
                                      </div>
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
                                  <button class="btn btn-success" type="submit">Update Profile</button>
                                </form>
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->
</template>

<script setup>
import {useProfile} from "@/stores/index.js";
import {onMounted, ref, watch} from "vue";
import {storeToRefs} from "pinia";

const profileToRefs = useProfile();
const {profile,profilePicture} = storeToRefs(profileToRefs);

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
    const reader = new FileReader();
    reader.onload = (e) => {
      formProfilePicture.value = e.target.result;
    };
    reader.readAsDataURL(file);

    const formProfileData = new FormData();
    formProfileData.append("profile_picture", file);

    try {
      const response = await profileToRefs.updateProfilePicture(formProfileData);
      if (response?.data?.profile_picture_url) {
        formProfilePicture.value = response.data.profile_picture_url;
      }
    } catch (error) {
      console.error("Failed to update profile picture:", error);
    }
  }
};

const submitForm = async () => {
  try {
    const res = await profileToRefs.updateProfileInfo(formData.value);

    if (res.status === 200){
      console.log("updated success")
    }
  } catch (error) {
    console.error("Failed to update profile picture:", error);
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