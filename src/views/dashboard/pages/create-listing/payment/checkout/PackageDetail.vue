<template>
  <div class="membership-package-order-detail-wrap">
    <div class="dashboard-content-block">
      <h3>{{$t('Membership Package')}}</h3>
      <div class="membership-package-order-detail">
        <template v-if="loading">
          <el-skeleton :rows="6" animated />
        </template>
        <template v-else>
          <template v-if="isEmpty">
            <div style="text-align: center;margin-block: 100px;color: red">{{$t('Something went wrong')}}</div>
          </template>
          <template v-else>
            <ul class="list-unstyled mebership-list-info">
              <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> {{$t('Package')}} <strong>{{ plan.name }}</strong></li>
              <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> {{$t('Price')}} <strong>{{ plan.currency_symbol + plan.price }}</strong></li>
              <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> {{$t('Time Period')}} <strong>{{ plan.time_period }}</strong></li>
              <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> {{$t('Number of Listings')}} <strong>{{ plan.properties }}</strong></li>
              <li><i class="houzez-icon icon-check-circle-1 mr-2 primary-text"></i> {{$t('Number of Images')}} <strong>{{ plan.images }}</strong></li>
              <li class="total-price">{{$t('Total Price')}} <strong>{{ plan.currency_symbol + plan.price }}</strong></li>
            </ul>
          </template>
        </template>
      </div><!-- membership-package-order-detail -->
    </div>
    <div class="text-center">
      <RouterLink :to="{name:'dashboard.create-listing.select-package'}">
        {{$t('Change Package')}}
      </RouterLink>
    </div>
  </div><!-- membership-package-order-detail-wrap -->
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {computed} from "vue";

const props = defineProps(['plan','loading']);

const isEmpty = computed(() => Object.keys(props.plan).length === 0);
</script>
