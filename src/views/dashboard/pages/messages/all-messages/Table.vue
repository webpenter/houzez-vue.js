<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>From</th>
      <th>Property</th>
      <th>Last Message</th>
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
      <tr v-for="msg in messages">
        <td data-label="From" class="table-nowrap">
          <div class="d-flex align-items-center">
            <div v-if="!msg.from.image" style="width: 40px;height: 40px;background-color: #F1F3F3" class="rounded-circle"></div>
            <img v-else class="rounded-circle" :src="msg.from.image" width="40" height="40" alt="agent">
            <span class="ml-2">{{ msg.from.name }}</span>
          </div>
        </td>
        <td data-label="Property" class="table-nowrap">
          <RouterLink :to="{name:'app.property-details',params:{propertySlug:msg.property.slug}}">
            <strong>{{ $filters.subStr(msg.property.title,0,20) }}</strong>
          </RouterLink>
        </td>
        <td data-label="Last Message">
          {{ $filters.subStr(msg.message,0,60) }}
        </td>
        <td data-label="Date" class="table-nowrap">
          {{ msg.date }}<br>
          {{ msg.time }}
        </td>
        <td data-label="Actions">
          <div class="dropdown property-action-menu">
            <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Actions
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <RouterLink :to="{name:'dashboard.messages.details',params:{messageId:msg.id}}" class="dropdown-item" >Reply</RouterLink>
              <a @click.prevent="$emit('deleteMessage',msg.id)" class="dropdown-item" href="javascript:void(0)">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
import {RouterLink} from "vue-router";

defineProps(["loading", "messages"]);
</script>