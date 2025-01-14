<template>
    <DashboardHeader heading="Leads">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewLead" >Add New Lead</a>
    </DashboardHeader>

    <AddNewLeadPanel v-if="isModelVisibleAddNewLead" @close="toggleModalAddNewLead" />

    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    You don't have any lead at this moment. <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewLead" ><strong>Add New Lead</strong></a>
                </div><!-- dashboard-content-block -->

                <StatisticLeads />
                <CrmToolBar />
                
                <table class="dashboard-table table-lined responsive-table">
                     <thead>
                        <tr>
                            <th><input type="checkbox" name="name"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Type</th>
                            <th>Agent</th>
                            <th>Date Added</th>
                            <th class="action-col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LeadsTableItem />
                    </tbody>
                </table><!-- dashboard-table -->

            </div><!-- dashboard-content-block-wrap -->
        </div><!-- dashboard-content-inner-wrap -->
        <div class="leads-pagination-wrap">
            <div class="leads-pagination-item-count">
                <label>Items per page:</label> 
                <select class="selectpicker form-control bs-select-hidden" title="10" data-live-search="false" data-selected-text-format="count"  data-actions-box="false">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select>
            </div>
            <Pagination />
        </div>
        
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>

import { computed } from 'vue';
import { useModelStore } from '@/stores/Model';

import AddNewLeadPanel from '@/views/inc/dashboard/board/AddNewLeadPanel.vue';
import CrmToolBar from '@/views/inc/dashboard/board/CrmToolBar.vue';
import LeadsTableItem from '@/views/inc/dashboard/board/LeadsTableItem.vue';
import StatisticLeads from '@/views/inc/dashboard/statistics/StatisticLeads.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';



const modalStore = useModelStore(); 
// Compute modal visibility from Vuex store
const isModelVisibleAddNewLead = computed(() => modalStore.isModalVisibleAddNewLead);


// Action to toggle modal visibility
const toggleModalAddNewLead = () => {
    modalStore.toggleModalAddNewLead();
};
</script>