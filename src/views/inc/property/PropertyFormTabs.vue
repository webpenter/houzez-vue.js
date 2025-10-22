<template>
<div class="property-form-tabs-wrap">
	<div class="property-form-tabs">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#tab_01" role="tab">
                    <span class="tab-title">Schedule a tour</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab_02" role="tab">
                    <span class="tab-title">Request Info</span>
                </a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="tab_01" class="property-form-tabs-tab-pane tab-pane fade show active" role="tabpanel">
                <PropertyScheduleATourForm/>
            </div>
            <div id="tab_02" class="property-tabs-module-tab-pane tab-pane fade" role="tabpanel">
                <PropertyForm/>
            </div>
        </div>
    </div><!-- property-form-tabs -->
</div><!-- property-form-tabs-wrap -->

</template>

<script setup>
import PropertyForm from './PropertyForm.vue';
import PropertyScheduleATourForm from './PropertyScheduleATourForm.vue';

</script>