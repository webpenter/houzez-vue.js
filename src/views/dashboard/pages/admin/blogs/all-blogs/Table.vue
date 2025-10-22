<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Description</th>
      <th>Date</th>
      <th class="action-col">Actions</th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loading">
      <tr>
        <td colspan="5">
          <el-skeleton :rows="10" animated />
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="blog in allBlogs" :key="blog.id">
        <td data-label="From" class="table-nowrap">
          <div class="d-flex align-items-center">
            <div v-if="!blog.image" style="width: 40px;height: 40px;background-color: #F1F3F3" class="rounded-circle"></div>
            <img v-else class="rounded-circle" :src="blog.image" width="40" height="40" alt="agent">
          </div>
        </td>
        <td class="property-table-status">
          {{$filters.subStr($filters.capitalize(blog.title),0,20)}}
        </td>
        <td class="property-table-status">
          {{$filters.subStr(blog.description,0,80)}}
        </td>
        <td class="property-table-status">
          {{blog.date}}
        </td>
        <td class="property-table-actions" data-label="Actions">
          <div class="dropdown property-action-menu">
            <button id="dropdownMenuButton" class="btn btn-primary-outlined dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" @click.prevent="$emit('deleteBlog',blog.id)">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
defineProps(["loading", "allBlogs"]);
</script>