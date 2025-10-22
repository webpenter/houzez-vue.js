<template>
    <div id="widget-list-more-01" class="widget widget-wrap widget-taxonomy widget-list-more">
	<div class="widget-header">
		<h3 class="widget-title">
			{{ $t('Property Taxonomy') }}
		</h3><!-- widget-title -->
	</div><!-- widget-header -->
	<div class="widget-body">
		<ul id="collapseExample" class="collapse" aria-expanded="false">
			<li v-for="type in types" :key="type.id">
				<router-link :to="{name:'demo01.property-type',params:{propertyType:type.name}}">
					{{ type.name }} 
					<span>({{ $t('More Details') }})</span>
				</router-link>
			</li>
		</ul>
		<a role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></a>
	</div><!-- widget-body -->
</div><!-- widget-taxonomy -->


</template>

<script setup>
import { useType } from "@/stores/index.js"
import {storeToRefs} from "pinia"

const typeStore = useType()
const { types } = storeToRefs(typeStore)
</script>

<style>
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