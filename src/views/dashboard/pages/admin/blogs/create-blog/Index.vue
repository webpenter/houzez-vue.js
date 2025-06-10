<template>
  <DashboardHeader heading="Create Blog">
    <RouterLink :to="{ name: 'dashboard.admin.all-blogs' }" class="btn btn-primary-outlined">
      All Blogs
    </RouterLink>
  </DashboardHeader>

  <section class="dashboard-content-wrap dashboard-add-new-listing">
    <div class="dashboard-content-inner-wrap">
      <form @submit.prevent="formSubmit">
        <div class="dashboard-content-block-wrap">
          <div class="dashboard-content-block">
            <div class="row">
              <!-- Blog Title -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Blog Title *</label>
                  <input
                      class="form-control"
                      :class="{ 'is-invalid': localErrors.title }"
                      @input="validateField('title')"
                      v-model="formData.title"
                      placeholder="Enter the title"
                      type="text"
                  />
                  <div class="text-danger mt-1" v-if="localErrors.title">
                    {{ localErrors.title }}
                  </div>
                </div>
              </div>

              <!-- Blog Image -->
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Blog Image *</label>
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

              <!-- Blog Description -->
              <div class="col-md-12 col-sm-12">
                <label>Blog Description *</label>
                <textarea
                    class="form-control"
                    :class="{ 'is-invalid': localErrors.description }"
                    @input="validateField('description')"
                    v-model="formData.description"
                    placeholder="Enter the blog description"
                    rows="8"
                />
                <div class="text-danger mt-1" v-if="localErrors.description">
                  {{ localErrors.description }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
          <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard.admin.all-blogs' }">
            Cancel
          </RouterLink>
          <button class="btn btn-primary" type="submit" :disabled="btnLoading || hasErrors">
            Create Blog
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
import { useBlog, useNotification } from '@/stores/index.js'

const router = useRouter()
const notify = useNotification()

const formData = ref({
  title: '',
  description: '',
  image: null,
})

const localErrors = ref({
  title: '',
  description: '',
  image: '',
})

const btnLoading = ref(false)

const validateField = (field) => {
  if (field === 'title') {
    localErrors.value.title = formData.value.title ? '' : 'Title field is required.'
  } else if (field === 'description') {
    localErrors.value.description = formData.value.description ? '' : 'Description field is required.'
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
    payload.append('title', formData.value.title)
    payload.append('description', formData.value.description)
    payload.append('image', formData.value.image)

    const res = await useBlog().storeBlog(payload)

    btnLoading.value = false

    if (res.status === 201) {
      notify.Success('Your blog has been recorded')
      router.push({ name: 'dashboard.admin.all-blogs' })
    } else {
      notify.Error('An error occurred while processing the request.')
    }
  } catch (error) {
    btnLoading.value = false
    notify.Error('An error occurred')
  }
}
</script>
