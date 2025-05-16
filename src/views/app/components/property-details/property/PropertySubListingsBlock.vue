    <template>
        <div class="property-sub-listings-wrap property-section-wrap" id="property-sub-listings-wrap">
            <div class="block-wrap">
                <div class="block-title-wrap">
                    <h2>Sub Listings</h2>
                </div><!-- block-title-wrap -->
                <div class="block-content-wrap">
                    <div class="container">
                         <div class="listing-view list-view">
                            <!-- <ListItem/> -->
                        </div><!-- listing-view -->
                    </div>
                </div><!-- block-content-wrap -->
            </div><!-- block-wrap -->
        </div><!-- property-address-wrap -->
    </template>

<script setup>
import ListItem from '../../home/featured-listings/ListItem.vue';


const props = defineProps({
    property: Object
});

</script>