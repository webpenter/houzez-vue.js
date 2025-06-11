<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>Thumbnail</th>
      <th>Address</th>
      <th></th>
      <th>Type</th>
      <th>Status</th>
      <th>Price</th>
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
            <RouterLink :to="{ name: 'app.property-details', params: { propertySlug: property.slug } }">
              <div v-if="!property.thumbnail" style="width: 100px;height: 60px;background-color: #F1F3F3"></div>
              <img v-else :src="property.thumbnail" width="100px" />
            </RouterLink>
          </div>
        </td>
        <td class="property-table-address" data-label="Address">
          <RouterLink :to="{ name: 'app.property-details', params: { propertySlug: property.slug } }">
            <strong>{{ property.title }}</strong>
          </RouterLink>
          <br />
          {{ $filters.subStr(property.address, 0, 40) }}<br />
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
            <button class="btn btn-primary-outlined dropdown-toggle" type="button" data-toggle="dropdown">
              Actions
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <RouterLink
                  class="dropdown-item"
                  :to="{ name: 'dashboard.create-listing.step-1', params: { propertyId: property.id } }"
              >
                Edit
              </RouterLink>
              <a class="dropdown-item" @click.prevent="$emit('deleteProperty', property.id)" href="#">Delete</a>
              <a class="dropdown-item" @click.prevent="$emit('duplicateProperty', property.id)" href="#">Duplicate</a>
              <template v-if="admin">
                <a class="dropdown-item" @click="openChangeStatus(property)" href="#">Change Status</a>
              </template>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table>

  <el-dialog v-model="openStatusDialog" title="Change Status" width="300" align-center>
    <div>
      <el-radio-group
          @change="changeStatus"
          v-model="statusVal"
          style="display: flex; flex-direction: column; align-items: start; gap: 10px"
      >
        <el-radio style="width: 100%" value="published" size="large" border>Published</el-radio>
        <el-radio style="width: 100%" value="pending" size="large" border>Pending</el-radio>
        <el-radio style="width: 100%" value="expired" size="large" border>Expired</el-radio>
        <el-radio style="width: 100%" value="draft" size="large" border>Draft</el-radio>
        <el-radio style="width: 100%" value="on-hold" size="large" border>On Hold</el-radio>
        <el-radio style="width: 100%" value="disapproved" size="large" border>Disapproved</el-radio>
      </el-radio-group>
    </div>
  </el-dialog>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import {useAdmin, useProperty} from '@/stores/index.js'

const admin = useAdmin().getAdmin;

const emit = defineEmits(['deleteProperty', 'duplicateProperty', 'statusChanged'])

const props = defineProps({
  dashboardProperties: Array,
  loading: Boolean
})

const openStatusDialog = ref(false)
const statusVal = ref('')
const selectedProperty = ref(null)

const propertyStore = useProperty()

const getStatusClass = (propertyStatus) => {
  const statusMap = {
    published: 'badge-success',
    pending: 'badge-primary',
    expired: 'badge-danger',
    draft: 'badge-warning',
    'on-hold': 'badge-info',
    disapproved: 'badge-dark'
  }
  return statusMap[propertyStatus] || 'badge-secondary'
}

const openChangeStatus = (property) => {
  selectedProperty.value = property
  statusVal.value = property.property_status
  openStatusDialog.value = true
}

const changeStatus = async () => {
  if (!selectedProperty.value) return
  try {
    await propertyStore.changeStatus(selectedProperty.value.id, statusVal.value)
    selectedProperty.value.property_status = statusVal.value

    emit('statusChanged', {
      id: selectedProperty.value.id,
      newStatus: statusVal.value
    })
  } catch (e) {
    ElMessage.error(e?.data?.message || 'Failed to update status')
  } finally {
    openStatusDialog.value = false
  }
}
</script>
