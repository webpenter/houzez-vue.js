<template>
  <DashboardHeader :heading="$t('createLead')">
    <RouterLink :to="{ name: 'dashboard.all-leads' }" class="btn btn-primary-outlined">
      {{ $t('leads') }}
    </RouterLink>
  </DashboardHeader>

  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="row">
          <div class="col-md-6">
            <label>{{ $t('name') }} *</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.name"
              @input="validateField('name')"
              :class="{ 'is-invalid': localErrors.name }"
              :placeholder="$t('enterName')"
            />
            <div v-if="localErrors.name" class="text-danger mt-1">{{ localErrors.name }}</div>
          </div>

          <div class="col-md-6">
            <label>{{ $t('email') }} *</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.email"
              @input="validateField('email')"
              :class="{ 'is-invalid': localErrors.email }"
              :placeholder="$t('enterEmail')"
            />
            <div v-if="localErrors.email" class="text-danger mt-1">{{ localErrors.email }}</div>
          </div>

          <div class="col-md-6 mt-3">
            <label>{{ $t('phone') }} *</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.phone"
              @input="validateField('phone')"
              :class="{ 'is-invalid': localErrors.phone }"
              :placeholder="$t('enterPhone')"
            />
            <div v-if="localErrors.phone" class="text-danger mt-1">{{ localErrors.phone }}</div>
          </div>

          <div class="col-md-6 mt-3">
            <label>{{ $t('agent') }} *</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.agent"
              @input="validateField('agent')"
              :class="{ 'is-invalid': localErrors.agent }"
              :placeholder="$t('enterAgent')"
            />
            <div v-if="localErrors.agent" class="text-danger mt-1">{{ localErrors.agent }}</div>
          </div>

          <div class="col-md-6 mt-3">
            <label>{{ $t('type') }} *</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.type"
              @input="validateField('type')"
              :class="{ 'is-invalid': localErrors.type }"
              :placeholder="$t('enterType')"
            />
            <div v-if="localErrors.type" class="text-danger mt-1">{{ localErrors.type }}</div>
          </div>
        </div>

        <!-- Submit Button -->
        <button class="btn btn-primary mt-4" type="submit" :disabled="btnLoading">
          <span v-if="btnLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {{ btnLoading ? $t('submitting') : $t('submitLead') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useNotification, useLead } from '@/stores'

const { t } = useI18n()
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
      localErrors.value.name = formData.value.name ? '' : t('errors.name')
      break
    case 'email':
      localErrors.value.email = formData.value.email ? '' : t('errors.email')
      break
    case 'phone':
      localErrors.value.phone = formData.value.phone ? '' : t('errors.phone')
      break
    case 'agent':
      localErrors.value.agent = formData.value.agent ? '' : t('errors.agent')
      break
    case 'type':
      localErrors.value.type = formData.value.type ? '' : t('errors.type')
      break
  }
}

const hasErrors = computed(() =>
  Object.values(localErrors.value).some((error) => error !== '')
)

const formSubmit = async () => {
  Object.keys(localErrors.value).forEach(validateField)

  if (hasErrors.value) {
    notify.Error(t('errors.fix'))
    return
  }

  btnLoading.value = true

  try {
    const res = await useLead().storeLead({ ...formData.value })
    btnLoading.value = false

    if (res.status === 201) {
      notify.Success(t('success.leadCreated'))
      router.push({ name: 'dashboard.all-leads' })
    } else {
      notify.Error(t('errors.generic'))
    }
  } catch (error) {
    btnLoading.value = false
    notify.Error(t('errors.submitFailed'))
  }
}
</script>


<style scoped>
.is-invalid {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
</style>
