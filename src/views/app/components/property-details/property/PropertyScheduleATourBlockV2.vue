<template>
    <div class="property-schedule-tour-wrap property-schedule-tour-wrap-v2 property-section-wrap"
        id="property-schedule-tour-wrap-v2">
        <div class="block-wrap">
            <div class="block-content-wrap">

                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="property-schedule-tour-image" style="background-image: url(img/apt.jpg);">
                            <!-- Note: this image can be the featured image -->
                        </div>
                    </div><!-- col-md-6 col-sm-12 -->
                    <div class="col-md-6 col-sm-12">
                        <div class="property-schedule-tour-form-wrap">
                            <h2>Schedule a Tour</h2>

                            <!-- <div class="alert alert-danger alert-dismissible fade show" role="alert">
							The field <strong>Name</strong> is empty.
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="alert alert-success alert-dismissible fade show" role="alert">
							Your request has been submitted. An agent will get in touch with you.
							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div> -->

                            <div class="property-schedule-tour-day-form">
                                <div class="tour-day-form-slide-arrow next">
                                    <i class="houzez-icon icon-arrow-right-1"></i>
                                </div>
                                <div class="tour-day-form-slide-arrow prev">
                                    <i class="houzez-icon icon-arrow-left-1"></i>
                                </div>
                                <div class="property-schedule-tour-day-form-slide-wrap">
                                    <div class="property-schedule-tour-day-form-slide start">
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio" checked>
                                                <span class="control__indicator">
                                                    Mon<br>
                                                    <span class="control__indicator_day">31</span><br>
                                                    Jan
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio">
                                                <span class="control__indicator">
                                                    Tue<br>
                                                    <span class="control__indicator_day">1</span><br>
                                                    Feb
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio">
                                                <span class="control__indicator">
                                                    Wed<br>
                                                    <span class="control__indicator_day">2</span><br>
                                                    Feb
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio">
                                                <span class="control__indicator">
                                                    Thu<br>
                                                    <span class="control__indicator_day">3</span><br>
                                                    Feb
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio">
                                                <span class="control__indicator">
                                                    Fri<br>
                                                    <span class="control__indicator_day">4</span><br>
                                                    Feb
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio">
                                                <span class="control__indicator">
                                                    Sat<br>
                                                    <span class="control__indicator_day">5</span><br>
                                                    Feb
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio">
                                                <span class="control__indicator">
                                                    Sun<br>
                                                    <span class="control__indicator_day">6</span><br>
                                                    Feb
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                        <div class="form-group">
                                            <label class="control control--radio">
                                                <input type="radio">
                                                <span class="control__indicator">
                                                    Mon<br>
                                                    <span class="control__indicator_day">7</span><br>
                                                    Feb
                                                </span>
                                            </label>
                                        </div>
                                        <!-- form-group -->
                                    </div>
                                </div>
                            </div>

                            <div class="property-schedule-tour-form-title">Tour type</div>

                            <div class="property-schedule-tour-type-form d-flex justify-content-between">
                                <div class="form-group">
                                    <label class="control control--radio">
                                        <input type="radio" checked>
                                        <span class="control__indicator">In Person</span>
                                    </label>
                                </div>
                                <!-- form-group -->
                                <div class="form-group">
                                    <label class="control control--radio">
                                        <input type="radio">
                                        <span class="control__indicator">Video Call</span>
                                    </label>
                                </div>
                                <!-- form-group -->
                            </div>
                            <div class="form-group">
                                <select class="selectpicker form-control bs-select-hidden" title="Choose a time"
                                    data-live-search="false">
                                    <option>10:00 am</option>
                                    <option>11:00 am</option>
                                    <option>12:00 am</option>
                                </select>
                                <!-- selectpicker -->
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="name" placeholder="Name" type="text">
                            </div>
                            <!-- <div class="form-group">
							<input class="form-control" name="phone" placeholder="Phone" type="text">
							</div> -->
                            <div class="form-group">
                                <input class="form-control" name="email" placeholder="Email" type="email">
                            </div>
                            <!-- <div class="form-group form-group-textarea">
							<textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
							</div> -->
                            <div class="form-group form-group-terms">
                                <label class="control control--checkbox">
                                    <input type="checkbox">By submitting this form I agree to <a href="#">Terms of
                                        Use</a>
                                    <span class="control__indicator"></span>
                                </label>
                            </div>
                            <!-- form-group -->
                            <button class="btn btn-secondary btn-full-width">Submit a Tour Request</button>
                        </div>
                        <!-- property-schedule-tour-wrap -->
                    </div>
                </div>
                <!-- row -->
            </div>
            <!-- block-content-wrap -->
        </div>
        <!-- block-wrap -->
    </div>
    <!-- property-schedule-tour-wrap -->


</template>