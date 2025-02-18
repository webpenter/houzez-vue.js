<template>
    <DashboardHeader heading="Custom Post Type">
    </DashboardHeader>

    <section class="dashboard-content-wrap dashboard-add-new-listing">
        <div class="dashboard-content-inner-wrap">
            <form @submit.prevent="formSubmit">
                <div class="dashboard-content-block-wrap">
                    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Agents</label>
                                    <div>
                                        <select class="form-control">
                                            <option value="1">Enable</option>
                                            <option value="2">Disable</option>
                                        </select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Agencies</label>
                                    <div>
                                        <select class="form-control">
                                            <option value="1">Enable</option>
                                            <option value="2">Disable</option>
                                        </select>
                                    </div>
                                </div> <!-- form-group -->
                            </div> <!-- col-md-4 col-sm-12 -->
                        </div><!-- row -->
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Houzez Packages</label>
                                    <div>
                                        <select class="form-control">
                                            <option value="1">Enable</option>
                                            <option value="2">Disable</option>
                                        </select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Houzez Invoices</label>
                                    <div>
                                        <select class="form-control">
                                            <option value="1">Enable</option>
                                            <option value="2">Disable</option>
                                        </select>
                                    </div>
                                </div> <!-- form-group -->
                            </div> <!-- col-md-4 col-sm-12 -->
                        </div><!-- row -->
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Partners</label>
                                    <div>
                                        <select class="form-control">
                                            <option value="1">Enable</option>
                                            <option value="2">Disable</option>
                                        </select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>Testimonials</label>
                                    <div>
                                        <select class="form-control">
                                            <option value="1">Enable</option>
                                            <option value="2">Disable</option>
                                        </select>
                                    </div>
                                </div> <!-- form-group -->
                            </div> <!-- col-md-4 col-sm-12 -->
                        </div><!-- row -->
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label>User Packages Info</label>
                                    <div>
                                        <select class="form-control">
                                            <option value="1">Enable</option>
                                            <option value="2">Disable</option>
                                        </select>
                                    </div>
                                </div><!-- form-group -->
                            </div><!-- col-md-4 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->
                </div><!-- dashboard-content-block-wrap -->
                <div class="d-flex justify-content-between add-new-listing-bottom-nav-wrap">
                    <RouterLink class="btn btn-primary-outlined" :to="{ name: 'dashboard.my-properties' }">
                        Cancel
                    </RouterLink>
                    <SaveBtn />
                </div>
                <!-- add-new-listing-bottom-nav-wrap -->
            </form>
        </div>
        <!-- dashboard-content-inner-wrap -->
    </section>
    <!-- dashboard-content-wrap -->
</template>

<script setup>
import SaveBtn from "@/views/dashboard/components/SaveBtn.vue";
</script>
