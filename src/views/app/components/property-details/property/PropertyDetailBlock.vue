<template>
    <div id="property-detail-wrap" class="property-detail-wrap property-section-wrap">
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
                        <li><strong>Year Built:</strong> <span>{{ property.year_built }}</span></li>
                        <li class="prop_type"><strong>Property Type:</strong> <span>{{property.type}}</span></li>
                        <li class="prop_status"><strong>Property Status:</strong> <span>For {{ property.label }}</span></li>
                    </ul>
                </div>

                
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