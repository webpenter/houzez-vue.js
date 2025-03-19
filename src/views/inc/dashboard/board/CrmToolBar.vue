<template>
    <div class="alert alert-success" role="alert">
    Settings saved successfully.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
</div>
<div class="alert alert-danger" role="alert">
    Something went wrong.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
    </button>
</div>
<div class="dashboard-tool-block">
    <div class="dashboard-tool-buttons-block">
        <div class="dashboard-tool-button">
        <router-link 
            to="/dashboard-import-csv" 
            class="btn btn-primary-outlined">
            {{$t('Import')}}
        </router-link>
    </div>

        <div class="dashboard-tool-button">
            <button class="btn btn-primary-outlined">{{$t('Export')}}</button>
        </div>
        <div class="dashboard-tool-button">
            <button id="btn-delete" class="btn btn-grey-outlined">{{$t('Delete')}}</button>
        </div>
        <div class="dashboard-tool-button">
            <div class="btn"><i class="houzez-icon icon-single-neutral-circle mr-2 grey"></i>{{$t('36 Records')}}</div>
        </div>    
    </div><!-- dashboard-tool-buttons-block -->
    
    <div class="dashboard-tool-search-block">
        <div class="dashboard-crm-search-wrap">
            <div class="d-flex">
                <div class="flex-grow-1">
                    <div class="dashboard-crm-search">
                        <div class="d-flex">
                            <div class="form-group">
                                <div class="search-icon">
                                    <input type="text" class="form-control" :placeholder="$t('Search')">
                                </div><!-- search-icon -->
                            </div><!-- form-group -->
                            <button type="submit" class="btn btn-search btn-secondary">{{$t('Search')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- dashboard-crm-search-wrap -->
    </div><!-- dashboard-tool-search-block -->
    
</div><!-- dashboard-tool-block -->


</template>

<script setup>

    document.addEventListener("DOMContentLoaded", function() {
        var checkbox = document.getElementById("checkbox-delete");
        var button = document.getElementById("btn-delete");

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                button.classList.remove("btn-grey-outlined");
                button.classList.add("btn-primary");
            } else {
                button.classList.remove("btn-primary");
                button.classList.add("btn-grey-outlined");
            }
        });
    });

</script>