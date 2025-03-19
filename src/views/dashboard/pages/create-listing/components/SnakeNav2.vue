<template>
 <div class="dashaboard-snake-nav">
                <div class="d-flex justify-content-between">
                    <div class="step-block text-center" :class="{'active':active==='package'}">{{$t('Select Package')}}</div>
                    <div class="step-block text-center" :class="{'active':active==='payment'}">{{$t('Payment')}}</div>
                    <div class="step-block text-center" :class="{'active':active==='completed'}">{{$t('Completed')}}</div>
                </div>
            </div><!-- dashaboard-snake-nav -->
</template>

<script setup>
defineProps(['active']);
</script>