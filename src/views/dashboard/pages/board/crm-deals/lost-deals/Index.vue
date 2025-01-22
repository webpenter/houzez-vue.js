<template>
    <DashboardHeader heading="Deals">
        <a class="btn btn-primary" href="#">Add New Deal</a>
    </DashboardHeader>
    <section class="dashboard-content-wrap">
        <!-- <div class="dashboard-content-inner-wrap">
            <div class="dashboard-content-block-wrap">
                <div class="dashboard-content-block">
                    You don't have any deals at this moment. <a class="open-close-slide-panel" href="#"><strong>Add New Deal</strong></a>
                </div>
            </div>
        </div> -->
        <div class="deals-table-wrap">

            <ul class="nav nav-pills deals-nav-tab" role="tablist">
                <li class="nav-item">
                    <router-link 
                        class="nav-link active-deals active" 
                        to="/dashboard/crm-deals">
                        Active Deals (6)
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link 
                        class="nav-link won-deals" 
                        to="/dashboard/crm-won-deals">
                        Won Deals (2)
                    </router-link>
                </li>
                <li class="nav-item lost-deals">
                    <router-link 
                        class="nav-link" 
                        to="/dashboard/crm-lost-deals">
                        Lost Deals (2)
                    </router-link>
                </li>
            </ul>
            <div class="dashboard-content-block">
                You don't have any deals at this moment. <a class="open-close-slide-panel" href="#"><strong>Add New Deal</strong></a>
            </div>
        </div><!-- deals-table-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup></script>
