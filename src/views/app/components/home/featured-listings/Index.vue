<template>
    <section class="content-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 style="margin: 100px 0 30px 0; text-align: center;">Discover Our Featured Listings</h2>
                    <div class="property-cards-module property-cards-module-v1 property-cards-module-3-cols">
                        <div class="listing-view grid-view card-deck grid-view-3-cols">
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                            <ListItem />
                        </div><!-- listing-view -->
                        <div class="load-more-wrap">
                            <a class="btn btn-primary-outlined btn-load-more" href="#">Load More</a>
                        </div><!-- load-more-wrap -->
                    </div><!-- property-grid-module -->
                </div><!-- col-12 -->
            </div><!-- row -->
        </div><!-- container -->
    </section><!-- listing-wrap -->
</template>

<script setup>
import ListItem from './ListItem.vue';
</script>