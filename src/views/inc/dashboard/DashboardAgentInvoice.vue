<template>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <div class="invoice-wrap">
                            <div class="row">
                                <div class="col-md-9 col-sm-12">
                                    <div class="invoice-logo mb-3">
                                        
                                        <LogoColor />
                                    </div>
                                </div><!-- col-md-9 col-sm-12 -->
                                <div class="col-md-3 col-sm-12">
                                    <div class="invoice-date mb-3">
                                        <ul class="list-unstyled">
                                            <li><strong>Invoce:</strong> #00001</li>
                                            <li><strong>Date:</strong> July 9, 2019</li>
                                        </ul>
                                    </div>
                                </div><!-- col-md-3 col-sm-12 -->
                            </div><!-- row -->

                            <div class="invoice-spacer mb-5"></div>
                            
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <ul class="list-unstyled">
                                        <li><strong>To:</strong></li>
                                        <li>Mike Moore</li>
                                        <li>Email: hello@favethemes.com</li>
                                    </ul>
                                </div><!-- col-md-6 col-sm-12 -->
                                <div class="col-md-6 col-sm-12">
                                    <ul class="list-unstyled">
                                        <li><strong>Company Name:</strong></li>
                                        <li>1161 Washingtown Avenue 299</li>
                                        <li>Miami Beach 33141 FL</li>
                                        <li>Phone: (987) 654 3210</li>
                                    </ul>
                                </div><!-- col-md-6 col-sm-12 -->
                            </div><!-- row -->

                            <div class="invoice-spacer mb-5"></div>

                            <div class="invoce-content">
                                <ul class="list-unstyled">
                                    <li><strong>Billing For</strong> <span>Membership Plan Standard</span></li>
                                    <li><strong>Billing Type</strong> <span>One Time</span></li>
                                    <li><strong>Payment Method</strong> <span>Direct Bank Transfer</span></li>
                                    <li><strong>Total Price:</strong> <span>$59.00</span></li>
                                </ul>
                            </div><!-- invoce-content -->

                            <div class="invoice-spacer mb-5"></div>
                            
                            <div class="invoce-information">
                                <p><strong>Additional Information:</strong></p>
                                <p>The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.</p>
                            </div><!-- invoce-information -->
                            
                            <div class="invoice-spacer mb-5"></div>

                            <p><strong>Thank you for your business with us.</strong></p>

                        </div><!-- invoice-wrap -->
                    </div><!-- dashboard-content-block -->
                    <a href="#" class="btn btn-primary">Print Invoice</a>
                    <a href="#" class="btn btn-primary-outlined">Go Back</a>
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>
<script setup>
import LogoColor from '../nav/LogoColor.vue';
</script>