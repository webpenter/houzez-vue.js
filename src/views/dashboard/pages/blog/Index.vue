<template>
  <DashboardHeader heading="All Blog">
   <RouterLink 
     :to="{ name: 'dashboard.blog.blogs' }" 
     class="btn btn-primary"
   >
     Create Blog
   </RouterLink>
</DashboardHeader>
<template v-if="loading">
     <tr>
       <td colspan="2">
         <el-skeleton :rows="10" animated />
       </td>
     </tr>
   </template>
 <div class="p-4  rounded-sm mt-5 " style="margin-left: 240px;">
 <div class="flex justify-between items-center mb-4">
   <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
     <thead class="bg-gray-100 text-gray-600 font-semibold">
       <tr>
         <th class="px-4 py-2">Image</th>
         <th class="px-4 py-2">Title</th>
         <th class="px-4 py-2">Date</th>
         <th class="px-4 py-2">Time</th>
         <th class="px-4 py-2">Detail</th>
         <th class="px-4 py-2">Actions</th>
       </tr>
     </thead>
     <tbody class="text-gray-800">
      
       <tr v-for="blog in blogStore.blogs" :key="blog.id" class="border-b hover:bg-gray-50">
         <td class="px-4 py-4">
           <img :src="blog.image" alt="Blog Image" class="w-[50px] h-[40px] object-cover rounded-md" style="height: 30px;"/>
         </td>
         <td class="px-4 py-2">{{ blog.title }}</td>
         <td class="px-4 py-2">{{ blog.date }}</td>
         <td class="px-4 py-2">{{ blog.time }}</td>
         <td class="px-4 py-2">{{ blog.detail }}</td>
         <td class="px-4 py-2 relative">
           <div class="dropdown property-action-menu">
           <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Actions
           </button>
           <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
             <a @click.prevent="editBlog(blog)" class="dropdown-item" href="#">Edit</a>
             <a @click.prevent="deleteBlog(blog.id)" class="dropdown-item" href="#">Delete</a>
           </div>
           </div>
         </td>
       </tr>
     </tbody>
   </table>
 </div>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import {useConfirm,useNotification} from "@/stores/index.js";
import { useBlogStore } from '@/stores/blog.js'

const blogStore = useBlogStore()
const dropdownOpen = ref(null)
const loading = ref(true)

const toggleDropdown = (id) => {
 dropdownOpen.value = dropdownOpen.value === id ? null : id
}

onMounted(async () => {
  loading.value = true
  await blogStore.fetchBlogs()
  loading.value = false
})

const deleteBlog = async (id) => {
 useConfirm().Warning("Are you sure you want to delete this blog?")
   .then(async () => {
     try {
       const result = await blogStore.deleteBlog(id)

       if (result.success) {
         useNotification().Success("Blog deleted successfully.")
       } else {
         useNotification().Error("There was a problem deleting the blog.")
       }
     } catch (error) {
       useNotification().Error("An error occurred while deleting the blog.")
     }
   })
   .catch(() => {
     useNotification().Info("Delete action was cancelled.")
   })
}

const editBlog = (blog) => {
 console.log('Editing blog:', blog)
 // or use a router push to navigate to the edit page
}

</script>

