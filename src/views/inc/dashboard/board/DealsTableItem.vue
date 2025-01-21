<template>
    <tr>
        <th class="table-nowrap" data-label="Title">
            <strong>Apartment in Miami</strong>
            <a href="crm-lead-enquiries.php" class="board-message-icon-wrap ml-2 active" data-toggle="tooltip"
                data-placement="top" title="View conversation">
                <i class="houzez-icon icon-messages-bubble"></i>
            </a>
        </th>
        <td class="table-nowrap" data-label="Contact Name">Martin Moore</td>
        <td class="table-nowrap" data-label="Agent">
            <i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i> John Doe
        </td>
        <td class="table-nowrap" data-label="Status">
            <select v-model="status" class="selectpicker form-control deals-status" title="select">
                <option value="new-lead" class="new-lead-color">New Lead</option>
                <option value="meeting-scheduled" class="meeting-scheduled-color">Meeting Scheduled</option>
                <option value="qualified" class="qualified-color">Qualified</option>
                <option value="proposal-sent" class="proposal-sent-color">Proposal Sent</option>
                <option value="called" class="called-color">Called</option>
                <option value="negotiation" class="negotiation-color">Negotiation</option>
                <option value="email-sent" class="email-sent-color">Email Sent</option>
            </select>
        </td>
        <td class="table-nowrap" data-label="Next Action">
            <select v-model="nextAction" class="selectpicker form-control bs-select-hidden" title="Select">
                <option value="qualification" class="qualified-color">Qualification</option>
                <option value="demo" class="demo-color">Demo</option>
                <option value="call" class="called-color">Call</option>
                <option value="proposal" class="proposal-sent-color">Send a Proposal</option>
                <option value="email" class="email-sent-color">Send an Email</option>
                <option value="follow-up" class="follow-up-color">Follow Up</option>
                <option value="meeting" class="meeting-scheduled-color">Meeting</option>
            </select>
        </td>
        <td class="table-nowrap" data-label="Action Due Date">
            <input type="text" class="form-control datepicker" placeholder="Select a Date" readonly>
        </td>
        <td class="table-nowrap" data-label="Deal Value">
            $354,000
        </td>
        <td class="table-nowrap" data-label="Last Contact Date">
            <input type="text" class="form-control datepicker" placeholder="Select a Date" readonly>
        </td>
        <td class="table-nowrap" data-label="Phone">
            <strong>786-234-1928</strong>
        </td>
        <td class="table-nowrap" data-label="Email">
            <a href="mailto:martin.moore@houzez.co"><strong>martin.moore@houzez.co</strong></a>
        </td>
        <td class="table-nowrap">
            <div class="dropdown property-action-menu">
                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item open-close-slide-panel" href="#"
                    @click.prevent="toggleModalAddNewDeal" >Edit</a>

                    <!-- Modal -->
                    <AddNewDealPanel v-if="isModelVisibleAddNewDeal" @close="toggleModalAddNewDeal" />

                    <a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
                </div>
            </div>
        </td>
    </tr>

    <tr>
        <th class="table-nowrap" data-label="Title">
            <strong>Mr. Moore Property</strong>
            <span class="board-message-icon-wrap ml-2"><i class="houzez-icon icon-messages-bubble"></i></span>
        </th>
        <td class="table-nowrap" data-label="Contact Name">Martin Moore</td>
        <td class="table-nowrap" data-label="Agent"><i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i>
            John Doe</td>
        <td class="table-nowrap" data-label="Status">
            <select v-model="status" class="selectpicker form-control deals-status" title="select">
                <option value="new-lead" class="new-lead-color">New Lead</option>
                <option value="meeting-scheduled" class="meeting-scheduled-color">Meeting Scheduled</option>
                <option value="qualified" class="qualified-color">Qualified</option>
                <option value="proposal-sent" class="proposal-sent-color">Proposal Sent</option>
                <option value="called" class="called-color">Called</option>
                <option value="negotiation" class="negotiation-color">Negotiation</option>
                <option value="email-sent" class="email-sent-color">Email Sent</option>
            </select>
        </td>
        <td class="table-nowrap" data-label="Next Action">
            <select v-model="nextAction" class="selectpicker form-control bs-select-hidden" title="Select">
                <option value="qualification" class="qualified-color">Qualification</option>
                <option value="demo" class="demo-color">Demo</option>
                <option value="call" class="called-color">Call</option>
                <option value="proposal" class="proposal-sent-color">Send a Proposal</option>
                <option value="email" class="email-sent-color">Send an Email</option>
                <option value="follow-up" class="follow-up-color">Follow Up</option>
                <option value="meeting" class="meeting-scheduled-color">Meeting</option>
            </select>
        </td>

        <td class="table-nowrap" data-label="Action Due Date">
            <input type="text" class="form-control datepicker" placeholder="Select a Date" readonly>
        </td>
        <td class="table-nowrap" data-label="Deal Value">
            $256,000
        </td>
        <td class="table-nowrap" data-label="Last Contact Date">
            <input type="text" class="form-control datepicker" placeholder="Select a Date" readonly>
        </td>
        <td class="table-nowrap" data-label="Phone">
            <strong>786-234-1928</strong>
        </td>
        <td class="table-nowrap" data-label="Email">
            <a href="mailto:martin.moore@houzez.co"><strong>John.doe@houzez.co</strong></a>
        </td>
        <td class="table-nowrap">
            <div class="dropdown property-action-menu">
                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item open-close-slide-panel" href="#"
                        @click.prevent="toggleModalAddNewDeal">Edit</a>

                    <!-- Modal -->
                    <!-- <AddNewDealPanel v-if="isModelVisibleAddNewDeal" @close="toggleModalAddNewDeal" /> -->


                    <a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
                </div>
            </div>
        </td>
    </tr>

</template>

<script>
import { computed } from 'vue';
import { useModelStore } from '@/stores';
import AddNewDealPanel from './AddNewDealPanel.vue';
const modalStore = useModelStore();
// Compute modal visibility from Vuex store
const isModelVisibleAddNewDeal = computed(() => modalStore.isModalVisibleAddNewDeal);


// Action to toggle modal visibility
const toggleModalAddNewDeal = () => {
    modalStore.toggleModalAddNewDeal();
};
export default {
    mounted() {
        $('.selectpicker').selectpicker();
    },
    data() {
        return {
            status: '',
            nextAction: '',
        };
    },
};

</script>