<template>
    <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING">
      <SaveAsDraftBtn status=""/>
    </DashboardHeader>
        <section class="dashboard-content-wrap dashboard-add-new-listing">
            <snake-nav active="11"/>
            <div class="dashboard-content-inner-wrap">
              <div class="dashboard-content-block-wrap">
                <h2>Attachments</h2>
                <div class="dashboard-content-block">
                  <p>You can attach PDF files, Map images OR other documents to provide further details related to property.</p>
                  <p><button @click="triggerFileInput" class="btn btn-primary mt-2">Select Attachment</button></p>
                  <input
                      type="file"
                      ref="fileInput"
                      multiple
                      style="display: none;"
                      @change="handleFileChange"
                  />

                  <table class="dashboard-table draggable-table">
                    <template v-if="propertyAttachments.length > 0">
                      <thead>
                      <tr>
                        <td colspan="4">
                          <label>Uploaded Attachments</label>
                        </td>
                      </tr>
                      </thead>
                      <tbody>
                      <template v-for="attachment in propertyAttachments" :key="attachment.id">
                        <tr>
                          <td class="table-full-width table-cell-title">
                            <span>{{ attachment.file_title }}</span>
                          </td>
                          <td>
                            <button @click.prevent="downloadAttachment(attachment.file_path,attachment.file_title)" class="btn btn-light-grey-outlined"><i class="houzez-icon icon-download-bottom"></i></button>
                          </td>
                          <td>
                            <button @click="deleteAttachment(attachment.id)" class="btn btn-light-grey-outlined"><i class="houzez-icon icon-close"></i></button>
                          </td>
                        </tr>
                      </template>
                      </tbody>
                    </template>
                    <template v-else>
                      <thead>
                      <tr>
                        <td colspan="4">
                          <label>No attachments are available.</label>
                        </td>
                      </tr>
                      </thead>
                    </template>
                  </table>
                </div><!-- dashboard-content-block -->
              </div><!-- dashboard-content-block-wrap -->

              <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                <BackBtn route="dashboard.create-listing.step-10" :pId="propertyId"/>
                <NextBtn @click="nextBtn" :btnLoading="false" :hasErrors="false"/>
              </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SnakeNav from '../../components/SnakeNav.vue';
import SaveAsDraftBtn from '../components/SaveAsDraftBtn.vue';
import NextBtn from '../components/NextBtn.vue';
import BackBtn from '../components/BackBtn.vue';
import { useRoute, useRouter} from "vue-router";
import {PROPERTY_TOTAL_STEPS, TITLE_CREATE_UPDATE_LISTING} from "@/constants/index.js";
import {onMounted, ref} from "vue";
import {useNotification, useProperty} from "@/stores/index.js";
import {storeToRefs} from "pinia";

const route = useRoute();
const router = useRouter();
const propertyId = route.params.propertyId;
const propertyToRefs = useProperty();
const {propertyAttachments} = storeToRefs(propertyToRefs);
const notify = useNotification();
const fileInput = ref(null);

const editAttachmentsData = async () => await propertyToRefs.editAttachments(propertyId);

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const handleFileChange = async (event) => {
  const files = event.target.files;
  if (!files.length) return;

  let formAttachmentsData = new FormData();

  for (const file of files) {
    formAttachmentsData.append("files[]", file);
  }

  try {
    const response = await propertyToRefs.attachmentsCreateOrUpdate(formAttachmentsData, propertyId);

    if (response.status === 200) {
      notify.Success("Property attachments successfully uploaded!");
      await editAttachmentsData();
    } else {
      notify.Error("Failed to upload property attachments.");
    }
  } catch (error) {
    notify.Error("An error occurred while uploading files.");
  }
};


const nextBtn = () => {
  notify.Success(`Step 11 of ${PROPERTY_TOTAL_STEPS} completed.`);
  router.push({name:"dashboard.create-listing.step-12",params:{propertyId:propertyId}});
};

const deleteAttachment = async (fileId) => {
  try {
    const res = await propertyToRefs.deleteAttachment(fileId);

    if (res.status === 200) {
      notify.Success(`Attachment deleted successfully`);
      await editAttachmentsData();
    } else {
      notify.Error("Failed to delete file.");
    }
  } catch (error) {
    notify.Error("An error occurred while processing the request.");
  }
}

const downloadAttachment = (fileUrl,fileTitle = "Attachment") => {
  const fileExtension = fileUrl.split('.').pop().toLowerCase();
  const allowedExtensions = ["jpg", "jpeg", "png", "mp4", "mov", "avi", "mkv"];

  if (allowedExtensions.includes(fileExtension)) {
    window.open(fileUrl, "_blank");
  } else {
    const link = document.createElement("a");
    link.href = encodeURI(fileUrl);
    link.setAttribute("download", fileTitle);
    document.body.appendChild(link);
    link.click();
    notify.Success(`Attachment downloaded successfully`);
    document.body.removeChild(link);
  }
};


onMounted(() =>  editAttachmentsData());
</script>