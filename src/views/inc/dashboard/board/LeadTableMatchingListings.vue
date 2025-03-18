<script setup lang="ts">
import LeadTableMatchingListingItem from './LeadTableMatchingListingItem.vue';

</script>

<template>
    <table class="dashboard-table table-lined table-hover responsive-table">
    <thead>
        <tr>
            <th>
                <label class="control control--checkbox">
                    <input type="checkbox" name="air-conditioning">
                    <span class="control__indicator"></span>
                </label>
            </th>
            <th>{{$t('ID')}}</th>
            <th>{{$t('Property')}}</th>
            <th>{{$t('Price')}}</th>
            <th>{{$t('Bedrooms')}}</th>
            <th>{{$t('Bathrooms')}}</th>
            <th>{{$t('Area')}}</th>
            <th>{{$t('Lot Area')}}</th>
            <th>{{$t('Location')}}</th>
        </tr>
    </thead>
    <tbody>
        <LeadTableMatchingListingItem />
        <LeadTableMatchingListingItem />
        <LeadTableMatchingListingItem />
        <LeadTableMatchingListingItem />
        <LeadTableMatchingListingItem />
        <LeadTableMatchingListingItem />
        <!-- <?php include 'inc/dashboard/board/lead-table-matching-listing-item.php';?>
        <?php include 'inc/dashboard/board/lead-table-matching-listing-item.php';?>
        <?php include 'inc/dashboard/board/lead-table-matching-listing-item.php';?>
        <?php include 'inc/dashboard/board/lead-table-matching-listing-item.php';?>
        <?php include 'inc/dashboard/board/lead-table-matching-listing-item.php';?>
        <?php include 'inc/dashboard/board/lead-table-matching-listing-item.php';?> -->
    </tbody>
    <tfoot>
        <tr>
            <td colspan="8">
                <label class="mr-2">{{$t('Items per page')}}</label>
                <select class="selectpicker form-control bs-select-hidden table-select-auto" title="10" data-live-search="false" data-dropdown-align-right="auto">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                </select><!-- selectpicker -->
            </td>
            <td class="text-right no-wrap">
                <div class="crm-pagination">
                    <a class="prev page-numbers" href="#"><i class="houzez-icon icon-arrow-button-left-2"></i></a>
                    <span aria-current="page" class="page-numbers current">1</span>
                    <a class="page-numbers" href="#">2</a>
                    <a class="page-numbers" href="#">3</a>
                    <a class="next page-numbers" href="#"><i class="houzez-icon icon-arrow-button-right-2"></i></a>
                </div>
            </td>
        </tr>
    </tfoot>
</table><!-- dashboard-table -->
</template>