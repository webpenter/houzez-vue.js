<template>
  <table class="dashboard-table table-lined deals-table responsive-table">
    <thead>
    <tr>
      <th class="table-nowrap">{{$t('Title')}}</th>
      <th class="table-nowrap">{{$t('Contact Name')}}</th>
      <th class="table-nowrap">{{$t('Agent')}}</th>
      <th class="table-nowrap">{{$t('Deal Value')}}</th>
      <th class="table-nowrap">{{$t('Date')}}</th>
      <th class="table-nowrap">{{$t('Actions')}}</th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loading">
      <tr>
        <td colspan="6">
          <el-skeleton :rows="10" animated />
        </td>
      </tr>
    </template>
    <template v-else>
      <tr v-for="deal in deals" :key="deal.id">
        <th class="table-nowrap" data-label="Title">
          <strong>{{ deal.title }}</strong>
        </th>
        <td class="table-nowrap" data-label="Contact Name">
          {{ deal.contact_name }}
        </td>
        <td class="table-nowrap" data-label="Agent"><i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i>
          {{ deal.agent }}
        </td>
        <td class="table-nowrap" data-label="Deal Value">
          {{ $filters.formatPrice(deal.deal_value) }}
        </td>
        <td class="table-nowrap" data-label="Deal Value">
          {{ deal.date }}
        </td>
        <td class="table-nowrap">
          <div class="dropdown property-action-menu">
            <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{$t('Actions')}}
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a @click.prevent="$emit('deleteDeal',deal.id)" class="dropdown-item" href="#">{{$t('Delete')}}</a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps(["loading", "deals"]);
</script>