
<template>
        <header class="header-main-wrap dashboard-header-main-wrap">
            <div class="dashboard-header-wrap">
                <div class="d-flex align-items-center">
                    <div class="dashboard-header-left flex-grow-1">
                        <BreadCrumb/>
                        <h1>{{ heading }}</h1>         
                    </div><!-- dashboard-header-left -->
                    <div class="dashboard-header-right">
                        <slot />
                    </div><!-- dashboard-header-right -->
                </div><!-- d-flex -->
            </div><!-- dashboard-header-wrap -->
        </header><!-- .header-main-wrap -->    
</template>

<script setup>
import BreadCrumb from '@/views/inc/page/BreadCrumb.vue';

const props = defineProps(['heading']);
</script>