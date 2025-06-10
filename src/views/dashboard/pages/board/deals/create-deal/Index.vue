<template>
  <DashboardHeader heading="Create Deal">
    <RouterLink :to="{ name: 'dashboard.active-deals' }" class="btn btn-primary-outlined">
      All Deals
    </RouterLink>
  </DashboardHeader>

  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="row">
          <!-- Group -->
          <div class="col-md-6">
            <label>Group *</label>
            <select
                v-model="formData.group"
                @change="validateField('group')"
                :class="['form-control', localErrors.group ? 'is-invalid' : '']"
            >
              <option disabled value="">Select Group</option>
              <option value="active">Active</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
            </select>
            <div v-if="localErrors.group" class="text-danger mt-1">{{ localErrors.group }}</div>
          </div>

          <!-- Title -->
          <div class="col-md-6">
            <label>Title *</label>
            <input
                type="text"
                class="form-control"
                v-model="formData.title"
                @input="validateField('title')"
                :class="{ 'is-invalid': localErrors.title }"
                placeholder="Enter title"
            />
            <div v-if="localErrors.title" class="text-danger mt-1">{{ localErrors.title }}</div>
          </div>

          <!-- Contact Name -->
          <div class="col-md-6 mt-3">
            <label>Contact Name *</label>
            <input
                type="text"
                class="form-control"
                v-model="formData.contact_name"
                @input="validateField('contact_name')"
                :class="{ 'is-invalid': localErrors.contact_name }"
                placeholder="Enter contact name"
            />
            <div v-if="localErrors.contact_name" class="text-danger mt-1">{{ localErrors.contact_name }}</div>
          </div>

          <!-- Agent -->
          <div class="col-md-6 mt-3">
            <label>Agent *</label>
            <input
                type="text"
                class="form-control"
                v-model="formData.agent"
                @input="validateField('agent')"
                :class="{ 'is-invalid': localErrors.agent }"
                placeholder="Enter agent name"
            />
            <div v-if="localErrors.agent" class="text-danger mt-1">{{ localErrors.agent }}</div>
          </div>

          <!-- Deal Value -->
          <div class="col-md-6 mt-3">
            <label>Deal Value *</label>
            <input
                type="number"
                class="form-control"
                v-model="formData.deal_value"
                @input="validateField('deal_value')"
                :class="{ 'is-invalid': localErrors.deal_value }"
                placeholder="Enter deal value"
            />
            <div v-if="localErrors.deal_value" class="text-danger mt-1">{{ localErrors.deal_value }}</div>
          </div>

          <!-- Status -->
          <div class="col-md-6 mt-3">
            <div><label for="status" class="form-check-label">Status (active/inactive)</label></div>
            <input
                type="checkbox"
                id="status"
                v-model="formData.status"
                class="form-check-input me-5"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button class="btn btn-primary mt-4" type="submit" :disabled="btnLoading">
          <span v-if="btnLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {{ btnLoading ? 'Submitting...' : 'Submit Deal' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification, useDeal } from '@/stores'

const router = useRouter()
const notify = useNotification()

const formData = ref({
  group: '',
  title: '',
  contact_name: '',
  agent: '',
  deal_value: '',
  status: true,
})

const localErrors = ref({
  group: '',
  title: '',
  contact_name: '',
  agent: '',
  deal_value: '',
})

const btnLoading = ref(false)

const validateField = (field) => {
  switch (field) {
    case 'group':
      localErrors.value.group = formData.value.group ? '' : 'Group is required.'
      break
    case 'title':
      localErrors.value.title = formData.value.title ? '' : 'Title is required.'
      break
    case 'contact_name':
      localErrors.value.contact_name = formData.value.contact_name ? '' : 'Contact name is required.'
      break
    case 'agent':
      localErrors.value.agent = formData.value.agent ? '' : 'Agent is required.'
      break
    case 'deal_value':
      localErrors.value.deal_value = formData.value.deal_value ? '' : 'Deal value is required.'
      break
  }
}

const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== '')
)

const formSubmit = async () => {
  Object.keys(localErrors.value).forEach(validateField)

  if (hasErrors.value) {
    notify.Error('Please fix validation errors.')
    return
  }

  btnLoading.value = true

  const payload = {
    group: formData.value.group,
    title: formData.value.title,
    contact_name: formData.value.contact_name,
    agent: formData.value.agent,
    deal_value: formData.value.deal_value,
    status: formData.value.status ? 'active' : 'inactive',
  }

  try {
    const res = await useDeal().storeDeal(payload)
    btnLoading.value = false

    if (res.status === 200) {
      notify.Success('Deal has been created.')
      router.push({ name: 'dashboard.active-deals' })
    } else {
      notify.Error('Something went wrong.')
    }
  } catch (error) {
    btnLoading.value = false
    notify.Error('Submission failed. Please try again.')
  }
}
</script>

<style scoped>
.is-invalid {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
</style>
