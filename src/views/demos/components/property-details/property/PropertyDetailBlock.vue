<template>
    <div 
    id="property-detail-wrap"
    class="property-detail-wrap property-section-wrap" >
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>{{ $t('Details') }}</h2>
                <span class="small-text grey" href="#" target="_blank"><i class="houzez-icon icon-attachment mr-1"></i>
                    {{ $t('Updated on') }} {{ property.updated_at}}</span>
            </div><!-- block-title-wrap -->
            <div class="block-content-wrap">
                <div class="detail-wrap">
                    <ul class="list-2-cols list-unstyled">
                        <li><strong>{{ $t('Property ID') }}:</strong> <span>{{ property.property_id }}</span></li>
                        <li>
                            <strong>{{ $t('Price') }}:</strong> 
                            <span>{{ property.price }}</span>
                        </li>
                        <li><strong>{{ $t('Property Size') }}:</strong> <span>{{ property.area_size }} {{ property.size_prefix}}</span></li>
                        <li><strong>{{ $t('Bedrooms') }}:</strong> <span>{{ property.bedrooms }}</span></li>
                        <li><strong>{{ $t('Bathrooms') }}:</strong> <span>{{ property.bathrooms }}</span></li>
                        <li><strong>{{ $t('Garage') }}:</strong> <span>{{ property.garages }}</span></li>
                        <li><strong>{{ $t('Garage Size') }}:</strong> <span>{{ property.garages_size }} {{property.size_prefix}}</span></li>
                        <li><strong>{{ $t('Year Built') }}:</strong> <span>{{ property.year_built }}</span></li>
                        <li class="prop_type"><strong>{{ $t('Property Type') }}:</strong> <span>{{property.type}}</span></li>
                        <li class="prop_status"><strong>{{ $t('Property Status') }}:</strong> <span>For {{ property.label }}</span></li>
                    </ul>
                </div>

                
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-detail-wrap -->


</template>
<script setup>
defineProps({
  property: {
    type: Object,
    required: true
  }
})

</script>