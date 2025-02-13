<template>
    <DashboardHeader heading="Add New Property">
    </DashboardHeader>
        <section class="dashboard-content-wrap">
            <SnakeNav active="package"/>
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <div class="row row-no-padding">
                        <div class="col-md-3 col-sm-6">
                            <MemberShipPackage/>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <MemberShipPackage/>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <MemberShipPackage/>
                        </div>
                    </div>
                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import MembershipPackagesTable from '@/views/inc/dashboard/MembershipPackagesTable.vue';
import SnakeNav from '../../components/SnakeNav.vue';
import MemberShipPackage from '@/views/modules/MemberShipPackage.vue';

</script>