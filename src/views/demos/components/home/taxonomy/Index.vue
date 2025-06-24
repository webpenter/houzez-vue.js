<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <h2 style="margin: 30px 0; text-align: center;">Taxonomy</h2>
                    <div class="taxonomy-grids-module taxonomy-grids-module-v1">
                        <div class="taxonomy-grids-module-grid">
                            <div class="taxonomy-item-square">
                                <TaxonomyItem :img="'apartment.jpg'" title="Apartment" />
                            </div><!-- taxonomy-item-square -->
                            <div class="taxonomy-item-rectangle">
                                <TaxonomyItem :img="'villa.jpg'" title="Villa" />
                            </div><!-- taxonomy-item-rectangle -->
                            <div class="taxonomy-item-rectangle">
                                <TaxonomyItem :img="'home.jpg'" title="Home" />
                            </div><!-- taxonomy-item-rectangle -->
                            <div class="taxonomy-item-square">
                                <TaxonomyItem :img="'office.jpg'" title="Office" />
                            </div><!-- taxonomy-item-square -->
                        </div><!-- taxonomy-grids-module-grid -->
                    </div><!-- taxonomy-grids-module -->

                </div><!-- col-12 -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- listing-wrap -->
</template>

<script setup>
import TaxonomyItem from './TaxonomyItem.vue';

</script>