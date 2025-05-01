<template>
  <DashboardHeader heading="Create Lead">
    <RouterLink :to="{ name: 'dashboard.all-leads' }" class="btn btn-primary-outlined">
      {{ $t('Leads') }}
    </RouterLink>
  </DashboardHeader>

  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="row">
          <div class="col-md-6">
            <label>Name *</label>
            <input
                type="text"
                class="form-control"
                v-model="formData.name"
                @input="validateField('name')"
                :class="{ 'is-invalid': localErrors.name }"
                placeholder="Enter name"
            />
            <div v-if="localErrors.name" class="text-danger mt-1">{{ localErrors.name }}</div>
          </div>

          <div class="col-md-6">
            <label>Email *</label>
            <input
                type="text"
                class="form-control"
                v-model="formData.email"
                @input="validateField('email')"
                :class="{ 'is-invalid': localErrors.email }"
                placeholder="Enter email"
            />
            <div v-if="localErrors.email" class="text-danger mt-1">{{ localErrors.email }}</div>
          </div>

          <div class="col-md-6 mt-3">
            <label>Phone *</label>
            <input
                type="text"
                class="form-control"
                v-model="formData.phone"
                @input="validateField('phone')"
                :class="{ 'is-invalid': localErrors.phone }"
                placeholder="Enter phone"
            />
            <div v-if="localErrors.phone" class="text-danger mt-1">{{ localErrors.phone }}</div>
          </div>

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

          <div class="col-md-6 mt-3">
            <label>Type *</label>
            <input
                type="text"
                class="form-control"
                v-model="formData.type"
                @input="validateField('type')"
                :class="{ 'is-invalid': localErrors.type }"
                placeholder="Enter type"
            />
            <div v-if="localErrors.type" class="text-danger mt-1">{{ localErrors.type }}</div>
          </div>
        </div>

        <!-- Submit Button -->
        <button class="btn btn-primary mt-4" type="submit" :disabled="btnLoading">
          <span v-if="btnLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {{ btnLoading ? 'Submitting...' : 'Submit Lead' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification, useLead } from '@/stores'

const router = useRouter()
const notify = useNotification()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  agent: '',
  type: '',
})

const localErrors = ref({
  name: '',
  email: '',
  phone: '',
  agent: '',
  type: '',
})

const btnLoading = ref(false)

const validateField = (field) => {
  switch (field) {
    case 'name':
      localErrors.value.name = formData.value.name ? '' : 'Name is required.'
      break
    case 'email':
      localErrors.value.email = formData.value.email ? '' : 'Email is required.'
      break
    case 'phone':
      localErrors.value.phone = formData.value.phone ? '' : 'Phone is required.'
      break
    case 'agent':
      localErrors.value.agent = formData.value.agent ? '' : 'Agent is required.'
      break
    case 'type':
      localErrors.value.type = formData.value.type ? '' : 'Type is required.'
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
    name: formData.value.name,
    email: formData.value.email,
    phone: formData.value.phone,
    agent: formData.value.agent,
    type: formData.value.type,
  }

  try {
    const res = await useLead().storeLead(payload)
    btnLoading.value = false

    if (res.status === 201) {
      notify.Success('Lead has been created.')
      router.push({ name: 'dashboard.all-leads' })
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
