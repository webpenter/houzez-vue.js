<template>
	<div class="widget widget-wrap widget-mortgage-calculator">
		<!-- Header -->
		<div class="widget-header">
			<h3 class="widget-title">{{ $t('Mortgage Calculator') }}</h3>
		</div>

		<!-- ✅ Result Block -->
		<div v-if="monthlyPayment !== null" class="mt-3">
			<ul>
				<li><strong>{{ $t('Monthly Payment') }}:</strong> ${{ monthlyPayment.toLocaleString() }}</li>
				<li><strong>{{ $t('Amount Financed') }}:</strong> ${{ financedAmount.toLocaleString() }}</li>
				<li><strong>{{ $t('Mortgage Payments') }}:</strong> ${{ totalPayment.toLocaleString() }}</li>
				<li><strong>{{ $t('Loan Annual Cost') }}:</strong> ${{ annualCost.toLocaleString() }}</li>
			</ul>
		</div>

		<!-- Form -->
		<div class="widget-body mt-4">
			<!-- Loan Amount -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">$</div>
					</div>
					<input 
						type="number"
						v-model.number="loanAmount"
						class="form-control"
						:placeholder="$t('Total Amount')"
						@input="errors.loanAmount = ''"
					/>
				</div>
				<div v-if="errors.loanAmount" class="text-danger small mt-1">
					{{ errors.loanAmount }}
				</div>
			</div>

			<!-- Down Payment -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">$</div>
					</div>
					<input 
						type="number"
						v-model.number="downPayment"
						class="form-control"
						:placeholder="$t('Down Payment')"
						@input="errors.downPayment = ''"
					/>
				</div>
				<div v-if="errors.downPayment" class="text-danger small mt-1">
					{{ errors.downPayment }}
				</div>
			</div>

			<!-- Interest Rate -->
			<div class="form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<div class="input-group-text">%</div>
					</div>
					<input 
						type="number"
						v-model.number="interestRate"
						class="form-control"
						:placeholder="$t('Interest Rate')"
						@input="errors.interestRate = ''"
					/>
				</div>
				<div v-if="errors.interestRate" class="text-danger small mt-1">
					{{ errors.interestRate }}
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
					<input 
						type="number"
						v-model.number="loanTerm"
						class="form-control"
						:placeholder="$t('Loan Terms (Years)')"
						@input="errors.loanTerm = ''"
					/>
				</div>
				<div v-if="errors.loanTerm" class="text-danger small mt-1">
					{{ errors.loanTerm }}
				</div>
			</div>

			<!-- Payment Frequency -->
			<div class="form-group">
				<select 
					class="selectpicker form-control"
					v-model="paymentFrequency"
				>
					<option value="monthly">{{ $t('Monthly') }}</option>
					<option value="biweekly">{{ $t('Bi-Weekly') }}</option>
					<option value="weekly">{{ $t('Weekly') }}</option>
				</select>
			</div>

			<!-- Calculate Button -->
			<button type="button" class="btn btn-search btn-secondary btn-full-width" @click="calculateMortgage">
				{{ $t('Calculate') }}
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

const errors = ref({});

function validateFields() {
	errors.value = {};

	if (!loanAmount.value) errors.value.loanAmount = "Loan amount is required.";
	if (downPayment.value === null || downPayment.value === '') errors.value.downPayment = "Down payment is required.";
	if (!interestRate.value) errors.value.interestRate = "Interest rate is required.";
	if (!loanTerm.value) errors.value.loanTerm = "Loan term is required.";

	return Object.keys(errors.value).length === 0;
}

function calculateMortgage() {
	if (!validateFields()) {
		monthlyPayment.value = null; // reset results if invalid
		return;
	}

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
}
</script>

<style scoped>
.widget-wrap {
	display: grid;
	grid-template-rows: auto 1fr;
}

/* 🔹 keep inputs always normal (no red borders, no cross icons) */
.form-control.is-invalid,
.form-control:invalid {
	border-color: inherit !important;
	background-image: none !important;
}
</style>
