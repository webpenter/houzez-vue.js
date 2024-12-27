<template>
 <div class="dashaboard-snake-nav">
                <div class="d-flex justify-content-between">
                    <div class="step-block text-center" :class="{'active':active=='package'}">Select Package</div>
                    <div class="step-block text-center" :class="{'active':active=='payment'}">Payment</div>
                    <div class="step-block text-center" :class="{'active':active=='listing'}">Create Listing</div>
                    <div class="step-block text-center" :class="{'active':active=='done'}">Done</div>
                </div>
            </div><!-- dashaboard-snake-nav -->
</template>

<script setup>
const props = defineProps(['active']);
</script>
