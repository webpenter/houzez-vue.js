<template>
  
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
        <div class="col-md-12 col-sm-12">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Name</label>
                  <input v-model="form.name" class="form-control" placeholder="Enter your username" type="text">
                  <span v-if="errors.name" class="text-danger mt-1 d-block">{{ errors.name[0] }}</span>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Designation</label>
                  <input v-model="form.designation" class="form-control" placeholder="Enter your designation" type="text">
                  <span v-if="errors.designation" class="text-danger mt-1 d-block">{{ errors.designation[0] }}</span>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Image</label>
                  <input type="file" @change="handleImage" class="w-full px-3 py-2 border rounded-lg">
                  <span v-if="errors.image" class="text-danger mt-1 d-block">{{ errors.image[0] }}</span>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-group">
                  <label>Contact No</label>
                  <input v-model="form.contact_no" class="form-control" placeholder="Enter your contact number" type="text">
                  <span v-if="errors.contact_no" class="text-danger mt-1 d-block">{{ errors.contact_no[0] }}</span>
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="form-group">
                  <label>Description</label>
                  <textarea v-model="form.description" class="form-control" rows="6" placeholder="Enter a description about you"></textarea>
                  <span v-if="errors.description" class="text-danger mt-1 d-block">{{ errors.description[0] }}</span>
                </div>
              </div>
            </div>
            <button class="btn btn-success" :disabled="loading" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useTeamStore } from "@/stores/teaminformation.js";

const teamStore = useTeamStore();
const loading = ref(false);
const errors = reactive({});
const form = reactive({
  name: "",
  designation: "",
  image: null,
  contact_no: "",
  description: ""
});

// Handle Image Upload
const handleImage = (event) => {
  form.image = event.target.files[0];
};

// Submit Form
const submitForm = async () => {
  loading.value = true;
  errors.value = {}; // Clear previous errors

  const response = await teamStore.addTeamMember(form);

  if (response.success) {
    alert(response.message);
    Object.assign(form, { name: "", designation: "", image: null, contact_no: "", description: "" });
  } else {
    errors.value = response.errors; // Store validation errors
    alert(response.message);
  }
  loading.value = false;
};
</script>
