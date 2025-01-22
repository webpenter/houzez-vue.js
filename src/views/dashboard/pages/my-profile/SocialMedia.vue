<template>
     <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <h2>Social Media</h2>
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <form @submit.prevent="submitSocialMediaForm">
                                  <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Facebook</label>
                                        <input class="form-control" v-model="socialMedia.facebook" placeholder="Enter the Facebook URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Twitter</label>
                                        <input class="form-control" v-model="socialMedia.twitter" name="name" placeholder="Enter the Twitter URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Linkedin</label>
                                        <input class="form-control" v-model="socialMedia.linkedin" placeholder="Enter the Linkedin URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Instagram</label>
                                        <input class="form-control" v-model="socialMedia.instagram" placeholder="Enter the Instagram URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Google Plus</label>
                                        <input class="form-control" v-model="socialMedia.google_plus"  placeholder="Enter the Google Plus URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Youtube</label>
                                        <input class="form-control" v-model="socialMedia.youtube" placeholder="Enter the Youtube URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Pinterest</label>
                                        <input class="form-control" v-model="socialMedia.pinterest"  placeholder="Enter the Pinterest URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Vimeo</label>
                                        <input class="form-control" v-model="socialMedia.vimeo" placeholder="Enter the Vimeo URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Skype</label>
                                        <input class="form-control" v-model="socialMedia.skype" placeholder="Enter your Skupe ID" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                      <div class="form-group">
                                        <label>Website</label>
                                        <input class="form-control" v-model="socialMedia.website" placeholder="Enter your website URL" type="text">
                                      </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                  </div><!-- row -->
                                  <button class="btn btn-success">Update Profile</button>
                                </form>
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useNotification, useProfile} from "@/stores/index.js";
import {onMounted, ref, watch} from "vue";

const profileToRefs = useProfile()
const {socialMedia} = storeToRefs(profileToRefs);
const notify = useNotification();

const socialMediaForm = ref({
  facebook:"",
  twitter:"",
  linkedin:"",
  instagram:"",
  google_plus:"",
  youtube:"",
  pinterest:"",
  vimeo:"",
  skype:"",
  website:"",
});

const getSocialMediaResult = async () => await profileToRefs.getSocialMedia();

const submitSocialMediaForm = async () => {
  try {
      const res = await profileToRefs.updateSocialMedia(socialMediaForm.value);

      if (res.status === 200) {
        notify.Success("Social media accounts successfully updated!");
      }
  } catch (error) {
      notify.Error(error);
  }
};

onMounted( () => {
  getSocialMediaResult();

  if (socialMedia.value) {
    socialMediaForm.value = { ...socialMedia.value };
  }
});

watch(socialMedia,(newSocialMedia) => {
  if (newSocialMedia) {
    socialMediaForm.value = newSocialMedia;
  }
});
</script>