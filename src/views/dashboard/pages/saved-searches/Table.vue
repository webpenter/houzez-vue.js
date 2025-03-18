<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>{{$t('Search Parameters')}}</th>
      <th class="action-col">{{$t('Actions')}}</th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loading">
      <tr>
        <td colspan="2">
          <el-skeleton :rows="10" animated />
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="search in searches" :key="search.id">
        <td data-label="Search Parameters">
          <template v-for="(value, key) in getParsedSearch(search.parameters)" :key="key">
            <strong>{{ formatKey(key) }}: </strong>
            <template v-if="Array.isArray(value)">
              {{ value.length ? value.join(', ') : 'N/A' }}
            </template>
            <template v-else>
              {{ value || 'N/A' }}
            </template> /
          </template>
        </td>
        <td class="property-table-actions" data-label="Actions">
          <div class="dropdown property-action-menu">
            <button
                class="btn btn-primary-outlined dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
              {{$t('Actions')}}
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <router-link
                  class="dropdown-item"
                  :to="{ path: '/search-results', query: getQueryObject(search.parameters) }"
              >
                {{$t('View')}}
              </router-link>
              <a class="dropdown-item" @click.prevent="$emit('deleteSearch', search.id)" href="#">
                {{$t('Delete')}}
              </a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  searches: Object,
  loading: Boolean,
});

const getParsedSearch = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = {};

  params.forEach((value, key) => {
    result[key] = key === "types" ? value.split(",") : value;
  });

  return result;
};

const formatKey = (key) => {
  return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
};

const getQueryObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const queryObject = {};

  params.forEach((value, key) => {
    queryObject[key] = value;
  });

  return queryObject;
};
</script>
