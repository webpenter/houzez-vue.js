<template>
  <div class="Contact-Information mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div
        class="pb-lg-5 pb-md-3 pb-sm-2 border-bottom d-flex justify-content-between align-items-center">
      <h5>Contact Information</h5>
      <a class="btn btn-primary btn-slim">
        View Listings
      </a>
    </div><!-- block-title-wrap -->
    <div class="block-content-wrap mt-4">
      <form method="post" action="#">
        <div class="agent-details">
          <div class="d-flex align-items-center">
            <div class="agent-image"><a
                href="https://demo01.houzez.co/agency/modern-house-real-estate/"><img
                class="rounded" alt="Modern House Real Estate"
                width="80" height="80"
                data-cfsrc="https://demo01.houzez.co/wp-content/uploads/2016/10/Artboard-2-Copy-150x150.jpg"
                src="https://demo01.houzez.co/wp-content/uploads/2016/10/Artboard-2-Copy-150x150.jpg"></a>
            </div>
            <div class="agent-information list-unstyled">
              <p class="agent-name"><i class="fa-solid me-1 fa-user"></i>
                Modern House Real Estate</p>
              <div class="agent-phone-wrap clearfix">
                <i class="fa-solid me-1 fa-phone"></i><span
                  class="agent-phone "><a href="tel:8904567651">(890)
                                                                    456-7651</a></span>
                <i class="fa-solid me-1 fa-mobile"></i>
                <span class="agent-phone "><a href="tel:8904564357">(890)
                                                                    456-4357</a>
                                                            </span>
                <i class="fa-solid me-1 fa-whatsapp"></i>
                <span>
                                                                WhatsApp
                                                            </span>
              </div>
              <div class="agent-social-media">
                                                            <span>
                                                                <a class="btn-facebook" target="_blank" href="#">
                                                                    <i class="fa-solid fa-facebook me-1"></i>
                                                                </a>
                                                            </span>
                <span>
                                                                <a class="btn-instagram" target="_blank" href="#">
                                                                    <i class="fa-solid fa-facebook me-1"></i>
                                                                </a>
                                                            </span>
                <span>
                                                                <a class="btn-twitter" target="_blank" href="#">
                                                                    <i class="fa-solid fa-facebook me-1"></i>
                                                                </a>
                                                            </span>
                <span>
                                                                <a class="btn-linkedin" target="_blank" href="#">
                                                                    <i class="fa-solid fa-facebook me-1"></i>
                                                                </a>
                                                            </span>
                <span>
                                                                <a class="btn-google-plus" target="_blank" href="#">
                                                                    <i class="fa-solid fa-facebook me-1"></i>
                                                                </a>
                                                            </span>
                <span>
                                                                <a class="btn-youtube" target="_blank" href="#">
                                                                    <i class="fa-solid fa-facebook me-1"></i>
                                                                </a>
                                                            </span>
              </div>
            </div>
          </div>
        </div>
        <div
            class="block-title-wrap mt-3 py-lg-4 py-md-3 py-sm-2 py-1 border-bottom">
          <h5>Enquire About This Property</h5>
        </div>

        <div class="form_messages"></div>

        <div class="row">

          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="my-2 fw-bold">Name</div>
              <input class="form-control" name="name"
                     placeholder="Enter your name" type="text">
            </div>
          </div><!-- col-md-6 col-sm-12 -->

          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="my-2 fw-bold">Phone</div>
              <input class="form-control" name="mobile"
                     placeholder="Enter your Phone" type="text">
            </div>
          </div><!-- col-md-6 col-sm-12 -->

          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="my-2 fw-bold">Email</div>
              <input class="form-control" name="email"
                     placeholder="Enter your email" type="email">
            </div>
          </div><!-- col-md-6 col-sm-12 -->
          <div class="col-md-6 col-sm-12">
            <div class="form-group">
              <div class="my-2 fw-bold">I'm a</div>
              <div class="dropdown bootstrap-select">
                <select name="user_type" class="selectpicker form-control"
                        title="Select">
                  <option class="bs-title-option" value="">Select</option>
                  <option value="buyer">I'm a buyer</option>
                  <option value="tennant">I'm a tennant</option>
                  <option value="agent">I'm an agent</option>
                  <option value="other">Other</option>
                </select>

                <div class="dropdown-menu ">
                  <div class="inner show" role="listbox" id="bs-select-2"
                       tabindex="-1">
                    <ul class="dropdown-menu inner show"
                        role="presentation"></ul>
                  </div>
                </div>
              </div><!-- selectpicker -->
            </div>
          </div><!-- col-md-6 col-sm-12 -->


          <div class="col-sm-12 col-xs-12">
            <div class="form-group form-group-textarea">
              <div>Message</div>
              <textarea class="form-control hz-form-message" name="message"
                        rows="5"
                        placeholder="Enter your Message">Hello, I am interested in [Renovated apartment at last floor]</textarea>
            </div>
          </div><!-- col-sm-12 col-xs-12 -->


          <div class="col-sm-12 col-12">
            <div class="form-group">
              <div
                  class="control control--checkbox m-0 hz-terms-of-use hz-no-gdpr-checkbox">
                <div class="gdpr-text-wrap py-3">
                  By submitting this form I agree to
                  <a href="" class="text-primary">Terms of Use</a>
                </div>
                <button class="btn btn-secondary bg-success">
                  <span class="btn-loader houzez-loader-js"></span>
                  Request
                  Information
                </button>
              </div>
            </div><!-- form-group -->
          </div>
        </div><!-- row -->
      </form>

    </div><!-- block-content-wrap -->
  </div>
</template>

<script setup>
</script>