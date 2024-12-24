<template>
    <div class="accordion-tab floor-plan-wrap">
	<div class="accordion-header" data-toggle="collapse" data-target="#floor1" aria-expanded="false">
		<div class="d-flex align-items-center" id="floor-plans1">
			<div class="accordion-title flex-grow-1">
				Floor Title
			</div><!-- accordion-title -->
			<ul class="floor-information list-unstyled list-inline">
				<li class="list-inline-item">Size: <strong>3,250 Sq Ft</strong></li>
				<li class="list-inline-item"><i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i> <strong>4</strong></li>
				<li class="list-inline-item"><i class="houzez-icon icon-bathroom-shower-1 mr-1"></i> <strong>2,5</strong></li>
				<li class="list-inline-item">Price: <strong>$9,500/mo</strong></li>
			</ul>
		</div><!-- d-flex -->
	</div><!-- accordion-header -->
	<div id="floor1" class="collapse" data-parent="#floor-plans1">
		<div class="accordion-body">
			<img class="img-fluid" src="https://placehold.co/800x600" alt="image">
			<div class="floor-plan-description">
				<p><strong>Description:</strong><br>
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
				</p>
			</div><!-- floor-plan-description -->
		</div><!-- accordion-body -->
	</div><!-- collapse -->
</div><!-- accordion-tab -->
</template>

<script setup></script>