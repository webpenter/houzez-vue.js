<template>
  <ul class="nav nav-pills deals-nav-tab" role="tablist">
    <li class="nav-item">
      <router-link
          class="nav-link active-deals" :class="tab === 'active' ? 'active' : ''"
          :to="{name:'dashboard.active-deals'}">
        {{$t('Active Deals')}}
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
          class="nav-link won-deals" :class="tab === 'won' ? 'active' : ''"
          :to="{name:'dashboard.won-deals'}">
        {{$t('Won Deals')}}
      </router-link>
    </li>
    <li class="nav-item lost-deals">
      <router-link
          class="nav-link" :class="tab === 'lost' ? 'active' : ''"
          :to="{name:'dashboard.lost-deals'}">
        {{$t('Lost Deals')}}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
defineProps(['tab'])
</script>