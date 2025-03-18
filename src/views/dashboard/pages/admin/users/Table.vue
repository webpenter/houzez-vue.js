<template>
  <table class="dashboard-table dashboard-table-properties table-lined responsive-table">
    <thead>
    <tr>
      <th>{{$t('Profile')}}</th>
      <th>{{$t('Username')}}</th>
      <th>{{$t('Name')}}</th>
      <th>{{$t('Email')}}</th>
      <th>{{$t('Role')}}</th>
      <th>{{$t('Listings')}}</th>
      <th class="action-col">{{$t('Actions')}}</th>
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
      <tr v-for="user in users" :key="user.id">
        <td class="property-table-thumbnail" data-label="Thumbnail">
          <div class="table-property-thumb">
              <div v-if="!user.profile" style="width: 50px;height: 60px;background-color: #F1F3F3"></div>
              <img v-else :src="user.profile" width="50px">
          </div><!-- table-property-thumb -->
        </td>
        <td class="property-table-status">
          {{user.username}}
        </td>
        <td class="property-table-status">
          {{user.username}}
        </td>
        <td class="property-table-status">
          {{user.email}}
        </td>
        <td class="property-table-status">
          <el-select
              v-model="user.role"
              filterable
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose user role"
              style="width: 140px"
              @change="$emit('change-role', user.id, user.role)"
          >
            <el-option
                v-for="role in roles"
                :key="role.id"
                :label="role.name"
                :value="role.name"
            />
          </el-select>
        </td>
        <td class="property-table-status">
          {{user.properties}}
        </td>
        <td class="property-table-actions" data-label="Actions">
          <div class="dropdown property-action-menu">
            <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{$t('Actions')}}
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a @click.prevent="$emit('deleteUser',user.id)" class="dropdown-item" href="#">{{$t('Delete')}}</a>
            </div>
          </div>
        </td>
      </tr>
    </template>
    </tbody>
  </table><!-- dashboard-table -->
</template>

<script setup>
defineProps(["loading", "users",'roles']);
</script>