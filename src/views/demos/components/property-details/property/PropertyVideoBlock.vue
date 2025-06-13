
<template>
    <div class="property-video-wrap property-section-wrap" id="property-video-wrap">
        <div class="block-wrap">
            <div class="block-title-wrap d-flex justify-content-between align-items-center">
                <h2>Video</h2>
            </div>
            <div class="block-content-wrap">
                <div class="block-video-wrap" v-html="iframeCode"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        iframeCode: {
            type: String,
            required: true
        }
    }
};
</script>
