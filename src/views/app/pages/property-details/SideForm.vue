<template>
  <div class="col-lg-4 col-md-12 position-relative">
    <div class="property-form-tabs position-sticky top-0 left-0 right-0">
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
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="property-schedule-tour-form-wrap d-flex justify-content-center">
              <div class="carousel-container-time">
                <div class="slideshow-wrapper">
                  <div class="slideshow-dates" id="dateCarousel">
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
                <button class="prev-date" onclick="plusSlides(-1)">&#10094;</button>
                <button class="next-date" onclick="plusSlides(1)">&#10095;</button>
              </div>
            </div>
          </div>
          <div class="col-12 ">
            <div class="container">
              <div class="property-schedule-tour-form-title my-4 fw-bold">
                Tour Type
              </div>
              <div class="row">
                <div class="col-6 mb-1">
                  <div
                      class="in-person border rounded-1 border-primary text-center p-2 d-flex justify-content-center">
                    <a href="#" class="text-primary text-decoration-none">
                      In Person
                    </a>
                  </div>
                </div>
                <div class="col-6 mb-1">
                  <div class="in-person rounded-1 text-center p-2 d-flex justify-content-center border shadow-sm"
                       style="border: 1px solid #dce0e0;">
                    <a href="#" class=" text-decoration-none">
                      Video Chat</a>
                  </div>
                </div>
                <div class="col-12 my-1">
                  <input type="text" class="form-control" placeholder="Time">
                </div>
                <div class="col-12 my-1">
                  <input type="text" class="form-control" placeholder="Name">
                </div>
                <div class="col-12 my-1">
                  <input type="text" class="form-control" placeholder="Phone">
                </div>
                <div class="col-12 my-1">
                  <input type="text" class="form-control" placeholder="Email">
                </div>
                <div class="col-12 my-1">
                                                        <textarea class="form-control" name="message" rows="2"
                                                                  placeholder="Enter your Message"></textarea>
                </div>
                <div class="gdpr-text-wrap mt-2 mb-4">
                  <button class="btn bg-success btn-secondary w-100">
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

</template>

<script setup></script>