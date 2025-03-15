<template>
  <div class="Floor-Plans mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div class="pb-5 border-bottom">
      <h5>Floor Plans</h5>
    </div><!-- block-title-wrap -->
    <div class="block-content-wrap my-4">
      <div class="accordion">
        <div class="accordion-tab border-bottom floor-plan-wrap">
          <div class="accordion-header">
            <div class="row">
              <div class="flex-grow-1 col-lg-2 col-md-2 col-sm-2 col-12">
                <p class="py-2">First Floor</p>
              </div>
              <div class="col-lg-10 col-md-10 col-sm-10 col-12">
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-size">
                    Size:
                    <p class="ms-1 fw-bold"> 1267&nbsp;Sqft</p>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-room">
                    <i class="fa-solid fa-bed"></i>
                    <p class="ms-1 fw-bold">670&nbsp;Sqft</p>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-bath">
                    <i class="fa-solid fa-shower"></i>
                    <p class="ms-1 fw-bold">530&nbsp;Sqft</p>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-price">
                    Price:
                    <p class="ms-1 fw-bold">$1,650</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- d-flex -->
          </div>
          <!-- accordion-header -->
        </div>
        <div class="accordion-tab border-bottom floor-plan-wrap">
          <div class="accordion-header">
            <div class="row">
              <div class="flex-grow-1 col-lg-2 col-md-2 col-sm-2 col-12">
                <p class="py-2">Second&nbsp;Floor</p>
              </div>
              <div class="col-lg-10 col-md-10 col-sm-10 col-12">
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-size">
                    Size:
                    <p class="ms-1 fw-bold"> 1347&nbsp;Sqft</p>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-room">
                    <i class="fa-solid fa-bed"></i>
                    <p class="ms-1 fw-bold">543&nbsp;Sqft</p>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-bath">
                    <i class="fa-solid fa-shower"></i>
                    <p class="ms-1 fw-bold">228&nbsp;Sqft</p>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-6 col-6 fp-price">
                    Price:
                    <p class="ms-1 fw-bold">$1,600</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- d-flex -->
          </div>
          <!-- accordion-header -->
        </div>
      </div>
    </div>
    <div class="block-wrap mt-5">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="property-schedule-tour-image h-100">
            <img src="@/assets/img/client-side/home2.png" class="img-fluid w-100 h-100" alt="">
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="property-form-tabs">
            <div class="row">
              <div class="col-6">
                <a href="" class="tab-title">
                  <h2>Schedule a tour</h2>
                </a>
              </div>
              <div class="col-6">
                <a href="" class="tab-title">
                  <h2>Request Info</h2>
                </a>
              </div>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div
                      class="property-schedule-tour-form-wrap d-flex justify-content-center">
                    <div class="carousel-container-time">
                      <div class="slideshow-wrapper">
                        <div class="slideshow-dates"
                             id="dateCarousel">
                          <div class="Slides-date active">
                            <div class="week">Sun</div>
                            <div class="day">12</div>
                            <div class="month">Mar</div>
                          </div>
                          <div class="Slides-date">
                            <div class="week">Mon</div>
                            <div class="day">13</div>
                            <div class="month">Mar</div>
                          </div>
                          <div class="Slides-date">
                            <div class="week">Tue</div>
                            <div class="day">14</div>
                            <div class="month">Mar</div>
                          </div>
                          <div class="Slides-date">
                            <div class="week">Wed</div>
                            <div class="day">15</div>
                            <div class="month">Mar</div>
                          </div>
                          <div class="Slides-date">
                            <div class="week">Thu</div>
                            <div class="day">16</div>
                            <div class="month">Mar</div>
                          </div>
                          <div class="Slides-date">
                            <div class="week">Fri</div>
                            <div class="day">17</div>
                            <div class="month">Mar</div>
                          </div>
                          <div class="Slides-date">
                            <div class="week">Sat</div>
                            <div class="day">18</div>
                            <div class="month">Mar</div>
                          </div>
                        </div>
                      </div>
                      <button class="prev-date"
                              onclick="plusSlides(-1)">&#10094;</button>
                      <button class="next-date"
                              onclick="plusSlides(1)">&#10095;</button>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="container">
                    <div
                        class="property-schedule-tour-form-title mb-4 fw-bold">
                      Tour Type</div>
                    <div class="row">
                      <div class="col-6 mb-1">
                        <div
                            class="in-person border rounded-1 border-primary text-center p-2 d-flex justify-content-center">
                          <a href="#"
                             class="text-primary text-decoration-none">In
                            Person</a>
                        </div>
                      </div>
                      <div class="col-6 mb-1">
                        <div class="in-person rounded-1 text-center p-2 d-flex justify-content-center border shadow-sm"
                             style="border: 1px solid #dce0e0;">
                          <a href="#"
                             class=" text-decoration-none">
                            Video Chat</a>
                        </div>
                      </div>
                      <div class="col-12 my-1">
                        <input type="text" class="form-control"
                               placeholder="Time">
                      </div>
                      <div class="col-12 my-1">
                        <input type="text" class="form-control"
                               placeholder="Name">
                      </div>
                      <div class="col-12 my-1">
                        <input type="text" class="form-control"
                               placeholder="Phone">
                      </div>
                      <div class="col-12 my-1">
                        <input type="text" class="form-control"
                               placeholder="Email">
                      </div>
                      <div class="col-12 my-1">
                                                                            <textarea class="form-control"
                                                                                      name="message" rows="3"
                                                                                      placeholder="Enter your Message"></textarea>
                      </div>
                      <div class="gdpr-text-wrap mt-2 mb-4">
                        By submitting this form I agree to <a
                          class="text-primary">Terms of
                        Use</a>
                      </div>
                      <button
                          class="btn bg-success btn-secondary btn-full-width">
                        Submit a Tour Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>