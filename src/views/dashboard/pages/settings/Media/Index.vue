<template>
      <DashboardHeader heading="Media Settings">
        <a class="btn btn-primary" href="#">View Public Profile</a>
    </DashboardHeader>
  
    <div class="container p-4">
      <h5 class="text-xl font-bold mb-4">Image Sizes</h5>
      <p class="mb-2">The sizes listed below determine the maximum dimensions in pixels to use when adding an image to the Media Library.</p>
      
      <div class="mb-4">
        <h5 class="font-semibold">Thumbnail size</h5>
        <div class="flex gap-2 mt-2">
          <label>Width <input v-model="thumbnail.width" type="number" class="input" /></label>
          <label style="margin-left: 10%;">Height <input v-model="thumbnail.height" type="number" class="input" /></label>
        </div>
        <label class="flex items-center mt-2">
          <input v-model="thumbnail.crop" type="checkbox" class="mr-2" /> Crop thumbnail to exact dimensions (normally thumbnails are proportional)
        </label>
      </div>
      
      <div class="mb-4">
        <h5 class="font-semibold">Medium size</h5>
        <div class="flex gap-2 mt-2">
          <label>Max Width <input v-model="medium.width" type="number" class="input" /></label>
          <label style="margin-left: 7%;">Max Height <input v-model="medium.height" type="number" class="input" /></label>
        </div>
      </div>
      
      <div class="mb-4">
        <h5 class="font-semibold">Large size</h5>
        <div class="flex gap-2 mt-2">
          <label>Max Width <input v-model="large.width" type="number" class="input" /></label>
          <label style="margin-left: 7%;">Max Height <input v-model="large.height" type="number" class="input" /></label>
        </div>
      </div>
      
      <h5 class="text-xl font-bold mt-6">Uploading Files</h5>
      <label class="flex items-center mt-2">
        <input v-model="uploadSettings.organize" type="checkbox" class="mr-2" /> Organize my uploads into month- and year-based folders
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        thumbnail: { width: 150, height: 150, crop: true },
        medium: { width: 300, height: 300 },
        large: { width: 1024, height: 1024 },
        uploadSettings: { organize: true },
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1013px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    margin-left: 19%;

  }
  .input {
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 4px;
    width: 60px;
    margin-left: 5px;
  }
  </style>
  