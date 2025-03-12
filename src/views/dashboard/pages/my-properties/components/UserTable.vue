<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
      <tr>
        <th>Profile</th>
        <th>Username</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Posts</th>
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
        <tr v-for="property in dashboardProperties" :key="property.id">
          <td class="property-table-thumbnail" data-label="Thumbnail">
            <div class="table-property-thumb">
              <span v-if="property.is_paid" class="label property-payment-status">Paid</span>
              <a href="#">
                <div v-if="!property.thumbnail" style="width: 100px;height: 60px;background-color: #F1F3F3"></div>
                <img v-else :src="property.thumbnail" width="100px">
              </a>
            </div><!-- table-property-thumb -->
          </td>
          <td class="property-table-address" data-label="Address">
            <a href="#"><strong>{{ property.title }}</strong></a><br>
            {{ $filters.subStr(property.address, 0, 40) }}<br>
            <!--                              <strong>Expiration:</strong> June 9, 2019 - 6:46 pm-->
          </td>
          <td>
            <span class="badge" :class="getStatusClass(property.property_status)">
              {{ property.property_status }}
            </span>
          </td>
          <td class="property-table-type" data-label="Type">{{ property.type }}</td>
          <td class="property-table-status" data-label="Status">{{ property.status }}</td>
          <td class="property-table-price" data-label="Price">
            <strong>{{ $filters.formatPrice(property.price) }}</strong>
          </td>
          <td class="property-table-actions" data-label="Actions">
            <div class="dropdown property-action-menu">
              <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Actions
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <RouterLink class="dropdown-item" :to="{
                  name: 'dashboard.create-listing.step-1',
                  params: { propertyId: property.id }
                }">
                  Edit
                </RouterLink>
                <a class="dropdown-item" @click.prevent="$emit('deleteProperty', property.id)" href="#">Delete</a>
                <a class="dropdown-item" href="#">View</a>
                <a class="dropdown-item" href="#">Password Reset</a>

              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
const props = defineProps({
  dashboardProperties: Object,
  loading: Boolean,
});

const getStatusClass = (propertyStatus) => {
  const statusMap = {
    published: 'badge-success',
    pending: 'badge-primary',
    expired: 'badge-danger',
    draft: 'badge-warning',
    'on-hold': 'badge-info',
    disapproved: 'badge-dark'
  };
  return statusMap[propertyStatus] || 'badge-secondary';
};
</script>
