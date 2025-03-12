<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
      <tr>
        <th>Email</th>
        <th>Subscription Time</th>
        <th class="action-col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="loading">
        <tr>
          <td colspan="3">
            <el-skeleton :rows="10" animated />
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="newsletter in newsLetters" :key="newsletter.id">
          <td class="newsletter-email" data-label="Email">
            <strong>{{ newsletter.email }}</strong>
          </td>
          <td class="newsletter-time" data-label="Subscription Time">
            {{ new Date(newsletter.created_at).toLocaleDateString() }}
          </td>
          <td class="Newsletter-actions" data-label="Actions">
            <div class="dropdown property-action-menu">
              <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Actions
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click.prevent="$emit('delete-newsletter', newsletter.id)" href="#">Delete</a>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
const props = defineProps({
  newsLetters: Array,
  loading: Boolean,
});
</script>
