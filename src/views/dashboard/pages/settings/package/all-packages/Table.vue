<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Time Period</th>
        <th>Price (Currency)</th>
        <th>Active</th>
        <th>No of Listings</th>
        <th>No of Images</th>
        <th class="action-col">Actions</th>
      </tr>
    </thead>

    <tbody>
      <template v-if="loading">
        <tr>
          <td colspan="7">
            <el-skeleton :rows="10" animated />
          </td>
        </tr>
      </template>

      <template v-else>
        <tr v-for="plan in allPlans" :key="plan.id">
          <td class="property-table-status">
            {{ $filters.capitalize(plan.name) }}
          </td>
          <td class="property-table-status">{{ plan.time_period }}</td>
          <td class="property-table-status">
            {{ `${plan.price} (${plan.currency.toUpperCase()})` }}
          </td>
          <td class="property-table-status">
            <span
              class="badge"
              :class="plan.active === 'Yes' ? 'badge-success' : 'badge-danger'"
            >
              {{ plan.active }}
            </span>
          </td>
          <td class="property-table-status">
            {{ plan.number_of_listings }}
          </td>
          <td class="property-table-status">
            {{ plan.number_of_images }}
          </td>
          <td class="property-table-actions" data-label="Actions">
            <div class="dropdown property-action-menu">
              <button
                id="dropdownMenuButton"
                class="btn btn-primary-outlined dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Actions
              </button>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  href="#"
                  class="dropdown-item"
                  @click.prevent="$emit('deletePlan', plan.plan_id)"
                >
                  Delete
                </a>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
/**
 * Props definition with explicit types for ESLint compliance
 */
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  allPlans: {
    type: Array,
    required: true,
  },
});

/**
 * Explicitly define emitted events for Vue lint rule compliance
 */
defineEmits(["deletePlan"]);
</script>
