import axios from 'axios';
import { ref } from 'vue';

const blogs = ref([]);
const loading = ref(false);
const error = ref(null);

export const useBlogStore = () => {
  const fetchBlogs = async () => {
    loading.value = true;
    try {
      const response = await axios.get('http://localhost:8000/api/v1/app/showblogs');
      blogs.value = response.data.blogs;
    } catch (err) {
      console.error('Error fetching blogs:', err.response?.data || err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const createBlog = async (formData) => {
    try {
      const data = new FormData();
      data.append('date', formData.date);
      data.append('time', formData.time);
      data.append('title', formData.title);
      data.append('blog', formData.blog);
      if (formData.image) {
        data.append('image', formData.image);
      }

      console.log("Sending formData:", Object.fromEntries(data.entries())); // Debugging

      const response = await axios.post(
        'http://localhost:8000/api/v1/app/blogs',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      console.log('Blog created:', response.data);
      return response;
    } catch (error) {
      console.error('API Error:', error.response?.data || error);
      throw error;
    }
  };

  const fetchBlogById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/app/showblogs`);
      return response.data.blogs.find((blog) => blog.id === id);
    } catch (error) {
      console.error('Error fetching blog:', error);
      return null;
    }
  };
  
  const updateBlogAPI = async (id, formData) => {
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('blog', formData.blog);
      data.append('date', formData.date);
      data.append('time', formData.time);
      if (formData.image) {
        data.append('image', formData.image);
      }
  
      const response = await axios.put(`http://localhost:8000/api/v1/app/blogs/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Blog updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response?.data || error);
      throw error;
    }
  };
    

  return {
    blogs,
    loading,
    error,
    fetchBlogs,
    createBlog,
    fetchBlogById, 
    updateBlogAPI
  };
};
