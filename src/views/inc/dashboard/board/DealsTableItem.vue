<template>
    <tr>
        <th class="table-nowrap" data-label="Title">
            <strong>{{$t('Apartment in Miami')}}</strong>
            <a href="crm-lead-enquiries.php" class="board-message-icon-wrap ml-2 active" data-toggle="tooltip"
                data-placement="top" title="View conversation">
                <i class="houzez-icon icon-messages-bubble"></i>
            </a>
        </th>
        <td class="table-nowrap" data-label="Contact Name">{{$t('Martin Moore<')}}</td>
        <td class="table-nowrap" data-label="Agent">
            <i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i> {{$t('John Doe')}}
        </td>
        <td class="table-nowrap" data-label="Status">
            <select v-model="status" class="selectpicker form-control deals-status" title="select">
                <option value="new-lead" class="new-lead-color">{{$t('New Lead')}}</option>
                <option value="meeting-scheduled" class="meeting-scheduled-color">{{$t('Meeting Scheduled')}}</option>
                <option value="qualified" class="qualified-color">{{$t('Qualified')}}</option>
                <option value="proposal-sent" class="proposal-sent-color">{{$t('Proposal Sent')}}</option>
                <option value="called" class="called-color">{{$t('Called')}}</option>
                <option value="negotiation" class="negotiation-color">{{$t('Negotiation')}}</option>
                <option value="email-sent" class="email-sent-color">{{$t('Email Sent')}}</option>
            </select>
        </td>
        <td class="table-nowrap" data-label="Next Action">
            <select v-model="nextAction" class="selectpicker form-control bs-select-hidden" title="Select">
                <option value="qualification" class="qualified-color">{{$t("Qualification")}}</option>
                <option value="demo" class="demo-color">{{$t('Demo')}}</option>
                <option value="call" class="called-color">{{$t("Call")}}</option>
                <option value="proposal" class="proposal-sent-color">{{$t("Send a Proposal")}}</option>
                <option value="email" class="email-sent-color">{{$t('Send an Email')}}</option>
                <option value="follow-up" class="follow-up-color">{{$t('Follow Up')}}</option>
                <option value="meeting" class="meeting-scheduled-color">{{$t('Meeting')}}</option>
            </select>
        </td>
        <td class="table-nowrap" data-label="Action Due Date">
            <input type="text" class="form-control datepicker" :placeholder="$t('Select a Date')" readonly>
        </td>
        <td class="table-nowrap" data-label="Deal Value">
            $354,000
        </td>
        <td class="table-nowrap" data-label="Last Contact Date">
            <input type="text" class="form-control datepicker" :placeholder="$t('Select a Date')" readonly>
        </td>
        <td class="table-nowrap" data-label="Phone">
            <strong>{{$t('786-234-1928')}}</strong>
        </td>
        <td class="table-nowrap" data-label="Email">
            <a href="mailto:martin.moore@houzez.co"><strong>{{$t('martin.moore@houzez.co')}}</strong></a>
        </td>
        <td class="table-nowrap">
            <div class="dropdown property-action-menu">
                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{$t('Actions')}}
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item open-close-slide-panel" href="#"
                    @click.prevent="toggleModalAddNewDeal">{{$t('Edit')}}</a>

                    <!-- Modal -->
                    <AddNewDealPanel v-if="isModelVisibleAddNewDeal" @close="toggleModalAddNewDeal" />

                    <a class="dropdown-item" href="#modal-delete" data-toggle="modal">{{$t('Delete')}}</a>
                </div>
            </div>
        </td>
    </tr>

    <tr>
        <th class="table-nowrap" data-label="Title">
            <strong>{{$t('Mr. Moore Property')}}</strong>
            <span class="board-message-icon-wrap ml-2"><i class="houzez-icon icon-messages-bubble"></i></span>
        </th>
        <td class="table-nowrap" data-label="Contact Name">{{$t('Martin Moore')}}</td>
        <td class="table-nowrap" data-label="Agent"><i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i>
            {{$t('John Doe')}}</td>
        <td class="table-nowrap" data-label="Status">
            <select v-model="status" class="selectpicker form-control deals-status" title="select">
                <option value="new-lead" class="new-lead-color">{{$t('New Lead')}}</option>
                <option value="meeting-scheduled" class="meeting-scheduled-color">{{$t('Meeting Scheduled')}}</option>
                <option value="qualified" class="qualified-color">{{$t('Qualified')}}</option>
                <option value="proposal-sent" class="proposal-sent-color">{{$t('Proposal Sent')}}</option>
                <option value="called" class="called-color">{{$t('Called')}}</option>
                <option value="negotiation" class="negotiation-color">{{$t('Negotiation')}}</option>
                <option value="email-sent" class="email-sent-color">{{$t('Email Sent')}}</option>
            </select>
        </td>
        <td class="table-nowrap" data-label="Next Action">
            <select v-model="nextAction" class="selectpicker form-control bs-select-hidden" title="Select">
                <option value="qualification" class="qualified-color">{{$t('Qualification')}}</option>
                <option value="demo" class="demo-color">{{$t('Demo')}}</option>
                <option value="call" class="called-color">{{$t('Call')}}</option>
                <option value="proposal" class="proposal-sent-color">{{$t('Send a Proposal')}}</option>
                <option value="email" class="email-sent-color">{{$t('Send an Email')}}</option>
                <option value="follow-up" class="follow-up-color">{{$t('Follow Up')}}</option>
                <option value="meeting" class="meeting-scheduled-color">{{$t('Meeting')}}</option>
            </select>
        </td>

        <td class="table-nowrap" data-label="Action Due Date">
            <input type="text" class="form-control datepicker" :placeholder="$t('Select a Date')" readonly>
        </td>
        <td class="table-nowrap" data-label="Deal Value">
            $256,000
        </td>
        <td class="table-nowrap" data-label="Last Contact Date">
            <input type="text" class="form-control datepicker" :placeholder="$t('Select a Date')" readonly>
        </td>
        <td class="table-nowrap" data-label="Phone">
            <strong>{{$t('786-234-1928')}}</strong>
        </td>
        <td class="table-nowrap" data-label="Email">
            <a href="mailto:martin.moore@houzez.co"><strong>{{$t('John.doe@houzez.co')}}</strong></a>
        </td>
        <td class="table-nowrap">
            <div class="dropdown property-action-menu">
                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{$t('Actions')}}
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item open-close-slide-panel" href="#"
                        @click.prevent="toggleModalAddNewDeal">{{$t('Edit')}}</a>

                    <!-- Modal -->
                    <AddNewDealPanel v-if="isModalVisibleAddNewDeal" @close="toggleModalAddNewDeal" />


                    <a class="dropdown-item" href="#modal-delete" data-toggle="modal">{{$t('Delete')}}</a>
                </div>
            </div>
        </td>
    </tr>

</template>

<script>
// import { computed } from 'vue';
import { useModelStore } from '@/stores';
import AddNewDealPanel from './AddNewDealPanel.vue';
export default {
    mounted() {
        $('.selectpicker').selectpicker();
    },
    setup() {
        const modalStore = useModelStore();

        return {
            isModelVisibleAddNewDeal: modalStore.isModelVisibleAddNewDeal,
            toggleModalAddNewDeal: modalStore.toggleModalAddNewDeal,
        };
    },
    data() {
        return {
            status: '',
            nextAction: '',
        };
    },
};

</script>