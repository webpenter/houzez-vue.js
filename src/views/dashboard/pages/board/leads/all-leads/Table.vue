<template>
  <table class="dashboard-table table-lined deals-table responsive-table">
    <thead>
    <tr>
      <th class="table-nowrap">{{$t('Name')}}</th>
      <th class="table-nowrap">{{$t('Email')}}</th>
      <th class="table-nowrap">{{$t('Phone')}}</th>
      <th class="table-nowrap">{{$t('Type')}}</th>
      <th class="table-nowrap">{{$t('Agent')}}</th>
      <th class="table-nowrap">{{$t('Date')}}</th>
      <th class="table-nowrap">{{$t('Actions')}}</th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loading">
      <tr>
        <td colspan="7">
          <el-skeleton :rows="10" animated />
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="lead in leads" :key="lead.id">
        <th class="table-nowrap" data-label="Title">
          <strong>{{ lead.name }}</strong>
        </th>
        <td class="table-nowrap" data-label="Contact Name">
          {{ lead.email }}
        </td>
        <td class="table-nowrap" data-label="Contact Name">
          {{ lead.phone }}
        </td>
        <td class="table-nowrap" data-label="Contact Name">
          {{ lead.type }}
        </td>
        <td class="table-nowrap" data-label="Contact Name">
          {{ lead.agent }}
        </td>
        <td class="table-nowrap" data-label="Deal Value">
          {{ lead.date }}
        </td>
        <td class="table-nowrap">
          <div class="dropdown property-action-menu">
            <button
id="dropdownMenuButton" class="btn btn-primary-outlined dropdown-toggle" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{$t('Actions')}}
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" @click.prevent="$emit('deleteLead',lead.id)">{{$t('Delete')}}</a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps(["loading", "leads"]);
</script>