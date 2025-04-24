<template>
    <DashboardHeader :heading="$t('Won Deals')">
        <a class="btn btn-primary" href="#">{{$t('Add New Deal')}}</a>
    </DashboardHeader>

    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        {{$t("You don't have any deals at this moment.")}} <a class="open-close-slide-panel" href="#"><strong>{{$t('Add New Deal')}}</strong></a>
                    </div>
                </div>
            </div>
            <div class="deals-table-wrap">
              <NavPills tab="won"/>
                <div class="deal-content-wrap p-0">
                    <table class="dashboard-table table-lined deals-table responsive-table">
                        <thead>
                            <tr>
                                <th class="table-nowrap">{{$t('Title')}}</th>
                                <th class="table-nowrap">{{$t('Contact Name')}}</th>
                                <th class="table-nowrap">{{$t('Agent')}}</th>
                                <th class="table-nowrap">{{$t('Status')}}</th>
                                <th class="table-nowrap">{{$t('Next Action')}}</th>
                                <th class="table-nowrap">{{$t('Action Due Date')}}</th>
                                <th class="table-nowrap">{{$t('Deal Value')}}</th>
                                <th class="table-nowrap">{{$t('Last Contact Date')}}</th>
                                <th class="table-nowrap">{{$t('Phone')}}</th>
                                <th class="table-nowrap">{{$t('Email')}}</th>
                                <th class="table-nowrap">{{$t('Actions')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DealsTableItem />
                            <!-- <?php include 'inc/dashboard/board/deals-table-item.php';?> -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6">
                                    <label class="mr-2">{{$t('Items per page')}}</label>
                                    <select class="selectpicker form-control bs-select-hidden table-select-auto" title="10" data-live-search="false" data-dropdown-align-right="auto">
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select><!-- selectpicker -->
                                </td>
                                <td class="total-deals">
                                    <strong>$354,000</strong>
                                </td>
                                <td colspan="4" class="text-right no-wrap">
                                    <a href="#">{{$t('Prev')}}</a> <span class="mr-1 ml-1">-</span> <a href="#">{{$t('Next')}}</a>
                                </td>
                            </tr>
                        </tfoot>
                    </table><!-- dashboard-table -->
                </div><!-- dashboard-content-block -->

            </div><!-- deals-table-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup lang="ts">
import DealsTableItem from '@/views/inc/dashboard/board/DealsTableItem.vue';
import NavPills from "@/views/dashboard/pages/board/deals/components/NavPills.vue";

</script>