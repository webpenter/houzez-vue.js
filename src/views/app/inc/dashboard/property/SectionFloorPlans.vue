<script setup>
import FormFloorPlan from './FormFloorPlan.vue';
</script>

<template>
    <div class="dashboard-content-block-wrap">
	<h2>Floor Plans</h2>
	<div class="dashboard-content-block">
		<div class="form-group">
			<label>Do you want to enable the floor plans?</label>
			<select class="selectpicker form-control bs-select-hidden" title="Disable" data-live-search="false" data-selected-text-format="count"  data-actions-box="false">
				<option>Disable</option>
				<option>Enable</option>
			</select><!-- selectpicker -->
		</div><!-- form-group -->
		<table class="dashboard-table draggable-table">
			<thead>
				<tr>
					<td>
						<label>Title</label>
					</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="table-full-width table-cell-title">
						<span>Floor Plan Title</span>
					</td>
					<td>
						<button class="btn btn-light-grey-outlined" data-toggle="collapse" data-target="#edit-floorplan-1"><i class="houzez-icon icon-pencil"></i></button>
					</td>
					<td>
						<button class="btn btn-light-grey-outlined" data-toggle="modal" data-target="#modal-delete"><i class="houzez-icon icon-close"></i></button>
					</td>
					<td class="drag-cell">
						<button class="btn btn-light-grey-outlined"><i class="houzez-icon icon-navigation-menu"></i></button>
					</td>
				</tr>
				<tr>
					<td colspan="4" class="collapse-table-wrap">
						<div class="collapse" id="edit-floorplan-1">
							<div class="card card-body">
                                <FormFloorPlan />
								<!-- <?php include 'inc/dashboard/property/form-floor-plan.php'; ?> -->
								<button class="btn btn-success">Save Changes</button>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="table-full-width table-cell-title">
						<span>Floor Plan Title</span>
					</td>
					<td>
						<button class="btn btn-light-grey-outlined" data-toggle="collapse" data-target="#edit-floorplan-2"><i class="houzez-icon icon-pencil"></i></button>
					</td>
					<td>
						<button class="btn btn-light-grey-outlined" data-toggle="modal" data-target="#modal-delete"><i class="houzez-icon icon-close"></i></button>
					</td>
					<td class="drag-cell">
						<button class="btn btn-light-grey-outlined"><i class="houzez-icon icon-navigation-menu"></i></button>
					</td>
				</tr>
				<tr>
					<td colspan="4" class="collapse-table-wrap">
						<div class="collapse" id="edit-floorplan-2">
							<div class="card card-body">
                                <FormFloorPlan />
								<!-- <?php include 'inc/dashboard/property/form-floor-plan.php'; ?> -->
								<button class="btn btn-success">Save Changes</button>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td class="table-full-width table-cell-title">
						<span>Floor Plan Title</span>
					</td>
					<td>
						<button class="btn btn-light-grey-outlined" data-toggle="collapse" data-target="#edit-floorplan-3"><i class="houzez-icon icon-pencil"></i></button>
					</td>
					<td>
						<button class="btn btn-light-grey-outlined" data-toggle="modal" data-target="#modal-delete"><i class="houzez-icon icon-close"></i></button>
					</td>
					<td class="drag-cell">
						<button class="btn btn-light-grey-outlined"><i class="houzez-icon icon-navigation-menu"></i></button>
					</td>
				</tr>
				<tr>
					<td colspan="4" class="collapse-table-wrap">
						<div class="collapse" id="edit-floorplan-3">
							<div class="card card-body">
                                <FormFloorPlan />
								<!-- <?php include 'inc/dashboard/property/form-floor-plan.php'; ?> -->
								<button class="btn btn-success">Save Changes</button>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->

<div class="dashboard-content-block-wrap">
	<h2>Add a Floor Plan</h2>
	<div class="dashboard-content-block">
        <FormFloorPlan />
		<!-- <?php include 'inc/dashboard/property/form-floor-plan.php'; ?> -->
		<button class="btn btn-primary btn-left-icon"><i class="houzez-icon icon-add-circle mr-2"></i> Add New</button>
		<button class="btn btn-primary-outlined btn-left-icon ml-2"><i class="houzez-icon icon-remove-circle mr-2"></i> Delete</button>
	</div><!-- dashboard-content-block -->
</div><!-- dashboard-content-block-wrap -->


</template>