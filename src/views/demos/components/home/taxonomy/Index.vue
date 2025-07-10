<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <h2 style="margin: 30px 0; text-align: center;">{{ $t('Taxonomy') }}</h2>
                    <div class="taxonomy-grids-module taxonomy-grids-module-v1">
                        <div class="taxonomy-grids-module-grid">
                            <div class="taxonomy-item-square">
                                <TaxonomyItem :img="'apartment.jpg'" title="Apartment" link="apartment"/>
                            </div><!-- taxonomy-item-square -->
                            <div class="taxonomy-item-rectangle">
                                <TaxonomyItem :img="'villa.jpg'" title="Villa" link="villa"/>
                            </div><!-- taxonomy-item-rectangle -->
                            <div class="taxonomy-item-rectangle">
                                <TaxonomyItem :img="'home.jpg'" title="Home" link="home"/>
                            </div><!-- taxonomy-item-rectangle -->
                            <div class="taxonomy-item-square">
                                <TaxonomyItem :img="'office.jpg'" title="Office" link="office"/>
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