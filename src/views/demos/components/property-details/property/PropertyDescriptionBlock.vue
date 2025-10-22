<template>
  <div id="property-description-wrap" class="property-description-wrap property-section-wrap">
    <div class="block-wrap">
      <div class="block-title-wrap">
        <h2>{{ $t('Description') }}</h2>
      </div><!-- block-title-wrap -->

      <div class="block-content-wrap">
        <p>{{ property.description }}</p>

        <div v-if="property.attachments && property.attachments.length">
          <div class="block-title-wrap">
            <h3>{{ $t('Property Documents') }}</h3>
          </div><!-- block-title-wrap -->

          <div v-for="(attachment, index) in property.attachments" :key="attachment.id" class="property-documents">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="property-document-title">
                <i class="houzez-icon icon-task-list-plain-1 mr-1"></i>
                {{ attachment.file_title }}
              </div>
              <div class="property-document-link">
                <a :href="attachment.file_path" target="_blank" download>
                  {{ $t('Download') }} <i class="houzez-icon icon-download-bottom ml-2"></i>
                </a>
              </div>
            </div><!-- d-flex -->
          </div><!-- property-documents -->
        </div>
      </div><!-- block-content-wrap -->
    </div><!-- block-wrap -->
  </div><!-- property-description-wrap -->
</template>

<script setup>
const props = defineProps({
  property: Object
});
</script>
