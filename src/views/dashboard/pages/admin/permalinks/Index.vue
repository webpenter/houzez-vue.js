<template>
    <DashboardHeader heading="Permalinks">

    </DashboardHeader>

    <section class="dashboard-content-wrap">
        <div class="dashboard-content-inner-wrap">
            <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <div class="form-group">
                            <label>Property Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="property"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property Type Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="property-type"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property Feature Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="feature"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property Status Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="status"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property Country Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="country"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property State Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="state"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property City Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="city"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property Area Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="area"  type="text">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Property Label Slug</label>
                            <div class="input-group">
                                <span>https://houzez.webpenter.com/</span>
                                <input class="form-control" value="label"  type="text">
                            </div>
                        </div>
                    </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->
                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard.my-properties' }">
                        Cancel
                    </RouterLink>
                    <SaveBtn />
                </div><!-- add-new-listing-bottom-nav-wrap -->
            </form>
        </div><!-- dashboard-content-inner-wrap -->
    </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import SaveBtn from '@/views/dashboard/components/SaveBtn.vue';
</script>


<style>
    .input-group span {
        background: #f4f4f4;
        padding: 10px;
        font-size: 14px;
        white-space: nowrap;
    }

    .input-group input,
    select {
        flex: 1;
        border: none;
        padding: 8px;
        font-size: 14px;
        outline: none;
    }
</style>