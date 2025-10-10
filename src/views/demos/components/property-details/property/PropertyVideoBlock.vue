<template>
  <div id="property-video-wrap" class="property-video-wrap property-section-wrap">
    <div class="block-wrap">
      <div class="block-title-wrap d-flex justify-content-between align-items-center">
        <h2>{{ $t('Video') }}</h2>
      </div>
      <div class="block-content-wrap">
        <div class="block-video-wrap">
          <iframe
            :src="iframeSrc"
            width="560"
            height="315"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iframeSrc: {
      type: String,
      required: true
    }
  }
};
</script>
