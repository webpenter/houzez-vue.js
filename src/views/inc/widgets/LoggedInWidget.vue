<template>
    <div id="widget-list-more-01" class="widget widget-wrap widget-taxonomy widget-list-more">
		<div class="widget-header">
			<h3 class="widget-title">
				Property Taxonomy
			</h3><!-- widget-title -->
		</div><!-- widget-header -->
		<div class="widget-body">
			<ul class="collapse" id="collapseExample" aria-expanded="false">
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
				<li><a href="#">Taxonomy <span>(32)</span></a></li>
			</ul>
			<a role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></a>
		</div><!-- widget-body -->
    </div><!-- widget-taxonomy -->
</template>

<style scoped>
	#widget-list-more-01 .collapse:not(.show) {
		display: block;
		height: 220px;
		overflow: hidden;
	}

	#widget-list-more-01 .collapsing {
		height: 220px;
	}

	#widget-list-more-01 .widget-body > a {
		margin-top: 10px;
		display: inline-block;
	}

	#widget-list-more-01 .widget-body > a.collapsed::after {
		content: '+ Show More';
	}
	
	#widget-list-more-01 .widget-body > a:not(.collapsed)::after {
		content: '- Show Less';
	}
</style>

<script setup>

</script>