<template>
    <div class="property-description-wrap property-section-wrap" id="property-description-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap">
                <h2>Description</h2>
            </div><!-- block-title-wrap -->
            <div class="block-content-wrap">
                <p> {{ property.description }} </p>

                <div class="block-title-wrap">
                    <h3>Property Documents</h3>
                </div><!-- block-title-wrap -->
                <div class="property-documents">
                    <div class="d-flex justify-content-between">
                        <div class="property-document-title">
                            <i class="houzez-icon icon-task-list-plain-1 mr-1"></i> Property Brochure
                        </div>
                        <div class="property-document-link">
                            <a href="#">Download <i class="houzez-icon icon-download-bottom ml-2"></i></a>
                        </div>
                    </div><!-- d-flex -->
                </div><!-- property-documents -->
            </div><!-- block-content-wrap -->
        </div><!-- block-wrap -->
    </div><!-- property-description-wrap -->
</template>

<script setup>  

const props = defineProps({
  property: Object
});

</script>
