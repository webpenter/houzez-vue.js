<template>
<div class="dashboard-content-block-wrap">
    <h2>Add a Floor Plan</h2>

    <!-- Render each form in a new dashboard-content-block -->
    <div v-for="(plan, index) in floorPlans" :key="plan.id" class="dashboard-content-block mb-4">
        <h3>Floor Plan {{ index + 1 }}</h3>
        <FormFloorPlan />
        <button 
            class="btn btn-primary-outlined btn-left-icon mt-3"
            @click="deleteFloorPlan(plan.id)"
        >
            <i class="houzez-icon icon-remove-circle mr-2"></i> Delete
        </button>
    </div>

    <!-- Add New Button -->
    <div class="dashboard-content-block mt-4">
        <button class="btn btn-primary btn-left-icon" @click="addNewFloorPlan">
            <i class="houzez-icon icon-add-circle mr-2"></i> Add New
        </button>
    </div>
</div>
</template>

<script setup>
import { reactive } from 'vue';
import FormFloorPlan from './FormFloorPlan.vue';

// Create a reactive array to hold multiple forms
const floorPlans = reactive([{ id: Date.now() }]);

// Function to add a new blank form
const addNewFloorPlan = () => {
    floorPlans.push({ id: Date.now() }); // Add a new object with a unique id
};

// Function to delete a specific form
const deleteFloorPlan = (id) => {
    const index = floorPlans.findIndex((plan) => plan.id === id);
    if (index > -1) {
        floorPlans.splice(index, 1); // Remove the form by id
    }
};
</script>