<template>
    <div class="property-detail-wrap property-section-wrap" id="property-detail-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>Detail</h2>
                <span class="small-text grey" href="#" target="_blank"><i class="houzez-icon icon-attachment mr-1"></i>
                    Updated on {{ property.updated_at}}</span>
            </div><!-- block-title-wrap -->
            <div class="block-content-wrap">
                <div class="detail-wrap">
                    <ul class="list-2-cols list-unstyled">
                        <li><strong>Property ID:</strong> <span>{{ property.property_id }}</span></li>
                        <li><strong>Price:</strong> <span><span class="price-prefix">From </span>{{ property.price_prefix }}{{ property.price }}</span></li>
                        <li><strong>Property Size:</strong> <span>{{ property.area_size }} {{ property.size_prefix}}</span></li>
                        <li><strong>Bedrooms:</strong> <span>{{ property.bedrooms }}</span></li>
                        <li><strong>Bathrooms:</strong> <span>{{ property.bathrooms }}</span></li>
                        <li><strong>Garage:</strong> <span>{{ property.garages }}</span></li>
                        <li><strong>Garage Size:</strong> <span>{{ property.garages_size }} {{property.size_prefix}}</span></li>
                        <li><strong>Year Built:</strong> <span>2016-01-09</span></li>
                        <li class="prop_type"><strong>Property Type:</strong> <span>{{property.type}}</span></li>
                        <li class="prop_status"><strong>Property Status:</strong> <span>For {{ property.label }}</span></li>
                    </ul>
                </div>

                <div class="block-title-wrap">
                    <h3>Additional Details</h3>
                </div><!-- block-title-wrap -->
                <ul class="list-2-cols list-unstyled">
                    <li><strong>Deposit:</strong> <span>20%</span></li>
                    <li><strong>Pool Size:</strong> <span>300 Sqft</span></li>
                    <li><strong>Last remodel year:</strong> <span>1987</span></li>
                    <li><strong>Amenities:</strong> <span>Clubhouse</span></li>
                    <li><strong>Additional Rooms:</strong> <span>Guest Bath</span></li>
                    <li><strong>Equipment:</strong> <span>Grill - Gas</span></li>
                </ul>
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-detail-wrap -->


</template>
<script setup>

const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

</script>