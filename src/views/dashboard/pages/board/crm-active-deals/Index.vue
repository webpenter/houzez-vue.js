<template>
    <DashboardHeader heading="Deals">
        <a class="btn btn-primary" href="#">Add New Deal</a>
    </DashboardHeader>

    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    You don't have any deals at this moment. <a class="open-close-slide-panel" href="#"><strong>Add New Deal</strong></a>
                </div>
            </div>
            <CrmToolBar />
        </div>

        <div class="deals-table-wrap">

            <ul class="nav nav-pills deals-nav-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active-deals active" href="crm-active-deals.php">Active Deals (6)</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link won-deals" href="crm-won-deals.php">Won Deals (2)</a>
                </li>
                <li class="nav-item lost-deals">
                    <a class="nav-link" href="crm-lost-deals.php">Lost Deals (2)</a>
                </li>
            </ul>
            <div class="deal-content-wrap p-0">
                <table class="dashboard-table table-lined deals-table responsive-table">
                    <thead>
                        <tr>
                            <th class="table-nowrap">Title</th>
                            <th class="table-nowrap">Contact Name</th>
                            <th class="table-nowrap">Agent</th>
                            <th class="table-nowrap">Status</th>
                            <th class="table-nowrap">Next Action</th>
                            <th class="table-nowrap">Action Due Date</th>
                            <th class="table-nowrap">Deal Value</th>
                            <th class="table-nowrap">Last Contact Date</th>
                            <th class="table-nowrap">Phone</th>
                            <th class="table-nowrap">Email</th>
                            <th class="table-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DealsTableItem />
                        <DealsTableItem />
                        <DealsTableItem />
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6">
                                <label class="mr-2">Items per page</label>
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
                                <a href="#">Prev</a> <span class="mr-1 ml-1">-</span> <a href="#">Next</a>
                            </td>
                        </tr>
                    </tfoot>
                </table><!-- dashboard-table -->
            </div><!-- dashboard-content-block -->

        </div><!-- deals-table-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import CrmToolBar from '@/views/inc/dashboard/board/CrmToolBar.vue';
import DealsTableItem from '@/views/inc/dashboard/board/DealsTableItem.vue';

</script>