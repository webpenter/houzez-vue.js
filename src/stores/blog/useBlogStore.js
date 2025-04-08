import axios from 'axios';
import { ref, computed } from 'vue';

export const useBlogStore = () => {
  const blogs = ref([]);  // Blogs List
  const loading = ref(false);  // Loading State
  const error = ref(null);  // Error State

  // ✅ Blogs Fetch کرنے کا Function
  const fetchBlogs = async () => {
    loading.value = true;
    try {
      const response = await axios.get('http://localhost:8000/api/v1/app/showblogs');
      blogs.value = response.data.blogs;  // API سے Blogs لے کر Set کرنا
    } catch (err) {
      console.error('Error fetching blogs:', err.response?.data || err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  // ✅ Computed Property تاکہ Vue میں Re-Active رہے
  const allBlogs = computed(() => blogs.value);

  return {
    blogs: allBlogs,
    loading,
    error,
    fetchBlogs
  };
};
