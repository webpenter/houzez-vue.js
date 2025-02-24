<template>
<tr>
	<td class="property-table-thumbnail" data-label="Thumbnail">
		<div class="table-property-thumb">
			<a href="#"><img src="http://placehold.co/100x75"></a>	
		</div><!-- table-property-thumb -->
	</td>
	<td class="property-table-address" data-label="username">
		<p>Husnain zafar</p>
	</td>
	<td>
		<span class="">Husnain</span>
	</td>
	<!-- <td class="property-table-id" data-label="ID">HZ-001</td> -->
	<td class="property-table-type" data-label="Type">husnain@gmail.com</td>
	<td class="property-table-status" data-label="Status">Owner</td>
	<td class="property-table-price" data-label="Price">
		<strong>0</strong>
	</td>
	<td class="property-table-actions" data-label="Actions">
		<div class="dropdown property-action-menu">
			<button class="btn btn-primary-outlined dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Actions
			</button>
			<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
				
				<a class="dropdown-item" href="dashboard-agent-edit-property-description-and-price.php">Edit</a>
				<a class="dropdown-item" href="#modal-delete" data-toggle="modal">Delete</a>
				<a class="dropdown-item" href="#">View</a>
				<a class="dropdown-item" href="#">Send Reset Password</a>

			</div>
		</div>
	</td>
</tr>


</template>

<script setup>
</script>
