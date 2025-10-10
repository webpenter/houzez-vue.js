<template>
        <canvas ref="chartCanvas" width="500" height="350"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto'; // Ensure Chart.js is correctly imported

const chartCanvas = ref(null); // Reference for the canvas element

onMounted(() => {
    const ctx = chartCanvas.value.getContext('2d'); // Accessing the canvas context
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Visits',
                    data: [120, 190, 100, 80, 20, 30, 50],
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                },
                {
                    label: 'Unique',
                    data: [100, 150, 150, 50, 70, 60, 100],
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                    },
                },
                tooltip: {
                    callbacks: {
                        labelColor: function () {
                            return {
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgb(255, 99, 132)',
                            };
                        },
                        labelTextColor: function () {
                            return '#fff';
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    });
});
</script>
