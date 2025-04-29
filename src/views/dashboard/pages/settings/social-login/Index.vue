<template>
    <DashboardHeader heading="Social Login"/>
    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap"> 
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    <!-- 1 Label for Facebook Login -->
                    <h4 class="mb-3">Facebook Login</h4>

                    <!-- Enable Button for Facebook Login with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('enable-facebook'), 'me-2']"
                        @click="toggleStatus('enable-facebook')">
                        Enable
                    </button>

                    <!-- Disable Button for Facebook Login with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('disable-facebook')]"
                        @click="toggleStatus('disable-facebook')">
                        Disable
                    </button>

                    <!-- Transition for Facebook Form Section -->
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="isEnabledFacebook">
                            <form @submit.prevent="formSubmit('facebook')">
                                <div class="dashboard-content-block-wrap">
                                    <div class="dashboard-content-block">  

                                        <div class="form-group">
                                            <label>Client ID</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_id"
                                                placeholder="Enter the client id"
                                            >
                                        </div>  

                                        <div class="form-group">
                                            <label>Client Secret</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_secret"
                                                placeholder="Enter the Client Secret"
                                            >
                                        </div>

                                        <div class="form-group">
                                            <label>Redirect URL</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="redirect_url"
                                                placeholder="Enter the Redirect URL"
                                            >
                                        </div>
                                    </div><!-- dashboard-content-block -->
                                </div><!-- dashboard-content-block-wrap -->
                            </form>
                        </div>
                    </transition>

                    <!-- 2 Label for Github Login -->
                    <h4 class="mb-3 mt-4">Github Login</h4>

                    <!-- Enable Button for Github Login with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('enable-github'), 'me-2']"
                        @click="toggleStatus('enable-github')">
                        Enable
                    </button>

                    <!-- Disable Button for Github Login with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('disable-github')]"
                        @click="toggleStatus('disable-github')">
                        Disable
                    </button>

                    <!-- Transition for Github Form Section -->
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="isEnabledGithub">
                            <form @submit.prevent="formSubmit('github')">
                                <div class="dashboard-content-block-wrap">
                                    <div class="dashboard-content-block">  

                                        <div class="form-group">
                                            <label>Client ID</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_id"
                                                placeholder="Enter the client id"
                                            >
                                        </div>  

                                        <div class="form-group">
                                            <label>Client Secret</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_secret"
                                                placeholder="Enter the Client Secret"
                                            >
                                        </div>

                                        <div class="form-group">
                                            <label>Redirect URL</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="redirect_url"
                                                placeholder="Enter the Redirect URL"
                                            >
                                        </div>
                                    </div><!-- dashboard-content-block -->
                                </div><!-- dashboard-content-block-wrap -->
                            </form>
                        </div>
                    </transition>

                    <!-- 3 Label for Google Login -->
                    <h4 class="mb-3 mt-4">Google Login</h4>

                    <!-- Enable Button for Google Login with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('enable-google'), 'me-2']"
                        @click="toggleStatus('enable-google')">
                        Enable
                    </button>

                    <!-- Disable Button for Google Login with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('disable-google')]"
                        @click="toggleStatus('disable-google')">
                        Disable
                    </button>

                     <!-- Transition for Google Form Section -->
                     <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="isEnabledGoogle">
                            <form @submit.prevent="formSubmit('google')">
                                <div class="dashboard-content-block-wrap">
                                    <div class="dashboard-content-block">  

                                        <div class="form-group">
                                            <label>Client ID</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_id"
                                                placeholder="Enter the client id"
                                            >
                                        </div>  

                                        <div class="form-group">
                                            <label>Client Secret</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_secret"
                                                placeholder="Enter the Client Secret"
                                            >
                                        </div>

                                        <div class="form-group">
                                            <label>Redirect URL</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="redirect_url"
                                                placeholder="Enter the Redirect URL"
                                            >
                                        </div>
                                    </div><!-- dashboard-content-block -->
                                </div><!-- dashboard-content-block-wrap -->
                            </form>
                        </div>
                    </transition>

                </div>

                <!-- Correctly closing the div for bottom navigation -->
                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{name:'dashboard'}">
                        Cancel
                    </RouterLink>
                    <SaveBtn />
                </div><!-- End of bottom navigation div -->
            </div><!-- End of dashboard-content-block-wrap -->
        </div><!-- End of dashboard-content-inner-wrap -->
    </section><!-- End of dashboard-content-wrap -->
</template>


<script>
import SaveBtn from "@/views/dashboard/components/SaveBtn.vue";

export default {
    components: {
        SaveBtn
    },
    data() {
        return {
            isEnabledFacebook: false,  // Controls visibility of Stripe 
            isEnabledGithub: false,  // Controls visibility of PayPal 
            isEnabledGoogle: false,  // Controls visibility of Github 
        };
    },
    methods: {
        toggleStatus(action) {
            if (action === 'enable-facebook') {
                this.isEnabledFacebook = true;
                console.log("Facebook login enabled");
            } else if (action === 'disable-facebook') {
                this.isEnabledFacebook = false;
                console.log("Facebook login disabled");
            } else if (action === 'enable-github') {
                this.isEnabledGithub = true;
                console.log("Github login enabled");
            } else if (action === 'disable-github') {
                this.isEnabledGithub = false;
                console.log("Github login disabled");
            }
            else if (action === 'enable-google') {
                this.isEnabledGoogle = true;
                console.log("Google login enabled");
            } else if (action === 'disable-google') {
                this.isEnabledGoogle = false;
                console.log("Google login disabled");
            }
        },
        formSubmit(gateway) {
            console.log(`${gateway} form submitted`);
        },
        buttonClass(action) {
            if (action === 'enable-facebook') {
                return this.isEnabledFacebook ? 'btn-success' : 'btn-white'; // Green for Stripe enabled
            } else if (action === 'disable-facebook') {
                return !this.isEnabledFacebook ? 'btn-danger' : 'btn-white'; // Red for Stripe disabled
            } else if (action === 'enable-github') {
                return this.isEnabledGithub ? 'btn-success' : 'btn-white'; // Green for PayPal enabled
            } else if (action === 'disable-github') {
                return !this.isEnabledGithub ? 'btn-danger' : 'btn-white'; // Red for PayPal disabled
            } else if (action === 'enable-google') {
                return this.isEnabledGoogle ? 'btn-success' : 'btn-white'; // Green for Github enabled
            } else if (action === 'disable-google') {
                return !this.isEnabledGoogle ? 'btn-danger' : 'btn-white'; // Red for Github disabled
            }
            return 'btn-white'; // Default button color (white)
        },
        beforeEnter(el) {
            el.style.opacity = 0;
        },
        enter(el, done) {
            el.offsetHeight; // trigger reflow
            el.style.transition = "opacity 0.5s";
            el.style.opacity = 1;
            done();
        },
        leave(el, done) {
            el.style.transition = "opacity 0.5s";
            el.style.opacity = 0;
            done();
        }
    }
}
</script>

<style scoped>
/* Add transition classes */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

/* Default button color */
.btn-white {
    background-color: white;
    color: #6c757d; /* Gray color */
    border: 1px solid #6c757d; /* Gray border */
}

/* You can further customize button colors if necessary */
</style>
