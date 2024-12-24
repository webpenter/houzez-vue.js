<template>
    <div class="taxonomy-grids-module taxonomy-grids-module-v1">
        <div class="taxonomy-grids-module-grid">
            <div class="taxonomy-item-square">
                <TaxonomyItem/>
            </div><!-- taxonomy-item-square -->
            <div class="taxonomy-item-rectangle">
                <TaxonomyItem/>
            </div><!-- taxonomy-item-rectangle -->
            <div class="taxonomy-item-rectangle">
                <TaxonomyItem/>
            </div><!-- taxonomy-item-rectangle -->
            <div class="taxonomy-item-square">
                <TaxonomyItem/>
            </div><!-- taxonomy-item-square -->
        </div><!-- taxonomy-grids-module-grid -->
    </div><!-- taxonomy-grids-module -->    
</template>

<script setup>
import TaxonomyItem from './templates/TaxonomyItem.vue';
</script>

