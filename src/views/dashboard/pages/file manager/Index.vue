<template>
    <DashboardHeader heading="File Manager">
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="bg-gray-100 min-h-screen">
            <div class="main-content">
                <!-- Notifications -->
                <div class="notification success">
                    <strong>Give Filester a review</strong>
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
                        <br>
                        <ToolbarButton />

                <div class="file-manager-container">
                    <!-- Sidebar (Folders) -->
                    <aside class="sidebar">
                        <h2>Folders</h2>
                        <ul>
                            <li class="folder">houzez</li>
                            <li class="folder">twentytwenty</li>
                            <li class="folder">twentytwentyone</li>
                            <li class="folder">twentytwentytwo</li>
                        </ul>
                        <button class="add-folder">+ Add Folder</button>
                    </aside>

                    <!-- Main Content -->
                    <main class="main-content">
                        <h2>File Manager</h2>
                        <div class="file-grid">
                            <div class="file-item">
                                <span class="file-icon">📄</span>
                                <p>index.php</p>
                            </div>
                            <div class="file-item">
                                <span class="file-icon">📄</span>
                                <p>style.css</p>
                            </div>
                            <div class="file-item">
                                <span class="file-icon">📄</span>
                                <p>script.js</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import {  defineComponent } from "vue";
import ToolbarButton from "@/views/inc/ToolbarButton.vue";

export default defineComponent({
    name: "FileManager",
components: {
    ToolbarButton,
    
  },
    setup() {
        const dismissNotification = (event) => {
            event.target.parentElement.remove();
        };

        return {
            dismissNotification,
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

.file-manager-container {
    display: flex;
    /* margin-top: 15px; */
    background-color: #fff;
    border-radius: 5px;
    /* Space from the top */
    height: calc(100vh - 10px);
}

/* Sidebar */
.sidebar {
    width: 250px;
    background: #e0e0e0;
    border-radius: 5px;

    /* Light gray */
    padding: 20px;
    border-right: 2px solid #ccc;
}

.sidebar h2 {
    font-size: 18px;
    margin-bottom: 10px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.folder {
    padding: 10px;
    margin-bottom: 5px;
    background: white;
    /* White background */
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.folder:hover {
    background: #ddd;
}

.add-folder {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background: #007bff;
    /* Light gray button */
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}

.add-folder:hover {
    background: #c0c0c0;
}

/* Main Content */
.main-content {
    flex: 1;
    padding: 20px;
}

.main-content h2 {
    font-size: 20px;
    margin-bottom: 15px;
}

/* File Grid */
.file-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    /* Responsive Grid */
    gap: 15px;
}

/* File Items */
.file-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 120px;
    height: 120px;
    text-align: center;
    cursor: pointer;
}

.file-icon {
    font-size: 40px;
    margin: 10px;
}

.file-item p {
    margin-top: 5px;
    font-size: 14px;
}
</style>