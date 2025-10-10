<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>ID</th>
      <th>Type</th>
      <th>Status</th>
      <th>Date</th>
      <th class="action-col">Details</th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loading">
      <tr>
        <td colspan="5">
          <el-skeleton :rows="10" animated />
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="invoice in invoices" :key="invoice.id">
        <td class="property-table-status">
          {{ invoice.id }}
        </td>
        <td class="property-table-status">
          <strong>{{ invoice.type }}</strong>
        </td>
        <td class="property-table-status">
          <span 
          class="badge" :class="{
            'badge-success': invoice.status === 'succeeded',
            'badge-primary': invoice.status === 'paid',
          }">
            {{ invoice.status }}
          </span>
        </td>
        <td class="property-table-status">
          {{ invoice.created_at }}
        </td>
        <td class="property-table-actions" data-label="Actions">
          <div class="dropdown property-action-menu">
            <a class="btn btn-primary py-0 text-white" target="_blank" :href="invoice.type === 'invoice' ? invoice.url : invoice.receipt_url">
              Details
            </a>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
defineProps(["loading", "invoices"]);
</script>