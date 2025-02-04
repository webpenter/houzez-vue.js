<template>
    <DashboardHeader heading="Media Library">
      <a class="btn btn-primary" href="#">Add New</a>
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
                <h2>FileBird</h2>
                <button class="new-folder">New Folder</button>
                <div class="folder-actions">
                  <button>Rename</button>
                  <button>Delete</button>
                  <button>Sort</button>
                </div>
                <div class="folder-list">
                  <div class="folder-item">All Files <span>372</span></div>
                  <div class="folder-item">Uncategorized <span>372</span></div>
                  <input type="text" placeholder="Enter folder name..." />
                </div>
                <div class="empty-folder">
                  <p>Add your first folder</p>
                  <p>You don't have any folders. Add folders to manage your files.</p>
                  <button class="add-folder">Add Folder</button>
                </div>
              </div>
            </div>
  
            <!-- Main Content -->
            <div class="main-content">
              <!-- Notifications -->
              <div class="notification success">
                <strong>Give FileBird a review</strong>
                <p>Thank you for choosing FileBird. We hope you love it. Could you take a couple of seconds
                  posting a nice review?</p>
                <div class="buttons">
                  <button class="primary">Rate now</button>
                  <button class="secondary">Later</button>
                  <button class="secondary">No, thanks</button>
                </div>
              </div>
  
              <div class="notification warning">
                <p>
                  There are updates available for the following plugins:
                  <span class="highlight">MailChimp For WP, One Click Demo Import, Redux Framework</span>.
                </p>
                <div class="link">Begin updating plugins | Dismiss this notice</div>
              </div>
  
              <div class="notification warning">
                <p>
                  Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS,
                  <span class="link">Run Setup Wizard</span>.
                </p>
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
  export default {
    name: "MediaLibrary",
    data() {
      return {
        isCollapsed: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.isCollapsed = !this.isCollapsed;
      },
    },
  };
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
    padding: 15px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease;
  }
  
  .sidebar.collapsed {
    width: 60px;
  }
  
  .sidebar .sidebar-content {
    display: block;
  }
  
  .toggle-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .main-content {
    flex-grow: 1;
    padding-left: 20px;
  }
  
  .new-folder {
    background-color: #007bff;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-bottom: 10px;
  }
  
  .folder-actions button {
    background: #e0e0e0;
    border: none;
    padding: 8px;
    border-radius: 4px;
    margin-right: 5px;
    cursor: pointer;
  }
  
  .folder-list {
    margin-top: 15px;
  }
  
  .folder-item {
    padding: 8px;
    background: white;
    border-radius: 4px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .empty-folder {
    margin-top: 20px;
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
    margin-top: 15px;
    padding: 15px;
    border-radius: 5px;
  }
  
  .success {
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
  }
  
  .warning {
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
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
  </style>
  