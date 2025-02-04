<template>
  <DashboardHeader heading="Media Library">
    <a class="btn btn-primary" href="#" @click.prevent="toggleUpload">Add New</a>
  </DashboardHeader>
  <section class="dashboard-content-wrap">
    <div class="p-4 bg-gray-100 min-h-screen">
      <div class="container">
        <div class="wrapper">
          <!-- Sidebar -->
          <div :class="['sidebar', { collapsed: isCollapsed }]">
            <button @click="toggleSidebar" class="toggle-button">
              <span v-if="isCollapsed">&#9654;</span>
              <span v-else>&#9664;</span>
            </button>
            <div v-if="!isCollapsed" class="sidebar-content">
              <h6>FileBird</h6>
              <button class="new-folder" @click="addNewFolder" :disabled="isAdding">New Folder</button>
            </div>
            <div class="folder-actions">
              <button>Rename</button>
              <button>Delete</button>
              <button>Sort</button>
            </div>

            <div class="folder-list">
              <div class="folder-item">All Files <span>372</span></div>
              <div class="folder-item">Uncategorized <span>372</span></div>
              <input class="foldersearch" type="text" placeholder="Enter folder name..." />
            </div>
            <hr>
            <!-- Folder List -->
            <div class="folder-list">
              <div v-for="folder in folders" :key="folder.id" class="folder-item">
                <span class="folder-icon">📁</span> {{ folder.name }} <span>{{ folder.count }}</span>
              </div>
            </div>

            <!-- Folder Creation Input -->
            <div v-if="isAdding" class="new-folder-input">
              <input type="text" v-model="newFolderName" placeholder="New Folder" @keyup.enter="saveFolder" />
              <button class="save-btn" @click="saveFolder">Save</button>
              <button class="cancel-btn" @click="cancelFolder">Cancel</button>
            </div>
            <div class="empty-folder">
              <b>Add your first folder</b>
              <p>You don't have any folders. Add folders to manage your files.</p>
              <button class="add-folder" @click="addNewFolder" :disabled="isAdding">Add Folder</button>
            </div>

          </div>

          <!-- Main Content -->
          <div class="main-content">
            <!-- Notifications -->
            <div class="notification success">
              <strong>Give FileBird a review</strong>
              <button class="close-button" @click="dismissNotification">&times;</button>
              <p>Thank you for choosing FileBird. We hope you love it. Could you take a couple of seconds
                posting a nice review?</p>
              <div class="buttons">
                <button class="primary">Rate now</button>
                <button class="secondary">Later</button>
                <button class="secondary">No, thanks</button>
              </div>
            </div>


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
            <div v-if="showUploadSection" class="upload-section">
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

            <!-- Media Filters and Search -->
            <div class="filters">
              <div class="filter-group">
                <button class="icon-button"><i class="fa-solid fa-list"></i></button>
                <select>
                  <option>All media items</option>
                </select>
                <select>
                  <option>All dates</option>
                </select>
                <button class="primary">Bulk select</button>
              </div>
              <input type="text" class="search" placeholder="Search" />
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
    // Reactive state variables
    const isCollapsed = ref(false);
    const showUploadSection = ref(false);
    const selectedFile = ref(null);
    const fileInput = ref(null);


    const folders = ref([{ id: 1, name: "Husnain", count: 0 }]);
    const isAdding = ref(false);
    const newFolderName = ref("");

    const addNewFolder = () => {
      isAdding.value = true;
      newFolderName.value = "";
    };
    const saveFolder = () => {
      if (newFolderName.value.trim()) {
        folders.value.push({
          id: folders.value.length + 1,
          name: newFolderName.value,
          count: 0, // Default count
        });
      }
      isAdding.value = false;
    };

    const cancelFolder = () => {
      isAdding.value = false;
    };

    // Methods
    const toggleSidebar = () => {
      isCollapsed.value = !isCollapsed.value;
    };

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
      fileInput.value.click(); // Programmatically trigger the hidden file input
    };

    const handleFileSelect = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedFile.value = file; // Store the selected file
      }
    };

    return {
      folders,
      isAdding,
      newFolderName,
      isCollapsed,
      showUploadSection,
      selectedFile,
      fileInput,
      addNewFolder,
      saveFolder,
      cancelFolder,
      toggleSidebar,
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

.wrapper {
  display: flex;
}

.sidebar {
  width: 250px;
  background-color: #fff;
  padding: 12px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  margin-top: 15px;
  height: 100vh;
}

.sidebar.collapsed {
  width: 33px;
}

.sidebar .sidebar-content {
  display: flex;
}

.toggle-button {
  background: none;
  border: none;
  cursor: pointer;
}

.main-content {
  flex-grow: 1;
  padding-left: 20px;
  margin-top: 0px;
}

.new-folder {
  background-color: #007bff;
  color: white;
  padding: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 45%;
  margin-bottom: 10px;
  margin-left: 60px;

}

h6 {
  margin-top: 6px;
}

.folder-actions button {
  background: #e0e0e0;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
}
.folder-actions{
  border:1px solid gray;
  padding: 6px;
}

.folder-list {
  margin-top: 10px;
}

.folder-item {
  padding: 4px;
  background: white;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.empty-folder {
  margin-top: 120px;
  text-align: center;
}

.add-folder {
  background-color: #007bff;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.notification {
  position: relative;
  margin-top: 15px;
  padding: 15px;
  border-radius: 5px;
}

.success {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
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

.filters {
  margin-top: 15px;
  background: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.filter-group {
  display: flex;
  gap: 10px;
}

.search {
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.sidebar.collapsed .sidebar-content,
.sidebar.collapsed .folder-actions,
.sidebar.collapsed .folder-list,
.sidebar.collapsed .empty-folder,
.sidebar.collapsed .save-btn,
.sidebar.collapsed .cancel-btn
.sidebar.collapsed .text{
  display: none;
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
.foldersearch{
  width: 100%;
}

</style>