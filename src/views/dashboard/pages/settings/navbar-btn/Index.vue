<template>
    <DashboardHeader heading="Navbar" />
  
    <section class="dashboard-content-wrap">
      <div class="dashboard-content-inner-wrap">
        <div class="dashboard-content-block-wrap">
          <div class="dashboard-content-block">
            <label class="block text-lg font-semibold text-gray-700 mb-3">Create Listing Button</label>
            <div class="flex gap-6">
              <label
                class="flex items-center gap-2 cursor-pointer px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                :class="{ 'border-blue-500 bg-blue-50': isVisible }"
              >
                <input
                  type="radio"
                  v-model="isVisible"
                  :value="true"
                  class="form-radio text-blue-600 focus:ring-blue-500"
                  @change="updateVisibility"
                />
                <span class="text-gray-800 font-medium">Visible</span>
              </label>
  
              <label
                class="flex items-center gap-2 cursor-pointer px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                :class="{ 'border-red-500 bg-red-50': isVisible === false }"
              >
                <input
                  type="radio"
                  v-model="isVisible"
                  :value="false"
                  class="form-radio text-red-600 focus:ring-red-500"
                  @change="updateVisibility"
                />
                <span class="text-gray-800 font-medium">Hidden</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const buttonId = 1
const isVisible = ref(true)

const token = localStorage.getItem('token')

// 👇 Fetch visibility status from API when page loads
const fetchVisibility = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/navbar/buttons/${buttonId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (res.data && res.data.is_visible !== undefined) {
      isVisible.value = Boolean(res.data.is_visible)
    }
  } catch (error) {
    console.error('Failed to fetch visibility:', error)
  }
}

// 👇 Update visibility in database
const updateVisibility = async () => {
  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/navbar/buttons/${buttonId}/visibility`,
      {
        is_visible: isVisible.value
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    console.log('Visibility updated')
    // optional: re-fetch to ensure value is synced
    await fetchVisibility()
  } catch (error) {
    console.error('Failed to update visibility:', error)
  }
}

onMounted(fetchVisibility)
</script>


  