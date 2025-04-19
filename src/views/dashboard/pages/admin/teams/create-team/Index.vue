<template>
  <DashboardHeader heading="Create Team">
    <RouterLink :to="{ name: 'dashboard.admin.all-teams' }" class="btn btn-primary-outlined">
      All Teams
    </RouterLink>
  </DashboardHeader>

  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <div class="dashboard-content-block">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Name *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.name }"
                      @input="validateField('name')"
                      v-model="formData.name"
                      placeholder="Enter the name"
                      type="text"
                  />
                  <div class="text-danger mt-1" v-if="localErrors.name">
                    {{ localErrors.name }}
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Image *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.image }"
                      @change="handleImageUpload"
                      type="file"
                  />
                  <div class="text-danger mt-1" v-if="localErrors.image">
                    {{ localErrors.image }}
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-sm-12">
                <label>Designation *</label>
                <input
                    class="form-control"
                    :class="{ 'is-invalid': localErrors.designation }"
                    @input="validateField('designation')"
                    v-model="formData.designation"
                    placeholder="Enter the designation"
                    type="text"
                />
                <div class="text-danger mt-1" v-if="localErrors.designation">
                  {{ localErrors.designation }}
                </div>
              </div>

              <div class="col-md-12 col-sm-12 mt-3">
                <label>Address *</label>
                <input
                    class="form-control"
                    :class="{ 'is-invalid': localErrors.address }"
                    @input="validateField('address')"
                    v-model="formData.address"
                    placeholder="Enter the address"
                    type="text"
                />
                <div class="text-danger mt-1" v-if="localErrors.address">
                  {{ localErrors.address }}
                </div>
              </div>

              <div class="col-md-6 col-sm-12 mt-3">
                <div class="form-group">
                  <label>Phone *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.phone }"
                      @input="validateField('phone')"
                      v-model="formData.phone"
                      placeholder="Enter the phone"
                      type="text"
                  />
                  <div class="text-danger mt-1" v-if="localErrors.phone">
                    {{ localErrors.phone }}
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-sm-12 mt-3">
                <div class="form-group">
                  <label>Email *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.email }"
                      @input="validateField('email')"
                      v-model="formData.email"
                      placeholder="Enter the email"
                      type="text"
                  />
                  <div class="text-danger mt-1" v-if="localErrors.email">
                    {{ localErrors.email }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard.admin.all-teams' }">
            Cancel
          </RouterLink>
          <button class="btn btn-primary" type="submit" :disabled="btnLoading || hasErrors">
            Create Team
            <span v-if="btnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useTeam, useNotification } from '@/stores/index.js'

const router = useRouter()
const notify = useNotification()

const formData = ref({
  name: '',
  designation: '',
  address: '',
  phone: '',
  email: '',
  image: null,
})

const localErrors = ref({
  name: '',
  designation: '',
  address: '',
  phone: '',
  email: '',
  image: '',
})

const btnLoading = ref(false)

const validateField = (field) => {
  if (field === 'name') {
    localErrors.value.name = formData.value.name ? '' : 'Name field is required.'
  } else if (field === 'designation') {
    localErrors.value.designation = formData.value.designation ? '' : 'Designation field is required.'
  } else if (field === 'address') {
    localErrors.value.address = formData.value.address ? '' : 'Address field is required.'
  } else if (field === 'phone') {
    localErrors.value.phone = formData.value.phone ? '' : 'Phone field is required.'
  } else if (field === 'email') {
    localErrors.value.email = formData.value.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)
            ? ''
            : 'Email format is invalid.'
        : 'Email field is required.'
  } else if (field === 'image') {
    if (!formData.value.image) {
      localErrors.value.image = 'Image field is required.'
    } else {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp']
      if (!allowedTypes.includes(formData.value.image.type)) {
        localErrors.value.image = 'Only JPG, PNG, or WEBP images are allowed.'
      } else {
        localErrors.value.image = ''
      }
    }
  }
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  formData.value.image = file
  validateField('image')
}

const hasErrors = computed(() =>
    Object.values(localErrors.value).some((error) => error !== '')
)

const formSubmit = async () => {
  Object.keys(localErrors.value).forEach((field) => validateField(field))

  if (hasErrors.value) {
    notify.Error('Please fix the validation errors before proceeding.')
    return
  }

  btnLoading.value = true

  try {
    const payload = new FormData()
    payload.append('name', formData.value.name)
    payload.append('designation', formData.value.designation)
    payload.append('address', formData.value.address)
    payload.append('phone', formData.value.phone)
    payload.append('email', formData.value.email)
    payload.append('image', formData.value.image)

    const res = await useTeam().storeTeam(payload)

    btnLoading.value = false

    if (res.status === 201) {
      notify.Success('Your team has been recorded')
      router.push({ name: 'dashboard.admin.all-teams' })
    } else {
      notify.Error('An error occurred while processing the request.')
    }
  } catch (error) {
    btnLoading.value = false
    notify.Error('An error occurred')
  }
}
</script>

