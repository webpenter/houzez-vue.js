<template>
  <DashboardHeader :heading="TITLE_CREATE_UPDATE_LISTING" />

  <section class="dashboard-content-wrap">
    <SnakeNav active="payment" />
    <div class="d-flex display-block-on-tablet">
      <div class="order-2">
        <PackageDetail :plan="selectedPackage" :loading="planLoading" />
      </div>

      <div class="order-1 flex-grow-1">
        <div class="dashboard-content-inner-wrap">
          <div class="dashboard-content-block-wrap">
            <h2>Payment Method</h2>
            <div class="dashboard-content-block">
              <form @submit.prevent="handlePayment">
                <div>
                  <label for="card-holder-name">Card Holder Name (optional)</label>
                  <input id="card-holder-name" v-model="cardHolderName" type="text" style="width: 100%;padding-block: 5px;padding-inline: 10px" class="input-field" placeholder="Enter card holder name"/>
                </div>

                <div class="mt-3">
                  <label for="card-element">Credit or Debit Card</label>
                  <div id="card-element" class="StripeElement"></div>
                  <div id="card-errors" role="alert" class="mt-2 text-danger">{{ errorMessage }}</div>
                </div>

                <button :disabled="loading" class="btn btn-success btn-full-width mt-4 mb-4">
                  {{ loading ? "Processing..." : "Complete Membership" }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import { useRoute, useRouter } from "vue-router";
import {useIsSubscribed, useNotification, useSubscription} from "@/stores/index.js";
import { storeToRefs } from "pinia";
import SnakeNav from '../../components/SnakeNav.vue';
import PackageDetail from "@/views/dashboard/pages/create-listing/payment/checkout/PackageDetail.vue";
import { TITLE_CREATE_UPDATE_LISTING } from "@/constants/index.js";

const route = useRoute();
const router = useRouter();
const planLoading = ref(false);
const loading = ref(false);
const stripe = ref(null);
const card = ref(null);
const cardHolderName = ref("");
const clientSecret = ref("");
const errorMessage = ref(null);

const subscriptionStore = useSubscription();
const { selectedPackage } = storeToRefs(subscriptionStore);

onMounted(async () => {
  planLoading.value = true;

  try {
    const res = await subscriptionStore.checkout(route.params.planId);

    if (res.status === 404) {
      useNotification().Error("Package Not Found!");
      return;
    }

    clientSecret.value = res.data.intent.client_secret;
    stripe.value = await loadStripe(import.meta.env.VITE_STRIPE_KEY);

    const elements = stripe.value.elements();
    card.value = elements.create("card", { style: { base: { fontSize: "16px" } } });
    card.value.mount("#card-element");
  } catch (error) {
    useNotification().Error("An error occurred while fetching checkout");
  }

  planLoading.value = false;
});

const handlePayment = async () => {
  loading.value = true;

  const { setupIntent, error } = await stripe.value.confirmCardSetup(clientSecret.value, {
    payment_method: {
      card: card.value,
      billing_details: { name: cardHolderName.value },
    },
  });

  if (error) {
    errorMessage.value = error.message;
    loading.value = false;
    return;
  }

  try {
    await subscriptionStore.processSubscription(route.params.planId, setupIntent.payment_method);
    useNotification().Success("Subscription successful!");
    useIsSubscribed().setIsSubscribed(true);
    router.push({ name: "dashboard.create-listing.payment-completed" });
  } catch (error) {
    useNotification().Error(error?.data?.error);
  }

  loading.value = false;
};
</script>

<style scoped>
.StripeElement {
  background-color: white;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
