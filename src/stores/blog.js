// src/stores/blog.js
import { defineStore } from 'pinia'
import axiosInstance from '@/services/axiosService.js'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [],
    loading: false,
    errors: {}
  }),

  actions: {
    async addBlog(form) {
      const formData = new FormData()
      for (const key in form) {
        formData.append(key, form[key])
      }

      try {
        const response = await axiosInstance.post('/blogs', formData)
        return {
          success: true,
          message: response.data?.message || 'Blog created successfully',
          data: response.data?.data || {}
        }
      } catch (error) {
        return {
          success: false,
          message: error.response?.data?.message || 'Network error',
          errors: error.response?.data?.errors || {}
        }
      }
    },
// Inside useBlogStore actions


// In your blog store:
async deleteBlog(id) {
  try {
    const response = await axiosInstance.delete(`http://localhost:8000/api/v1/blogs/${id}`);
    console.log('Delete response:', response);
    
    this.blogs = this.blogs.filter(blog => blog.id !== id);
    return { success: true };
  } catch (error) {
    console.error('Delete error:', error);
    this.handleError(error, 'Failed to delete blog');
    return { success: false };
  }
},


    async fetchBlogs() {
      this.loading = true
      this.errors = {}

      try {
        const response = await axiosInstance.get('/blogs')
        this.blogs = response.data || []
      } catch (error) {
        this.handleError(error, 'Failed to fetch blog posts')
      } finally {
        this.loading = false
      }
    },

    handleError(error, defaultMessage) {
      console.error('API Error:', error)
      this.errors = error.response?.data?.errors || {
        general: [error.response?.data?.message || defaultMessage]
      }
    }
  }
  

})
