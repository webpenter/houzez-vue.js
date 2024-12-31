<template>
    <DashboardHeader heading="Invoices">
        <!-- <a class="btn btn-primary" href="#">View Public Profile</a> -->
    </DashboardHeader>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <h2>Search Invoices</h2>
                    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label>Start date</label>
                                    <div class="input-group date">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="houzez-icon icon-attachment"></i></div>
                                        </div>
                                        <input type="text" class="form-control datepicker" placeholder="Select a date" readonly>
                                    </div><!-- input-group -->
                                </div><!-- form-group -->
                            </div><!-- col-md-3 col-sm-12 -->
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label>End date</label>
                                    <div class="input-group date">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="houzez-icon icon-attachment"></i></div>
                                        </div>
                                        <input type="text" class="form-control datepicker" placeholder="Select a date" readonly>
                                    </div><!-- input-group -->
                                </div><!-- form-group -->
                            </div><!-- col-md-3 col-sm-12 -->
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label>Type</label>
                                    <select class="selectpicker form-control bs-select-hidden" title="Any" data-live-search="false" data-selected-text-format="count">
                                        <option>Any</option>
                                        <option>Listing</option>
                                        <option>Package</option>
                                        <option>Listing with featured</option>
                                        <option>Upgrade to featured</option>
                                    </select><!-- selectpicker -->
                                </div><!-- form-group -->
                            </div><!-- col-md-3 col-sm-12 -->
                            <div class="col-md-3 col-sm-12">
                                <div class="form-group">
                                    <label>Status</label>
                                    <select class="selectpicker form-control bs-select-hidden" title="Any" data-live-search="false" data-selected-text-format="count">
                                        <option>Any</option>
                                        <option>Paid</option>
                                        <option>Not Paid</option>
                                    </select><!-- selectpicker -->
                                </div><!-- form-group -->
                            </div><!-- col-md-3 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->

                    <table class="dashboard-table table-lined responsive-table">
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Billing For</th>
                                <th>Billing Type</th>
                                <th>Status</th>
                                <th>Payment Method</th>
                                <th>Total</th>
                                <th class="action-col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <InvoiceTableItem />
                            
                        </tbody>
                    </table><!-- dashboard-table -->
                    <Pagination />
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import InvoiceTableItem from '@/views/inc/dashboard/InvoiceTableItem.vue';
import Pagination from '@/views/inc/listing/Pagination.vue';

</script>