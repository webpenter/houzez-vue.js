<template>
    <DashboardHeader heading="Add New Property">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <SnakeNav active="payment"/>
            <div class="d-flex display-block-on-tablet">
                <div class="order-2">
                    <MembershipCompleteOrderTable/>
                </div><!-- order-2 -->
                <div class="order-1 flex-grow-1">
                    <div class="dashboard-content-inner-wrap">
                        <div class="dashboard-content-block-wrap">
                            <h2>Account Information</h2>
                            <div class="dashboard-content-block">
                                <CreateAccountForm/>
                            </div><!-- dashboard-content-block -->
                        </div><!-- dashboard-content-block-wrap -->    
                        <div class="dashboard-content-block-wrap">
                            <h2>Payment Method</h2>
                            <div class="dashboard-content-block">
                                <DashboardSelectPayment/>
                                <!-- <button type="button" class="btn btn-success btn-full-width mt-4 mb-4" onclick="window.location.href='dashboard-agent-add-new-property-payment-completed.php'">Complete Membership</button> -->
                                <RouterLink :to="{name:'dashboard.create-listing.payment-completed'}" class="btn btn-success btn-full-width mt-4 mb-4">
                                    Complete Membership
                                </RouterLink>
                                <div class="text-center">By clicking "Complete Membership" you agree to our <a href="#">Terms & Conditions</a></div>
                            </div><!-- dashboard-content-block -->
                        </div><!-- dashboard-content-block-wrap -->
                    </div><!-- dashboard-content-inner-wrap -->
                </div><!-- order-1 -->
            </div><!-- d-flex -->
        </section><!-- dashboard-content-wrap -->
</template>
    
<script setup>
import MembershipCompleteOrderTable from '@/views/inc/dashboard/MembershipCompleteOrderTable.vue';
import SnakeNav from '../../components/SnakeNav.vue';
import CreateAccountForm from '@/views/inc/dashboard/CreateAccountForm.vue';
import DashboardSelectPayment from '@/views/inc/dashboard/DashboardSelectPayment.vue';
</script>
    