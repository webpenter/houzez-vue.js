<template>
  <div class="Mortgage-Calculator mt-3 p-lg-4 p-md-3 p-sm-2 p-1">
    <div class="block-title-wrap pb-5 border-bottom">
      <h5>Mortgage Calculator</h5>
    </div><!-- block-title-wrap -->
    <div class="row my-4">
      <div
          class="col-lg-6 col-md-6 col-sm-6 col-12 my-md-2 my-2 d-flex align-items-center justify-content-center">
        <div class="circle"></div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 mb-md-3">
        <div class="list-unstyled">
          <div
              class="d-flex border-bottom align-items-center justify-content-between">
            <div class="fw-bold d-flex align-items-center">
              <i class="fa-solid fa-circle mr-1"></i>
              <p class="py-2 ms-2">Down Payment</p>
            </div>
            <span id="downPaymentResult">$37,800.00</span>
          </div>

          <div
              class="d-flex border-bottom align-items-center justify-content-between">
            <div class="fw-bold d-flex align-items-center">
              <i class="fa-solid fa-circle mr-1"></i>
              <p class="py-2 ms-2">Loan Amount</p>
            </div>
            <span id="loadAmountResult">$214,200.00</span>
          </div>
          <div
              class="d-flex border-bottom align-items-center justify-content-between">
            <div class="fw-bold d-flex align-items-center">
              <i class="fa-solid fa-circle mr-1"></i>
              <p class="py-2 ms-2">Monthly Mortgage Payment</p>
            </div>
            <span id="monthlyMortgagePaymentResult">$1,242.27</span>
          </div>
          <div
              class="d-flex border-bottom align-items-center justify-content-between">
            <div class="fw-bold d-flex align-items-center">
              <i class="fa-solid fa-circle mr-1"></i>
              <p class="py-2 ms-2">Property Tax</p>
            </div>
            <span id="monthlyPropertyTaxResult">$252.00</span>
          </div>
          <div
              class="d-flex border-bottom align-items-center justify-content-between">
            <div class="fw-bold d-flex align-items-center">
              <i class="fa-solid fa-circle mr-1"></i>
              <p class="py-2 ms-2">Home Insurance</p>
            </div>
            <span id="monthlyHomeInsuranceResult">$166.67</span>
          </div>
          <div
              class="d-flex border-bottom align-items-center justify-content-between">
            <div class="fw-bold d-flex align-items-center">
              <i class="fa-solid fa-circle mr-1"></i>
              <p class="py-2 ms-2">PMI</p>
            </div>
            <span id="monthlyPMIResult">$0.00</span>
          </div>
          <div
              class="d-flex border-bottom align-items-center justify-content-between">
            <div class="fw-bold d-flex align-items-center">
              <i class="fa-solid fa-circle mr-1"></i>
              <p class="py-2 ms-2">Monthly HOA Fees</p>
            </div>
            <span id="monthlyHOAResult">$250.00</span>
          </div>
        </div>
      </div>
      <!-- d-flex -->
      <!-- row -->
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">Total Amount</div>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input id="homePrice" type="text" class="form-control"
                 placeholder="Total Amount" value="252000">
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">Down Payment</div>
        <div class="input-group">
          <span class="input-group-text">%</span>
          <input id="downPaymentPercentage" type="text" class="form-control"
                 placeholder="Down Payment" value="15">
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">Interest Rate</div>
        <div class="input-group">
          <span class="input-group-text">%</span>
          <input id="annualInterestRate" type="text" class="form-control"
                 placeholder="Interest Rate" value="3.5">
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">Loan Terms (Years)</div>
        <div class="input-group">
                                                <span class="input-group-text">
                                                    <i class="bi bi-calendar"></i>
                                                </span>
          <input id="loanTermInYears" type="text" class="form-control"
                 placeholder="Loan Terms (Years)" value="20">
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">Property Tax</div>
        <div class="input-group">
          <span class="input-group-text">%</span>
          <input id="annualPropertyTaxRate" type="text" class="form-control"
                 placeholder="Property Tax" value="1.2">
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">Home Insurance</div>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input id="annualHomeInsurance" type="text" class="form-control"
                 placeholder="Home Insurance" value="2000">
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">Monthly HOA Fees</div>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input id="monthlyHOAFees" type="text" class="form-control"
                 placeholder="Monthly HOA Fees" value="250">
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
        <div class="fs-normal py-2 fw-bold">PMI</div>
        <div class="input-group">
          <span class="input-group-text">%</span>
          <input id="pmi" type="text" class="form-control" placeholder="PMI">
        </div>
      </div>
    </div>
    <!-- block-content-wrap -->
  </div>
</template>

<script setup>
</script>