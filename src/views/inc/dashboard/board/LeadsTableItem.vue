<template>
    <tr class="table-new">
	<td class="table-nowrap" data-label="edit">
		<input id="checkbox-delete" type="checkbox" name="name">
	</td> 
	<td class="table-nowrap" data-label="Name">
		Martin Moore
		<a href="crm-lead-enquiries.php" class="board-message-icon-wrap ml-2 fa-lg active" data-toggle="tooltip" data-placement="top" title="View enquiry">
			<i class="houzez-icon icon-messages-bubble"></i>
		</a>
	</td>
	<td data-label="Email">
		<a href="#"><strong>martin.moore@houzez.co</strong></a>
	</td>
	<td data-label="Phone">
		879-345-1233
	</td>
	<td data-label="Type">
		Buyer
	</td>
	<td class="table-nowrap" data-label="Agent">
		<i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i>> John Doe
	</td>
	<td class="table-nowrap" data-label="Date Added">
		March 9, 2019
	</td>
	<td>
		<div class="dropdown property-action-menu">
			<button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actions
			</button>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				<router-link 
					to="/dashboard/crm-lead-enquiries" 
					class="dropdown-item">
					Details
				</router-link>

				<a class="dropdown-item open-close-slide-panel" href="#">Edit</a>
				<a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
			</div>
		</div>
	</td>
</tr>

<tr>
	<td class="table-nowrap" data-label="edit">
		<input type="checkbox" name="name">
	</td>
	<td class="table-nowrap" data-label="Name">
		Samantha Ray
		<a href="crm-lead-enquiries.php" class="board-message-icon-wrap ml-2 fa-lg active" data-toggle="tooltip" data-placement="top" title="View enquiry">
			<!-- <i class="houzez-icon icon-messages-bubble"></i> -->
		</a>
	</td>
	<td data-label="Email">
		<a href="#"><strong>samantha.ray@houzez.co</strong></a>
	</td>
	<td data-label="Phone">
		786-549-5487
	</td>
	<td data-label="Type">
		Buyer
	</td>
	<td class="table-nowrap" data-label="Agent">
		<i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i> John Doe
	</td>
	<td class="table-nowrap" data-label="Date Added">
		March 9, 2019
	</td>
	<td>
		<div class="dropdown property-action-menu">
			<button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actions
			</button>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" href="crm-lead-enquiries.php">Details</a>
				<a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
			</div>
		</div>
	</td>
</tr>

<tr>
	<td class="table-nowrap" data-label="edit">
		<input type="checkbox" name="name">
	</td>
	<td class="table-nowrap" data-label="Name">
		James Cook
		<a href="crm-lead-enquiries.php" class="board-message-icon-wrap ml-2 fa-lg active" data-toggle="tooltip" data-placement="top" title="View enquiry">
			<!-- <i class="houzez-icon icon-messages-bubble"></i> -->
		</a>
	</td>
	<td data-label="Email">
		<a href="#"><strong>james.cook@houzez.co</strong></a>
	</td>
	<td data-label="Phone">
		987-283-1827
	</td>
	<td data-label="Type">
		Buyer
	</td>
	<td class="table-nowrap" data-label="Agent">
		<i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i> John Doe
	</td>
	<td class="table-nowrap" data-label="Date Added">
		March 9, 2019
	</td>
	<td>
		<div class="dropdown property-action-menu">
			<button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actions
			</button>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" href="crm-lead-enquiries.php">Details</a>
				<a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
			</div>
		</div>
	</td>
</tr>
</template>