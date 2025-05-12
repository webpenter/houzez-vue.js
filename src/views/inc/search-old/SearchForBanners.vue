<template>
    <div class="search-banner-wrap">
        <div class="d-flex flex-sm-max-column">
            <div class="flex-search">
                <CitiesField/>
            </div><!-- flex-search -->
            <div class="flex-grow-1 flex-search">
                <SearchField/>
            </div><!-- flex-search -->
            <div class="flex-search">
                <SubmitButton/>
            </div><!-- flex-search -->
        </div><!-- d-flex -->
    </div><!-- search-banner-wrap -->
</template>

<script setup>
import CitiesField from './fields/CitiesField.vue';
import SearchField from './fields/SearchField.vue';
import SubmitButton from './fields/SubmitButton.vue';
</script>
