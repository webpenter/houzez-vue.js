<template>
    <div class="property-mortgage-calculator-wrap property-mortgage-calculator-wrap-v2 property-section-wrap" id="property-mortgage-calculator-wrap">
    <div class="block-wrap">
        <div class="block-title-wrap">
            <h2>Morgage Calculator</h2>
        </div><!-- block-title-wrap -->
        <div class="block-content-wrap">
            <form id="calculator-form">
                <div class="top-form-wrap">
                    <div class="container-fluid">
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="The total cost of the property, including all fees and charges.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="homePrice">Home Price</label>
                                    <input class="form-control form-control-lg home-price-input" type="text" id="homePrice" value="$750,000">
                                </div><!-- form-group -->
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="The initial payment made by a home buyer, usually expressed as a percentage of the total home price, to secure the loan.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="downPaymentPercentage">Down Payment</label>
                                    <div class="down-payment-form-wrap">
                                        <input class="form-control form-control-lg down-payment-price-input" type="text" id="downPaymentPrice" value="$75,000">
                                        <input class="form-control form-control-lg down-payment-percentage-input" type="text" id="downPaymentPercentage" value="10%">
                                    </div>
                                </div><!-- form-group -->
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="The rate charged by a lender for borrowing money, expressed as a percentage of the loan amount and usually calculated on an annual basis.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="downPaymentPercentage">Interest Rate</label>
                                    <input class="form-control form-control-lg interest-rate-input" type="text" id="annualInterestRate" value="3.5%">
                                </div><!-- form-group -->
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="Loan term is the length of time a borrower agrees to pay back a loan.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="loanTermInYears">Loan Term</label>
                                    <input class="form-control form-control-lg loan-term-input" type="text" id="loanTermInYears" value="20 Years">
                                </div><!-- form-group -->
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="Property Tax refers to a tax levied on real estate by the government, typically based on the value of the property.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="annualPropertyTaxRate">Property Tax</label>
                                    <input type="text" class="form-control form-control-lg property-tax-input" id="annualPropertyTaxRate"value="2%">
                                </div><!-- form-group -->
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="Home insurance protects homeowners from financial losses caused by damages to their property and possessions.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="annualHomeInsurance">Home Insurance</label>
                                    <input class="form-control form-control-lg home-insurance-input" type="text" id="annualHomeInsurance" value="$1,500">
                                </div><!-- form-group -->
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="Monthly Homeowner Association Fees.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="monthlyHOAFees">Monthly HOA</label>
                                    <input class="form-control form-control-lg monthly-hoa-input" type="text" id="monthlyHOAFees" value="$250">
                                </div><!-- form-group -->
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <span class="form-tool-tip" href="#" data-toggle="tooltip" data-placement="top" title="Insurance for mortgage lenders in case borrower defaults.">
                                        <i class="fave-icon fave-icon-info"></i> 
                                    </span>
                                    <label for="pmi">PMI</label>
                                    <input class="form-control form-control-lg pmi-input" type="text" id="pmi" value="3%">
                                </div><!-- form-group -->
                            </div>
                        </div><!-- form-row -->
                    </div><!-- container-fluid -->    
                </div><!-- top-form-wrap -->
            </form><!-- #calculator-form -->                
	        <div class="morgage-chart-results-wrap">
			    <canvas id="chart" class="morgage-chart" width="400" height="400"></canvas><!-- #chart -->        
			    <div id="results" class="morgage-results"></div><!-- #results -->            
			</div><!-- chart-results-wrap -->
        </div><!-- block-content-wrap -->

    </div><!-- block-wrap -->
</div><!-- property-morgage-calculator-wrap -->



</template>
<script setup></script>