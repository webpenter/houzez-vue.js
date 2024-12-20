<template>
    <section class="frontend-submission-page">
            <div class="dashaboard-snake-nav">
                <div class="d-flex justify-content-between">
                    <div class="step-block text-center active">Create Listing</div>
                    <div class="step-block text-center">Select Package</div>
                    <div class="step-block text-center">Payment</div>
                    <div class="step-block text-center">Done</div>
                </div>
            </div><!-- dashaboard-snake-nav -->
            <div class="container">
                <div class="alert alert-success" role="alert">
                    Settings saved successfully.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div><!-- alert -->
                <div class="alert alert-danger" role="alert">
                    Something went wrong.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div><!-- alert -->

                <div class="row">
                    <div class="col-12">
                        <!-- <?php include 'inc/dashboard/property/section-description-and-price.php';?>
                        <?php include 'inc/dashboard/property/section-details.php';?>
                        <?php include 'inc/dashboard/property/section-features.php';?>
                        <?php include 'inc/dashboard/property/section-energy-class.php';?>
                        <?php include 'inc/dashboard/property/section-location.php';?>
                        <?php include 'inc/dashboard/property/section-media.php';?>
                        <?php include 'inc/dashboard/property/section-360-virtual-tour.php';?>
                        <?php include 'inc/dashboard/property/section-floor-plans.php';?>
                        <?php include 'inc/dashboard/property/section-sub-properties.php';?>
                        <?php include 'inc/dashboard/property/section-contact-information.php';?>
                        <?php include 'inc/dashboard/property/section-attachments.php';?>
                        <?php include 'inc/dashboard/property/section-private-notes.php';?>
                        <?php include 'inc/dashboard/property/section-account.php';?> -->
                    </div>
                </div><!-- row -->
                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <button class="btn btn-primary-outlined" onclick="window.location.href='#'">Cancel</button>  
                    <button class="btn btn-primary" onclick="window.location.href='add-new-property-frontend-single-page-step-2.php'">Next <i class="houzez-icon icon-arrow-right-1 ml-2"></i></button>    
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </div><!-- container -->
        </section><!-- frontend-submission-page -->
</template>

<script setup>
</script>
