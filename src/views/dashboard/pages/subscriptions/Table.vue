<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
      <tr>
        <th>Subscription</th>
        <th>Status</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Trial Start</th>
        <th>Trial End</th>
        <th>Package</th>
        <th>Items</th>
        <th class="action-col">Renew</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="loading">
        <tr>
          <td colspan="9">
            <el-skeleton :rows="8" animated />
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="subscription in subscriptions" :key="subscription.id">
          <td class="property-table-status">
            <strong>{{ subscription.type }}</strong>
          </td>
          <td class="property-table-status">
            <span class="badge" :class="{ 'badge-success': subscription.stripe_status === 'active' }">
              {{ subscription.stripe_status }}
            </span>
          </td>
          <td class="property-table-status">
            {{ subscription.plan ? subscription.plan.currency_symbol + subscription.plan.price : 'N/A' }}
          </td>

          <td class="property-table-status">
            {{ subscription.quantity }}
          </td>
          <td class="property-table-status">
            {{ subscription.created_at }}
          </td>
          <td class="property-table-status">
            {{ subscription.ends_at ?? 'N/A' }}
          </td>
          <td class="property-table-status">
            <el-button plain @click="centerDialogVisible = true">
              Details
            </el-button>
            <el-dialog v-model="centerDialogVisible" title="Package Details" width="550" align-center
              :show-close="false">
              <div>
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Package Name</th>
                      <td>{{ subscription.plan.name }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Price</th>
                      <td>{{ subscription.plan.currency_symbol + subscription.plan.price }}</td>
                    </tr>
                    <tr>
                      <th scope="row">Time Period</th>
                      <td>{{ subscription.plan.time_period }}</td>
                    </tr>
                    <tr>
                      <th scope="row">No of Listings</th>
                      <td>{{ subscription.plan.properties }}</td>
                    </tr>
                    <tr>
                      <th scope="row">No of Images</th>
                      <td>{{ subscription.plan.images }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <template #footer>
                <div class="dialog-footer">
                  <el-button type="primary" @click="centerDialogVisible = false">
                    Cancel
                  </el-button>
                </div>
              </template>
            </el-dialog>
          </td>
          <td class="property-table-status">
            <div style="display: flex; align-items: center">
              <el-popover placement="right" :width="400" trigger="click">
                <template #reference>
                  <el-button style="margin-right: 16px">View</el-button>
                </template>
                <el-table :data="subscription.items">
                  <el-table-column width="200" property="stripe_product" label="Product #" />
                  <el-table-column width="200" property="stripe_price" label="Plan #" />
                  <el-table-column width="80" property="quantity" label="Qty" />
                  <el-table-column width="110" property="created_at" label="Date" />
                </el-table>
              </el-popover>
            </div>
          </td>
          <td class="property-table-actions" data-label="Actions">
            <div class="dropdown property-action-menu">
              <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Renew
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <template v-if="subscription.ends_at != null">
                  <a @click.prevent="$emit('resumeSubscription', subscription.type)" class="dropdown-item" href="#">
                    Cancel
                  </a>
                </template>
                <template v-else>
                  <a @click.prevent="$emit('cancelSubscription', subscription.type)" class="dropdown-item" href="#">
                    Resume
                  </a>
                </template>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
import { ref } from "vue";

defineProps(["loading", "subscriptions"]);

const centerDialogVisible = ref(false);
</script>