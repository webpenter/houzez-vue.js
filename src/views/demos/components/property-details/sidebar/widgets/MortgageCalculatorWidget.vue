<template>
	<div class="widget widget-wrap widget-mortgage-calculator">
		<!-- Header -->
		<div class="widget-header">
			<h3 class="widget-title">Mortgage Calculator</h3>
		</div>

		<!-- ✅ Result Block (just add this!) -->
		<div v-if="monthlyPayment !== null" class="">
			<ul>
				<li><strong>Monthly Payment:</strong> ${{ monthlyPayment.toLocaleString() }}</li>
				<li><strong>Amount Financed:</strong> ${{ financedAmount.toLocaleString() }}</li>
				<li><strong>Mortgage Payments:</strong> ${{ totalPayment.toLocaleString() }}</li>
				<li><strong>Loan Annual Cost:</strong> ${{ annualCost.toLocaleString() }}</li>
			</ul>
		</div>

		<!-- Form -->
		<div class="widget-body" style="margin-top: 20px;">
			<!-- Loan Amount -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">$</div>
					</div>
					<input type="number" v-model.number="loanAmount" class="form-control" placeholder="Total Amount" />
				</div>
			</div>

			<!-- Down Payment -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">$</div>
					</div>
					<input type="number" v-model.number="downPayment" class="form-control" placeholder="Down Payment" />
				</div>
			</div>

			<!-- Interest Rate -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">%</div>
					</div>
					<input type="number" v-model.number="interestRate" class="form-control"
						placeholder="Interest Rate" />
				</div>
			</div>

			<!-- Loan Term -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">
							<i class="houzez-icon icon-attachment"></i>
						</div>
					</div>
					<input type="number" v-model.number="loanTerm" class="form-control"
						placeholder="Loan Terms (Years)" />
				</div>
			</div>

			<!-- Payment Frequency (optional visual only) -->
			<div class="form-group">
				<select class="selectpicker form-control" v-model="paymentFrequency" title="Select">
					<option value="monthly">Monthly</option>
					<option value="biweekly">Bi-Weekly</option>
					<option value="weekly">Weekly</option>
				</select>
			</div>

			<!-- Calculate Button -->
			<button type="button" class="btn btn-search btn-secondary btn-full-width" @click="calculateMortgage">
				Calculate
			</button>
		</div>

	</div>

</template>

<script setup>
import { ref } from 'vue';

const loanAmount = ref(null);
const downPayment = ref(null);
const interestRate = ref(null);
const loanTerm = ref(null);
const paymentFrequency = ref('monthly');

const monthlyPayment = ref(null);
const financedAmount = ref(null);
const totalPayment = ref(null);
const annualCost = ref(null);

function calculateMortgage() {
	console.log('Calculating mortgage with:', {
		loanAmount: loanAmount.value,
		downPayment: downPayment.value,
		interestRate: interestRate.value,
		loanTerm: loanTerm.value,
		paymentFrequency: paymentFrequency.value
	});
	const P = (loanAmount.value || 0) - (downPayment.value || 0);
	const annualRate = (interestRate.value || 0) / 100;
	const r = annualRate / 12;
	const n = (loanTerm.value || 0) * 12;

	if (P <= 0 || r <= 0 || n <= 0) {
		monthlyPayment.value = null;
		return;
	}

	const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

	monthlyPayment.value = Math.round(M);
	financedAmount.value = Math.round(P);
	totalPayment.value = Math.round(M * n);
	annualCost.value = Math.round(M * 12);

	console.log("Mortgage Calculation Results:", {
		monthlyPayment: monthlyPayment.value,
		financedAmount: financedAmount.value,
		totalPayment: totalPayment.value,
		annualCost: annualCost.value
	});
}
</script>
<style scoped>
.widget-wrap {
	display: grid;
	grid-template-rows: auto 1fr;
}
</style>