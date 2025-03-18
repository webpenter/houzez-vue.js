<template>
    <DashboardHeader :heading="$t('Deals')">
      <a class="btn btn-primary" href="#" @click.prevent="toggleModalAddNewDeal">{{$t('Add New Deal')}}</a>
    </DashboardHeader>
  
    <!-- Modal -->
    <AddNewDealPanel v-if="isModelVisibleAddNewDeal" @close="toggleModalAddNewDeal" />
  
    <section class="dashboard-content-wrap">
      <div class="dashboard-content-inner-wrap">
        <div class="dashboard-content-block-wrap">
          <div class="dashboard-content-block">
            {{$t("You don't have any deals at this moment.")}}
            <a class="open-close-slide-panel" href="#" @click.prevent="toggleModalAddNewDeal">
              <strong>{{$t('Add New Deal')}}</strong>
            </a>
          </div>
        </div>
        <CrmToolBar />
      </div>

        <div class="deals-table-wrap">
            <ul class="nav nav-pills deals-nav-tab" role="tablist">
                <li class="nav-item">
                    <router-link 
                        class="nav-link active-deals active" 
                        to="/dashboard/crm-deals">
                        {{$t('Active Deals (6)')}}
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link 
                        class="nav-link won-deals" 
                        to="/dashboard/crm-won-deals">
                        {{$t('Won Deals (2)')}}
                    </router-link>
                </li>
                <li class="nav-item lost-deals">
                    <router-link 
                        class="nav-link" 
                        to="/dashboard/crm-lost-deals">
                        {{$t('Lost Deals (2)')}}
                    </router-link>
                </li>
            </ul>
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
                        <DealsTableItem />
                        <DealsTableItem />
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6">
                                <label class="mr-2">{{$t('Items per page')}}</label>
                                <select class="selectpicker form-control bs-select-hidden table-select-auto" title="10">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                                </select>
                            </td>
                            <td class="total-deals">
                                <strong>$354,000</strong>
                            </td>
                            <td colspan="4" class="text-right no-wrap">
                                <a href="#">{{$t('Prev')}}</a> <span class="mr-1 ml-1">-</span> <a href="#">{{$t('Next')}}</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </section>

    
</template>
<script setup>
import { computed } from 'vue';
import { useModelStore } from '@/stores';
import CrmToolBar from '@/views/inc/dashboard/board/CrmToolBar.vue';
import DealsTableItem from '@/views/inc/dashboard/board/DealsTableItem.vue';
import AddNewDealPanel from '@/views/inc/dashboard/board/AddNewDealPanel.vue';

const modalStore = useModelStore(); 
// Compute modal visibility from Vuex store
const isModelVisibleAddNewDeal = computed(() => modalStore.isModalVisibleAddNewDeal);


// Action to toggle modal visibility
const toggleModalAddNewDeal = () => {
    modalStore.toggleModalAddNewDeal();
};
</script>


