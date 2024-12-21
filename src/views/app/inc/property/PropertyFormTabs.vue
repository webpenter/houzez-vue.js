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
            <div class="property-form-tabs-tab-pane tab-pane fade show active" id="tab_01" role="tabpanel">
                <?php include 'inc/property/property-schedule-a-tour-form.php';?>
            </div>
            <div class="property-tabs-module-tab-pane tab-pane fade" id="tab_02" role="tabpanel">
                <?php include 'inc/property/property-form.php';?>
            </div>
        </div>
    </div><!-- property-form-tabs -->
</div><!-- property-form-tabs-wrap -->

</template>
<script setup>

</script>