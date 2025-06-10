<template>
  <template v-if="reviewLoading">
    <el-skeleton :rows="4" animated />
    <hr class="my-4" />
    <el-skeleton :rows="4" animated />
    <hr class="my-4" />
    <el-skeleton :rows="4" animated />
  </template>
  <template v-else>
    <ul class="list-unstyled activities-list">
      <template v-for="review in reviews" :key="review.id">
        <li class="activitiy-item d-flex">
          <div class="activitiy-item-left">
            <img class="rounded-circle activities-avatar" src="@/assets/img/lead-avatar.png" width="40" height="40" alt="profile image">
          </div>
          <div class="activitiy-item-body">
            <div class="activity-time">{{ review.date }}</div>
            <p>
              <strong>{{$t('You received a new rating')}}</strong>
              {{$t('from')}}
              <router-link :to="{name:'app.property-details',params:{propertySlug:review.property_slug}}">
                <strong>{{ review.property_title }}</strong>
              </router-link>
            </p>
            <ul class="list-unstyled mb-2">
              <li><strong>{{$t('Email:')}}</strong> {{ review.email }}</li>
              <li><strong>{{$t('Rating:')}}</strong> {{ review.rating }}</li>
              <li><strong>{{$t('Title:')}}</strong> {{ review.title }}</li>
            </ul>
            <p>{{ review.comment }}</p>
            <router-link :to="{name:'app.property-details',params:{propertySlug:review.property_slug}}">
              <i class="houzez-icon icon-arrow-button-circle-right mr-2"></i>
              <strong>{{$t('View')}}</strong>
            </router-link>
          </div>
        </li><!-- activitiy-item -->
      </template>
    </ul><!-- activities-list -->
  </template>
</template>

<script setup>
defineProps(["reviews","reviewLoading"]);
</script>