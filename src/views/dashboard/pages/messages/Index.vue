<template>
    <DashboardHeader :heading="$t('Messages')">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        You don't have any message.
                    </div><!-- dashboard-content-block -->

                    <table class="dashboard-table table-lined responsive-table">
                        <thead>
                            <tr>
                                <th>{{$t('From')}}</th>
                                <th>{{$t('Property')}}</th>
                                <th>{{$t('Last Message')}}</th>
                                <th>{{$t('Date')}}</th>
                                <th class="action-col">{{$t('Actions')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MessageTableItem />
                            <MessageTableItem />
                            <MessageTableItem />
                            <MessageTableItem />
                            <MessageTableItem />
                        </tbody>
                    </table><!-- dashboard-table -->
                    <Pagination />
                    
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import MessageTableItem from '@/views/inc/dashboard/MessageTableItem.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';

</script>