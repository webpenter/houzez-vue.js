<template>
    
        <section class="listing-wrap listing-v1">
            <div class="container">
                <div class="page-title-wrap">
                    
                    <BreadCrumb />
                    <div class="d-flex align-items-center">
                        <PageTitle />
                        <ListingSwitchView />
                    </div><!-- d-flex -->  
                </div><!-- page-title-wrap -->
                <div class="row">
                    <div class="col-lg-8 col-md-12 bt-content-wrap">                      
                        <div class="listing-tools-wrap">
                            <div class="d-flex align-items-center mb-3">
                                <div class="flex-grow-1">
                                    <strong>48 Results Found</strong>
                                </div>
                                <ListingSortBy />
                                <SaveSearchBtn />
                                
                            </div><!-- d-flex -->
                            <div class="search-no-results-found">
                                No results found
                            </div><!-- search-no-results-found -->
                        </div><!-- listing-tools-wrap -->                   
                        <div class="listing-view grid-view card-deck ">
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                            <ItemV1 />
                        
                        </div><!-- listing-view -->
                        <Pagination />
                        
                    </div><!-- bt-content-wrap -->
                    <div class="col-lg-4 col-md-12 bt-sidebar-wrap">
                        <Sidebar />
                    </div><!-- bt-sidebar-wrap -->
                </div><!-- row -->
            </div><!-- container -->
        </section><!-- listing-wrap -->
</template>
<script setup>
import ItemV1 from '../../inc/listing/ItemV1.vue';
import ListingSortBy from '../../inc/listing/ListingSortBy.vue';
import ListingSwitchView from '../../inc/listing/ListingSwitchView.vue';
import Pagination from '../../inc/listing/Pagination.vue';
import BreadCrumb from '../../inc/page/BreadCrumb.vue';
import PageTitle from '../../inc/page/PageTitle.vue';
import SaveSearchBtn from '../../inc/search/SaveSearchBtn.vue';
import Sidebar from '../../inc/Sidebar.vue';


</script>
