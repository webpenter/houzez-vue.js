<template>
    <tr>
	<td class="property-table-thumbnail" data-label="Thumbnail">
		<div class="table-property-thumb">
			<span class="label property-payment-status">Paid</span>
			<a href="#"><img src="http://placehold.co/100x75"></a>	
		</div><!-- table-property-thumb -->
	</td>
	<td class="property-table-address" data-label="Address">
		<a href="#"><strong>Apartment With Ocean View</strong></a><br>
		9701 W Broadview Dr, Bay Harbor Islands, FL 31175
	</td>
	<!-- <td class="property-table-id" data-label="ID">HZ-001</td> -->
	<td class="property-table-type" data-label="Type">Apartment</td>
	<td class="property-table-status" data-label="Status">For Sale</td>
	<td class="property-table-price" data-label="Price">
		<strong>$350,000</strong>
	</td>
	<td class="property-table-featured" data-label="Featured">Yes</td>
	<!-- <td class="property-table-data-posted" data-label="Posted">
		March 9, 2019<br>
		 6:46 pm
	</td>
	<td class="property-table-date-expire" data-label="Expire">
		June 9, 2019<br> 
		 6:46 pm
	</td> -->
	<td class="property-table-actions" data-label="Actions">
		<div class="dropdown property-action-menu">
			<button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actions
			</button>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				<a class="dropdown-item" href="#">Details</a>
				<a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
			</div>
		</div>
	</td>
</tr>
</template>
<script setup>

</script>