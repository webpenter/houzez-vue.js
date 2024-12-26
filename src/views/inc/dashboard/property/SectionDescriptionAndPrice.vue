<template>
    <section class="dashboard-content-block-wrap">
      <h2>Description</h2>
      <div class="dashboard-content-block">
        <div class="form-group">
          <label>Title</label>
          <input
            v-model="property.title"
            class="form-control"
            name="name"
            placeholder="Enter the property title"
            type="text"
          />
        </div>
  
        <div class="form-group">
          <label>Description</label>
          <textarea
            v-model="property.description"
            class="form-control"
            name="message"
            rows="10"
            placeholder="Enter the property description"
          ></textarea>
        </div>
  
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="form-group">
              <label>Type</label>
              <select v-model="property.type" class="selectpicker form-control">
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="form-group">
              <label>Status</label>
              <select v-model="property.status" class="selectpicker form-control">
                <option value="">Select</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="form-group">
              <label>Labels</label>
              <select
                v-model="property.labels"
                class="selectpicker form-control"
                multiple
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="dashboard-content-block-wrap">
      <h2>Price</h2>
      <div class="dashboard-content-block">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>Sale or Rent Price</label>
              <input
                v-model="property.price"
                class="form-control"
                placeholder="Enter the price"
                type="text"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>Second Price (Optional)</label>
              <input
                v-model="property.secondPrice"
                class="form-control"
                placeholder="Enter the second price"
                type="text"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>After The Price Label</label>
              <input
                v-model="property.priceLabel"
                class="form-control"
                placeholder="Enter the label after price"
                type="text"
              />
              <small class="form-text text-muted">For example: Monthly</small>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <label>Price Prefix</label>
              <input
                v-model="property.pricePrefix"
                class="form-control"
                placeholder="Enter the price prefix"
                type="text"
              />
              <small class="form-text text-muted">For example: Start from</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section class="dashboard-content-block-wrap">
      <h2>Custom Fields</h2>
      <div class="dashboard-content-block">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="form-group">
              <label>Custom Text</label>
              <div class="features-list">
                <label class="control control--checkbox">
                  <input
                    type="checkbox"
                    v-model="property.customTextOptions.airConditioning"
                  />
                  Air Conditioning
                  <span class="control__indicator"></span>
                </label>
                <label class="control control--checkbox">
                  <input
                    type="checkbox"
                    v-model="property.customTextOptions.pool"
                  />
                  Pool
                  <span class="control__indicator"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
      <button class="btn btn-primary-outlined" @click="resetForm">Cancel</button>
      <button class="btn btn-primary" @click="handleSubmit">Next</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const property = ref({
    title: "",
    description: "",
    type: "",
    status: "",
    labels: [],
    price: "",
    secondPrice: "",
    priceLabel: "",
    pricePrefix: "",
    customTextOptions: {
      airConditioning: false,
      pool: false,
    },
  });
  
  const resetForm = () => {
    property.value = {
      title: "",
      description: "",
      type: "",
      status: "",
      labels: [],
      price: "",
      secondPrice: "",
      priceLabel: "",
      pricePrefix: "",
      customTextOptions: {
        airConditioning: false,
        pool: false,
      },
    };
  };
  
  const handleSubmit = () => {
    // Here you can simulate form submission, for now, log the property object
    console.log("Form Submitted:", property.value);
    alert("Form data has been logged (simulating submit)!");
  };
  </script>
  
  <style scoped>
  /* Add custom styles specific to this section */
  </style>
  