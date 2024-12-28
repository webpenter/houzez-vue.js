<template>
    <tr>
        <th class="table-nowrap" data-label="Title">
            <strong>Apartment in Miami</strong>
            <a href="crm-lead-enquiries.php" class="board-message-icon-wrap ml-2 active" data-toggle="tooltip" data-placement="top" title="View conversation">
                <i class="houzez-icon icon-messages-bubble"></i>
            </a>
        </th>
        <td class="table-nowrap" data-label="Contact Name">Martin Moore</td>
        <td class="table-nowrap" data-label="Agent"><i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i> John Doe</td>
        <td class="table-nowrap" data-label="Status">
            <select class="selectpicker form-control bs-select-hidden deals-status" title="Select">
                <option class="new-lead-color">New Lead</option>
                <option class="meeting-scheduled-color">Meeting Scheduled</option>
                <option class="qualified-color">Qualified</option>
                <option class="proposal-sent-color">Proposal Sent</option>
                <option class="called-color">Called</option>
                <option class="negotiation-color">Negotiation</option>
                <option class="email-sent-color">Email Sent</option>
            </select><!-- selectpicker -->
        </td>
        <td class="table-nowrap" data-label="Next Action">
            <select class="selectpicker form-control bs-select-hidden" title="Select">
                <option class="qualified-color">Qualification</option>
                <option class="demo-color">Demo</option>
                <option class="called-color">Call</option>
                <option class="proposal-sent-color">Send a Proposal</option>
                <option class="email-sent-color">Send an Email</option>
                <option class="follow-up-color">Follow Up</option>
                <option class="meeting-scheduled-color">Meeting</option>
            </select><!-- selectpicker -->
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
                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item open-close-slide-panel" href="#">Edit</a>
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
        <td class="table-nowrap" data-label="Agent"><i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i> John Doe</td>
        <td class="table-nowrap" data-label="Status">
            <select class="selectpicker form-control bs-select-hidden" title="Select">
                <option>New Lead</option>
                <option>Meeting Scheduled</option>
                <option>Qualified</option>
                <option>Proposal Sent</option>
                <option>Called</option>
                <option>Negotiation</option>
                <option>Email Sent</option>
                <option>Won</option>
                <option>Lost</option>
            </select><!-- selectpicker -->
        </td>
        <td class="table-nowrap" data-label="Next Action">
            <select class="selectpicker form-control bs-select-hidden" title="Select">
                <option>Qualification</option>
                <option>Demo</option>
                <option>Lost</option>
                <option>Call</option>
                <option>Send a Proposal</option>
                <option>Send an Email</option>
                <option>Follow Up</option>
                <option>Meeting</option>
                <option>Won</option>
            </select><!-- selectpicker -->
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
                <button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item open-close-slide-panel" href="#">Edit</a>
                    <a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
                </div>
            </div>
        </td>
    </tr>

</template>