<template>
	<div
		class="property-sub-listings-table-wrap property-section-wrap"
		id="property-sub-listings-wrap" >
		<div class="block-wrap">
			<div class="block-title-wrap">
				<h2>Sub Listings</h2>
			</div><!-- block-title-wrap -->
			<div class="block-content-wrap">
				<table class="sub-listings-table table-lined responsive-table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Property Type</th>
							<th>Price</th>
							<th>Beds</th>
							<th>Baths</th>
							<th>Property Size</th>
							<th>Availability Date</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(sub, index) in property.sub_properties" :key="index">
							<td data-label="Title">
								<strong>{{ sub.title }}</strong>
							</td>
							<td data-label="Property Type">{{ property.type}}</td>
							<td data-label="Price">
								<strong>{{ sub.price_label }}{{ sub.price }}/{{ property.after_price }}</strong>
							</td>
							<td data-label="Beds"><i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i> {{ sub.bedrooms }}</td>
							<td data-label="Baths"><i class="houzez-icon icon-bathroom-shower-1 mr-1"></i> {{ sub.bathrooms }}</td>
							<td data-label="Property Size">{{ sub.area_size }} {{ sub.size_prefix }}</td>
							<td data-label="Availability Date">Call for availability</td>
						</tr>
						
					</tbody>
				</table>
			</div><!-- block-content-wrap -->
		</div><!-- block-wrap -->
	</div><!-- property-address-wrap -->
</template>

<script setup>
const props = defineProps({ 
  property: {
    type: Object,
    required: true
  }
})
</script>