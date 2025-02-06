<template>
    <DashboardHeader heading="File Manager">
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="p-4 bg-gray-100 min-h-screen">
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

                <div class="settings-container">
                    <div class="tabs">
                        <button class="tab active">Settings</button>
                        <button class="tab">User Role Restrictions</button>
                    </div>

                    <div class="settings-content">
                        <h5>Select User Roles to access</h5>
                        <div class="roles">
                            <label v-for="role in roles" :key="role">
                                <input type="checkbox" v-model="selectedRoles" :value="role" />
                                {{ role }}
                            </label>
                        </div>

                        <label>Root Path</label>
                        <textarea v-model="rootPath" readonly></textarea>
                        <small>Default path is: {{ rootPath }}</small>
                        <br>

                        <label>Files URL</label>
                        <textarea v-model="fileUrl"></textarea>
                        <small>Default path is: {{ fileUrl }}</small>
                        <br>

                        <label>Maximum Upload Size</label>
                        <input type="number" v-model="uploadSize" /> MB
                        <small>Default: 0 means unlimited upload.</small>
                        <br>

                        <label>Select Language</label>
                        <select v-model="language">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                        </select>
                        <br>

                        <label class="toggle-label">
                            Hide .htaccess?
                            <input type="checkbox" v-model="hideHtaccess" class="toggle" />
                        </label>
                        <small>Will hide .htaccess file (if exists) in file manager.</small>

                        <label class="toggle-label">
                            Enable Trash?
                            <input type="checkbox" v-model="enableTrash" class="toggle" />
                        </label>
                        <small>After enabling trash, deleted files will go to the trash folder.</small>

                        <button class="save-btn" @click="saveSettings">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
    name: "FileManager",
    setup() {
        const dismissNotification = (event) => {
            event.target.parentElement.remove();
        };

        return {
            dismissNotification,
        };
    },
    data() {
        return {
            roles: ["Editor", "Author", "Contributor", "Subscriber", "Buyer", "Agency", "Agent", "Seller", "Owner", "Manager"],
            selectedRoles: [],
            rootPath: "/home/u787826149/domains/webpenter.com/public_html/houzez_demo/",
            fileUrl: "https://houzez.webpenter.com",
            uploadSize: "",
            language: "English",
            hideHtaccess: false,
            enableTrash: false
        };
    },
    methods: {
        saveSettings() {
            alert("Settings saved successfully!");
        }
    }
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

.settings-container {
    padding: 20px;
    max-width: 100%;
    margin: auto;
    background: #f8f8f8;
    border-radius: 8px;
}

.tabs {
    display: flex;
    border-bottom: 2px solid #ccc;
}

.tab {
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
}

.tab.active {
    border-bottom: 3px solid blue;
}

.settings-content {
    padding: 10px;
}

.roles label {
    display: inline-block;
    margin-right: 10px;
    
}

textarea,
input,
select {
    width: 100%;
    padding: 8px;
    margin: 5px 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.toggle-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}

.toggle {
    width: 40px;
    height: 20px;
    appearance: none;
    background: lightgray;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
}

.toggle:checked {
    background: green;
}

.save-btn {
    background: blue;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin-top: 20px;
}
</style>