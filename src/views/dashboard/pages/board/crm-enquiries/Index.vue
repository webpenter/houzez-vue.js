<template>
    <DashboardHeader heading="Enquiries">
        <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewEnquiry">Add New Enquiry</a>
    </DashboardHeader>

    <AddNewEnquiryPanel v-if="isModelVisibleAddNewEnquiry" @close="toggleModalAddNewEnquiry"/>

    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    You don't have any enquiry at this moment. <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewEnquiry"><strong>Add New Enquiry</strong></a>
                </div><!-- dashboard-content-block -->
                <CrmToolBar />                
                <table class="dashboard-table table-lined responsive-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Type</th>
                            <th>Source</th>
                            <th class="action-col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="ID">
                                01
                            </td>
                            <td data-label="Date">
                                March 9, 2019
                            </td>
                            <td data-label="name">
                                Martin Moore <a href="#"><i class="houzez-icon icon-messages-bubble ml-2 "></i></a>
                            </td>
                            <td data-label="Email">
                                <a href="#">martin.moore@houzez.co</a>
                            </td>
                            <td data-label="Phone">
                                879-345-1233
                            </td>
                            <td data-label="Type">
                                Buyer
                            </td>
                            <td class="table-nowrap" data-label="Source">
                                <a href="#">Property Title</a>
                            </td>
                            <td class="text-right">
                                <router-link 
                                    :to="{ 
                                        name: 'dashboard.crm-lead-enquiry-from-property-detail-page' 
                                    }">
                                    View
                                </router-link>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="ID">
                                02
                            </td>
                            <td data-label="Date">
                                March 9, 2019
                            </td>
                            <td data-label="name">
                                Isabel Wynwood
                            </td>
                            <td data-label="Email">
                                <a href="#">isa.wyn@houzez.co</a>
                            </td>
                            <td data-label="Phone">
                                -
                            </td>
                            <td data-label="Type">
                                -
                            </td>
                            <td class="table-nowrap" data-label="Source">
                                <a href="#">Agent Page</a>
                            </td>
                            <td class="text-right">
                                <router-link 
                                    :to="{ 
                                        name: 'dashboard.crm-lead-enquiry-from-property-detail-page' 
                                    }">
                                    View
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table><!-- dashboard-table -->

            </div><!-- dashboard-content-block-wrap -->
        </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import { computed } from 'vue';
import { useModelStore } from '@/stores/model/model.js';

import AddNewEnquiryPanel from '@/views/inc/dashboard/board/AddNewEnquiryPanel.vue';
import CrmToolBar from '@/views/inc/dashboard/board/CrmToolBar.vue';


// const store = useStore();
const modalStore = useModelStore(); 
// Compute modal visibility from Vuex store
const isModelVisibleAddNewEnquiry = computed(() => modalStore.isModalVisibleAddNewEnquiry);


// Action to toggle modal visibility
const toggleModalAddNewEnquiry = () => {
    modalStore.toggleModalAddNewEnquiry();
};
</script>