<template>
  <table class="dashboard-table table-lined deals-table responsive-table">
    <thead>
    <tr>
      <th class="table-nowrap">{{$t('Name')}}</th>
      <th class="table-nowrap">{{$t('Email')}}</th>
      <th class="table-nowrap">{{$t('Phone')}}</th>
      <th class="table-nowrap">{{$t('Type')}}</th>
      <th class="table-nowrap">{{$t('Source')}}</th>
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
      <tr v-for="enquiry in enquires" :key="enquiry.id">
        <th class="table-nowrap" data-label="Title">
          <strong>{{ enquiry.name }}</strong>
        </th>
        <td class="table-nowrap" data-label="Contact Name">
          {{ enquiry.email }}
        </td>
        <td class="table-nowrap" data-label="Contact Name">
          {{ enquiry.phone }}
        </td>
        <td class="table-nowrap" data-label="Contact Name">
          {{ enquiry.type }}
        </td>
        <td class="table-nowrap" data-label="Contact Name">
          {{ enquiry.source }}
        </td>
        <td class="table-nowrap" data-label="Deal Value">
          {{ enquiry.date }}
        </td>
        <td class="table-nowrap">
          <div class="dropdown property-action-menu">
            <button 
            id="dropdownMenuButton"
            class="btn btn-primary-outlined dropdown-toggle" type="button" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{$t('Actions')}}
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a
              href="#"
              class="dropdown-item"
              @click.prevent="$emit('deleteEnquiry',enquiry.id)" >
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
defineProps(["loading", "enquires"]);
</script>