<template>
    <DashboardHeader :heading="$t('Lost Deals')">
        <a class="btn btn-primary" href="#">{{$t('Add New Deal')}}</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <div class="deals-table-wrap">
          <NavPills tab="lost"/>
            <div class="dashboard-content-block">
                {{$t("You don't have any deals at this moment.")}}  <a class="open-close-slide-panel" href="#"><strong>{{$t('Add New Deal')}}</strong></a>
            </div>
        </div><!-- deals-table-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import NavPills from "@/views/dashboard/pages/board/deals/components/NavPills.vue";
</script>
