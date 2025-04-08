<template>
    <div>
      <DashboardHeader heading="Blog">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Blog Field</a>
      </DashboardHeader>
  
      <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
          <div class="dashboard-content-block-wrap">
            <h2>{{ isEditMode ? "Edit Blog" : "Create Blog" }}</h2>
            <div class="dashboard-content-block">
              <template v-if="loading">
                <div class="row">
                  <div class="col-md-3 col-sm-12">
                    <el-skeleton style="--el-skeleton-circle-size: 200px" animated>
                      <template #template>
                        <el-skeleton-item variant="circle" />
                      </template>
                    </el-skeleton>
                  </div>
                  <div class="col-md-9 col-sm-12">
                    <el-skeleton animated :rows="15"/>
                  </div>
                </div>
              </template>
  
              <template v-else>
                <div class="row">
                  <div class="col-md-3 col-sm-12">
                    <img v-if="blogimg" class="img-fluid" :src="blogimg" alt="thumb">
                    <button @click="triggerFileInput" type="button" class="btn btn-primary btn-full-width mt-3">
                      Upload Profile Picture
                    </button>
                    <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" />
                  </div>
                  <div class="col-md-9 col-sm-12">
                    <form @submit.prevent="submitBlog">
                      <div class="row">
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Date</label>
                            <input class="form-control" v-model="formData.date" type="date">
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Time</label>
                            <input class="form-control" v-model="formData.time" type="text">
                          </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                          <div class="form-group">
                            <label>Title</label>
                            <input class="form-control" v-model="formData.title" type="text">
                          </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                          <div class="form-group">
                            <label>Blog</label>
                            <textarea class="form-control" v-model="formData.blog" rows="3"></textarea>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-success" :disabled="hasErrors" type="submit">
                        {{ isEditMode ? "Update Blog" : "Create Blog" }}
                      </button>
                    </form>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useBlogStore } from '@/stores/blog/blog';
  
  const route = useRoute();
  const blogId = ref(route.params.id); // URL se ID lena
  
  const blogStore = useBlogStore();
  const { fetchBlogs, createBlog, fetchBlogById, updateBlogAPI } = blogStore;
  const loading = blogStore.loading;
  const isEditMode = computed(() => !!blogId.value);
  
  const blogimg = ref('');
  const fileInput = ref(null);
  
  const formData = reactive({
    date: '',
    time: '',
    title: '',
    blog: '',
    image: null
  });
  
  const hasErrors = computed(() => {
    return !formData.date || !formData.time || !formData.title || !formData.blog;
  });
  
  function triggerFileInput() {
    fileInput.value.click();
  }
  
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      formData.image = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        blogimg.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  const submitBlog = async () => {
    if (hasErrors.value) {
      alert('Please fill all fields before submitting.');
      return;
    }
  
    try {
      loading.value = true;
      let response;
      if (isEditMode.value) {
        response = await updateBlogAPI(blogId.value, formData);
      } else {
        response = await createBlog(formData);
      }
      loading.value = false;
  
      if (response.status === 201 || response.status === 200) {
        alert(`Blog ${isEditMode.value ? "updated" : "created"} successfully`);
      }
    } catch (error) {
      loading.value = false;
      console.error('API Error:', error);
    }
  };
  
  onMounted(async () => {
    if (isEditMode.value) {
      const blog = await fetchBlogById(blogId.value);
      if (blog) Object.assign(formData, blog);
    } else {
      fetchBlogs();
    }
  });
  
  function toggleModalAddNewEnquiry() {
    alert("Modal functionality is not implemented yet!");
  }
  </script>
  