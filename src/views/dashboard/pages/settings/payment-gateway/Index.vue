<template>
    <DashboardHeader heading="Payment Gateway"/>

    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap"> 
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    <!-- Label for Stripe Payment Gateway -->
                    <h4 class="mb-3">Stripe Payment Gateway</h4>

                    <!-- Enable Button for Stripe with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('enable-stripe'), 'me-2']"
                        @click="toggleStatus('enable-stripe')">
                        Enable
                    </button>

                    <!-- Disable Button for Stripe with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('disable-stripe')]"
                        @click="toggleStatus('disable-stripe')">
                        Disable
                    </button>

                    <!-- Transition for Stripe Form Section -->
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="isEnabledStripe">
                            <form @submit.prevent="formSubmit('stripe')">
                                <div class="dashboard-content-block-wrap">
                                    <div class="dashboard-content-block">  

                                        <div class="form-group">
                                            <label>Stripe ID</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="stripe_id"
                                                placeholder="Enter the stripe id"
                                            >
                                        </div>  

                                        <div class="form-group">
                                            <label>Secret Key</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="secret_key"
                                                placeholder="Enter the Secret Key"
                                            >
                                        </div>

                                        <div class="form-group">
                                            <label>Public Key</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="public_key"
                                                placeholder="Enter the Public Key"
                                            >
                                        </div>
                                    </div><!-- dashboard-content-block -->
                                </div><!-- dashboard-content-block-wrap -->
                            </form>
                        </div>
                    </transition>

                    <!-- Label for PayPal Payment Gateway -->
                    <h4 class="mb-3 mt-4">PayPal Payment Gateway</h4>

                    <!-- Enable Button for PayPal with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('enable-paypal'), 'me-2']"
                        @click="toggleStatus('enable-paypal')">
                        Enable
                    </button>

                    <!-- Disable Button for PayPal with dynamic class binding -->
                    <button 
                        :class="['btn', 'btn-lg', buttonClass('disable-paypal')]"
                        @click="toggleStatus('disable-paypal')">
                        Disable
                    </button>

                    <!-- Transition for PayPal Form Section -->
                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                        <div v-if="isEnabledPaypal">
                            <form @submit.prevent="formSubmit('paypal')">
                                <div class="dashboard-content-block-wrap">
                                    <div class="dashboard-content-block">  

                                        <div class="form-group">
                                            <label>PayPal ID</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="paypal_id"
                                                placeholder="Enter the PayPal ID"
                                            >
                                        </div>  

                                        <div class="form-group">
                                            <label>Secret Key</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_secret"
                                                placeholder="Enter the Client Secret"
                                            >
                                        </div>

                                        <div class="form-group">
                                            <label>Public Key</label>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="client_id"
                                                placeholder="Enter the Client ID"
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
            isEnabledStripe: false,  // Controls visibility of Stripe form
            isEnabledPaypal: false,  // Controls visibility of PayPal form
        };
    },
    methods: {
        toggleStatus(action) {
            if (action === 'enable-stripe') {
                this.isEnabledStripe = true;
                console.log("Stripe payment gateway enabled");
            } else if (action === 'disable-stripe') {
                this.isEnabledStripe = false;
                console.log("Stripe payment gateway disabled");
            } else if (action === 'enable-paypal') {
                this.isEnabledPaypal = true;
                console.log("PayPal payment gateway enabled");
            } else if (action === 'disable-paypal') {
                this.isEnabledPaypal = false;
                console.log("PayPal payment gateway disabled");
            }
        },
        formSubmit(gateway) {
            console.log(`${gateway} form submitted`);
        },
        buttonClass(action) {
            if (action === 'enable-stripe') {
                return this.isEnabledStripe ? 'btn-success' : 'btn-white'; // Green for Stripe enabled
            } else if (action === 'disable-stripe') {
                return !this.isEnabledStripe ? 'btn-danger' : 'btn-white'; // Red for Stripe disabled
            } else if (action === 'enable-paypal') {
                return this.isEnabledPaypal ? 'btn-success' : 'btn-white'; // Green for PayPal enabled
            } else if (action === 'disable-paypal') {
                return !this.isEnabledPaypal ? 'btn-danger' : 'btn-white'; // Red for PayPal disabled
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
