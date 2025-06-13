<template>
  <div class="property-mortgage-calculator-wrap property-section-wrap" id="property-mortgage-calculator-wrap">
    <div class="block-wrap">
      <div class="block-title-wrap">
        <h2>Mortgage Calculator</h2>
      </div>

      <div class="block-content-wrap">
        <div class="d-flex align-items-center sm-column">
          <div class="mortgage-calculator-chart flex-fill">
            <div class="mortgage-calculator-monthly-payment-wrap">
              <div class="mortgage-calculator-monthly-payment">
                ${{ monthlyPayment.toFixed(0) }}
              </div>
              <div class="mortgage-calculator-monthly-requency">Monthly</div>
            </div>
            <canvas id="mortgage-calculator-chart" width="200" height="200"></canvas>
          </div>

          <div class="mortgage-calculator-data flex-fill">
            <ul class="list-unstyled">
              <li>
                <strong>Principal & Interest:</strong> <span>${{ breakdown.principalAndInterest.toFixed(0) }}</span>
              </li>
              <li>
                <strong>Property Tax:</strong> <span>${{ breakdown.propertyTax.toFixed(0) }}</span>
              </li>
              <li>
                <strong>Home Insurance:</strong> <span>${{ breakdown.homeInsurance.toFixed(0) }}</span>
              </li>
              <li>
                <strong>HOA Fee:</strong> <span>${{ breakdown.hoaFee.toFixed(0) }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6" v-for="field in inputFields" :key="field.label">
            <div class="form-group">
              <label>{{ field.label }}</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">{{ field.symbol }}</div>
                </div>
                <input
                  v-model.number="form[field.model]"
                  type="number"
                  class="form-control"
                  :placeholder="field.label"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

// Props
const props = defineProps({
  property: {
    type: Object,
    required: true
  }
})

// Form data
const form = reactive({
  amount: 0, // Total amount
  downPayment: 1000,
  interestRate: 5,
  loanTerm: 10
})

// Set amount from property.price
watch(
  () => props.property?.price,
  (newPrice) => {
    if (newPrice) {
      form.amount = parseFloat(newPrice)
    }
  },
  { immediate: true }
)

// Input field config
const inputFields = [
  { label: 'Total Amount', model: 'amount', symbol: '$' },
  { label: 'Down Payment', model: 'downPayment', symbol: '$' },
  { label: 'Interest Rate', model: 'interestRate', symbol: '%' },
  { label: 'Loan Terms (Years)', model: 'loanTerm', symbol: '📄' }
]

// Breakdown of monthly payment
const breakdown = reactive({
  principalAndInterest: 0,
  propertyTax: 0,
  homeInsurance: 0,
  hoaFee: 0
})

// Monthly Payment Calculation
const monthlyPayment = computed(() => {
  const loanAmount = form.amount - form.downPayment
  const monthlyInterest = form.interestRate / 100 / 12
  const numPayments = form.loanTerm * 12

  const monthly =
    loanAmount *
    (monthlyInterest * Math.pow(1 + monthlyInterest, numPayments)) /
    (Math.pow(1 + monthlyInterest, numPayments) - 1)

  breakdown.principalAndInterest = monthly
  breakdown.propertyTax = monthly * 0.15
  breakdown.homeInsurance = monthly * 0.1
  breakdown.hoaFee = monthly * 0.2

  updateChart()

  return (
    breakdown.principalAndInterest +
    breakdown.propertyTax +
    breakdown.homeInsurance +
    breakdown.hoaFee
  )
})

// Chart instance
let chart

// Chart setup
const setupChart = () => {
  const ctx = document.getElementById('mortgage-calculator-chart').getContext('2d')
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Principal & Interest', 'Tax', 'Insurance', 'HOA Fee'],
      datasets: [
        {
          data: [
            breakdown.principalAndInterest,
            breakdown.propertyTax,
            breakdown.homeInsurance,
            breakdown.hoaFee
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      cutout: '85%',
      responsive: false,
      plugins: {
        tooltip: { enabled: false },
        legend: { display: false }
      }
    }
  })
}

// Update chart data
const updateChart = () => {
  if (chart) {
    chart.data.datasets[0].data = [
      breakdown.principalAndInterest,
      breakdown.propertyTax,
      breakdown.homeInsurance,
      breakdown.hoaFee
    ]
    chart.update()
  }
}

// Mount chart once
onMounted(() => {
  setupChart()
})

// Watch form changes to recalculate
watch(
  form,
  () => {
    monthlyPayment.value // trigger computed
  },
  { deep: true }
)
</script>

<style scoped>
.property-mortgage-calculator-wrap {
  background: #f9f9f9;
  padding: 20px;
}
.mortgage-calculator-monthly-payment {
  font-size: 24px;
  font-weight: bold;
}
.list-unstyled li {
  margin-bottom: 8px;
}
</style>
