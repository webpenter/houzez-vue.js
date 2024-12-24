<template>
    <Header heading="My Profile">
        <a class="btn btn-primary" href="#">View Public Profile</a>
    </Header>
    <section class="dashboard-content-wrap">
            <div class="dashboard-content-inner-wrap">
                <div class="dashboard-content-block-wrap">
                    <h2>Information</h2>
                    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <img class="img-fluid" src="http://placehold.it/300x300" alt="thumb">
                                <button type="button" class="btn btn-primary btn-full-width mt-3">Update Profile Picture</button>
                                <small class="form-text text-muted text-center">Minimum 300 x 300 px</small>
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Username</label>
                                            <input class="form-control" name="name" placeholder="Enter number of bedrooms" type="text" disabled value="Username">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input class="form-control" name="name" placeholder="Enter your email" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input class="form-control" name="name" placeholder="Enter your first name" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Last Name</label>
                                            <input class="form-control" name="name" placeholder="Enter your last name" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Title / Position</label>
                                            <input class="form-control" name="name" placeholder="Enter your title" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>License</label>
                                            <input class="form-control" name="name" placeholder="Enter your license" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Tax Number</label>
                                            <input class="form-control" name="name" placeholder="Enter your tax number" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input class="form-control" name="name" placeholder="Enter your phone number" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Language</label>
                                            <input class="form-control" name="name" placeholder="English, Spanish, French" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Company Name</label>
                                            <input class="form-control" name="name" placeholder="Enter your company name" type="text">
                                        </div><!-- form-group -->
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Address</label>
                                            <textarea class="form-control" name="message" rows="3" placeholder="Enter your address"></textarea>
                                        </div><!-- form-group -->
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>About me</label>
                                            <textarea class="form-control" name="message" rows="6" placeholder="Enter a description about you"></textarea>
                                        </div><!-- form-group -->
                                    </div><!-- col-md-6 col-sm-12 -->
                                </div><!-- row -->
                                <button class="btn btn-success">Update Profile</button>
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->

                    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <h2>Social Media</h2>
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Facebook</label>
                                            <input class="form-control" name="name" placeholder="Enter the Facebook URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Twitter</label>
                                            <input class="form-control" name="name" placeholder="Enter the Twitter URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Linkedin</label>
                                            <input class="form-control" name="name" placeholder="Enter the Linkedin URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Instagram</label>
                                            <input class="form-control" name="name" placeholder="Enter the Instagram URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Google Plus</label>
                                            <input class="form-control" name="name" placeholder="Enter the Google Plus URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Youtube</label>
                                            <input class="form-control" name="name" placeholder="Enter the Youtube URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Pinterest</label>
                                            <input class="form-control" name="name" placeholder="Enter the Pinterest URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Vimeo</label>
                                            <input class="form-control" name="name" placeholder="Enter the Vimeo URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Skype</label>
                                            <input class="form-control" name="name" placeholder="Enter your Skupe ID" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Website</label>
                                            <input class="form-control" name="name" placeholder="Enter your website URL" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                </div><!-- row -->
                                <button class="btn btn-success">Update Profile</button>
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->

                    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <h2>Change Password</h2>
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label>Old Password</label>
                                            <input class="form-control" name="name" placeholder="Enter your current password" type="text">
                                        </div>
                                    </div><!-- col-md-12 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>New Password</label>
                                            <input class="form-control" name="name" placeholder="Enter your new password" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <label>Confirm New Password</label>
                                            <input class="form-control" name="name" placeholder="Enter your new password again" type="text">
                                        </div>
                                    </div><!-- col-md-6 col-sm-12 -->
                                </div><!-- row -->
                                <button class="btn btn-success">Update Password</button>
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->

                    <div class="dashboard-content-block">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <h2>Delete account</h2>
                            </div><!-- col-md-3 col-sm-12 -->

                            <div class="col-md-9 col-sm-12">
                                <div class="row">
                                    <div class="col-md-4 col-sm-12">
                                        <button class="btn btn-danger">Delete My Account</button>
                                    </div><!-- col-md-12 col-sm-12 -->
                                </div><!-- row -->
                            </div><!-- col-md-9 col-sm-12 -->
                        </div><!-- row -->
                    </div><!-- dashboard-content-block -->

                </div><!-- dashboard-content-block-wrap -->
            </div><!-- dashboard-content-inner-wrap -->
        </section><!-- dashboard-content-wrap -->
</template>

<script setup>
import Header from '../../components/Header.vue';
</script>