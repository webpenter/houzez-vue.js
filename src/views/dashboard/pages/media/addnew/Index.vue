<template>
  <DashboardHeader heading="Upload New Media">
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="p-4 bg-gray-100 min-h-screen">
      <div class="container">
        <div class="wrapper">
          <!-- Main Content -->
          <div class="main-content">
            <!-- Notifications -->
            <div class="notification warning">
              <button class="close-button" @click="dismissNotification">&times;</button>
              <p>
                There are updates available for the following plugins:
                <span class="link">MailChimp For WP, One Click Demo Import, Redux Framework</span>.
              </p>
              <div class="link">Begin updating plugins | Dismiss this notice</div>
            </div>

            <div class="notification warning">
              <button class="close-button" @click="dismissNotification">&times;</button>
              <p>
                Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS,
                <span class="link">Run Setup Wizard</span>.
              </p>
            </div>
            <!-- Upload Section (Initially Hidden) -->
            <div class="upload-section">
              <button class="close-button" @click="closeUpload">&times;</button>
              <h3>Drop files to upload</h3>
              <p>or</p>

              <!-- Hidden File Input -->
              <input type="file" ref="fileInput" @change="handleFileSelect" style="display: none;" />

              <!-- Select Files Button -->
              <button class="select-files" @click="openFilePicker">Select Files</button>

              <p v-if="selectedFile">Selected File: {{ selectedFile.name }}</p>
              <p>Maximum upload file size: 2 GB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "MediaLibrary",
  setup() {
    const selectedFile = ref(null);
    const fileInput = ref(null);

    const dismissNotification = (event) => {
      event.target.parentElement.remove();
    };

    const toggleUpload = () => {
      showUploadSection.value = true; // Show upload section when clicking "Add New"
    };

    const closeUpload = () => {
      showUploadSection.value = false; // Hide upload section when clicking ✖
    };

    const openFilePicker = () => {
      fileInput.value.click();        // Programmatically trigger the hidden file input
    };

    const handleFileSelect = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file; // Store the selected file
      }
    };

    return {    
      selectedFile,
      fileInput,
      dismissNotification,
      toggleUpload,
      closeUpload,
      openFilePicker,
      handleFileSelect,
    };
  },
});
</script>


<style scoped>
.container {
  padding: 10px;
  background-color: #f8f9fa;
  min-height: 100vh;
}


.main-content {
  flex-grow: 1;
  padding-left: 20px;
  margin-top: 0px;
}


.notification {
  position: relative;
  margin-top: 15px;
  padding: 15px;
  border-radius: 5px;
}

.warning {
  background-color: #fff;
  border: 1px solid gray;
}

.buttons {
  margin-top: 10px;
}

.primary {
  background-color: #007bff;
  color: white;
  padding: 4px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.secondary {
  background-color: #e0e0e0;
  padding: 4px 12px;
  border: 1px #007bff solid;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.link {
  color: #007bff;
  cursor: pointer;
}

.close-button {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
}

.close-button:hover {
  color: #000;
}

.upload-section {
  border: 2px dashed #aaa;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  position: relative;
  margin-top: 10px;
}

.upload-section .close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #555;
}

.upload-section .select-files {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.save-btn,
.cancel-btn {
 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 6px;
  margin-right: 6px;
}
.save-btn {
  background: #007bff;
  color: white;
  padding: 0 10px 0 10px ;
}
.cancel-btn {
  background: #ccc;
}

</style>