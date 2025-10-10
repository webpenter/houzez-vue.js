    <template>
        <!-- add the class item-amenities-with-icons to display the icons -->
        <ul class="item-amenities item-amenities-with-icons">
            <li class="h-beds">
                <i class="houzez-icon icon-hotel-double-bed-1 mr-1"></i>
                <span class="item-amenities-text">Beds:</span> <span>{{ bedrooms }}</span>
            </li>
            <li class="h-baths">
                <i class="houzez-icon icon-bathroom-shower-1 mr-1"></i>
                <span class="item-amenities-text">Baths:</span> <span>{{ bathrooms }}</span>
            </li>
            <li class="h-cars">
                <i class="houzez-icon icon-car-1 mr-1"></i>
                <span class="item-amenities-text">Parkings:</span> <span>{{ garages }}</span>
            </li>
            <li class="h-area">
                <i class="houzez-icon icon-ruler-triangle mr-1"></i>
                <span>{{ area_size }}</span> <span class="area_postfix">{{ size_prefix }}</span>
            </li>
            <li class="h-type">
                <span>{{ type }}</span>
            </li>
        </ul>
    </template>

    <script setup>
    defineProps({
    bedrooms: [Number, String],
    bathrooms: [Number, String],
    garages:  [Number, String],
    area_size: [Number, String],
    size_prefix: [String],
    type: String
    });
    </script>
