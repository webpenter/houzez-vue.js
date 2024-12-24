<template>
    <div id="compare-property-panel" class="compare-property-panel compare-property-panel-vertical compare-property-panel-right">
	
        <button class="compare-property-label">
            <span class="compare-label">3</span>
            <i class="houzez-icon icon-move-left-right"></i>
        </button>

        <p><strong>Compare listings</strong></p>
        
        <div class="compare-item">
            <a href="#" class="remove-icon"><i class="houzez-icon icon-remove-circle"></i></a>
            <a href="#" class="hover-effect"><img class="img-fluid" src="https://placehold.co/200x150" alt=""></a>
        </div>	
        <div class="compare-item">
            <a href="#" class="remove-icon"><i class="houzez-icon icon-remove-circle"></i></a>
            <a href="#" class="hover-effect"><img class="img-fluid" src="https://placehold.co/200x150" alt=""></a>
        </div>	
        <div class="compare-item">
            <a href="#" class="remove-icon"><i class="houzez-icon icon-remove-circle"></i></a>
            <a href="#" class="hover-effect"><img class="img-fluid" src="https://placehold.co/200x150" alt=""></a>
        </div>	
        <div class="compare-item">
            <div class="empty-compare-item"></div>
        </div>	

        <button class="btn btn-primary btn-full-width mb-2" onclick="window.location.href='compare-properties.php'">Compare</button>
        <button class="btn btn-grey-outlined btn-full-width close-compare-panel">Close</button>
    </div>
</template>

<script setup></script>