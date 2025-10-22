<template>
     <div class="dashboard-content-block">
       <template v-if="loading">
         <div class="row">
           <el-skeleton animated :rows="8"/>
         </div>
       </template>
       <template v-else>
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
                     <input 
                     v-model="socialMedia.facebook"
                     class="form-control"  placeholder="Enter the Facebook URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Twitter</label>
                     <input v-model="socialMedia.twitter" class="form-control" name="name" placeholder="Enter the Twitter URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Linkedin</label>
                     <input 
                      v-model="socialMedia.linkedin"
                     class="form-control" placeholder="Enter the Linkedin URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Instagram</label>
                     <input 
                     v-model="socialMedia.instagram" 
                     class="form-control" placeholder="Enter the Instagram URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Google Plus</label>
                     <input 
                     v-model="socialMedia.google_plus"  
                     class="form-control" placeholder="Enter the Google Plus URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Youtube</label>
                     <input 
                     v-model="socialMedia.youtube"
                     class="form-control" placeholder="Enter the Youtube URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Pinterest</label>
                     <input 
                     v-model="socialMedia.pinterest"
                     class="form-control"   placeholder="Enter the Pinterest URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Vimeo</label>
                     <input
                     v-model="socialMedia.vimeo"
                     class="form-control"  placeholder="Enter the Vimeo URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Skype</label>
                     <input 
                     v-model="socialMedia.skype"
                     class="form-control"  placeholder="Enter your Skupe ID" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>Website</label>
                     <input 
                      v-model="socialMedia.website"
                     class="form-control" placeholder="Enter your website URL" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
               </div><!-- row -->
               <button class="btn btn-success">Update Profile</button>
             </form>
           </div><!-- col-md-9 col-sm-12 -->
         </div><!-- row -->
       </template>
     </div><!-- dashboard-content-block -->
</template>

<script setup>
import {storeToRefs} from "pinia";
import {useNotification, useProfile} from "@/stores/index.js";
import {onMounted, ref, watch} from "vue";

const profileToRefs = useProfile()
const {socialMedia,loading} = storeToRefs(profileToRefs);
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