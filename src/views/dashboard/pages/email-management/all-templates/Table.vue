<template>
  <table class="dashboard-table table-lined responsive-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Slug</th>
        <th>Subject</th>
        <th>Active</th>
        <th>Created By</th>
        <th class="action-col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="template in templates" :key="template.id">
        <td>{{ template.name }}</td>
        <td>{{ template.slug }}</td>
        <td>{{ template.subject }}</td>

        <td>
          <el-switch
            v-model="template.is_active"
            active-text="Yes"
            inactive-text="No"
            @change="$emit('toggle-status', template.id, template.is_active)"
          />
        </td>
        <td>{{ template.created_by?.name || '—' }}</td>
        <td>
          <div class="dropdown property-action-menu">
            <button
              class="btn btn-primary-outlined dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Actions
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a
                href="#"
                class="dropdown-item"
                @click.prevent="$emit('delete-template', template.id)"
              >
                Delete
              </a>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  templates: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
