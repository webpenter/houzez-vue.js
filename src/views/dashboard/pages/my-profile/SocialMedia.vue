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
             <h2>{{$t('Social Media')}}</h2>
           </div><!-- col-md-3 col-sm-12 -->

           <div class="col-md-9 col-sm-12">
             <form @submit.prevent="submitSocialMediaForm">
               <div class="row">
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Facebook')}}</label>
                     <input class="form-control" v-model="socialMedia.facebook" :placeholder="$t('Enter the Facebook URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Twitter')}}</label>
                     <input class="form-control" v-model="socialMedia.twitter" name="name" :placeholder="$t('Enter the Twitter URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Linkedin')}}</label>
                     <input class="form-control" v-model="socialMedia.linkedin" :placeholder="$t('Enter the Linkedin URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Instagram')}}</label>
                     <input class="form-control" v-model="socialMedia.instagram" :placeholder="$t('Enter the Instagram URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Google Plus')}}</label>
                     <input class="form-control" v-model="socialMedia.google_plus"  :placeholder="$t('Enter the Google Plus URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Youtube')}}</label>
                     <input class="form-control" v-model="socialMedia.youtube" :placeholder="$t('Enter the Youtube URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Pinterest')}}</label>
                     <input class="form-control" v-model="socialMedia.pinterest"  :placeholder="$t('Enter the Pinterest URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Vimeo')}}</label>
                     <input class="form-control" v-model="socialMedia.vimeo" :placeholder="$t('Enter the Vimeo URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Skype')}}</label>
                     <input class="form-control" v-model="socialMedia.skype" :placeholder="$t('Enter your Skupe ID')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
                 <div class="col-md-6 col-sm-12">
                   <div class="form-group">
                     <label>{{$t('Website')}}</label>
                     <input class="form-control" v-model="socialMedia.website" :placeholder="$t('Enter your website URL')" type="text">
                   </div>
                 </div><!-- col-md-6 col-sm-12 -->
               </div><!-- row -->
               <button class="btn btn-success">{{$t('Update Profile')}}</button>
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