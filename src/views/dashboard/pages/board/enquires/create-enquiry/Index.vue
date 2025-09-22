<template>
  <DashboardHeader :heading="$t('enquiryForm.create')">
    <RouterLink :to="{ name: 'dashboard.all-enquiries' }" class="btn btn-primary-outlined">
      {{ $t('enquiryForm.all') }}
    </RouterLink>
  </DashboardHeader>

  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="row">
          <!-- Name -->
          <div class="col-md-6">
            <label>{{ $t('enquiryForm.labels.name') }}</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.name"
              @input="validateField('name')"
              :class="{ 'is-invalid': localErrors.name }"
              :placeholder="$t('enquiryForm.placeholders.name')"
            />
            <div v-if="localErrors.name" class="text-danger mt-1">{{ $t('enquiryForm.validation.name') }}</div>
          </div>

          <!-- Email -->
          <div class="col-md-6">
            <label>{{ $t('enquiryForm.labels.email') }}</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.email"
              @input="validateField('email')"
              :class="{ 'is-invalid': localErrors.email }"
              :placeholder="$t('enquiryForm.placeholders.email')"
            />
            <div v-if="localErrors.email" class="text-danger mt-1">{{ $t('enquiryForm.validation.email') }}</div>
          </div>

          <!-- Phone -->
          <div class="col-md-6 mt-3">
            <label>{{ $t('enquiryForm.labels.phone') }}</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.phone"
              @input="validateField('phone')"
              :class="{ 'is-invalid': localErrors.phone }"
              :placeholder="$t('enquiryForm.placeholders.phone')"
            />
            <div v-if="localErrors.phone" class="text-danger mt-1">{{ $t('enquiryForm.validation.phone') }}</div>
          </div>

          <!-- Source -->
          <div class="col-md-6 mt-3">
            <label>{{ $t('enquiryForm.labels.source') }}</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.source"
              @input="validateField('source')"
              :class="{ 'is-invalid': localErrors.source }"
              :placeholder="$t('enquiryForm.placeholders.source')"
            />
            <div v-if="localErrors.source" class="text-danger mt-1">{{ $t('enquiryForm.validation.source') }}</div>
          </div>

          <!-- Type -->
          <div class="col-md-6 mt-3">
            <label>{{ $t('enquiryForm.labels.type') }}</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.type"
              @input="validateField('type')"
              :class="{ 'is-invalid': localErrors.type }"
              :placeholder="$t('enquiryForm.placeholders.type')"
            />
            <div v-if="localErrors.type" class="text-danger mt-1">{{ $t('enquiryForm.validation.type') }}</div>
          </div>
        </div>

        <!-- Submit -->
        <button class="btn btn-primary mt-4" type="submit" :disabled="btnLoading">
          <span v-if="btnLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          {{ btnLoading ? $t('enquiryForm.submitting') : $t('enquiryForm.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>


<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification, useEnquiry } from '@/stores'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const notify = useNotification()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  source: '',
  type: '',
})

const localErrors = ref({
  name: '',
  email: '',
  phone: '',
  source: '',
  type: '',
})

const btnLoading = ref(false)

const validateField = (field) => {
  switch (field) {
    case 'name':
      localErrors.value.name = formData.value.name ? '' : t('enquiryForm.validation.name')
      break
    case 'email':
      localErrors.value.email = formData.value.email ? '' : t('enquiryForm.validation.email')
      break
    case 'phone':
      localErrors.value.phone = formData.value.phone ? '' : t('enquiryForm.validation.phone')
      break
    case 'source':
      localErrors.value.source = formData.value.source ? '' : t('enquiryForm.validation.source')
      break
    case 'type':
      localErrors.value.type = formData.value.type ? '' : t('enquiryForm.validation.type')
      break
  }
}

const hasErrors = computed(() =>
  Object.values(localErrors.value).some((error) => error !== '')
)

const formSubmit = async () => {
  Object.keys(localErrors.value).forEach(validateField)

  if (hasErrors.value) {
    notify.Error(t('enquiryForm.notifications.validationError'))
    return
  }

  btnLoading.value = true

  const payload = { ...formData.value }

  try {
    const res = await useEnquiry().storeEnquiry(payload)
    btnLoading.value = false

    if (res.status === 200) {
      notify.Success(t('enquiryForm.notifications.success'))
      router.push({ name: 'dashboard.all-enquiries' })
    } else {
      notify.Error(t('enquiryForm.notifications.error'))
    }
  } catch (error) {
    btnLoading.value = false
    notify.Error(t('enquiryForm.notifications.submissionFailed'))
  }
}
</script>


<style scoped>
.is-invalid {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
</style>
