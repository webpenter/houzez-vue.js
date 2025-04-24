<template>
  <form @submit.prevent="">
    <div class="row">
      <div class="form-group">
        <label>Group</label>
        <select class="form-control">
          <option value="active">Active Deals</option>
          <option value="won">Won Deals</option>
          <option value="lost">Lost Deals</option>
        </select>
      </div><!-- form-group -->
      <div class="form-group">
        <label>Title</label>
        <input class="form-control is-valid" name="name" placeholder="Enter the deal title" type="text">
      </div>
      <div class="form-group">
        <label>Contact Name</label>
        <input class="form-control is-valid" name="name" placeholder="Enter the deal title" type="text">
      </div>
      <div class="form-group">
        <label>Agent Name</label>
        <input class="form-control is-valid" name="name" placeholder="Enter the deal title" type="text">
      </div>
      <div class="form-group">
        <label>Deal Value</label>
        <input class="form-control is-valid" name="name" placeholder="Enter the deal title" type="text">
      </div>

      <!-- Submit -->
      <div class="col-sm-12 col-12 mt-3">
        <button class="btn btn-success w-100" :disabled="btnLoading">
          <span v-if="btnLoading" class="spinner-border spinner-border-sm me-1"></span>
          {{ $t('Submit') }}
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import {ref} from "vue";

defineProps(['showModal'])

const btnLoading = ref(false);
</script>