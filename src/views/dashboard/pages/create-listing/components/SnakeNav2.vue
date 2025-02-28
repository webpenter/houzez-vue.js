<template>
 <div class="dashaboard-snake-nav">
                <div class="d-flex justify-content-between">
                    <div class="step-block text-center" :class="{'active':active==='package'}">Select Package</div>
                    <div class="step-block text-center" :class="{'active':active==='payment'}">Payment</div>
                    <div class="step-block text-center" :class="{'active':active==='completed'}">Completed</div>
                </div>
            </div><!-- dashaboard-snake-nav -->
</template>

<script setup>
defineProps(['active']);
</script>