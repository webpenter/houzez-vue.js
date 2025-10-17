<template>
  <div class="dashboard-content-block">
    <template v-if="loading">
      <el-skeleton animated :rows="5" />
    </template>

    <template v-else>
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <h2>Stripe Settings</h2>
        </div>

        <div class="col-md-9 col-sm-12">
          <form @submit.prevent="submitStripeForm">
            <div class="form-group">
              <label>Stripe Public Key</label>
              <input
                v-model="stripe.stripe_public_key.value"
                type="text"
                class="form-control"
                placeholder="Enter Stripe Public Key"
              />
            </div>

            <div class="form-group mt-3">
              <label>Stripe Private Key</label>
              <input
                v-model="stripe.stripe_private_key.value"
                type="text"
                class="form-control"
                placeholder="Enter Stripe Private Key"
              />
            </div>

            <div class="form-group mt-3">
              <label>Currency</label>
              <input
                v-model="stripe.currency.value"
                type="text"
                class="form-control"
                placeholder="e.g. USD, PKR, EUR"
              />
            </div>

            <button class="btn btn-success mt-3">Update Stripe Settings</button>
          </form>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useSetting, useNotification } from "@/stores/index.js";

const notify = useNotification();
const settingStore = useSetting();

const stripe = ref({
  stripe_public_key: { value: "" },
  stripe_private_key: { value: "" },
  currency: { value: "" },
});

const loading = ref(true);

/**
 * Submit updated Stripe configuration
 * @return {Promise<void>}
 */
const submitStripeForm = async () => {
  try {
    await settingStore.updateStripeSettings(stripe.value);
    notify.Success("Stripe settings updated successfully!");
  } catch {
    notify.Error("Failed to update Stripe settings");
  }
};

/**
 * Fetch existing Stripe settings on mount
 * @return {Promise<void>}
 */
onMounted(async () => {
  try {
    const res = await settingStore.getStripeSettings();
    stripe.value = { ...stripe.value, ...res.data.stripe };
  } catch {
    notify.Error("Failed to fetch Stripe settings");
  } finally {
    loading.value = false;
  }
});
</script>
